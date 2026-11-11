# Kheralia — correo corporativo

Correo único: **info@kheralia.es**

1. Copia `actualizar-email-kheralia.mjs` a la **raíz del proyecto Astro** (junto a `package.json`).
2. Abre una terminal en esa carpeta y ejecuta:
   ```bash
   node actualizar-email-kheralia.mjs
   ```
3. Ejecuta `npm run dev` y comprueba Contacto y el footer.

## Qué hace
- Actualiza las referencias a correos `@kheralia.es` antiguos en el código `src/`.
- Añade un enlace visible `mailto:info@kheralia.es` en el footer.
- Convierte el correo del panel de contacto en enlace clicable (tanto la versión nueva como la antigua).
- No modifica SCSS/CSS, fuentes, diseños, traducciones o fotografías.
- Se puede ejecutar más de una vez sin duplicar el enlace.

## Importante: formulario
Para recibir las consultas realmente en ese buzón, establece la variable de entorno **CONTACT_TO=info@kheralia.es** en Vercel (y en tu `.env` local si estás probando el envío). El remitente `CONTACT_FROM` debe seguir siendo una dirección verificada en tu servicio de correo transaccional (Resend); no es automáticamente lo mismo que `CONTACT_TO`. Comprueba el funcionamiento con un envío de prueba antes de publicar.
