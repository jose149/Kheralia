/**
 * Prueba controlada del endpoint desplegado.
 * No envía correos salvo que se indique --enviar y --email=...
 * Ejemplos:
 * node tests/probar-despliegue.mjs https://kheralia.es
 * node tests/probar-despliegue.mjs https://preview.vercel.app --enviar --email=tu@email.es
 */

const args = process.argv.slice(2);
const urlText = args.find(a => /^https?:\/\//i.test(a));
const sendReal = args.includes('--enviar');
const fromEmail = args.find(a => a.startsWith('--email='))?.slice('--email='.length);

if (!urlText || (sendReal && (!fromEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail)))) {
  console.error('Uso: node tests/probar-despliegue.mjs https://URL');
  console.error('Para prueba real: node tests/probar-despliegue.mjs https://URL --enviar --email=tu-correo@ejemplo.es');
  process.exitCode = 1;
} else {
  const endpoint = new URL('/api/contact', urlText);
  const data = new URLSearchParams({
    locale: 'es', organization: 'Prueba de integración Kheralia',
    name: 'Persona de prueba', phone: '+34 600 000 000',
    email: sendReal ? fromEmail : 'test@example.org',
    message: sendReal
      ? 'Prueba controlada de envío desde Kheralia, sin información real de pacientes.'
      : 'corto',
    consent: 'yes', website: '',
  });

  console.log(`Endpoint: ${endpoint.origin}${endpoint.pathname}`);
  console.log(sendReal
    ? 'MODO ENVÍO REAL: se intentará entregar el mensaje a CONTACT_TO del despliegue.'
    : 'MODO SEGURO: formulario inválido, nunca debería enviarse un correo.');
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: data.toString(), redirect: 'manual',
      signal: AbortSignal.timeout(15_000),
    });
    const location = response.headers.get('location');
    console.log('HTTP:', response.status);
    if (location) {
      const destination = new URL(location, endpoint);
      console.log('Resultado:', destination.searchParams.get('status') ?? '(sin estado)');
      console.log('Motivo:', destination.searchParams.get('reason') ?? '(no indicado)');
      console.log('Destino:', destination.pathname);
    } else {
      console.log('Sin redirección del formulario. Verificar ruta, protección de Preview y Logs de Vercel.');
      process.exitCode = 1;
    }
  } catch (e) {
    console.error('Fallo de conexión:', e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
  }
}
