import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../src/pages/api/contact.ts';

const originalFetch = globalThis.fetch;
const KEYS = ['CONTACT_FORM_ENABLED', 'PUBLIC_SITE_READY', 'RESEND_API_KEY', 'CONTACT_TO', 'CONTACT_FROM'];
const originalEnv = Object.fromEntries(KEYS.map(k => [k, process.env[k]]));

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const k of KEYS) {
    if (originalEnv[k] === undefined) delete process.env[k];
    else process.env[k] = originalEnv[k];
  }
});

function configure() {
  process.env.CONTACT_FORM_ENABLED = 'true';
  process.env.RESEND_API_KEY = 'test_key_do_not_use';
  process.env.CONTACT_TO = 'receptor@example.org';
  process.env.CONTACT_FROM = 'Kheralia <formularios@kheralia.es>';
}

function fields(locale = 'es') {
  return new URLSearchParams({
    locale,
    organization: 'Centro de pruebas',
    name: 'Persona de pruebas',
    phone: '+34 600 000 000',
    email: 'persona@example.org',
    message: 'Este es un mensaje de prueba sin datos personales reales.',
    consent: 'yes',
    website: '',
  });
}

async function submit(params = fields()) {
  const request = new Request('https://kheralia.es/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const result = await POST({ request });
  assert.equal(result.status, 303);
  return new URL(result.headers.get('location'));
}

test('se acepta y envía por Resend; Reply-To es el email del visitante', async () => {
  configure();
  let payload;
  globalThis.fetch = async (_url, options) => {
    payload = JSON.parse(options.body);
    return new Response(JSON.stringify({ id: 'test_123' }), { status: 200 });
  };
  const url = await submit();
  assert.equal(url.searchParams.get('status'), 'sent');
  assert.equal(payload.from, process.env.CONTACT_FROM);
  assert.deepEqual(payload.to, [process.env.CONTACT_TO]);
  assert.equal(payload.reply_to, 'persona@example.org');
});

test('formulario incompleto => error de validación, sin llamar a Resend', async () => {
  configure();
  globalThis.fetch = async () => { throw Error('No debería enviar'); };
  const p = fields(); p.set('message', 'corto');
  const url = await submit(p);
  assert.equal(url.searchParams.get('reason'), 'validation');
});

test('bot en honeypot => simula éxito sin enviar', async () => {
  configure();
  globalThis.fetch = async () => { throw Error('No debería enviar'); };
  const p = fields(); p.set('website', 'spam.example');
  const url = await submit(p);
  assert.equal(url.searchParams.get('status'), 'sent');
});

test('formulario desactivado => unavailable/disabled', async () => {
  configure(); process.env.CONTACT_FORM_ENABLED = 'false';
  const url = await submit();
  assert.equal(url.searchParams.get('reason'), 'disabled');
});

test('faltan secretos => unavailable/missing-config', async () => {
  configure(); delete process.env.RESEND_API_KEY;
  const url = await submit();
  assert.equal(url.searchParams.get('reason'), 'missing-config');
});

test('Resend rechaza remitente => error/resend-403', async () => {
  configure();
  globalThis.fetch = async () => new Response(
    JSON.stringify({ name: 'validation_error', message: 'Domain not verified' }),
    { status: 403, headers: { 'content-type': 'application/json' } },
  );
  const url = await submit();
  assert.equal(url.searchParams.get('status'), 'error');
  assert.equal(url.searchParams.get('reason'), 'resend-403');
});

test('problema de red => error/network', async () => {
  configure();
  globalThis.fetch = async () => { throw new Error('Connection broken'); };
  const url = await submit();
  assert.equal(url.searchParams.get('reason'), 'network');
});

test('idioma inglés => vuelve a la página inglesa', async () => {
  configure();
  globalThis.fetch = async () => new Response('{}', { status: 200 });
  const url = await submit(fields('en'));
  assert.equal(url.pathname, '/en/contact/');
});

test('origen externo => HTTP 403 y ningún envío', async () => {
  configure();
  const request = new Request('https://kheralia.es/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded', origin: 'https://sitio-externo.example' },
    body: fields().toString(),
  });
  const response = await POST({ request });
  assert.equal(response.status, 403);
});
