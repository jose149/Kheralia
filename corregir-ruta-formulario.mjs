import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const path = join(process.cwd(), 'src/components/sections/ContactForm.astro');
const original = readFileSync(path, 'utf8');

if (/action=["']\/api\/contact\/["']/.test(original)) {
  console.log('✓ La ruta del formulario ya incluye la barra final. No hay cambios.');
  process.exit(0);
}

const pattern = /action=(["'])\/api\/contact\1/g;
const matches = [...original.matchAll(pattern)];
if (matches.length !== 1) {
  console.error(`No se ha modificado nada: se esperaba un action="/api/contact" y se encontraron ${matches.length}.`);
  process.exit(1);
}

const updated = original.replace(pattern, (_, quote) => `action=${quote}/api/contact/${quote}`);
writeFileSync(path, updated, 'utf8');
console.log('✓ Corregido ContactForm.astro: action="/api/contact/"');
