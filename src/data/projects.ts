import { images, type ImageAsset } from "./images";
import type { FAQItem } from "./faqs";

export type ProjectCategory =
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Umbau & Abrissarbeiten"
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
  /** Zwei Bilder für die Mittel-Sektion nach den Leistungen */
  midFiles?: [string, string];
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
    title: "Mobilfunkstandort Lippstadt",
    folder: "Projekt_Abel_Lippstadt",
    coverFile: "IMG_0284web.webp",
    category: "Mobilfunkfundamente",
    filterCategories: ["Spezialprojekte", "Betonarbeiten", "Außenanlagen"],
    description: "Belastbares Mobilfunkfundament mit Außenanlagen",
    longDescription:
      "Für den Neubau eines Mobilfunkstandortes in Lippstadt wurde durch Baudienstleistungen Hofmann das komplette Fundament einschließlich vorbereitender Erdarbeiten sowie der zugehörigen Infrastruktur hergestellt. Neben dem tragfähigen Stahlbetonfundament wurden die Leerrohre für die spätere Versorgung der Mobilfunkanlage verlegt, die Zuwegung hergestellt und ergänzende Außenanlagen fachgerecht ausgeführt.",
    image: {
      src: "/projekte/Projekt_Abel_Lippstadt/IMG_0284web.webp",
      alt: "Mobilfunkstandort Lippstadt – Stahlbetonfundament mit Außenanlagen",
    },
    href: "/projekte/abel-lippstadt",
    meta: {
      location: "Lippstadt",
      completion: "Abgeschlossen",
      service: "Spezialfundament / Mobilfunkinfrastruktur",
    },
    challenge:
      "Mobilfunkfundamente stellen hohe Anforderungen an Maßgenauigkeit und Ausführung. Bereits kleinste Abweichungen können sich auf die spätere Montage des Funkmastes auswirken. Zusätzlich mussten sämtliche Einbauteile, Leerrohre und Anschlusspunkte exakt nach den Vorgaben des Auftraggebers positioniert werden. Auch die spätere Erreichbarkeit der Zentralen Anschlusssäule (ZAS) sowie des Schlüsseltresors war bereits in der Bauphase zu berücksichtigen.",
    challengePoints: [
      "Hohe Maßgenauigkeit für die spätere Mastmontage",
      "Exakte Positionierung von Einbauteilen, Leerrohren und Anschlusspunkten",
      "Erreichbarkeit von ZAS und Schlüsseltresor bereits in der Bauphase",
    ],
    works: [
      {
        title: "Vermessung & Erdarbeiten",
        description:
          "Vermessung und Vorbereitung des Baufeldes, fachgerechter Erdaushub sowie Herstellung der Sauberkeitsschicht.",
        icon: "ruler",
      },
      {
        title: "Schalung & Bewehrung",
        description:
          "Schalungsarbeiten und Verlegen der Bewehrung nach Ausführungsplan.",
        icon: "layers",
      },
      {
        title: "Leerrohre & Betonage",
        description:
          "Verlegung der Leerrohre zur Zentralen Anschlusssäule (ZAS) und Betonage des Stahlbetonfundamentes.",
        icon: "brick",
      },
      {
        title: "Außenanlagen & Schlüsseltresor",
        description:
          "Pflaster- und Gehwegflächen mit Betonplatten 50 × 50 cm, Setzen und Einbetonieren des Schlüsseltresors sowie saubere Wiederherstellung der Außenanlage.",
        icon: "check",
      },
    ],
    process: [
      {
        title: "Schalung & Bewehrung",
        description:
          "Nach dem Aushub wurde zunächst die Schalung erstellt und die Bewehrung exakt nach den technischen Vorgaben eingebaut.",
      },
      {
        title: "Leerrohrverlegung",
        description:
          "Anschließend erfolgte die Verlegung der erforderlichen Leerrohre zur späteren Anbindung der Zentralen Anschlusssäule.",
      },
      {
        title: "Betonage & Zuwegung",
        description:
          "Nach erfolgreicher Betonage und Erhärtung des Fundamentes wurden die Gehwegplatten im Format 50 × 50 cm verlegt und die Zugänge zur Anlage hergestellt.",
      },
      {
        title: "Abschluss",
        description:
          "Abschließend wurde der Schlüsseltresor fachgerecht am Stabgitterzaun einbetoniert und die Außenanlage sauber fertiggestellt.",
      },
    ],
    result:
      "Das Ergebnis ist ein präzise ausgeführtes Mobilfunkfundament, das sämtliche Anforderungen an Tragfähigkeit, Maßhaltigkeit und Dauerhaftigkeit erfüllt und die Grundlage für die spätere Montage der Mobilfunktechnik bildet.",
    resultHighlights: [
      "Präzisionsfundament mit kompletter Infrastruktur",
      "Tragfähigkeit, Maßhaltigkeit und Dauerhaftigkeit",
      "Grundlage für die Montage der Mobilfunktechnik",
    ],
    quote:
      "Bei Mobilfunkfundamenten zählt Maßgenauigkeit – bereits kleinste Abweichungen können sich auf die spätere Mastmontage auswirken.",
    faqs: defaultTrustFaqs("Lippstadt und Umgebung", "Mobilfunkfundament"),
  },
  {
    id: "keisner",
    slug: "keisner",
    title: "Projekt Keisner",
    folder: "Projekt_Keisner",
    coverFile: "IMG_0065_ergebnis.webp",
    midFiles: ["IMG_0064web.webp", "IMG_3300web.webp"],
    category: "Umbau & Abrissarbeiten",
    filterCategories: ["Umbau & Sanierung", "Außenanlagen"],
    description:
      "Umbau und Abrissarbeiten im Bestand – Stahlträgereinbau nach Statik sowie Abriss der bestehenden Terrasse.",
    longDescription:
      "Im Projekt Keisner wurden Umbau- und Abrissarbeiten im Bestand umgesetzt. Im Fokus standen der fachgerechte Einbau von Stahlträgern nach den vorliegenden statischen Vorgaben sowie der kontrollierte Abriss der bestehenden Terrasse. Arbeiten im Bestand erfordern besondere Sorgfalt: klare Abstützung, sichere Arbeitsabläufe und eine saubere Übergabe an die nachfolgenden Gewerke.",
    image: {
      src: "/projekte/Projekt_Keisner/IMG_0065_ergebnis.webp",
      alt: "Projekt Keisner – Umbau, Stahlträgereinbau und Abrissarbeiten",
    },
    href: "/projekte/keisner",
    meta: {
      location: "Reinheim",
      completion: "Abgeschlossen",
      service: "Umbau und Abriss",
    },
    challenge:
      "Im Bestand mussten tragende Eingriffe und Abrissarbeiten so vorbereitet und ausgeführt werden, dass die Konstruktion während der gesamten Bauphase sicher bleibt. Der Stahlträgereinbau erforderte präzise Abstützung und Maßgenauigkeit nach Statik. Gleichzeitig war der Abriss der Terrasse so zu steuern, dass umliegende Bauteile geschützt bleiben und der Bauschutt geordnet entsorgt werden kann.",
    challengePoints: [
      "Sichere Arbeiten im bestehenden Gebäude",
      "Stahlträgereinbau nach statischen Vorgaben",
      "Kontrollierter Abriss der Terrasse ohne Schäden am Bestand",
    ],
    works: [
      {
        title: "Stahlträgereinbau",
        description:
          "Fachgerechter Einbau der tragenden Stahlträger nach Statik – inklusive Abstützung und präziser Positionierung im Bestand.",
        icon: "building",
      },
      {
        title: "Abriss der Terrasse",
        description:
          "Kontrollierter Rückbau der bestehenden Terrasse inklusive Trennung der Bauteile und geordneter Entsorgung.",
        icon: "hammer",
      },
      {
        title: "Sicherung & Abstützung",
        description:
          "Vorbereitende Sicherung der Konstruktion, damit Umbau und Abriss sicher und kontrolliert ablaufen.",
        icon: "check",
      },
      {
        title: "Saubere Übergabe",
        description:
          "Aufräumen der Arbeitsbereiche und Übergabe an die nachfolgenden Ausbau- und Außenarbeiten.",
        icon: "settings",
      },
    ],
    process: [
      {
        title: "Sicherung",
        description:
          "Zuerst wurde die bestehende Konstruktion abgestützt und die Arbeitsbereiche so vorbereitet, dass Umbau und Abriss sicher starten konnten.",
      },
      {
        title: "Stahlträgereinbau",
        description:
          "Die Stahlträger wurden nach den statischen Vorgaben präzise eingebaut und fachgerecht im Bestand verankert.",
      },
      {
        title: "Terrassenabriss",
        description:
          "Anschließend erfolgte der kontrollierte Abriss der Terrasse – inklusive Trennung der Bauteile und Schutz des umliegenden Bestands.",
      },
      {
        title: "Abschluss",
        description:
          "Zum Abschluss wurden die Arbeitsbereiche geräumt und das Projekt sauber für die weiteren Ausbauschritte übergeben.",
      },
    ],
    result:
      "Umbau und Abrissarbeiten wurden sicher und fachgerecht abgeschlossen. Die Stahlträger sitzen nach Vorgabe, die Terrasse ist zurückgebaut, und die Baustelle ist bereit für die weiteren Ausbau- und Außenarbeiten.",
    resultHighlights: [
      "Stahlträgereinbau nach Statik",
      "Kontrollierter Abriss der Terrasse",
      "Sichere, saubere Umsetzung im Bestand",
    ],
    quote:
      "Im Bestand zählt nicht Tempo um jeden Preis – sondern Kontrolle, Erfahrung und eine klare Reihenfolge.",
    faqs: defaultTrustFaqs("Reinheim und Umgebung", "Umbau- und Abriss"),
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
