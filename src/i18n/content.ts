import type { Locale, PageKey } from './routes';

interface Service {
  title: string;
  short: string;
  description: string;
  features: string[];
}

interface Copy {
  nav: Record<PageKey, string>;
  action: {
    contact: string;
    services: string;
    discover: string;
    allServices: string;
    learn: string;
    send: string;
    call: string;
  };
  meta: Record<PageKey, { title: string; description: string }>;
  hero: Record<PageKey, { eyebrow: string; title: string; description: string }>;
  values: { icon: 'home' | 'leaf' | 'people'; title: string; subtitle: string }[];
  philosophy: {
    eyebrow: string;
    title: string;
    description: string;
    principles: { icon: 'heart' | 'shield' | 'leaf'; title: string; description: string }[];
  };
  services: { eyebrow: string; title: string; items: Service[] };
  process: { eyebrow: string; title: string; steps: { title: string; description: string }[] };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    storyTitle: string;
    story: string;
    teamTitle: string;
    teamDescription: string;
  };
  reviews: { eyebrow: string; title: string; pending: string };
  quote: string;
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    detailsTitle: string;
    zoneTitle: string;
    zoneDescription: string;
    fields: {
      organization: string;
      name: string;
      phone: string;
      email: string;
      message: string;
      consent: string;
      submit: string;
      required: string;
      success: string;
      error: string;
      unavailable: string;
    };
    promise: { title: string; subtitle: string }[];
  };
  footer: {
    intro: string;
    navLabel: string;
    legal: string;
    privacy: string;
    cookies: string;
    copyright: string;
    demo: string;
  };
}

const es: Copy = {
  nav: { home: 'Inicio', services: 'Servicios', about: 'Sobre nosotros', contact: 'Contacto' },
  action: {
    contact: 'Solicitar colaboración',
    services: 'Nuestros servicios',
    discover: 'Conoce nuestro enfoque',
    allServices: 'Ver soluciones domiciliarias',
    learn: 'Conocer más',
    send: 'Enviar consulta',
    call: 'Hablar con el equipo',
  },
  meta: {
    home: {
      title: 'Atención domiciliaria para centros sanitarios en Mallorca',
      description: 'Kheralia ayuda a centros sanitarios a organizar apoyos domiciliarios individualizados en Mallorca, con valoración, planificación y seguimiento.',
    },
    services: {
      title: 'Servicios de apoyo domiciliario para entidades sanitarias',
      description: 'Apoyo tras hospitalización o rehabilitación, autonomía funcional, estimulación y orientación a cuidadores en Mallorca.',
    },
    about: {
      title: 'Kheralia | Metodología y supervisión de atención domiciliaria',
      description: 'Conoce nuestro enfoque: valoración individualizada, planificación, selección de profesionales y seguimiento del apoyo en el hogar.',
    },
    contact: {
      title: 'Contacto profesional y propuestas de colaboración | Kheralia',
      description: 'Contacta con Kheralia para explorar servicios domiciliarios para pacientes y posibles acuerdos de colaboración con tu entidad.',
    },
  },
  hero: {
    home: {
      eyebrow: 'ATENCIÓN DOMICILIARIA ESPECIALIZADA · MALLORCA',
      title: 'El cuidado continúa\nen casa',
      description: 'Ayudamos a hospitales, clínicas y centros sanitarios a organizar apoyos domiciliarios adaptados a sus pacientes, con valoración individualizada, planificación y seguimiento.',
    },
    services: {
      eyebrow: 'SOLUCIONES PARA ENTIDADES SANITARIAS',
      title: 'Apoyos en casa,\nadaptados a cada persona',
      description: 'Organizamos el apoyo domiciliario que cada persona necesita tras un proceso médico o rehabilitador, o durante situaciones de dependencia, con objetivos individualizados.',
    },
    about: {
      eyebrow: 'SOBRE KHERALIA',
      title: 'Una forma más\nestructurada de cuidar',
      description: 'Partimos de las capacidades de cada persona y organizamos el servicio mediante valoración, planificación y supervisión, en coordinación con los profesionales implicados cuando procede.',
    },
    contact: {
      eyebrow: 'CONTACTO PROFESIONAL',
      title: 'Hablemos de\ncolaborar',
      description: 'Cuéntanos qué necesidades de apoyo domiciliario tiene tu centro. Estudiaremos cómo puede encajar Kheralia en la continuidad de la atención a sus pacientes.',
    },
  },
  values: [
    { icon: 'home', title: 'Apoyo en el hogar', subtitle: 'Continuidad en la vida cotidiana' },
    { icon: 'leaf', title: 'Autonomía funcional', subtitle: 'Trabajamos desde las capacidades' },
    { icon: 'people', title: 'Atención supervisada', subtitle: 'Valoración, plan y seguimiento' },
  ],
  philosophy: {
    eyebrow: 'NUESTRO ENFOQUE',
    title: 'Que la dependencia\nno lo decida todo',
    description: 'Cuidar no siempre significa hacer las cosas por otra persona. Diseñamos apoyos que favorecen su participación en las actividades diarias, respetan sus decisiones y preservan sus capacidades en la medida de lo posible.',
    principles: [
      { icon: 'heart', title: 'Capacidades primero', description: 'Partimos de lo que cada persona puede seguir haciendo.' },
      { icon: 'shield', title: 'Atención planificada', description: 'Organizamos el apoyo según necesidades y objetivos acordados.' },
      { icon: 'leaf', title: 'Supervisión y ajuste', description: 'Revisamos la evolución y adaptamos las pautas.' },
    ],
  },
  services: {
    eyebrow: 'NUESTROS SERVICIOS',
    title: 'Soluciones para cada necesidad',
    items: [
      {
        title: 'Continuidad del apoyo en casa',
        short: 'Apoyo cotidiano tras procesos médicos o rehabilitadores.',
        description: 'Facilitamos la continuidad del apoyo en el domicilio cuando una persona necesita ayuda para reorganizar sus rutinas después de una enfermedad, hospitalización o rehabilitación, sin sustituir la asistencia sanitaria que corresponda.',
        features: [
          'Apoyo en actividades de la vida diaria',
          'Adaptación de rutinas y apoyos en el hogar',
          'Coordinación con profesionales implicados, cuando procede',
        ],
      },
      {
        title: 'Autonomía funcional y estimulación',
        short: 'Capacidades, participación y autonomía en el día a día.',
        description: 'Planificamos apoyos y actividades adaptadas para favorecer la participación en la vida cotidiana, conservar habilidades funcionales y estimular las capacidades cognitivas según la valoración individual.',
        features: [
          'Mantenimiento de habilidades y rutinas',
          'Estimulación cognitiva adaptada',
          'Seguimiento de objetivos funcionales',
        ],
      },
      {
        title: 'Acompañamiento y orientación a cuidadores',
        short: 'Atención personalizada y pautas para el entorno de apoyo.',
        description: 'Organizamos acompañamiento y apoyo cotidiano, considerando también las necesidades emocionales y de adaptación cuando corresponde. Ofrecemos orientación práctica a familiares y cuidadores para dar continuidad a las pautas acordadas.',
        features: [
          'Acompañamiento según las necesidades',
          'Orientación a familias y cuidadores',
          'Apoyo emocional y funcional dentro del servicio acordado',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'CÓMO TRABAJAMOS',
    title: 'Un servicio valorado, planificado y supervisado',
    steps: [
      { title: 'Valoramos', description: 'Conocemos capacidades, necesidades, rutinas, entorno y objetivos.' },
      { title: 'Organizamos', description: 'Definimos el plan y seleccionamos y preparamos al profesional adecuado.' },
      { title: 'Supervisamos', description: 'Revisamos el servicio y coordinamos los apoyos cuando procede.' },
    ],
  },
  about: {
    eyebrow: 'SOBRE NOSOTROS',
    title: 'Especialización en casa,\ncon un enfoque humano',
    description: 'Kheralia Mind & Well organiza atención domiciliaria especializada en Mallorca. Nuestro método integra valoración funcional, planificación individualizada, selección y preparación de profesionales y seguimiento del servicio.',
    storyTitle: 'Cuidar mejor empieza por comprender',
    story: 'La dependencia no define todo lo que una persona puede hacer. Antes de intervenir, analizamos sus capacidades y su entorno; la valoración inicial cuenta con la participación de un profesional especializado en Psicología. Planificamos apoyos que respetan sus rutinas y preferencias. Cuando procede y existe autorización, nos coordinamos con familiares y otros profesionales implicados.',
    teamTitle: 'Un equipo que organiza y supervisa',
    teamDescription: 'Ángel Vieco, director de campo, y Luis Liñán, director técnico, figuran como responsables en el dossier de Kheralia. El servicio contempla la selección, preparación y supervisión de los profesionales que prestan el apoyo domiciliario.',
  },
  reviews: {
    eyebrow: 'COLABORACIONES PROFESIONALES',
    title: 'Confianza basada en el trabajo bien organizado',
    pending: 'Las referencias de entidades colaboradoras se incorporarán únicamente cuando estén verificadas y autorizadas.',
  },
  quote: 'Ayudar también es hacer posible\nque cada persona siga participando.',
  contact: {
    eyebrow: 'HABLEMOS',
    title: 'Exploremos cómo\npodemos colaborar',
    description: 'Cuéntanos qué apoyo domiciliario necesita tu entidad y cómo se organiza actualmente. Podemos estudiar una propuesta ajustada al perfil de las personas atendidas, sin compartir datos clínicos identificables en este formulario.',
    detailsTitle: 'Contacto para entidades y profesionales',
    zoneTitle: 'Servicio en Mallorca',
    zoneDescription: 'Atención domiciliaria en Mallorca. Consulta disponibilidad y condiciones para tu centro.',
    fields: {
      organization: 'Centro u organización',
      name: 'Nombre y apellidos',
      phone: 'Teléfono de contacto',
      email: 'Correo electrónico profesional',
      message: 'Consulta o propuesta de colaboración',
      consent: 'He leído la política de privacidad y acepto el tratamiento de mis datos para responder a esta consulta profesional.',
      submit: 'Enviar consulta',
      required: 'Campos obligatorios',
      success: 'Hemos recibido tu consulta. Gracias por contactar con Kheralia.',
      error: 'No hemos podido enviar la consulta. Inténtalo de nuevo.',
      unavailable: 'El formulario todavía no está habilitado. Utiliza los datos de contacto confirmados por Kheralia.',
    },
    promise: [
      { title: 'Valoración individualizada', subtitle: 'Cada intervención parte de las necesidades reales.' },
      { title: 'Organización profesional', subtitle: 'Selección y preparación de los apoyos.' },
      { title: 'Seguimiento del servicio', subtitle: 'Revisión y adaptación cuando sea necesario.' },
    ],
  },
  footer: {
    intro: 'Atención domiciliaria especializada y supervisada en Mallorca para personas que precisan apoyo, en colaboración con entidades y profesionales cuando corresponde.',
    navLabel: 'Navegación',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    copyright: 'Kheralia. Todos los derechos reservados.',
    demo: 'Contenido comercial pendiente de aprobación por Kheralia.',
  },
};

const en: Copy = {
  nav: { home: 'Home', services: 'Services', about: 'About us', contact: 'Contact' },
  action: {
    contact: 'Discuss a partnership',
    services: 'Our services',
    discover: 'Our approach',
    allServices: 'Explore home support services',
    learn: 'Learn more',
    send: 'Send enquiry',
    call: 'Talk to our team',
  },
  meta: {
    home: {
      title: 'Specialist home support for healthcare organisations in Mallorca',
      description: 'Kheralia helps healthcare organisations arrange tailored support at home in Mallorca, with individual assessment, planning and follow-up.',
    },
    services: {
      title: 'Home support services for healthcare organisations',
      description: 'Everyday support following hospitalisation or rehabilitation, functional independence, cognitive stimulation and carer guidance in Mallorca.',
    },
    about: {
      title: 'About Kheralia | Our approach to home support',
      description: 'Discover our approach to individual assessment, tailored plans, professional selection and ongoing supervision of home support.',
    },
    contact: {
      title: 'Professional enquiries and partnerships | Kheralia',
      description: 'Contact Kheralia to explore home support services for patients and potential partnerships with your organisation.',
    },
  },
  hero: {
    home: {
      eyebrow: 'SPECIALIST HOME SUPPORT · MALLORCA',
      title: 'Care continues\nat home',
      description: 'We help hospitals, clinics and healthcare organisations arrange tailored support at home for their patients, with individual assessment, planning and follow-up.',
    },
    services: {
      eyebrow: 'SOLUTIONS FOR HEALTHCARE ORGANISATIONS',
      title: 'Support at home,\ntailored to each person',
      description: 'We organise individual home support following medical treatment or rehabilitation, and for people living with dependency, with plans shaped around each person’s needs.',
    },
    about: {
      eyebrow: 'ABOUT KHERALIA',
      title: 'A more structured\napproach to care',
      description: 'We build on each person’s abilities and organise support through assessment, planning and supervision, coordinating with other professionals when appropriate.',
    },
    contact: {
      eyebrow: 'PROFESSIONAL ENQUIRIES',
      title: 'Let’s explore\nworking together',
      description: 'Tell us what home support your organisation needs. We can explore how Kheralia may contribute to ongoing support for your patients.',
    },
  },
  values: [
    { icon: 'home', title: 'Support at home', subtitle: 'Continuity in everyday life' },
    { icon: 'leaf', title: 'Functional independence', subtitle: 'Building on existing abilities' },
    { icon: 'people', title: 'Supervised support', subtitle: 'Assessment, planning and follow-up' },
  ],
  philosophy: {
    eyebrow: 'OUR APPROACH',
    title: 'Dependency does not\ndefine what is possible',
    description: 'Caring does not always mean doing things for someone. We plan support that encourages participation in daily activities, respects individual choices and helps preserve abilities wherever possible.',
    principles: [
      { icon: 'heart', title: 'Abilities first', description: 'We start with what each person can still do.' },
      { icon: 'shield', title: 'Planned support', description: 'Care shaped around assessed needs and agreed goals.' },
      { icon: 'leaf', title: 'Review and adjustment', description: 'We monitor progress and adapt support as needed.' },
    ],
  },
  services: {
    eyebrow: 'OUR SERVICES',
    title: 'Support for different needs',
    items: [
      {
        title: 'Continuity of support at home',
        short: 'Everyday support after treatment or rehabilitation.',
        description: 'We help organise home support when someone needs assistance rebuilding daily routines after illness, hospitalisation or rehabilitation, without replacing any required medical care.',
        features: [
          'Support with activities of daily living',
          'Adapted routines and practical support at home',
          'Coordination with relevant professionals where appropriate',
        ],
      },
      {
        title: 'Functional independence and stimulation',
        short: 'Abilities, participation and everyday independence.',
        description: 'We plan tailored activities and support to encourage participation in daily life, help maintain functional abilities and stimulate cognitive skills in line with individual assessment.',
        features: [
          'Maintaining abilities and routines',
          'Tailored cognitive stimulation',
          'Follow-up on functional goals',
        ],
      },
      {
        title: 'Companionship and carer guidance',
        short: 'Personalised support and practical guidance for carers.',
        description: 'We organise companionship and everyday support, considering emotional needs and adjustment where appropriate. We offer practical guidance to families and carers to help them follow agreed care routines.',
        features: [
          'Companionship tailored to individual needs',
          'Guidance for families and carers',
          'Emotional and functional support within the agreed scope',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'HOW WE WORK',
    title: 'Assessed, planned and supervised support',
    steps: [
      { title: 'We assess', description: 'We review abilities, needs, routines, environment and goals.' },
      { title: 'We organise', description: 'We plan the support and select and prepare a suitable professional.' },
      { title: 'We supervise', description: 'We review the service and coordinate support where appropriate.' },
    ],
  },
  about: {
    eyebrow: 'ABOUT US',
    title: 'Specialist support at home,\nwith a human approach',
    description: 'Kheralia Mind & Well organises specialist home support in Mallorca. Our method brings together functional assessment, individual planning, professional selection and preparation, and ongoing service follow-up.',
    storyTitle: 'Better care starts with understanding',
    story: 'Dependency does not define everything a person can do. Before beginning support, we consider their abilities and home environment; the initial assessment involves a professional specialising in Psychology. We plan support that respects routines and preferences. With the relevant authorisation, we can coordinate with families and other professionals where appropriate.',
    teamTitle: 'A team that organises and supervises',
    teamDescription: 'Kheralia’s dossier identifies Ángel Vieco as Field Director and Luis Liñán as Technical Director. The service includes selecting, preparing and supervising professionals who provide support at home.',
  },
  reviews: {
    eyebrow: 'PROFESSIONAL PARTNERSHIPS',
    title: 'Trust through well-organised support',
    pending: 'References from partner organisations will only be published once verified and authorised.',
  },
  quote: 'Support also means making it possible\nto keep taking part in everyday life.',
  contact: {
    eyebrow: 'LET’S TALK',
    title: 'Let’s explore\nworking together',
    description: 'Tell us what home support your organisation needs and how it is currently arranged. We can discuss an approach tailored to the people you support, without including identifiable clinical information in this form.',
    detailsTitle: 'Contact for organisations and professionals',
    zoneTitle: 'Based in Mallorca',
    zoneDescription: 'Home support in Mallorca. Please enquire about availability and arrangements for your organisation.',
    fields: {
      organization: 'Organisation or centre',
      name: 'Full name',
      phone: 'Contact number',
      email: 'Professional email address',
      message: 'Enquiry or partnership proposal',
      consent: 'I have read the privacy policy and agree to my personal data being processed to respond to this professional enquiry.',
      submit: 'Send enquiry',
      required: 'Required fields',
      success: 'Your enquiry has been received. Thank you for contacting Kheralia.',
      error: 'We could not send your enquiry. Please try again.',
      unavailable: 'The form is not enabled yet. Please use Kheralia’s confirmed contact details.',
    },
    promise: [
      { title: 'Individual assessment', subtitle: 'Each intervention starts with real needs.' },
      { title: 'Professional organisation', subtitle: 'Carefully selected and prepared support.' },
      { title: 'Ongoing review', subtitle: 'Support adjusted when needed.' },
    ],
  },
  footer: {
    intro: 'Specialist, supervised home support in Mallorca for people who need assistance, working with organisations and professionals where appropriate.',
    navLabel: 'Navigation',
    legal: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    copyright: 'Kheralia. All rights reserved.',
    demo: 'Commercial content awaiting approval by Kheralia.',
  },
};

export const dictionaries: Record<Locale, Copy> = { es, en };
export function t(locale: Locale): Copy {
  return dictionaries[locale];
}
