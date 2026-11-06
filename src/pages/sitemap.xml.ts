import type {APIRoute} from 'astro';
import {pathFor} from '../i18n/routes';
import type {Locale,PageKey} from '../i18n/routes';
export const GET:APIRoute = ({site}) => {
  const origin=site ?? new URL('https://kheralia.com');
  const locales:Locale[]=['es','en'];
  const pages:PageKey[]=['home','services','about','contact'];
  const urls=locales.flatMap((locale)=>pages.map((page)=>new URL(pathFor(locale,page),origin).href));
  const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc></url>`).join('')}</urlset>`;
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
