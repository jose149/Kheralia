import type { APIRoute } from 'astro';

export const prerender = false;

const MAX_BYTES = 12_000;
const redirect = (request: Request, locale: 'es' | 'en', status: string): Response => {
  const pathname = locale === 'es' ? '/es/contacto/' : '/en/contact/';
  return Response.redirect(new URL(`${pathname}?status=${status}#contact-form`, request.url), 303);
};

function single(fields: URLSearchParams, key: string): string {
  return fields.getAll(key).length === 1 ? (fields.get(key) ?? '').trim() : '';
}

export const POST: APIRoute = async ({ request }) => {
  const length = Number(request.headers.get('content-length') ?? 0);
  if (Number.isFinite(length) && length > MAX_BYTES) {
    return new Response('Payload too large', { status: 413 });
  }
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return new Response('Invalid origin', { status: 403 });
  }
  if (!(request.headers.get('content-type') ?? '').includes('application/x-www-form-urlencoded')) {
    return new Response('Unsupported content type', { status: 415 });
  }

  const body = await request.text();
  if (body.length > MAX_BYTES) return new Response('Payload too large', { status: 413 });
  const fields = new URLSearchParams(body);
  const locale = single(fields, 'locale') === 'en' ? 'en' : 'es';

  // Honeypot: invisible spam submissions receive a success redirect.
  if (single(fields, 'website')) return redirect(request, locale, 'sent');

  const organization = single(fields, 'organization');
  const name = single(fields, 'name');
  const phone = single(fields, 'phone');
  const email = single(fields, 'email');
  const message = single(fields, 'message');
  const consent = single(fields, 'consent');
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!(organization.length >= 2 && organization.length <= 140 &&
    name.length >= 2 && name.length <= 100 &&
    phone.length >= 6 && phone.length <= 30 &&
    email.length <= 180 && validEmail &&
    message.length >= 10 && message.length <= 1800 && consent === 'yes')) {
    return redirect(request, locale, 'error');
  }

  // Leave disabled until the privacy information and sender setup are approved.
  if (import.meta.env.PUBLIC_SITE_READY !== 'true') return redirect(request, locale, 'unavailable');

  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO;
  const from = import.meta.env.CONTACT_FROM;
  if (!(apiKey && to && from)) return redirect(request, locale, 'unavailable');

  try {
    const result = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Kheralia - propuesta de colaboración (${locale})`,
        text: `Centro/organización: ${organization}\nNombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\nIdioma: ${locale}\n\nConsulta:\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) return redirect(request, locale, 'error');
    return redirect(request, locale, 'sent');
  } catch {
    return redirect(request, locale, 'error');
  }
};
