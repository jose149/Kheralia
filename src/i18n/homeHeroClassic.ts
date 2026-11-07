import type { Locale } from './routes';

/** Textos del hero clásico: una única fuente para ambos idiomas. */
export const homeHeroClassic: Record<Locale, {
  title: string;
  description: string;
  imageAlt: string;
  values: { icon: 'heart' | 'home' | 'people'; title: string; subtitle: string }[];
}> = {
  es: {
    title: 'Cuidado en casa,\ncon humanidad\ny confianza',
    description: 'Acompañamiento personal y atención domiciliaria para personas mayores o dependientes, con un enfoque humano, profesional y personalizado.',
    imageAlt: 'Persona mayor y cuidadora compartiendo una conversación cercana (fotografía provisional)',
    values: [
      { icon: 'heart', title: 'Bienestar', subtitle: 'y calidad de vida' },
      { icon: 'home', title: 'En la comodidad', subtitle: 'de su hogar' },
      { icon: 'people', title: 'Atención profesional', subtitle: 'y cercana' },
    ],
  },
  en: {
    title: 'Care at home,\nwith humanity\nand trust',
    description: 'Personal companionship and home care for older adults and people who need support, with a human, professional and personalised approach.',
    imageAlt: 'Older woman and caregiver sharing a warm conversation (placeholder photograph)',
    values: [
      { icon: 'heart', title: 'Wellbeing', subtitle: 'and quality of life' },
      { icon: 'home', title: 'The comfort', subtitle: 'of your home' },
      { icon: 'people', title: 'Professional care', subtitle: 'with warmth' },
    ],
  },
};
