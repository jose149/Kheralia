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
  teasers: Record<'home' | 'services' | 'about', { eyebrow: string; title: string; description: string; action: string }>;
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
    contact: 'Solicitar una propuesta',
    services: 'Nuestros servicios',
    discover: 'Por qué intervenimos así',
    allServices: 'Explorar áreas de intervención',
    learn: 'Conocer más',
    send: 'Enviar consulta',
    call: 'Hablar con el equipo',
  },
  meta: {
    home: {
      title: 'Planes de intervención domiciliaria en Mallorca | Kheralia',
      description: 'Planes de intervención domiciliaria con criterio psicológico, objetivos individualizados y supervisión técnica. Kheralia, Mallorca.',
    },
    services: {
      title: 'Apoyo domiciliario y autonomía | Servicios Kheralia',
      description: 'Intervenciones para la autonomía, continuidad tras el alta, estimulación cognitiva y orientación a cuidadores en Mallorca.',
    },
    about: {
      title: 'Equipo y enfoque psicológico | Sobre Kheralia',
      description: 'Conoce al equipo de Kheralia y el papel de la psicología en el diseño de planes individualizados de apoyo en el hogar.',
    },
    contact: {
      title: 'Colaboración con centros sanitarios | Contacto Kheralia',
      description: 'Solicita una propuesta para tus pacientes o plantea una colaboración profesional con Kheralia en Mallorca.',
    },
  },
  hero: {
    home: {
      eyebrow: 'PLANES DE INTERVENCIÓN DOMICILIARIA · MALLORCA',
      title: 'Cuidar mejor empieza\npor comprender',
      description: 'Diseñamos planes de intervención domiciliaria individualizados con apoyo de profesionales especializados en Psicología, objetivos concretos y seguimiento técnico para centros sanitarios y sus pacientes.',
    },
    services: {
      eyebrow: 'ÁREAS DE INTERVENCIÓN',
      title: 'Del plan a la\nvida cotidiana',
      description: 'La intervención se concreta en tareas, rutinas y apoyos: desde la continuidad después del alta hasta el mantenimiento de capacidades y la orientación a cuidadores.',
    },
    about: {
      eyebrow: 'SOBRE KHERALIA',
      title: 'Conocimiento y criterio\ndetrás del cuidado',
      description: 'Conoce al equipo que impulsa Kheralia y cómo incorporamos la perspectiva psicológica a la valoración de necesidades y al diseño de apoyos con sentido.',
    },
    contact: {
      eyebrow: 'CONTACTO PROFESIONAL',
      title: 'Hablemos de\nuna necesidad concreta',
      description: 'Si tu centro necesita organizar apoyo en domicilio, cuéntanos el contexto general. Estudiaremos el alcance, la viabilidad y los próximos pasos de una posible colaboración.',
    },
  },
  values: [
    { icon: 'home', title: 'Intervención en casa', subtitle: 'Adaptada al entorno real' },
    { icon: 'leaf', title: 'Autonomía', subtitle: 'Objetivos que importan' },
    { icon: 'people', title: 'Criterio psicológico', subtitle: 'Y supervisión técnica' },
  ],
  philosophy: {
    eyebrow: 'NUESTRA FILOSOFÍA',
    title: 'Ayudar sin sustituir.\nAcompañar sin limitar.',
    description: 'La dependencia no resume a una persona. Antes de intervenir, atendemos a lo que todavía puede hacer, a sus preferencias y a su entorno. El objetivo es ofrecer la ayuda necesaria sin quitarle oportunidades de participar.',
    principles: [
      { icon: 'heart', title: 'Escuchar', description: 'Conocer su historia y sus prioridades.' },
      { icon: 'shield', title: 'Respetar', description: 'Apoyar sus decisiones y sus ritmos.' },
      { icon: 'leaf', title: 'Potenciar', description: 'Mantener las capacidades que conserva.' },
    ],
  },
  services: {
    eyebrow: 'QUÉ PODEMOS ORGANIZAR',
    title: 'Intervenciones para la vida real',
    items: [
      {
        title: 'Continuidad tras el alta y apoyo cotidiano',
        short: 'Una transición organizada a la vida en casa.',
        description: 'Tras una hospitalización, rehabilitación o cambio en la situación personal, ayudamos a recuperar una rutina viable en casa. Definimos qué apoyo cotidiano hace falta, cómo prestarlo y qué aspectos conviene revisar, sin sustituir la atención sanitaria indicada.',
        features: [
          'Actividades de la vida diaria y organización de rutinas',
          'Apoyos ajustados al entorno y a las capacidades',
          'Continuidad con el entorno profesional cuando procede',
        ],
      },
      {
        title: 'Autonomía funcional y estimulación cognitiva',
        short: 'Objetivos para preservar habilidades y participación.',
        description: 'A partir de la valoración funcional, cognitiva y emocional, establecemos objetivos de intervención realistas. Con la aportación de profesionales especializados en Psicología cuando corresponde, proponemos actividades y pautas para preservar capacidades y favorecer que la persona siga participando.',
        features: [
          'Objetivos funcionales y cognitivos individualizados',
          'Actividades y pautas acordes con sus capacidades',
          'Revisión de la evolución y ajuste de apoyos',
        ],
      },
      {
        title: 'Acompañamiento y orientación a cuidadores',
        short: 'Herramientas para quienes acompañan cada día.',
        description: 'El entorno también necesita herramientas. Ofrecemos orientación para que familiares y cuidadores sepan cuándo ayudar, cómo fomentar la autonomía y cómo mantener pautas coherentes con la intervención definida, además de organizar acompañamiento cuando se necesita.',
        features: [
          'Acompañamiento personal en el domicilio',
          'Pautas prácticas para la vida cotidiana',
          'Coherencia entre el plan y los apoyos diarios',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'CÓMO TRABAJAMOS',
    title: 'De la valoración al plan de intervención',
    steps: [
      { title: 'Comprender', description: 'Exploramos capacidades funcionales, cognitivas y emocionales, necesidades, preferencias y entorno.' },
      { title: 'Diseñar el plan', description: 'Concretamos objetivos, acciones, profesionales adecuados y criterios de revisión, con aportación especializada en Psicología cuando procede.' },
      { title: 'Revisar y adaptar', description: 'Supervisamos la aplicación del plan y ajustamos apoyos ante cambios o avances observados.' },
    ],
  },
  about: {
    eyebrow: 'SOBRE NOSOTROS',
    title: 'Una mirada psicológica\nal cuidado cotidiano',
    description: 'La atención no empieza al llegar al domicilio: empieza al entender cómo vive la persona. Kheralia combina coordinación de profesionales, conocimiento psicológico y una forma estructurada de acompañar para traducir esa comprensión en acciones concretas.',
    storyTitle: 'Del conocimiento a la intervención',
    story: 'Nuestro punto de partida es sencillo: cada persona conserva capacidades que merecen ser tenidas en cuenta. La dirección técnica incorpora formación en Psicología y Terapia de Conducta, y el trabajo con profesionales especializados permite considerar también los aspectos cognitivos y emocionales de cada situación. Desde ahí construimos planes de intervención adaptados a la vida diaria, sin confundir apoyo domiciliario con tratamiento sanitario.',
    teamTitle: 'Las personas detrás del método',
    teamDescription: 'Ángel Vieco lidera la coordinación en el terreno y la supervisión de la calidad asistencial. Luis Liñán dirige el área técnica y cuenta con formación en Psicología y Terapia de Conducta. Su trabajo, junto con profesionales colaboradores especializados cuando corresponde, da continuidad al plan desde la valoración hasta su aplicación.',
  },
  reviews: {
    eyebrow: 'ASÍ SE DIFERENCIA KHERALIA',
    title: 'Un plan detrás de cada apoyo',
    pending: 'Publicaremos referencias y experiencias reales únicamente con autorización y cuando puedan verificarse.',
  },
  quote: 'Cuidar no siempre es hacer por alguien.\nA veces, es ayudarle a seguir haciéndolo.',
  teasers: {
    home: {
      eyebrow: 'EMPECEMOS POR EL CASO',
      title: 'Una buena intervención empieza con una conversación',
      description: 'Cuéntanos qué situaciones deben resolverse en el hogar. Podemos valorar cómo convertir esa necesidad en objetivos y apoyos concretos.',
      action: 'Plantear una consulta',
    },
    services: {
      eyebrow: 'PARA CENTROS Y ENTIDADES',
      title: '¿Qué apoyo necesitan sus pacientes?',
      description: 'Si necesita continuidad después del alta, apoyo para la autonomía u orientación a cuidadores, estudiaremos el alcance y la viabilidad del servicio.',
      action: 'Solicitar una propuesta',
    },
    about: {
      eyebrow: 'COLABORACIÓN PROFESIONAL',
      title: 'Trabajemos con un objetivo compartido',
      description: 'Si busca un modelo de intervención individualizado, con participación de profesionales de la psicología y supervisión técnica, nos gustaría conocer su proyecto.',
      action: 'Proponer una colaboración',
    },
  },
  contact: {
    eyebrow: 'CONTACTO PROFESIONAL',
    title: 'Convirtamos una necesidad\nen una propuesta',
    description: 'Indícanos qué situación necesita resolver tu entidad y qué tipo de continuidad domiciliaria busca. Estudiaremos la viabilidad y el alcance de un plan de intervención, sin enviar datos identificativos de pacientes ni información clínica a través de este formulario.',
    detailsTitle: 'Hablemos directamente',
    zoneTitle: 'Desde Mallorca, cerca de cada caso',
    zoneDescription: 'Organizamos servicios en Mallorca según el lugar, el alcance y la disponibilidad de profesionales.',
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
      { title: 'Criterio técnico', subtitle: 'Analizamos antes de proponer un apoyo.' },
      { title: 'Plan definido', subtitle: 'Objetivos y pautas para cada situación.' },
      { title: 'Supervisión', subtitle: 'Ajustes cuando la evolución lo requiere.' },
    ],
  },
  footer: {
    intro: 'Planes de intervención y apoyo domiciliario en Mallorca. Criterio psicológico, autonomía y seguimiento técnico.',
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
    contact: 'Request a proposal',
    services: 'Our services',
    discover: 'Why we work this way',
    allServices: 'Explore our support areas',
    learn: 'Learn more',
    send: 'Send enquiry',
    call: 'Talk to our team',
  },
  meta: {
    home: {
      title: 'Individual home intervention plans | Kheralia Mallorca',
      description: 'Individual home intervention plans informed by psychological expertise, clear goals and technical supervision. Kheralia, Mallorca.',
    },
    services: {
      title: 'Home support and independence | Kheralia services',
      description: 'Support following discharge, functional independence, cognitive stimulation and practical guidance for carers in Mallorca.',
    },
    about: {
      title: 'Our team and psychological approach | Kheralia',
      description: 'Meet Kheralia’s team and discover how psychological expertise contributes to tailored home support plans.',
    },
    contact: {
      title: 'Healthcare partnerships | Contact Kheralia',
      description: 'Request a proposal for your patients or explore professional partnerships with Kheralia in Mallorca.',
    },
  },
  hero: {
    home: {
      eyebrow: 'INDIVIDUAL HOME SUPPORT PLANS · MALLORCA',
      title: 'Better care begins\nwith understanding',
      description: 'We design tailored home support plans with input from psychology specialists, practical goals and technical oversight for healthcare organisations and their patients.',
    },
    services: {
      eyebrow: 'AREAS OF SUPPORT',
      title: 'From a tailored plan\nto everyday life',
      description: 'Our plans translate into practical routines and support, from the transition home after discharge to maintaining abilities and guiding carers.',
    },
    about: {
      eyebrow: 'ABOUT KHERALIA',
      title: 'Knowledge and judgement\nbehind every decision',
      description: 'Meet the people behind Kheralia and discover how psychological insight informs the assessment of needs and the design of meaningful support.',
    },
    contact: {
      eyebrow: 'PROFESSIONAL ENQUIRIES',
      title: 'Let’s discuss\na specific need',
      description: 'Tell us what kind of support your organisation needs to arrange at home. We can explore the scope, feasibility and next steps of a potential partnership.',
    },
  },
  values: [
    { icon: 'home', title: 'Support at home', subtitle: 'Rooted in daily life' },
    { icon: 'leaf', title: 'Independence', subtitle: 'Meaningful goals' },
    { icon: 'people', title: 'Psychological insight', subtitle: 'And technical oversight' },
  ],
  philosophy: {
    eyebrow: 'OUR PHILOSOPHY',
    title: 'Support without taking over.\nCare without limiting.',
    description: 'Dependency is not a person’s whole story. We start by understanding what they can still do, what matters to them and the environment they live in. The aim is to offer help without removing opportunities to participate.',
    principles: [
      { icon: 'heart', title: 'Listen', description: 'Understand their story and priorities.' },
      { icon: 'shield', title: 'Respect', description: 'Support choices and individual pace.' },
      { icon: 'leaf', title: 'Empower', description: 'Help preserve existing abilities.' },
    ],
  },
  services: {
    eyebrow: 'WHAT WE CAN ORGANISE',
    title: 'Support that works in real life',
    items: [
      {
        title: 'Support after discharge and in daily life',
        short: 'A supported transition back into everyday life.',
        description: 'After hospitalisation, rehabilitation or a change in circumstances, we help establish realistic routines at home. We identify the practical support needed, how it should be delivered and what should be reviewed, without replacing prescribed medical care.',
        features: [
          'Activities of daily living and everyday routines',
          'Support tailored to abilities and the home environment',
          'Continuity with relevant professionals when appropriate',
        ],
      },
      {
        title: 'Functional independence and cognitive stimulation',
        short: 'Goals that help preserve abilities and participation.',
        description: 'Following an assessment of functional, cognitive and emotional needs, we set realistic goals. With input from psychology specialists where appropriate, we suggest activities and guidance to help preserve abilities and encourage participation in everyday life.',
        features: [
          'Individual functional and cognitive goals',
          'Activities matched to existing abilities',
          'Progress reviews and adjustments to support',
        ],
      },
      {
        title: 'Companionship and guidance for carers',
        short: 'Practical tools for those providing everyday support.',
        description: 'The people providing support need guidance too. We help families and carers understand when to assist, how to encourage independence and how to follow consistent guidance, while arranging companionship where required.',
        features: [
          'Personal support at home',
          'Practical guidance for everyday situations',
          'Consistent delivery of the agreed support plan',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'HOW WE WORK',
    title: 'From assessment to a tailored support plan',
    steps: [
      { title: 'Understand', description: 'We explore functional, cognitive and emotional abilities, needs, preferences and home context.' },
      { title: 'Design the plan', description: 'We agree goals, activities, suitable professionals and review criteria, with psychology input where appropriate.' },
      { title: 'Review and adapt', description: 'We oversee how the plan is delivered and adjust support as needs or circumstances change.' },
    ],
  },
  about: {
    eyebrow: 'ABOUT US',
    title: 'A psychological perspective\non everyday support',
    description: 'Support begins before anyone enters the home: it begins by understanding how a person lives. Kheralia combines professional coordination, psychological knowledge and a structured approach to turn that understanding into practical steps.',
    storyTitle: 'From insight to intervention',
    story: 'We start from a simple belief: each person has abilities worth recognising. Our technical leadership includes training in Psychology and Behaviour Therapy, and specialist professional input helps us consider cognitive and emotional aspects when relevant. We use this understanding to shape support plans for everyday life, without presenting home support as a substitute for medical treatment.',
    teamTitle: 'The people behind the method',
    teamDescription: 'Ángel Vieco leads field coordination and oversight of care quality. Luis Liñán is responsible for technical direction and has training in Psychology and Behaviour Therapy. Together with specialist collaborators where appropriate, they help take each plan from assessment into practice.',
  },
  reviews: {
    eyebrow: 'THE KHERALIA DIFFERENCE',
    title: 'A plan behind every support service',
    pending: 'We will share genuine experiences and professional references only when verified and authorised.',
  },
  quote: 'Caring is not always doing things for someone.\nSometimes it is helping them keep doing things.',
  teasers: {
    home: {
      eyebrow: 'START WITH THE PERSON',
      title: 'Meaningful support begins with a conversation',
      description: 'Tell us what needs to change at home. We can explore how to translate that need into clear goals and practical support.',
      action: 'Start an enquiry',
    },
    services: {
      eyebrow: 'FOR HEALTHCARE ORGANISATIONS',
      title: 'What support do your patients need?',
      description: 'From support following discharge to independence and carer guidance, we can discuss the scope and feasibility of the service.',
      action: 'Request a proposal',
    },
    about: {
      eyebrow: 'PROFESSIONAL PARTNERSHIPS',
      title: 'Let’s work towards a shared goal',
      description: 'If you value individual support planning, specialist psychology input and technical oversight, we would welcome a conversation about your project.',
      action: 'Explore a partnership',
    },
  },
  contact: {
    eyebrow: 'PROFESSIONAL ENQUIRIES',
    title: 'Turn a need into\na practical proposal',
    description: 'Tell us what your organisation needs to address and what sort of ongoing support is required at home. We can discuss the feasibility and scope of a tailored plan. Please do not share identifiable patient data or clinical information through this form.',
    detailsTitle: 'Speak with us directly',
    zoneTitle: 'Local knowledge of Mallorca',
    zoneDescription: 'We organise services in Mallorca based on location, scope and professional availability.',
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
      { title: 'Professional judgement', subtitle: 'We assess before suggesting support.' },
      { title: 'Defined plan', subtitle: 'Goals and guidance for each situation.' },
      { title: 'Oversight', subtitle: 'Support reviewed as needs evolve.' },
    ],
  },
  footer: {
    intro: 'Tailored home support plans in Mallorca, informed by psychological expertise, independence and technical follow-up.',
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
