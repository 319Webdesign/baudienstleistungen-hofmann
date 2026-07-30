/**
 * Zentrale Unternehmens- und SEO-Konfiguration.
 * Platzhalter klar markiert – bitte durch echte Daten ersetzen.
 */
export const siteConfig = {
  name: "Baudienstleistungen Hofmann",
  shortName: "Hofmann",
  owner: "Thomas Hofmann",
  tagline: "Maurermeister & Bautechniker",
  description:
    "Baudienstleistungen Hofmann – fachgerechte Bauausführung, technische Kompetenz und persönliche Betreuung.",
  url: "https://www.beispiel-domain.de", // TODO: Echte Domain eintragen

  brand: {
    primary: "#1C3D5A",
    primaryDark: "#152F47",
    accent: "#D92D20",
    accentLight: "#E8453A",
    surface: "#F5F5F2",
  },

  contact: {
    phone: "[Telefonnummer eintragen]",
    phoneHref: "tel:+49XXXXXXXXXXX", // TODO: Echte Nummer
    email: "[E-Mail-Adresse eintragen]",
    emailHref: "mailto:kontakt@beispiel.de", // TODO: Echte E-Mail
    whatsapp: "https://wa.me/49XXXXXXXXXXX", // TODO: WhatsApp-Platzhalter
    address: {
      street: "[Straße und Hausnummer]",
      zip: "[PLZ]",
      city: "[Ort]",
      region: "[Region / Landkreis]",
      country: "Deutschland",
      full: "[Straße und Hausnummer], [PLZ] [Ort]",
    },
    serviceArea: "[Einsatzgebiet – Region / Umkreis]",
  },

  hours: {
    label: "Erreichbarkeit nach Vereinbarung",
    weekdays: "Mo–Fr nach Vereinbarung",
    weekend: "Sa nach Absprache",
  },

  social: {
    // TODO: Nur echte Profile freischalten
    facebook: "",
    instagram: "",
    linkedin: "",
    googleReviews: "#", // TODO: Google-Unternehmensprofil-URL eintragen
  },

  seo: {
    defaultTitle: "Baudienstleistungen Hofmann | Rohbau, Umbau & Betonarbeiten",
    titleTemplate: "%s | Baudienstleistungen Hofmann",
    defaultDescription:
      "Baudienstleistungen Hofmann steht für Rohbau, Betonarbeiten, Umbau, Sanierung, Erdarbeiten und individuelle Bauprojekte mit Meister- und Technikerkompetenz.",
    locale: "de_DE",
    // Lokal SEO – Platzhalter
    location: {
      city: "[Ort]",
      region: "[Region]",
      district: "[Landkreis]",
      serviceArea: "[Einsatzgebiet]",
    },
  },

  navigation: [
    { label: "Startseite", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Projekte", href: "/projekte" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Kontakt", href: "/kontakt" },
  ] as const,

  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
