import type { Locale, PageKey } from './routes';

interface Service {
  title: string;
  short: string;
  description: string;
  features: string[];
}
interface Copy {
  nav: Record<PageKey, string>;
  action: { contact:string; services:string; discover:string; allServices:string; learn:string; send:string; call:string };
  meta: Record<PageKey, { title:string; description:string }>;
  hero: Record<PageKey, { eyebrow:string; title:string; description:string }>;
  values: { icon:'home'|'leaf'|'people'; title:string; subtitle:string }[];
  philosophy: { eyebrow:string; title:string; description:string; principles: { icon:'heart'|'shield'|'leaf'; title:string; description:string }[] };
  services: { eyebrow:string; title:string; items:Service[] };
  process: { eyebrow:string; title:string; steps: {title:string;description:string}[] };
  about: { eyebrow:string; title:string; description:string; storyTitle:string; story:string; teamTitle:string; teamDescription:string };
  reviews: { eyebrow:string; title:string; pending:string };
  quote:string;
  contact: { eyebrow:string; title:string; description:string; detailsTitle:string; zoneTitle:string; zoneDescription:string; fields: { name:string;phone:string;email:string;message:string;consent:string;submit:string;required:string;success:string;error:string;unavailable:string }; promise: {title:string;subtitle:string}[] };
  footer: { intro:string; navLabel:string; legal:string; privacy:string; cookies:string; copyright:string; demo:string };
}

const es:Copy = {
  nav:{home:'Inicio',services:'Servicios',about:'Sobre nosotros',contact:'Contacto'},
  action:{contact:'Contactar',services:'Nuestros servicios',discover:'Conócenos',allServices:'Ver todos los servicios',learn:'Conocer más',send:'Enviar consulta',call:'Llamar ahora'},
  meta:{
    home:{title:'Cuidado y acompañamiento en casa',description:'Atención domiciliaria cercana y personalizada en Mallorca para personas mayores y personas en situación de dependencia.'},
    services:{title:'Nuestros servicios',description:'Conoce nuestros servicios de acompañamiento personal, apoyo en el hogar y bienestar en Mallorca.'},
    about:{title:'Sobre nosotros',description:'Descubre la filosofía de Kheralia: cuidado humano, confianza y atención personalizada en Mallorca.'},
    contact:{title:'Contacto',description:'Contacta con Kheralia para conocer las opciones de acompañamiento personal y atención domiciliaria en Mallorca.'},
  },
  hero:{
    home:{eyebrow:'ATENCIÓN DOMICILIARIA',title:'Cuidar\nes estar cerca',description:'Acompañamos a cada persona en su entorno, con confianza, respeto y una atención pensada para su bienestar.'},
    services:{eyebrow:'NUESTROS SERVICIOS',title:'Un apoyo sereno\npara cada etapa\nde la vida',description:'Atención domiciliaria personalizada para que cada persona pueda seguir viviendo en su hogar con bienestar, seguridad y compañía.'},
    about:{eyebrow:'SOBRE NOSOTROS',title:'Cuidamos desde\nla cercanía y\nla confianza',description:'Un proyecto que cree en la atención personalizada, el respeto y la tranquilidad de cada familia.'},
    contact:{eyebrow:'CONTACTO',title:'Hablemos\ncon tranquilidad',description:'Escuchamos cada situación familiar con atención para encontrar juntos la forma de acompañarle.'},
  },
  values:[
    {icon:'home',title:'Atención domiciliaria',subtitle:'En la comodidad de su hogar'},
    {icon:'leaf',title:'Bienestar integral',subtitle:'Cuerpo, mente y vida social'},
    {icon:'people',title:'Acompañamiento personalizado',subtitle:'Desde un enfoque humano y cercano'},
  ],
  philosophy:{eyebrow:'NUESTRA ESENCIA',title:'Personas que cuidan\nde personas',description:'Creemos en un cuidado cercano y de calidad, que respeta la historia, las preferencias y el ritmo de cada persona.',principles:[
    {icon:'heart',title:'Cercanía',description:'Trato humano y de confianza'},
    {icon:'shield',title:'Discreción',description:'Privacidad y profesionalidad'},
    {icon:'leaf',title:'Atención personalizada',description:'Cada persona es única'},
  ]},
  services:{eyebrow:'NUESTROS SERVICIOS',title:'Un apoyo en cada etapa',items:[
    {title:'Acompañamiento personal',short:'Compañía, escucha y apoyo en el día a día.',description:'Acompañamiento cercano adaptado a las necesidades, preferencias y ritmo de cada persona.',features:['Compañía y conversación','Apoyo en gestiones y actividades','Estimulación y vida social']},
    {title:'Cuidados en el hogar',short:'Apoyo para una rutina cómoda y segura.',description:'Apoyo en las tareas y rutinas cotidianas, siempre desde el respeto y buscando favorecer la autonomía.',features:['Apoyo en rutinas personales','Ayuda en la alimentación','Organización y bienestar en casa']},
    {title:'Bienestar físico y emocional',short:'Actividades adaptadas y una vida más plena.',description:'Promovemos el bienestar y la calidad de vida mediante hábitos saludables y actividades adaptadas a cada persona.',features:['Actividad adaptada','Estimulación cognitiva','Bienestar emocional']},
  ]},
  process:{eyebrow:'CÓMO TRABAJAMOS',title:'Un proceso cercano y sencillo',steps:[
    {title:'Escuchamos',description:'Conocemos su situación y sus preferencias.'},
    {title:'Diseñamos el apoyo',description:'Acordamos juntos una propuesta a su medida.'},
    {title:'Acompañamos',description:'Seguimos presentes y ajustamos lo necesario.'},
  ]},
  about:{eyebrow:'SOBRE NOSOTROS',title:'Cuidado cercano,\nprofesional y humano',description:'Kheralia es un proyecto de atención domiciliaria impulsado por un pequeño equipo que apuesta por el respeto, la escucha y el bienestar de las personas.',storyTitle:'Un proyecto que pone a las personas primero',story:'Creemos que cuidar significa escuchar, adaptarse a cada historia y respetar las decisiones de quienes acompañamos. Queremos que las familias encuentren un trato cercano y una comunicación clara.',teamTitle:'Personas que cuidan de personas',teamDescription:'Dos profesionales detrás de un servicio personal. Presentaremos aquí sus nombres, fotografías reales y experiencia una vez validados con Kheralia.'},
  reviews:{eyebrow:'LO QUE DICEN NUESTRAS FAMILIAS',title:'Historias que inspiran',pending:'Aquí publicaremos testimonios reales con autorización de sus protagonistas.'},
  quote:'Cuidar es estar presente\nen lo que realmente importa.',
  contact:{eyebrow:'HABLEMOS',title:'Estamos aquí\npara ayudarte',description:'Cuéntanos qué necesitas y hablaremos contigo para encontrar el mejor acompañamiento.',detailsTitle:'También puedes contactar con nosotros',zoneTitle:'En Mallorca',zoneDescription:'Atención domiciliaria en Mallorca. Confirma con el equipo la disponibilidad en tu zona.',fields:{name:'Nombre y apellidos',phone:'Teléfono',email:'Correo electrónico',message:'Mensaje',consent:'He leído la política de privacidad y consiento el tratamiento de mis datos para responder a mi consulta.',submit:'Enviar consulta',required:'Campos obligatorios',success:'Tu mensaje se ha enviado correctamente.',error:'No se ha podido enviar el mensaje. Puedes probar de nuevo.',unavailable:'El envío todavía no está habilitado. Ponte en contacto por los medios confirmados por Kheralia.'},promise:[{title:'Respuesta cercana',subtitle:'Te escuchamos con atención'},{title:'Atención personal',subtitle:'Cada situación es diferente'},{title:'Confidencialidad',subtitle:'Tratamos tu consulta con cuidado'}]},
  footer:{intro:'Atención domiciliaria y acompañamiento personal en Mallorca.',navLabel:'Navegación',legal:'Aviso legal',privacy:'Privacidad',cookies:'Cookies',copyright:'Kheralia. Todos los derechos reservados.',demo:'Web en preparación: datos y fotografías pendientes de validación.'}
};

const en:Copy = {
  nav:{home:'Home',services:'Services',about:'About us',contact:'Contact'},
  action:{contact:'Get in touch',services:'Our services',discover:'Meet us',allServices:'Explore services',learn:'Learn more',send:'Send enquiry',call:'Call us'},
  meta:{
    home:{title:'Personal home care and companionship',description:'Warm, personalised home care and companionship in Mallorca for older adults and people who need support.'},
    services:{title:'Our services',description:'Explore personalised companionship, everyday support at home and wellbeing services in Mallorca.'},
    about:{title:'About us',description:'Discover Kheralia’s philosophy: personal attention, trust, and human-centred home care in Mallorca.'},
    contact:{title:'Contact',description:'Contact Kheralia to learn more about personalised companionship and home care services in Mallorca.'},
  },
  hero:{
    home:{eyebrow:'PERSONAL HOME CARE',title:'Care begins\nwith being there',description:'We support each person in their own home, with trust, respect and care centred on their wellbeing.'},
    services:{eyebrow:'OUR SERVICES',title:'Gentle support\nfor every stage\nof life',description:'Personalised home care to help each person feel safe, supported and comfortable in their own home.'},
    about:{eyebrow:'ABOUT US',title:'Care built on\ncloseness and trust',description:'A caring approach grounded in personal attention, respect and peace of mind for every family.'},
    contact:{eyebrow:'CONTACT',title:'Let’s talk\nwith confidence',description:'We listen carefully to each family’s situation and explore the right way to support you.'},
  },
  values:[
    {icon:'home',title:'Home care',subtitle:'Comfort in your own home'},
    {icon:'leaf',title:'Whole-person wellbeing',subtitle:'Body, mind and social life'},
    {icon:'people',title:'Personal companionship',subtitle:'Always caring and attentive'},
  ],
  philosophy:{eyebrow:'OUR ESSENCE',title:'People caring\nfor people',description:'We believe in attentive care that honours each person’s history, preferences and everyday rhythm.',principles:[
    {icon:'heart',title:'Warmth',description:'Human connection and trust'},
    {icon:'shield',title:'Discretion',description:'Privacy and professionalism'},
    {icon:'leaf',title:'Personalised care',description:'Every person is unique'},
  ]},
  services:{eyebrow:'OUR SERVICES',title:'Support at every stage',items:[
    {title:'Personal companionship',short:'Company, listening and everyday support.',description:'Meaningful companionship shaped around each person’s needs, preferences and daily routines.',features:['Companionship and conversation','Help with appointments and activities','Social connection']},
    {title:'Support at home',short:'Help for comfortable everyday living.',description:'Considerate assistance with daily activities, respecting independence and familiar routines.',features:['Support with daily routines','Help around mealtimes','Organisation and comfort at home']},
    {title:'Physical and emotional wellbeing',short:'Adapted activities and a fuller life.',description:'Encouraging wellbeing and quality of life through healthy habits and individual activities.',features:['Adapted movement','Cognitive stimulation','Emotional wellbeing']},
  ]},
  process:{eyebrow:'HOW WE WORK',title:'Simple, personal and thoughtful',steps:[
    {title:'We listen',description:'We learn about your needs and wishes.'},
    {title:'We plan',description:'We agree on an individual approach.'},
    {title:'We accompany',description:'We stay in touch and adapt as needed.'},
  ]},
  about:{eyebrow:'ABOUT US',title:'Care that feels\npersonal and human',description:'Kheralia is a small home care team dedicated to respect, attentive listening and the wellbeing of the people it supports.',storyTitle:'A people-first approach',story:'We believe caring means listening to people, respecting their choices and understanding what matters in their daily lives. Families deserve clear communication and compassionate support.',teamTitle:'People caring for people',teamDescription:'Our team has two professionals. Their confirmed names, experience and authentic photographs will appear here once approved.'},
  reviews:{eyebrow:'WHAT FAMILIES SAY',title:'Stories that inspire',pending:'Genuine customer testimonials will appear here when approved by their authors.'},
  quote:'Care is being present\nfor what truly matters.',
  contact:{eyebrow:'LET’S TALK',title:'We are here\nto help',description:'Tell us what you need and we can explore the right support together.',detailsTitle:'You can also reach us directly',zoneTitle:'In Mallorca',zoneDescription:'Home care in Mallorca. Please confirm availability in your area.',fields:{name:'Full name',phone:'Phone number',email:'Email address',message:'Message',consent:'I have read the privacy policy and consent to processing my data to reply to this enquiry.',submit:'Send enquiry',required:'Required fields',success:'Your message has been sent.',error:'Your message could not be sent. Please try again.',unavailable:'Email sending is not configured yet. Please use confirmed contact details.'},promise:[{title:'Attentive response',subtitle:'We listen carefully'},{title:'Personal approach',subtitle:'Each situation is different'},{title:'Confidentiality',subtitle:'We handle your enquiry with care'}]},
  footer:{intro:'Personalised home care and companionship in Mallorca.',navLabel:'Navigation',legal:'Legal notice',privacy:'Privacy',cookies:'Cookies',copyright:'Kheralia. All rights reserved.',demo:'Website in preparation: content and photos awaiting approval.'}
};

export const dictionaries:Record<Locale,Copy> = {es,en};
export function t(locale:Locale):Copy {return dictionaries[locale]}
