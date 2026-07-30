import type { LucideIcon } from "lucide-react";
import { Building2, Hammer, Shovel, DraftingCompass } from "lucide-react";
import { images } from "./images";

export type ServiceSlug =
  | "rohbau-betonarbeiten"
  | "umbau-sanierung"
  | "erdarbeiten-aussenanlagen"
  | "spezialprojekte";

export type Service = {
  id: ServiceSlug;
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  items: string[];
  icon: LucideIcon;
  image: { src: string; alt: string };
  href: string;
};

export const services: Service[] = [
  {
    id: "rohbau-betonarbeiten",
    slug: "rohbau-betonarbeiten",
    title: "Rohbau & Betonarbeiten",
    shortTitle: "Rohbau & Beton",
    description:
      "Solide Grundlagen für langlebige Bauwerke – von klassischen Mauerarbeiten bis zu individuellen Beton- und Fundamentlösungen.",
    longDescription:
      "Rohbau und Betonarbeiten bilden das tragende Gerüst jedes Bauwerks. Baudienstleistungen Hofmann übernimmt Mauerarbeiten, Fundamentierung, Schalung, Bewehrung und Betonage – fachgerecht geplant und sauber ausgeführt. Ob Neubau, Anbau, Keller oder Stützwand: Die Ausführung orientiert sich an den technischen Anforderungen und den Gegebenheiten vor Ort.",
    items: [
      "Rohbauarbeiten",
      "Mauerarbeiten",
      "Bodenplatten",
      "Streifen- und Punktfundamente",
      "Schalungsarbeiten",
      "Bewehrungsarbeiten",
      "Betonage",
      "Keller und Anbauten",
      "Stützwände",
      "Garagen und Nebengebäude",
    ],
    icon: Building2,
    image: images.services.rohbau,
    href: "/leistungen/rohbau-betonarbeiten",
  },
  {
    id: "umbau-sanierung",
    slug: "umbau-sanierung",
    title: "Umbau & Sanierung",
    shortTitle: "Umbau & Sanierung",
    description:
      "Bestehende Gebäude neu denken, Räume verändern und tragfähige Lösungen fachgerecht umsetzen.",
    longDescription:
      "Umbauten und Sanierungen erfordern Erfahrung im Bestand und ein klares Verständnis für tragende Konstruktionen. Von Wanddurchbrüchen und Stahlträgereinbauten bis zu Unterfangungen und Kernsanierungen: Die Arbeiten werden sorgfältig vorbereitet und in Abstimmung mit vorhandenen Planungsunterlagen bzw. Statikern umgesetzt.",
    items: [
      "Wanddurchbrüche",
      "Stahlträgereinbau",
      "Abbrucharbeiten",
      "Unterfangungen",
      "Deckenöffnungen",
      "tragende Konstruktionen",
      "Sanierungsarbeiten",
      "Kernsanierung",
      "Zusammenarbeit mit Statikern",
    ],
    icon: Hammer,
    image: images.services.umbau,
    href: "/leistungen/umbau-sanierung",
  },
  {
    id: "erdarbeiten-aussenanlagen",
    slug: "erdarbeiten-aussenanlagen",
    title: "Erdarbeiten & Außenanlagen",
    shortTitle: "Erdarbeiten & Außen",
    description:
      "Vom ersten Aushub bis zur fertig gestalteten Außenfläche – funktional, sauber und passend zum Grundstück.",
    longDescription:
      "Erdarbeiten und Außenanlagen schaffen die Voraussetzung für stabile Bauwerke und nutzbare Flächen. Dazu gehören Aushub, Geländemodellierung, Unterbau, Entwässerung sowie Pflasterarbeiten für Einfahrten, Terrassen und Wege – abgestimmt auf Nutzung und Grundstück.",
    items: [
      "Baggerarbeiten",
      "Erdarbeiten",
      "Aushub",
      "Geländemodellierung",
      "Pflasterarbeiten",
      "Einfahrten",
      "Terrassen",
      "Wege",
      "Entwässerung",
      "Zaun- und Außenanlagen",
    ],
    icon: Shovel,
    image: images.services.erdarbeiten,
    href: "/leistungen/erdarbeiten-aussenanlagen",
  },
  {
    id: "spezialprojekte",
    slug: "spezialprojekte",
    title: "Spezial- & Sonderprojekte",
    shortTitle: "Spezialprojekte",
    description:
      "Individuelle Bauaufgaben, die technisches Verständnis, Erfahrung und flexible Lösungen erfordern.",
    longDescription:
      "Sonderprojekte verlangen individuelle Fundament- und Konstruktionslösungen – von technischen Anlagenfundamenten bis zu maßgeschneiderten Betonbauteilen. Baudienstleistungen Hofmann verbindet handwerkliche Ausführung mit bautechnischem Verständnis und koordinierter Umsetzung nach Planung.",
    items: [
      "Sonderfundamente",
      "Mobilfunkfundamente",
      "Lichtmastfundamente",
      "Maschinenfundamente",
      "Hebebühnenfundamente",
      "Stahlkonstruktionen",
      "individuelle Betonbauteile",
      "technische Beratung",
      "Baukoordination",
      "Sonderlösungen nach Planung",
    ],
    icon: DraftingCompass,
    image: images.services.spezial,
    href: "/leistungen/spezialprojekte",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
