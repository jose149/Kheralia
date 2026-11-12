import type { APIRoute } from 'astro';

/**
 * Kheralia · recepción del formulario.
 * Solo se ejecuta en el servidor. Nunca envía las credenciales al navegador.
 * Diagnóstico: ver los logs de Vercel filtrando "[Kheralia contacto]".
 */
export const prerender = false;

const MAX_BYTES = 12_000;
type Locale = 'es' | 'en';
type FormStatus = 'sent' | 'error' | 'unavailable';

type FailureReason =
  | 'validation' | 'disabled' | 'missing-config'
  | 'resend-400' | 'resend-401' | 'resend-403' | 'resend-422' | 'resend-429'
  | 'resend-other' | 'timeout' | 'network';

function redirect(request: Request, locale: Locale, status: FormStatus, reason?: FailureReason): Response {
  const pathname = locale === 'es' ? '/es/contacto/' : '/en/contact/';
  const url = new URL(pathname, request.url);
  url.searchParams.set('status', status);
  if (reason) url.searchParams.set('reason', reason);
  url.hash = 'contact-form';
  return Response.redirect(url, 303);
}

function field(params: URLSearchParams, name: string): string {
  return params.getAll(name).length === 1 ? (params.get(name) ?? '').trim() : '';
}

function failure(reason: FailureReason, extras: Record<string, string | number> = {}): void {
  // Datos técnicos exclusivamente: nunca registrar emails, IPs, mensajes ni claves.
  console.error('[Kheralia contacto]', { reason, ...extras });
}

function getConfiguration() {
  // Vercel proporciona variables en runtime. Evitamos depender de @types/node.
  const runtimeEnv: Record<string, string | undefined> = (
    globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } }
  ).process?.env ?? {};
  // Fallback de Astro en desarrollo local.
  const env = import.meta.env;
  return {
    enabled: (
      runtimeEnv.CONTACT_FORM_ENABLED ?? env?.CONTACT_FORM_ENABLED ??
      runtimeEnv.PUBLIC_SITE_READY ?? env?.PUBLIC_SITE_READY
    ) === 'true',
    apiKey: runtimeEnv.RESEND_API_KEY || env?.RESEND_API_KEY || '',
    to: runtimeEnv.CONTACT_TO || env?.CONTACT_TO || '',
    from: runtimeEnv.CONTACT_FROM || env?.CONTACT_FROM || '',
  };
}

export const POST: APIRoute = async ({ request }) => {
  const claimedSize = Number(request.headers.get('content-length') ?? 0);
  if (Number.isFinite(claimedSize) && claimedSize > MAX_BYTES) {
    return new Response('Payload too large', { status: 413 });
  }

  const origin = request.headers.get('origin');
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return new Response('Invalid origin', { status: 403 });
      }
    } catch {
      return new Response('Invalid origin', { status: 403 });
    }
  }

  const contentType = ((request.headers.get('content-type') ?? '').split(';')[0] ?? '').trim().toLowerCase();
  if (contentType !== 'application/x-www-form-urlencoded') {
    return new Response('Unsupported content type', { status: 415 });
  }

  let body: string;
  try {
    body = await request.text();
  } catch {
    return new Response('Invalid request body', { status: 400 });
  }
  if (new TextEncoder().encode(body).byteLength > MAX_BYTES) {
    return new Response('Payload too large', { status: 413 });
  }

  const fields = new URLSearchParams(body);
  const locale: Locale = field(fields, 'locale') === 'en' ? 'en' : 'es';

  // Honeypot: no revelamos a bots que se ha descartado el envío.
  if (field(fields, 'website')) return redirect(request, locale, 'sent');

  const organization = field(fields, 'organization');
  const name = field(fields, 'name');
  const phone = field(fields, 'phone');
  const email = field(fields, 'email');
  const message = field(fields, 'message');
  const consent = field(fields, 'consent');

  const isValid =
    (organization.length === 0 || (organization.length >= 2 && organization.length <= 140)) &&
    name.length >= 2 && name.length <= 100 &&
    phone.length >= 6 && phone.length <= 30 &&
    email.length <= 180 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    message.length >= 10 && message.length <= 1800 &&
    consent === 'yes';

  if (!isValid) {
    // No registramos qué dato introdujo el usuario: solo el fallo de validación.
    failure('validation');
    return redirect(request, locale, 'error', 'validation');
  }

  const { enabled, apiKey, to, from } = getConfiguration();
  if (!enabled) {
    failure('disabled');
    return redirect(request, locale, 'unavailable', 'disabled');
  }
  if (!apiKey || !to || !from) {
    failure('missing-config', {
      missing: [!apiKey && 'RESEND_API_KEY', !to && 'CONTACT_TO', !from && 'CONTACT_FROM']
        .filter(Boolean).join(', '),
    });
    return redirect(request, locale, 'unavailable', 'missing-config');
  }

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Kheralia - nueva consulta desde la web (${locale})`,
        text: `Centro/organización (si aplica): ${organization || "Particular"}\nNombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nIdioma: ${locale}\n\nConsulta:\n${message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!result.ok) {
      // Resend devuelve un cuerpo JSON con `name`/`message`; solo guardamos
      // el código técnico, nunca el contenido textual de la respuesta.
      let providerCode = 'unknown';
      try {
        const responseBody: unknown = await result.json();
        if (responseBody && typeof responseBody === 'object' && 'name' in responseBody) {
          const value = (responseBody as { name?: unknown }).name;
          if (typeof value === 'string') providerCode = value.slice(0, 60);
        }
      } catch { /* no se necesita el cuerpo para informar del fallo */ }
      failure('resend-other', { httpStatus: result.status, providerCode });
      const reason: FailureReason =
        [400, 401, 403, 422, 429].includes(result.status)
          ? `resend-${result.status}` as FailureReason
          : 'resend-other';
      return redirect(request, locale, 'error', reason);
    }

    console.info('[Kheralia contacto]', { result: 'accepted-by-resend' });
    return redirect(request, locale, 'sent');
  } catch (error) {
    const isTimeout = error instanceof Error &&
      (error.name === 'TimeoutError' || error.name === 'AbortError');
    const reason: FailureReason = isTimeout ? 'timeout' : 'network';
    failure(reason);
    return redirect(request, locale, 'error', reason);
  }
};
