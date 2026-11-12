import type { Locale } from './routes';

/** Textos del hero clásico; independientes de la tipografía y del CSS. */
export const homeHeroClassic: Record<Locale, {
  title: string;
  description: string;
  imageAlt: string;
  values: { icon: 'heart' | 'home' | 'people'; title: string; subtitle: string }[];
}> = {
  es: {
    title: 'Cuidar mejor empieza\npor comprender',
    description: 'Ofrecemos apoyo domiciliario a personas y familias, y colaboramos con centros y entidades. Cada intervención parte de un plan individualizado, con participación de profesionales especializados en Psicología, objetivos claros y seguimiento técnico.',
    imageAlt: 'Profesionales y personas mayores compartiendo un momento de atención cercana en el hogar',
    values: [
      { icon: 'heart', title: 'Valoración', subtitle: 'individualizada' },
      { icon: 'home', title: 'Plan de intervención', subtitle: 'con objetivos' },
      { icon: 'people', title: 'Psicología', subtitle: 'y supervisión' },
    ],
  },
  en: {
    title: 'Better care begins\nwith understanding',
    description: 'We provide tailored home support for individuals and families, and work alongside healthcare providers and other organisations. Every plan includes psychology specialists, clear goals and professional oversight.',
    imageAlt: 'Professionals and older adults sharing a warm moment of support at home',
    values: [
      { icon: 'heart', title: 'Individual', subtitle: 'assessment' },
      { icon: 'home', title: 'A tailored', subtitle: 'support plan' },
      { icon: 'people', title: 'Psychology', subtitle: 'and oversight' },
    ],
  },
};
