export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export type PageKey = 'home' | 'services' | 'about' | 'contact';

export const routeSlugs: Record<Locale, Record<PageKey, string>> = {
  es: { home: '', services: 'servicios', about: 'sobre-nosotros', contact: 'contacto' },
  en: { home: '', services: 'services', about: 'about', contact: 'contact' },
};

export function pathFor(locale: Locale, page: PageKey): string {
  const slug = routeSlugs[locale][page];
  return `/${locale}/${slug ? `${slug}/` : ''}`;
}

export function isLocale(value: string | undefined): value is Locale {
  return value === 'es' || value === 'en';
}

export function staticPages(): {params:{lang:Locale;slug:string}; props:{page:Exclude<PageKey,'home'>}}[] {
  return locales.flatMap((lang) => (
    (['services','about','contact'] as const).map((page) => ({
      params: {lang, slug: routeSlugs[lang][page]}, props: {page}
    }))
  ));
}
