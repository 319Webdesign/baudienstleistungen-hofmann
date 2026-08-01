import { images } from "./images";

export type ProjectCategory =
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Außenanlagen"
  | "Spezialprojekt"
  | "Spezialprojekte"
  | "Sonderfundamente";

export type ProjectFilter =
  | "Alle"
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Außenanlagen"
  | "Spezialprojekte";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  filterCategories: ProjectFilter[];
  description: string;
  image: { src: string; alt: string };
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
    id: "mobilfunkfundamente",
    title: "Mobilfunkfundamente",
    category: "Sonderfundamente",
    filterCategories: ["Spezialprojekte", "Betonarbeiten"],
    description:
      "Herstellung belastbarer Fundamente für technische Anlagen – inklusive Aushub, Schalung, Bewehrung und Betonage.",
    image: {
      src: images.projects.fundament.src,
      alt: "Mobilfunkfundament – Betonfundament für technische Anlage",
    },
    href: "/projekte#mobilfunkfundamente",
  },
  {
    id: "stahltraegereinbau",
    title: "Projekt Keisner",
    category: "Umbau & Sanierung",
    filterCategories: ["Umbau & Sanierung"],
    description:
      "Fachgerechter Einbau von Stahlträgern bei Wanddurchbrüchen und Umbauten im Bestand – nach statischen Vorgaben umgesetzt.",
    image: {
      src: images.projects.stahltraeger.src,
      alt: "Projekt Keisner – Umbau und Sanierung",
    },
    href: "/projekte#stahltraegereinbau",
  },
  {
    id: "rohbau-anbau",
    title: "Projekt Abel Rüsselsheim",
    category: "Rohbau",
    filterCategories: ["Rohbau", "Betonarbeiten"],
    description:
      "Ausführung der Rohbauarbeiten vom Fundament bis zum Mauerwerk. Solide geplant und sauber umgesetzt.",
    image: {
      src: images.projects.anbau.src,
      alt: "Projekt Abel Rüsselsheim – Rohbau",
    },
    href: "/projekte#rohbau-anbau",
  },
  {
    id: "fundament-hebebuehne",
    title: "Fundament für eine Hebebühne",
    category: "Betonarbeiten",
    filterCategories: ["Betonarbeiten", "Spezialprojekte"],
    description:
      "Herstellung eines passgenauen Betonfundaments nach den technischen Anforderungen der geplanten Hebebühne.",
    image: {
      src: images.projects.hebebuehne.src,
      alt: "Betonfundament für eine Hebebühne",
    },
    href: "/projekte#fundament-hebebuehne",
  },
  {
    id: "fundament-lichtmast",
    title: "Fundament für einen Lichtmast",
    category: "Spezialprojekt",
    filterCategories: ["Spezialprojekte", "Betonarbeiten"],
    description:
      "Individuelle Fundamentlösung für einen Lichtmast – fachgerecht vorbereitet, bewehrt und betoniert.",
    image: {
      src: images.projects.lichtmast.src,
      alt: "Fundament für einen Lichtmast",
    },
    href: "/projekte#fundament-lichtmast",
  },
  {
    id: "garten-pflasterarbeiten",
    title: "Garten- und Pflasterarbeiten",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Gestaltung und Befestigung von Außenflächen mit passendem Unterbau, Pflasterarbeiten und einer sauberen Ausführung.",
    image: {
      src: images.projects.pflaster.src,
      alt: "Garten- und Pflasterarbeiten",
    },
    href: "/projekte#garten-pflasterarbeiten",
  },
];
