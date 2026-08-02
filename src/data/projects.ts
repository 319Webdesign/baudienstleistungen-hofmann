import { images, type ImageAsset } from "./images";

export type ProjectCategory =
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Außenanlagen"
  | "Spezialprojekt"
  | "Spezialprojekte"
  | "Sonderfundamente"
  | "Mobilfunkfundamente";

export type ProjectFilter =
  | "Alle"
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Außenanlagen"
  | "Spezialprojekte";

export type ProjectSlug =
  | "abel-lippstadt"
  | "keisner"
  | "abel-ruesselsheim"
  | "breuninger"
  | "schraeder-gessner"
  | "zoga-bau";

export type Project = {
  id: string;
  slug: ProjectSlug;
  title: string;
  /** Ordner unter public/projekte/ */
  folder: string;
  /** Optionales Cover-Bild aus dem Ordner (Dateiname) */
  coverFile?: string;
  category: ProjectCategory;
  filterCategories: ProjectFilter[];
  description: string;
  longDescription: string;
  image: ImageAsset;
  href: string;
};

export const projectFilters: ProjectFilter[] = [
  "Alle",
  "Rohbau",
  "Betonarbeiten",
  "Umbau & Sanierung",
  "Außenanlagen",
  "Spezialprojekte",
];

export const projects: Project[] = [
  {
    id: "abel-lippstadt",
    slug: "abel-lippstadt",
    title: "Projekt Abel Lippstadt",
    folder: "Projekt_Abel_Lippstadt",
    coverFile: "IMG_0284web.webp",
    category: "Mobilfunkfundamente",
    filterCategories: ["Spezialprojekte", "Betonarbeiten"],
    description:
      "Herstellung belastbarer Fundamente für technische Anlagen – inklusive Aushub, Schalung, Bewehrung und Betonage.",
    longDescription:
      "Beim Projekt Abel Lippstadt wurden belastbare Fundamente für technische Anlagen hergestellt. Die Arbeiten umfassten Aushub, Schalung, Bewehrung und Betonage – präzise ausgeführt und auf die statischen Anforderungen der Anlage abgestimmt.",
    image: {
      src: "/projekte/Projekt_Abel_Lippstadt/IMG_0284web.webp",
      alt: "Projekt Abel Lippstadt – Betonfundament für technische Anlage",
    },
    href: "/projekte/abel-lippstadt",
  },
  {
    id: "keisner",
    slug: "keisner",
    title: "Projekt Keisner",
    folder: "Projekt_Keisner",
    coverFile: "IMG_0065_ergebnis.webp",
    category: "Umbau & Sanierung",
    filterCategories: ["Umbau & Sanierung"],
    description:
      "Fachgerechter Einbau von Stahlträgern bei Wanddurchbrüchen und Umbauten im Bestand – nach statischen Vorgaben umgesetzt.",
    longDescription:
      "Im Projekt Keisner wurden Umbau- und Sanierungsarbeiten im Bestand umgesetzt. Dazu gehörte der fachgerechte Einbau von Stahlträgern bei Wanddurchbrüchen – sorgfältig vorbereitet und nach den vorliegenden statischen Vorgaben ausgeführt.",
    image: {
      src: "/projekte/Projekt_Keisner/IMG_0065_ergebnis.webp",
      alt: "Projekt Keisner – Umbau und Sanierung",
    },
    href: "/projekte/keisner",
  },
  {
    id: "abel-ruesselsheim",
    slug: "abel-ruesselsheim",
    title: "Projekt Abel Rüsselsheim",
    folder: "Projekt_Abel_Rüsselsheim",
    coverFile: "IMG_1695web.webp",
    category: "Mobilfunkfundamente",
    filterCategories: ["Rohbau", "Betonarbeiten"],
    description:
      "Ausführung der Rohbauarbeiten vom Fundament bis zum Mauerwerk. Solide geplant und sauber umgesetzt.",
    longDescription:
      "Beim Projekt Abel Rüsselsheim standen Rohbau- und Fundamentarbeiten im Fokus. Von der Vorbereitung bis zur fertigen Ausführung wurde das Vorhaben solide geplant und sauber umgesetzt – passgenau für die technischen Anforderungen vor Ort.",
    image: {
      src: "/projekte/Projekt_Abel_Rüsselsheim/IMG_1695web.webp",
      alt: "Projekt Abel Rüsselsheim – Rohbau",
    },
    href: "/projekte/abel-ruesselsheim",
  },
  {
    id: "breuninger",
    slug: "breuninger",
    title: "Projekt Breuninger",
    folder: "Projekt_Breuninger",
    category: "Betonarbeiten",
    filterCategories: ["Betonarbeiten", "Spezialprojekte"],
    description:
      "Herstellung eines passgenauen Betonfundaments nach den technischen Anforderungen der geplanten Hebebühne.",
    longDescription:
      "Im Projekt Breuninger wurde ein passgenaues Betonfundament nach den technischen Anforderungen einer geplanten Hebebühne hergestellt. Maßgenauigkeit, Tragfähigkeit und eine saubere Ausführung standen dabei im Mittelpunkt.",
    image: {
      src: images.projects.hebebuehne.src,
      alt: "Projekt Breuninger – Betonfundament für eine Hebebühne",
    },
    href: "/projekte/breuninger",
  },
  {
    id: "schraeder-gessner",
    slug: "schraeder-gessner",
    title: "Projekt Schräder - Geßner",
    folder: "Projekt_Schräder_Geßner",
    coverFile: "IMG_8713web.webp",
    category: "Spezialprojekt",
    filterCategories: ["Spezialprojekte", "Betonarbeiten"],
    description:
      "Individuelle Fundamentlösung für einen Lichtmast – fachgerecht vorbereitet, bewehrt und betoniert.",
    longDescription:
      "Beim Projekt Schräder - Geßner wurde eine individuelle Fundamentlösung für einen Lichtmast umgesetzt. Vorbereitung, Bewehrung und Betonage erfolgten fachgerecht und abgestimmt auf die technischen Vorgaben.",
    image: {
      src: "/projekte/Projekt_Schräder_Geßner/IMG_8713web.webp",
      alt: "Projekt Schräder - Geßner – Fundament für einen Lichtmast",
    },
    href: "/projekte/schraeder-gessner",
  },
  {
    id: "zoga-bau",
    slug: "zoga-bau",
    title: "Projekt Zoga Bau",
    folder: "Projekt_Zoga_Bau",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Gestaltung und Befestigung von Außenflächen mit passendem Unterbau, Pflasterarbeiten und einer sauberen Ausführung.",
    longDescription:
      "Im Projekt Zoga Bau wurden Außenflächen gestaltet und befestigt. Dazu gehörten passender Unterbau, Pflasterarbeiten und eine saubere Ausführung – funktional und abgestimmt auf das Grundstück.",
    image: {
      src: images.projects.pflaster.src,
      alt: "Projekt Zoga Bau – Garten- und Pflasterarbeiten",
    },
    href: "/projekte/zoga-bau",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
