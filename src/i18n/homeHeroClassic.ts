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
    description: 'Para hospitales, clínicas y otras entidades, diseñamos planes de intervención domiciliaria individualizados con apoyo de profesionales especializados en Psicología, objetivos concretos y supervisión técnica.',
    imageAlt: 'Profesionales y personas mayores compartiendo un momento de atención cercana en el hogar',
    values: [
      { icon: 'heart', title: 'Valoración', subtitle: 'individualizada' },
      { icon: 'home', title: 'Plan de intervención', subtitle: 'con objetivos' },
      { icon: 'people', title: 'Psicología', subtitle: 'y supervisión' },
    ],
  },
  en: {
    title: 'Better care begins\nwith understanding',
    description: 'For hospitals, clinics and other organisations, we design individual home support plans with input from psychology specialists, clear goals and technical oversight.',
    imageAlt: 'Professionals and older adults sharing a warm moment of support at home',
    values: [
      { icon: 'heart', title: 'Individual', subtitle: 'assessment' },
      { icon: 'home', title: 'A tailored', subtitle: 'support plan' },
      { icon: 'people', title: 'Psychology', subtitle: 'and oversight' },
    ],
  },
};
