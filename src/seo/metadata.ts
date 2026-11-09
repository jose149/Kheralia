import type {Locale, PageKey} from '../i18n/routes';

interface PageSeo {
  title: string;
  description: string;
  imageAlt: string;
}

export const seo: Record<Locale, Record<PageKey, PageSeo>> = {
  es: {
    home: {
      title: 'Atención domiciliaria para centros sanitarios en Mallorca | Kheralia',
      description: 'Apoyo domiciliario para pacientes de hospitales y centros sanitarios en Mallorca. Valoración individualizada, planificación y seguimiento profesional.',
      imageAlt: 'Kheralia Mind & Well: atención domiciliaria especializada en Mallorca',
    },
    services: {
      title: 'Servicios de apoyo domiciliario en Mallorca | Kheralia',
      description: 'Apoyo tras hospitalización, mantenimiento de la autonomía, estimulación y orientación a cuidadores. Soluciones para centros y entidades sanitarias.',
      imageAlt: 'Servicios de apoyo domiciliario de Kheralia para centros sanitarios',
    },
    about: {
      title: 'Nuestro enfoque y equipo | Kheralia Mind & Well',
      description: 'Conoce el enfoque de Kheralia: valoración de capacidades, planificación de apoyos, preparación de profesionales y seguimiento de la atención domiciliaria.',
      imageAlt: 'Kheralia: un enfoque organizado, individualizado y supervisado del cuidado',
    },
    contact: {
      title: 'Contacto para hospitales y clínicas en Mallorca | Kheralia',
      description: 'Contacta con Kheralia para estudiar una propuesta de apoyo domiciliario para los pacientes de tu centro sanitario en Mallorca.',
      imageAlt: 'Contacta con Kheralia Mind & Well en Mallorca',
    },
  },
  en: {
    home: {
      title: 'Home support for healthcare providers in Mallorca | Kheralia',
      description: 'Individualised home support for patients referred by hospitals and healthcare providers in Mallorca, with assessment, planning and professional follow-up.',
      imageAlt: 'Kheralia Mind & Well: specialist home support in Mallorca',
    },
    services: {
      title: 'Specialist home support services in Mallorca | Kheralia',
      description: 'Support after hospitalisation, functional independence, cognitive stimulation and carer guidance. Home support for healthcare organisations in Mallorca.',
      imageAlt: 'Kheralia: specialist home support services for healthcare providers',
    },
    about: {
      title: 'Our approach and team | Kheralia Mind & Well',
      description: 'Learn how Kheralia plans and supervises individualised home support through assessment, professional preparation and ongoing follow-up.',
      imageAlt: 'Kheralia: a planned, individual and supervised approach to home support',
    },
    contact: {
      title: 'Contact for hospitals and clinics in Mallorca | Kheralia',
      description: 'Contact Kheralia to discuss individualised home support for patients referred by your healthcare organisation in Mallorca.',
      imageAlt: 'Get in touch with Kheralia Mind & Well in Mallorca',
    },
  },
};
