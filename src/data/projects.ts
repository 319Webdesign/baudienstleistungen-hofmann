import { images, type ImageAsset } from "./images";
import type { FAQItem } from "./faqs";

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

export type ProjectWorkIcon =
  | "shovel"
  | "layers"
  | "grid"
  | "brick"
  | "hammer"
  | "building"
  | "settings"
  | "check"
  | "ruler";

export type ProjectMeta = {
  location: string;
  completion?: string;
  duration?: string;
  service: string;
  client?: string;
  size?: string;
};

export type ProjectWorkItem = {
  title: string;
  description: string;
  icon: ProjectWorkIcon;
};

export type ProjectProcessStep = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  slug: ProjectSlug;
  title: string;
  folder: string;
  coverFile?: string;
  category: ProjectCategory;
  filterCategories: ProjectFilter[];
  description: string;
  longDescription: string;
  image: ImageAsset;
  href: string;
  meta: ProjectMeta;
  challenge: string;
  challengePoints: string[];
  works: ProjectWorkItem[];
  process: ProjectProcessStep[];
  result: string;
  resultHighlights: string[];
  quote?: string;
  faqs: FAQItem[];
};

export const projectFilters: ProjectFilter[] = [
  "Alle",
  "Rohbau",
  "Betonarbeiten",
  "Umbau & Sanierung",
  "Außenanlagen",
  "Spezialprojekte",
];

const defaultProcess: ProjectProcessStep[] = [
  {
    title: "Planung",
    description:
      "Anforderungen, Unterlagen und örtliche Gegebenheiten werden geprüft und der Leistungsumfang klar definiert.",
  },
  {
    title: "Vorbereitung",
    description:
      "Baustelle, Material und Arbeitsabläufe werden vorbereitet, damit die Ausführung reibungslos starten kann.",
  },
  {
    title: "Ausführung",
    description:
      "Die Arbeiten werden fachgerecht, sauber und nach den vereinbarten Vorgaben umgesetzt.",
  },
  {
    title: "Fertigstellung",
    description:
      "Nach Abschluss erfolgt die Kontrolle und Übergabe – transparent und nachvollziehbar.",
  },
];

const defaultTrustFaqs = (
  locationHint: string,
  serviceHint: string,
): FAQItem[] => [
  {
    id: "dauer",
    question: `Wie lange dauert ein solches ${serviceHint}-Projekt?`,
    answer:
      "Die Bauzeit hängt von Umfang, Zugänglichkeit und technischen Vorgaben ab. Nach der ersten Einschätzung erhalten Sie eine realistische Zeiteinschätzung.",
  },
  {
    id: "privat",
    question: "Arbeiten Sie auch für Privatkunden?",
    answer:
      "Ja. Baudienstleistungen Hofmann übernimmt Bauleistungen für Privatkunden ebenso wie für gewerbliche und öffentliche Auftraggeber.",
  },
  {
    id: "gebiet",
    question: "In welchem Umkreis sind Sie tätig?",
    answer: `Projektanfragen aus ${locationHint} und dem näheren Umfeld können individuell geprüft werden. Das genaue Einsatzgebiet wird in der Anfrage abgestimmt.`,
  },
  {
    id: "leistungen",
    question: "Welche Leistungen übernehmen Sie?",
    answer:
      "Der Schwerpunkt liegt auf Mobilfunkfundamenten, Rohbau- und Betonarbeiten, Umbau, Sanierung, Erdarbeiten, Außenanlagen sowie technisch anspruchsvollen Sonderprojekten.",
  },
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
      "Beim Projekt Abel Lippstadt wurden belastbare Fundamente für technische Anlagen hergestellt. Die Arbeiten umfassten Aushub, Schalung, Bewehrung und Betonage – präzise ausgeführt und auf die statischen Anforderungen der Anlage abgestimmt. Besonders wichtig waren Maßgenauigkeit, Tragfähigkeit und eine saubere Übergabe an die nachfolgenden Gewerke.",
    image: {
      src: "/projekte/Projekt_Abel_Lippstadt/IMG_0284web.webp",
      alt: "Projekt Abel Lippstadt – Betonfundament für technische Anlage",
    },
    href: "/projekte/abel-lippstadt",
    meta: {
      location: "Lippstadt",
      completion: "Abgeschlossen",
      duration: "nach Projektumfang",
      service: "Mobilfunkfundamente",
      client: "Technische Anlage",
    },
    challenge:
      "Für die technische Anlage war ein belastbares Fundament erforderlich, das den Vorgaben der Planung entspricht und sich sauber in die vorhandene Situation vor Ort einfügt. Zugänglichkeit, Untergrund und technische Anschlüsse mussten dabei berücksichtigt werden.",
    challengePoints: [
      "Technische Vorgaben und Tragfähigkeit",
      "Präzise Schalung und Bewehrung",
      "Saubere Schnittstelle zu Folgearbeiten",
    ],
    works: [
      {
        title: "Erdarbeiten",
        description: "Aushub und Vorbereitung des Fundamentbereichs.",
        icon: "shovel",
      },
      {
        title: "Schalungsarbeiten",
        description: "Passgenaue Schalung für die Fundamentgeometrie.",
        icon: "layers",
      },
      {
        title: "Bewehrung",
        description: "Fachgerechte Bewehrung nach den technischen Vorgaben.",
        icon: "grid",
      },
      {
        title: "Betonage",
        description: "Saubere Betonage und Nachbehandlung des Fundaments.",
        icon: "brick",
      },
    ],
    process: defaultProcess,
    result:
      "Das Fundament wurde belastbar, maßgenau und einsatzbereit hergestellt. Die Anlage konnte auf einer tragfähigen Basis weitergeführt werden – mit klaren Linien und einer professionellen Ausführung.",
    resultHighlights: [
      "Maßgenaue Fundamentgeometrie",
      "Belastbare Ausführung",
      "Saubere Baustellenübergabe",
    ],
    quote:
      "Technische Fundamente brauchen Präzision – nicht nur Kraft. Genau darauf kommt es bei Sonderfundamenten an.",
    faqs: defaultTrustFaqs("Lippstadt und Umgebung", "Fundament"),
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
      "Im Projekt Keisner wurden Umbau- und Sanierungsarbeiten im Bestand umgesetzt. Dazu gehörte der fachgerechte Einbau von Stahlträgern bei Wanddurchbrüchen – sorgfältig vorbereitet und nach den vorliegenden statischen Vorgaben ausgeführt. Arbeiten im Bestand erfordern besondere Sorgfalt, klare Abstützung und eine ruhige, sichere Umsetzung.",
    image: {
      src: "/projekte/Projekt_Keisner/IMG_0065_ergebnis.webp",
      alt: "Projekt Keisner – Umbau und Sanierung",
    },
    href: "/projekte/keisner",
    meta: {
      location: "Region",
      completion: "Abgeschlossen",
      duration: "nach Statik und Umfang",
      service: "Umbau & Sanierung",
    },
    challenge:
      "Im Bestand mussten Wanddurchbrüche und tragende Eingriffe so vorbereitet werden, dass die Konstruktion während der Arbeiten sicher bleibt. Statische Vorgaben, Abstützung und präziser Stahlträgereinbau waren zentrale Anforderungen.",
    challengePoints: [
      "Arbeiten im bestehenden Gebäude",
      "Sicherer Wanddurchbruch mit Abstützung",
      "Stahlträgereinbau nach Statik",
    ],
    works: [
      {
        title: "Abstützung",
        description: "Vorbereitende Sicherung der Konstruktion im Bestand.",
        icon: "check",
      },
      {
        title: "Wanddurchbruch",
        description: "Kontrollierter Eingriff in bestehende Wände.",
        icon: "hammer",
      },
      {
        title: "Stahlträgereinbau",
        description: "Fachgerechter Einbau der tragenden Stahlkonstruktion.",
        icon: "building",
      },
      {
        title: "Sanierung",
        description: "Saubere Nacharbeiten und Übergabe im Bestand.",
        icon: "settings",
      },
    ],
    process: defaultProcess,
    result:
      "Der Umbau konnte sicher und fachgerecht umgesetzt werden. Die Stahlträger sitzen nach Vorgabe, der Durchbruch ist sauber ausgeführt und das Projekt bereit für die weiteren Ausbauschritte.",
    resultHighlights: [
      "Sichere Umsetzung im Bestand",
      "Tragende Konstruktion nach Statik",
      "Saubere handwerkliche Ausführung",
    ],
    quote:
      "Im Bestand zählt nicht Tempo um jeden Preis – sondern Kontrolle, Erfahrung und eine klare Reihenfolge.",
    faqs: defaultTrustFaqs("der Region", "Umbau"),
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
      "Beim Projekt Abel Rüsselsheim standen Rohbau- und Fundamentarbeiten im Fokus. Von der Vorbereitung bis zur fertigen Ausführung wurde das Vorhaben solide geplant und sauber umgesetzt – passgenau für die technischen Anforderungen vor Ort und mit Blick auf eine belastbare, dauerhafte Lösung.",
    image: {
      src: "/projekte/Projekt_Abel_Rüsselsheim/IMG_1695web.webp",
      alt: "Projekt Abel Rüsselsheim – Rohbau",
    },
    href: "/projekte/abel-ruesselsheim",
    meta: {
      location: "Rüsselsheim",
      completion: "Abgeschlossen",
      duration: "nach Projektumfang",
      service: "Rohbau & Fundamente",
    },
    challenge:
      "Das Vorhaben erforderte eine solide Fundament- und Rohbauausführung unter technischen Vorgaben. Entscheidend waren eine saubere Vorbereitung, präzise Betonarbeiten und eine durchgängige Qualitätskontrolle.",
    challengePoints: [
      "Technische Anforderungen vor Ort",
      "Solide Fundamentierung",
      "Saubere Rohbauausführung",
    ],
    works: [
      {
        title: "Erdarbeiten",
        description: "Vorbereitung und Aushub für die Fundamentarbeiten.",
        icon: "shovel",
      },
      {
        title: "Fundament",
        description: "Herstellung der tragenden Fundamentlösung.",
        icon: "layers",
      },
      {
        title: "Bewehrung & Beton",
        description: "Fachgerechte Bewehrung und Betonage.",
        icon: "grid",
      },
      {
        title: "Rohbau",
        description: "Weiterführende Rohbauarbeiten bis zum geplanten Stand.",
        icon: "brick",
      },
    ],
    process: defaultProcess,
    result:
      "Das Projekt wurde solide und sauber abgeschlossen. Fundament und Rohbau bilden eine belastbare Grundlage für die weiteren technischen und baulichen Schritte.",
    resultHighlights: [
      "Solide Fundamentierung",
      "Saubere Rohbauqualität",
      "Klarer Projektabschluss",
    ],
    faqs: defaultTrustFaqs("Rüsselsheim und Umgebung", "Rohbau"),
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
      "Im Projekt Breuninger wurde ein passgenaues Betonfundament nach den technischen Anforderungen einer geplanten Hebebühne hergestellt. Maßgenauigkeit, Tragfähigkeit und eine saubere Ausführung standen dabei im Mittelpunkt – damit die Anlage später sicher und passgenau montiert werden kann.",
    image: {
      src: images.projects.hebebuehne.src,
      alt: "Projekt Breuninger – Betonfundament für eine Hebebühne",
    },
    href: "/projekte/breuninger",
    meta: {
      location: "nach Absprache",
      completion: "Abgeschlossen",
      duration: "nach technischen Vorgaben",
      service: "Betonfundament",
    },
    challenge:
      "Für die Hebebühne war ein Fundament mit hoher Maßgenauigkeit erforderlich. Abweichungen hätten die Montage erschwert – deshalb standen Planungstreue und präzise Betonarbeiten im Vordergrund.",
    challengePoints: [
      "Hohe Maßgenauigkeit",
      "Technische Vorgaben der Anlage",
      "Belastbare Betonausführung",
    ],
    works: [
      {
        title: "Vorbereitung",
        description: "Einmessen und Vorbereiten des Fundamentbereichs.",
        icon: "ruler",
      },
      {
        title: "Schalung",
        description: "Passgenaue Schalung für die Fundamentform.",
        icon: "layers",
      },
      {
        title: "Bewehrung",
        description: "Bewehrung nach den technischen Anforderungen.",
        icon: "grid",
      },
      {
        title: "Betonage",
        description: "Herstellung des belastbaren Betonfundaments.",
        icon: "brick",
      },
    ],
    process: defaultProcess,
    result:
      "Das Fundament wurde passgenau und belastbar hergestellt. Die Voraussetzungen für die Montage der Hebebühne sind damit fachgerecht geschaffen.",
    resultHighlights: [
      "Passgenaue Ausführung",
      "Technisch abgestimmtes Fundament",
      "Saubere Betonqualität",
    ],
    faqs: defaultTrustFaqs("der Region", "Betonfundament"),
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
      "Beim Projekt Schräder - Geßner wurde eine individuelle Fundamentlösung für einen Lichtmast umgesetzt. Vorbereitung, Bewehrung und Betonage erfolgten fachgerecht und abgestimmt auf die technischen Vorgaben – damit der Mast sicher und dauerhaft steht.",
    image: {
      src: "/projekte/Projekt_Schräder_Geßner/IMG_8713web.webp",
      alt: "Projekt Schräder - Geßner – Fundament für einen Lichtmast",
    },
    href: "/projekte/schraeder-gessner",
    meta: {
      location: "nach Absprache",
      completion: "Abgeschlossen",
      duration: "kurzfristig umsetzbar",
      service: "Sonderfundament",
    },
    challenge:
      "Lichtmastfundamente brauchen eine individuelle Dimensionierung und eine saubere Ausführung. Die Herausforderung lag darin, technische Vorgaben präzise umzusetzen und das Fundament belastbar herzustellen.",
    challengePoints: [
      "Individuelle Fundamentdimensionierung",
      "Technische Vorgaben des Mastes",
      "Sichere, dauerhafte Ausführung",
    ],
    works: [
      {
        title: "Vorbereitung",
        description: "Aushub und Vorbereitung des Fundamentpunktes.",
        icon: "shovel",
      },
      {
        title: "Schalung & Bewehrung",
        description: "Passgenaue Vorbereitung der Konstruktion.",
        icon: "grid",
      },
      {
        title: "Betonage",
        description: "Fachgerechte Herstellung des Fundaments.",
        icon: "brick",
      },
      {
        title: "Sonderlösung",
        description: "Umsetzung nach individueller technischer Planung.",
        icon: "settings",
      },
    ],
    process: defaultProcess,
    result:
      "Das Sonderfundament wurde fachgerecht hergestellt und bildet eine stabile Basis für den Lichtmast – präzise, belastbar und sauber ausgeführt.",
    resultHighlights: [
      "Individuelle Sonderlösung",
      "Stabile Fundamentbasis",
      "Saubere Ausführung",
    ],
    faqs: defaultTrustFaqs("der Region", "Sonderfundament"),
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
      "Im Projekt Zoga Bau wurden Außenflächen gestaltet und befestigt. Dazu gehörten passender Unterbau, Pflasterarbeiten und eine saubere Ausführung – funktional und abgestimmt auf das Grundstück. Eine gute Außenanlage braucht den richtigen Aufbau, damit sie dauerhaft belastbar und optisch überzeugend bleibt.",
    image: {
      src: images.projects.pflaster.src,
      alt: "Projekt Zoga Bau – Garten- und Pflasterarbeiten",
    },
    href: "/projekte/zoga-bau",
    meta: {
      location: "nach Absprache",
      completion: "Abgeschlossen",
      duration: "nach Flächenumfang",
      service: "Außenanlagen",
    },
    challenge:
      "Außenflächen müssen nicht nur gut aussehen, sondern auch langfristig tragfähig sein. Unterbau, Entwässerung und Pflasterung mussten sauber aufeinander abgestimmt werden.",
    challengePoints: [
      "Tragfähiger Unterbau",
      "Saubere Pflasterarbeiten",
      "Funktionale Flächengestaltung",
    ],
    works: [
      {
        title: "Unterbau",
        description: "Tragfähiger Aufbau für dauerhaft stabile Flächen.",
        icon: "layers",
      },
      {
        title: "Erdarbeiten",
        description: "Vorbereitung und Modellierung der Außenflächen.",
        icon: "shovel",
      },
      {
        title: "Pflasterarbeiten",
        description: "Fachgerechte Verlegung und saubere Fugenbilder.",
        icon: "brick",
      },
      {
        title: "Abschluss",
        description: "Feinschliff und Übergabe der fertigen Flächen.",
        icon: "check",
      },
    ],
    process: defaultProcess,
    result:
      "Die Außenflächen wurden funktional und sauber hergestellt. Unterbau und Pflasterung bilden eine belastbare, gepflegte Lösung für die Nutzung vor Ort.",
    resultHighlights: [
      "Stabiler Unterbau",
      "Saubere Pflasteroptik",
      "Dauerhaft nutzbare Flächen",
    ],
    faqs: defaultTrustFaqs("der Region", "Außenanlagen"),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return projects.filter((p) => p.slug !== slug).slice(0, limit);

  const scored = projects
    .filter((project) => project.slug !== slug)
    .map((project) => {
      const overlap = project.filterCategories.filter((cat) =>
        current.filterCategories.includes(cat),
      ).length;
      const sameCategory = project.category === current.category ? 2 : 0;
      return { project, score: overlap + sameCategory };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.project);
}
