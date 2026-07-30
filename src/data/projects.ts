import { images } from "./images";

export type ProjectCategory =
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Außenanlagen"
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
    id: "fundament-technische-anlage",
    title: "Fundamentarbeiten für technische Anlage",
    category: "Sonderfundamente",
    filterCategories: ["Spezialprojekte", "Betonarbeiten"],
    description:
      "Herstellung eines individuell geplanten Fundaments inklusive Aushub, Schalung, Bewehrung und Betonage.",
    image: images.projects.fundament,
    href: "/projekte#fundament-technische-anlage",
  },
  {
    id: "stahltraeger-bestand",
    title: "Stahlträgereinbau im Bestand",
    category: "Umbau & Sanierung",
    filterCategories: ["Umbau & Sanierung"],
    description:
      "Fachgerechter Wanddurchbruch mit vorbereitender Abstützung und Einbau einer tragenden Stahlkonstruktion.",
    image: images.projects.stahltraeger,
    href: "/projekte#stahltraeger-bestand",
  },
  {
    id: "rohbau-anbau",
    title: "Rohbau eines Anbaus",
    category: "Rohbau",
    filterCategories: ["Rohbau", "Betonarbeiten"],
    description:
      "Erstellung der tragenden Konstruktion eines Anbaus inklusive Fundament- und Mauerarbeiten.",
    image: images.projects.anbau,
    href: "/projekte#rohbau-anbau",
  },
  {
    id: "pflaster-aussenanlage",
    title: "Pflasterarbeiten und Außenanlage",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Neugestaltung einer Außenfläche mit Unterbau, Entwässerung und Pflasterarbeiten.",
    image: images.projects.pflaster,
    href: "/projekte#pflaster-aussenanlage",
  },
  {
    id: "lichtmast-fundament",
    title: "Sonderfundament für Lichtmast",
    category: "Spezialprojekte",
    filterCategories: ["Spezialprojekte", "Betonarbeiten"],
    description:
      "Individuell dimensionierte Fundamentlösung für eine technische Außenanlage.",
    image: images.projects.lichtmast,
    href: "/projekte#lichtmast-fundament",
  },
  {
    id: "hebebuehne-fundament",
    title: "Betonfundament für Hebebühne",
    category: "Betonarbeiten",
    filterCategories: ["Betonarbeiten", "Spezialprojekte"],
    description:
      "Vorbereitung und Herstellung eines belastbaren Fundaments nach technischen Vorgaben.",
    image: images.projects.hebebuehne,
    href: "/projekte#hebebuehne-fundament",
  },
];
