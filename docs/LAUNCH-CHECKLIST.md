# Kheralia — remaining launch approvals

## Confirm with Kheralia

- [ ] Real full names, professional qualifications and permitted photos for both founders.
- [ ] Accurate service descriptions, boundaries and eligibility. No health claims without qualified support.
- [ ] Real client testimonials, explicit permission to display text and optional names/images.
- [ ] Real telephone/email, working hours, service area; avoid promising a response time without confirmation.
- [ ] Full company identity, registered address, legal notices and GDPR-compliant privacy policy (all languages).
- [ ] Approved Spanish and English content and professional translation check.
- [ ] Final logo supplied in SVG/PNG with transparent background. Current nav emblem is a temporary crop.
- [ ] Original/legally cleared, higher-resolution photos. Current assets are design references only.
- [ ] Actual domain + DNS + verified Vercel deployment.
- [ ] Configure and test email delivery; anti-bot verification and production rate limiting/WAF.
- [ ] Verify cookie/analytics approach: if no tracking cookies, avoid a decorative cookie banner.
- [ ] Run `npm install`, `npm run check`, `npm run build`, check mobile 360/390/768 and desktop 1440 in a browser.
- [ ] Lighthouse/Core Web Vitals, accessibility, keyboard navigation, EN language links, form flows, 404 routes, metadata and Search Console.
- [ ] Set `PUBLIC_SITE_READY=true` only after all mandatory checks pass.

## Technical status at handoff

- [x] Content and route architecture in 2 locales.
- [x] Four corporate page compositions, responsive SCSS and shared components.
- [x] Static SEO and per-language routing strategy.
- [x] Server-side contact endpoint designed, with safe disabled-by-default behavior.
- [x] Approved screenshot references archived outside `public/`.
- [ ] npm installation/build/browser QA (network and Astro runtime unavailable in build environment).
- [ ] Production verification and deployment.
