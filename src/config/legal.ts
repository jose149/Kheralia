import type { Locale } from "../i18n/routes";

// IMPORTANTE ANTES DE PUBLICAR:
// 1) Confirmar la identidad de quien ejerce LEGALMENTE la actividad.
// 2) Si el responsable es una sociedad (también con NIF provisional),
//    sustituir nombre/razón social y NIF por los de la sociedad.
// 3) Confirmar que la dirección es una dirección válida de contacto legal.
export const legalIdentity = {
  commercialName: "Kheralia Mind & Well",
  legalName: "[PENDIENTE: NOMBRE Y APELLIDOS DEL TITULAR DEL NIF]",
  nif: "45187379S",
  address:
    "C/ Alexandre Rosselló, 15, Edificio Minaco, oficina 8F, 07002 Palma, Illes Balears, España",
  email: "atencion@kheralia.es.es",
  inquiryRetentionMonths: 12, // Política propuesta: confirmar cumplimiento efectivo.
} as const;

export type LegalKind = "notice" | "privacy";
export const legalRoutes: Record<Locale, Record<LegalKind, string>> = {
  es: { notice: "/es/aviso-legal/", privacy: "/es/privacidad/" },
  en: { notice: "/en/legal-notice/", privacy: "/en/privacy/" },
};
export function legalPath(locale: Locale, kind: LegalKind): string {
  return legalRoutes[locale][kind];
}

export const legalMeta: Record<
  Locale,
  Record<LegalKind, { title: string; description: string }>
> = {
  es: {
    notice: {
      title: "Aviso legal",
      description:
        "Información legal y datos de identificación de Kheralia Mind & Well, Mallorca.",
    },
    privacy: {
      title: "Política de privacidad",
      description:
        "Información sobre el tratamiento de datos personales al contactar con Kheralia Mind & Well.",
    },
  },
  en: {
    notice: {
      title: "Legal notice",
      description:
        "Legal information and provider identification details for Kheralia Mind & Well, Mallorca.",
    },
    privacy: {
      title: "Privacy policy",
      description:
        "How Kheralia Mind & Well processes personal data submitted through its website.",
    },
  },
};
