# Kheralia — Mind & Well

A bilingual corporate website for personalised home care in Mallorca. Astro + TypeScript + SCSS, without React or a CMS. The repository includes **4 pages in Spanish and English**, responsive layouts, reusable sections, metadata, `hreflang`, sitemap and a serverless contact endpoint for Vercel.

## Start locally

Requires Node.js 22.12 or later.

```bash
npm install
cp .env.example .env
npm run dev
npm run check
npm run build
```

Visit `http://localhost:4321/es/` or `/en/`. Root redirects to `/es/`.

> Note: installation/build is **not verified in the authoring environment** because the npm registry is not accessible there. TypeScript translation and route modules were checked with the available global TypeScript compiler. Run `npm install && npm run build` in a network-enabled environment and resolve any reported issues before publishing.

## Project structure

```text
src/
  components/layout/   Navbar and Footer
  components/ui/       Button, Icon, SectionHeading
  components/sections/ Reusable visual sections and bilingual page composition
  i18n/                Typed copy and locale route helpers
  layouts/             SEO, locale links and the shared shell
  pages/               ES/EN static pages, utility legal pages, API and sitemap
  styles/              Main SCSS and CSS tokens
public/images/         Temporary generated photography (REPLACE BEFORE LAUNCH)
design/reference/      Approved image mockups, NEVER shipped as webpage backgrounds
docs/                  Launch checklist and decisions
```

## Routes

| | Spanish | English |
| --- | --- | --- |
| Home | `/es/` | `/en/` |
| Services | `/es/servicios/` | `/en/services/` |
| About | `/es/sobre-nosotros/` | `/en/about/` |
| Contact | `/es/contacto/` | `/en/contact/` |

No duplicate UI between languages: both sets of routes render the same components with typed translated content.

## Contact form

`src/pages/api/contact.ts` accepts a `POST application/x-www-form-urlencoded` request and validates required fields, sizes, origin and a hidden honeypot. It uses **Resend’s HTTPS API** only on the server and redirects to a localized confirmation state. The API returns an unavailability state unless **all launch flags and credentials** are configured.

Set these values on Vercel to activate it after legal copy and content review:

```text
PUBLIC_SITE_READY=true
PUBLIC_SITE_URL=https://kheralia.com
RESEND_API_KEY=<your-key>
CONTACT_TO=<real-inbox>
CONTACT_FROM=<verified-sender-address>
```

**Before a public launch:** review the privacy/legal pages, email handling and retention; add robust antispam/rate limiting (e.g. Turnstile + WAF), verify successful delivery and failure handling, and update the actual company contact details. The form should not be used to request health diagnoses or sensitive medical data.

## SEO

Meta title/description per page and language, canonical URL, `hreflang`, Organization JSON-LD with non-specific verified identity, sitemap and robots. Until `PUBLIC_SITE_READY=true` the site emits `noindex` and `robots.txt` blocks crawling.

## Reference fidelity and limits

The approved screenshots in `design/reference` guide layout/colour/spacing; the site is rebuilt as components and SCSS, not screenshots-as-background. The included photos are **cropped/generated examples for local review only**; they are lower resolution, sometimes contain generation artefacts and must be replaced with approved original images or appropriately licensed stock before production. Do not invent testimonial or employee details: the corresponding blocks remain explicit placeholders. See `docs/LAUNCH-CHECKLIST.md`.

## Deployment

Push to GitHub, import repository in Vercel, set framework Astro and environment variables, then deploy. **Final domain and DNS settings have to be applied by an authorised account owner**. Do not enable `PUBLIC_SITE_READY` until legal/company data, images and security are confirmed.
