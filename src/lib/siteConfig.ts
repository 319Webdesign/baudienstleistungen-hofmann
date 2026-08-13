/**
 * Zentrale Unternehmens- und SEO-Konfiguration.
 */
export const siteConfig = {
  name: "Baudienstleistungen Hofmann",
  legalName: "Baudienstleistungen Thomas Hofmann",
  shortName: "Hofmann",
  owner: "Thomas Hofmann",
  tagline: "Maurermeister & Bautechniker",
  description:
    "Baudienstleistungen Hofmann – fachgerechte Bauausführung, technische Kompetenz und persönliche Betreuung.",
  url: "https://www.beispiel-domain.de", // TODO: Echte Domain eintragen
  ersteHilfeUrl: "https://www.erstehilfe-hofmann.de",
  vatId: "DE277475934",
  taxId: "00882831411",

  brand: {
    primary: "#1C3D5A",
    primaryDark: "#152F47",
    accent: "#D92D20",
    accentLight: "#E8453A",
    surface: "#F5F5F2",
  },

  contact: {
    phone: "0171 1971248",
    phoneHref: "tel:+491711971248",
    email: "team-hofmann@email.de",
    emailHref: "mailto:team-hofmann@email.de",
    whatsapp: "https://wa.me/491711971248",
    address: {
      street: "Kantstraße 5",
      zip: "64354",
      city: "Reinheim",
      region: "Hessen",
      country: "Deutschland",
      full: "Kantstraße 5, 64354 Reinheim",
    },
    serviceArea: "Reinheim und Umgebung",
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
    location: {
      city: "Reinheim",
      region: "Hessen",
      district: "Darmstadt-Dieburg",
      serviceArea: "Reinheim und Umgebung",
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
