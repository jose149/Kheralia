/**
 * Actualización puntual del correo corporativo de Kheralia.
 * Ejecutar en la raíz del proyecto Astro: node actualizar-email-kheralia.mjs
 * No sustituye estilos, traducciones ni componentes completos.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const EMAIL = 'info@kheralia.es';
const src = join(process.cwd(), 'src');
const allowed = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx', '.json', '.html']);
const modifications = [];

async function walk(folder) {
  let entries;
  try { entries = await readdir(folder, { withFileTypes: true }); }
  catch { throw new Error(`No encuentro la carpeta src en ${process.cwd()}. Ejecuta este script desde la raíz del proyecto Astro.`); }
  for (const entry of entries) {
    const path = join(folder, entry.name);
    if (entry.isDirectory()) { await walk(path); continue; }
    if (!entry.isFile() || !allowed.has(extname(entry.name))) continue;

    let content = await readFile(path, 'utf8');
    const old = content;
    // Solo cambia direcciones @kheralia.es. No modifica correos de ejemplo o clientes.
    content = content.replace(/[a-z0-9._%+-]+@kheralia\.es/gi, EMAIL);

    if (entry.name === 'Footer.astro' && path.includes(`${join('components','layout')}`)) {
      // Añadir correo al footer si no está ya visible allí.
      content = content.replace(/(<div class="site-footer__contact"[^>]*>)([\s\S]*?)(<\/div>)/, (full, start, body, end) => {
        if (body.includes('mailto:info@kheralia.es')) return full;
        return `${start}${body.replace(/\s*$/, '')}\n      <p class="site-footer__email"><a href="mailto:${EMAIL}">${EMAIL}</a></p>\n    ${end}`;
      });
    }

    if (entry.name === 'ContactDetailsPanel.astro' && !content.includes(`href="mailto:${EMAIL}"`)) {
      // Mantiene todos los estilos encapsulados y convierte solo el correo en clicable.
      content = content.replace(
        '<strong class="k-contact-method__value">{method.value}</strong>',
        `{method.icon === 'mail' ? (\n            <a class="k-contact-method__value" href="mailto:${EMAIL}">{method.value}</a>\n          ) : (\n            <strong class="k-contact-method__value">{method.value}</strong>\n          )}`,
      );
    }

    if (entry.name === 'ContactForm.astro' && !content.includes(`href="mailto:${EMAIL}"`)) {
      // Compatibilidad con la versión antigua, que integra los datos directos dentro del formulario.
      content = content.replace(
        '<span class="direct-contact__value">{item.value}</span>',
        `<span class="direct-contact__value">{item.icon === 'mail' ? <a href="mailto:${EMAIL}">{item.value}</a> : item.value}</span>`,
      );
    }

    if (content !== old) {
      await writeFile(path, content, 'utf8');
      modifications.push(path.replace(`${process.cwd()}/`, ''));
    }
  }
}

await walk(src);
console.log(`Correo corporativo: ${EMAIL}`);
console.log(modifications.length
  ? `Archivos actualizados (${modifications.length}):\n- ${modifications.join('\n- ')}`
  : 'El código ya utiliza el correo corporativo. No se hicieron cambios.');
console.log(`Recuerda configurar CONTACT_TO=${EMAIL} en Vercel para recibir los formularios.`);
