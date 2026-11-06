# Architectural decisions

- Astro static output; only `/api/contact` uses on-demand server-side rendering on Vercel.
- SCSS and global CSS custom properties: no component runtime/React/utility framework required.
- Translated route slugs and typed text dictionaries, with common layout/section components.
- Explicit sitemap/robots endpoints instead of an additional dependency for eight core URLs.
- SVG inline icons for small, themeable decorations; do not use icon fonts.
- Generated placeholder photos remain separately replaceable; reference screenshots are excluded from deployed site.
- No analytics, cookie banner, user tracking or CMS added without specific requirements.
- Launch blocked by `PUBLIC_SITE_READY=false` until verified content/legal/email setup.
