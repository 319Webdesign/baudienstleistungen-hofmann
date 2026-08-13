import { images, type ImageAsset } from "./images";
import type { FAQItem } from "./faqs";

export type ProjectCategory =
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Abbruch"
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
  | "Abbruch"
  | "Spezialprojekte";

export type ProjectSlug =
  | "abel-lippstadt"
  | "keisner"
  | "abriss-keisner"
  | "abriss-zoga-bau"
  | "urban-gross-biberau"
  | "merzhof"
  | "merzhof-einzaeunung"
  | "podeste"
  | "diel-georgenhausen"
  | "abel-ruesselsheim"
  | "breuninger"
  | "schraeder-gessner";

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

/** Kundenbewertung zu einem konkreten Projekt – nur setzen, wenn echt vorhanden */
export type ProjectTestimonial = {
  quote: string;
  author: string;
  /** z. B. Bauherr, Architekt, Auftraggeber */
  role?: string;
  /** Optional 1–5 Sterne */
  rating?: 1 | 2 | 3 | 4 | 5;
};

export type Project = {
  id: string;
  slug: ProjectSlug;
  title: string;
  folder: string;
  coverFile?: string;
  /** Zwei Bilder für die Mittel-Sektion nach den Leistungen */
  midFiles?: [string, string];
  /** Bild für die Herausforderung-Sektion */
  challengeFile?: string;
  /** Bild für die Ergebnis-Sektion */
  resultFile?: string;
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
  /**
   * Optional: echte Kundenstimmen nur zu diesem Projekt.
   * Ohne Einträge erscheint die Sektion auf der Projektseite nicht.
   */
  testimonials?: ProjectTestimonial[];
  /** Optionaler Weiter-Link zur nächsten Projektphase */
  nextProject?: {
    href: string;
    label: string;
    description?: string;
  };
  /** Premium-Referenz auf der Projektkarte hervorheben */
  premium?: boolean;
  faqs: FAQItem[];
};

export const projectFilters: ProjectFilter[] = [
  "Alle",
  "Rohbau",
  "Betonarbeiten",
  "Umbau & Sanierung",
  "Außenanlagen",
  "Abbruch",
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
    coverFile: "IMG_2087web.webp",
    midFiles: ["IMG_2075web.webp", "IMG_2084web.webp"],
    category: "Umbau & Sanierung",
    filterCategories: ["Umbau & Sanierung"],
    description:
      "Umbau im Bestand mit fachgerechtem Stahlträgereinbau nach Statik – sicher abgestützt und präzise umgesetzt.",
    longDescription:
      "Im Projekt Keisner stand der Umbau im Bestand im Fokus: tragende Eingriffe wurden nach den vorliegenden statischen Vorgaben vorbereitet und mit einem fachgerechten Stahlträgereinbau umgesetzt. Arbeiten im bestehenden Gebäude erfordern besondere Sorgfalt – klare Abstützung, sichere Arbeitsabläufe und eine saubere Übergabe an die nachfolgenden Gewerke.",
    image: {
      src: "/projekte/Projekt_Keisner/IMG_2087web.webp",
      alt: "Projekt Keisner – Umbau und Stahlträgereinbau im Bestand",
    },
    href: "/projekte/keisner",
    meta: {
      location: "Reinheim",
      completion: "Abgeschlossen",
      duration: "8 Tage",
      service: "Umbau & Sanierung",
    },
    challenge:
      "Im Bestand mussten tragende Eingriffe so vorbereitet und ausgeführt werden, dass die Konstruktion während der gesamten Bauphase sicher bleibt. Der Stahlträgereinbau erforderte präzise Abstützung, Maßgenauigkeit nach Statik und einen klaren Ablauf – ohne Beeinträchtigung der umliegenden Bausubstanz.",
    challengePoints: [
      "Sichere Arbeiten im bestehenden Gebäude",
      "Stahlträgereinbau nach statischen Vorgaben",
      "Präzise Abstützung und Lastabtragung während der Umbauphase",
    ],
    works: [
      {
        title: "Sicherung & Abstützung",
        description:
          "Vorbereitende Sicherung der Konstruktion, damit der Umbau kontrolliert und standsicher ablaufen kann.",
        icon: "check",
      },
      {
        title: "Stahlträgereinbau",
        description:
          "Fachgerechter Einbau der tragenden Stahlträger nach Statik – inklusive präziser Positionierung und Verankerung im Bestand.",
        icon: "building",
      },
      {
        title: "Tragwerksanpassung",
        description:
          "Abstimmung der neuen Stahlkonstruktion auf die bestehenden Lasten und Anschlüsse im Gebäude.",
        icon: "layers",
      },
      {
        title: "Saubere Übergabe",
        description:
          "Kontrolle der Einbauteile, Aufräumen der Arbeitsbereiche und Übergabe an die nachfolgenden Ausbaugewerke.",
        icon: "settings",
      },
    ],
    process: [
      {
        title: "Planung & Sicherung",
        description:
          "Zuerst wurden Statik und Arbeitsablauf geprüft und die bestehende Konstruktion so abgestützt, dass der Umbau sicher starten konnte.",
      },
      {
        title: "Stahlträgereinbau",
        description:
          "Die Stahlträger wurden nach den statischen Vorgaben präzise eingebaut und fachgerecht im Bestand verankert.",
      },
      {
        title: "Ausrichtung & Kontrolle",
        description:
          "Maßhaltigkeit, Lastabtragung und Anschlüsse wurden geprüft – für eine dauerhaft tragfähige Lösung im Bestand.",
      },
      {
        title: "Abschluss",
        description:
          "Zum Abschluss wurden die Arbeitsbereiche geräumt und das Projekt sauber für die weiteren Ausbauschritte übergeben.",
      },
    ],
    result:
      "Der Umbau wurde sicher und fachgerecht abgeschlossen. Die Stahlträger sitzen nach Vorgabe, die Tragfähigkeit im Bestand ist gewährleistet, und die Baustelle ist bereit für die weiteren Ausbauarbeiten.",
    resultHighlights: [
      "Stahlträgereinbau nach Statik",
      "Sichere Abstützung während der Umbauphase",
      "Saubere, übergabefähige Umsetzung im Bestand",
    ],
    quote:
      "Im Bestand zählt nicht Tempo um jeden Preis – sondern Kontrolle, Erfahrung und eine klare Reihenfolge.",
    faqs: defaultTrustFaqs("Reinheim und Umgebung", "Umbau"),
  },
  {
    id: "abriss-keisner",
    slug: "abriss-keisner",
    title: "Abriss Keisner",
    folder: "abriss-kaisler",
    coverFile: "IMG_3300web.webp",
    midFiles: ["IMG_3293web.webp", "IMG_3298web.webp"],
    resultFile: "IMG_3295web.webp",
    category: "Abbruch",
    filterCategories: ["Abbruch"],
    description:
      "Kontrollierter Abriss und Rückbau im Bestand – fachgerecht, sicher und mit sauberer Übergabe der Baustelle.",
    longDescription:
      "Beim Abrissprojekt Keisner lag der Fokus auf dem kontrollierten Rückbau im Bestand. Die Arbeiten umfassten den fachgerechten Abriss bestehender Bauteile, die sichere Trennung von Materialien und den Schutz der umliegenden Konstruktion. Mit klarer Arbeitsreihenfolge, geordneter Entsorgung und einer sauberen Baustellenübergabe wurde die Fläche für die weiteren Bau- und Ausbauschritte freigemacht.",
    image: {
      src: "/projekte/abriss-kaisler/IMG_3300web.webp",
      alt: "Abriss Keisner – kontrollierter Rückbau im Bestand",
    },
    href: "/projekte/abriss-keisner",
    meta: {
      location: "Reinheim",
      completion: "Abgeschlossen",
      duration: "nach Umfang",
      service: "Abbruch & Rückbau",
    },
    challenge:
      "Abrissarbeiten im Bestand verlangen mehr als nur Kraft: Die umliegende Bausubstanz muss geschützt bleiben, tragende und nichttragende Teile müssen klar getrennt werden, und der Bauschutt ist geordnet abzutransportieren. Entscheidend waren eine sichere Arbeitsweise, eine durchdachte Reihenfolge und eine Baustelle, die nach dem Rückbau wieder klar und nutzbar ist.",
    challengePoints: [
      "Kontrollierter Rückbau ohne Schäden am Bestand",
      "Sichere Trennung und Entsorgung der Bauteile",
      "Saubere, übergabefähige Baustelle nach dem Abriss",
    ],
    works: [
      {
        title: "Sicherung & Vorbereitung",
        description:
          "Absicherung der Arbeitsbereiche und Vorbereitung des Rückbaus, damit der Abriss kontrolliert starten kann.",
        icon: "check",
      },
      {
        title: "Kontrollierter Abriss",
        description:
          "Fachgerechter Rückbau der bestehenden Bauteile mit klarer Reihenfolge und Schutz der angrenzenden Konstruktion.",
        icon: "hammer",
      },
      {
        title: "Trennung & Entsorgung",
        description:
          "Sortierung der Materialien und geordneter Abtransport des Bauschutts.",
        icon: "layers",
      },
      {
        title: "Baustellenübergabe",
        description:
          "Aufräumen der Fläche und saubere Übergabe für die nachfolgenden Bauarbeiten.",
        icon: "settings",
      },
    ],
    process: [
      {
        title: "Vorbereitung",
        description:
          "Zuerst wurden die Arbeitsbereiche gesichert und der Abrissumfang vor Ort klar definiert.",
      },
      {
        title: "Rückbau",
        description:
          "Anschließend erfolgte der kontrollierte Abriss der bestehenden Bauteile – Schritt für Schritt und mit Blick auf den Bestand.",
      },
      {
        title: "Entsorgung",
        description:
          "Materialien wurden getrennt, der Bauschutt abtransportiert und die Fläche freigeräumt.",
      },
      {
        title: "Abschluss",
        description:
          "Zum Schluss wurde die Baustelle sauber übergeben – bereit für die nächsten Arbeitsschritte.",
      },
    ],
    result:
      "Der Abriss wurde sicher und kontrolliert abgeschlossen. Die bestehende Bausubstanz blieb geschützt, die Fläche ist freigeräumt und bereit für die weiteren Bau- und Ausbauarbeiten.",
    resultHighlights: [
      "Kontrollierter Rückbau im Bestand",
      "Geordnete Entsorgung",
      "Saubere Übergabe der Baustelle",
    ],
    quote:
      "Guter Abriss erkennt man nicht am Tempo – sondern daran, dass danach klar, sicher und weitergebaut werden kann.",
    faqs: defaultTrustFaqs("Reinheim und Umgebung", "Abbruch"),
  },
  {
    id: "abriss-zoga-bau",
    slug: "abriss-zoga-bau",
    title: "Abbruch Zoga Bau",
    folder: "Projekt_Zoga_Bau",
    coverFile: "IMG_0449web.webp",
    midFiles: ["IMG_0352web.webp", "IMG_0450web.webp"],
    resultFile: "IMG_0466web.webp",
    category: "Abbruch",
    filterCategories: ["Abbruch"],
    description:
      "Vollständiger Rückbau eines Wohnhauses in innerörtlicher Lage – präzise geplant und sicher ausgeführt für den anschließenden Neubau.",
    longDescription:
      "Im Rahmen dieses Projekts wurde ein bestehendes Wohnhaus in innerörtlicher Lage vollständig zurückgebaut. Ziel war es, das Grundstück für einen anschließenden Neubau vorzubereiten. Aufgrund der direkten Grenzbebauung zu zwei Nachbargebäuden und der äußerst beengten Platzverhältnisse erforderte der Abbruch eine präzise Planung sowie eine sorgfältige und sichere Ausführung. Der Rückbau erfolgte zunächst durch eine vollständige Entkernung des Gebäudes. Anschließend wurde das ehemalige Fachwerkhaus gemeinsam mit unserem spezialisierten Abbruchpartner maschinell bis auf die Bodenplatte zurückgebaut. Sämtliche Arbeiten wurden kontrolliert und unter Berücksichtigung der angrenzenden Bebauung durchgeführt.",
    image: {
      src: "/projekte/Projekt_Zoga_Bau/IMG_0449web.webp",
      alt: "Abbruch Zoga Bau – kontrollierter Rückbau eines Wohnhauses",
    },
    href: "/projekte/abriss-zoga-bau",
    meta: {
      location: "Groß-Zimmern",
      completion: "Abgeschlossen",
      service: "Abbruch & Rückbau",
    },
    challenge:
      "Der Rückbau stellte aufgrund der örtlichen Gegebenheiten besondere Anforderungen an Planung und Ausführung. Das Gebäude befand sich mitten im Ortskern und grenzte unmittelbar an bestehende Wohnhäuser. Erschütterungen, Staubentwicklung und die Sicherheit der Nachbargebäude mussten während sämtlicher Arbeiten jederzeit berücksichtigt werden. Zusätzlich bestand das Gebäude aus einer älteren Fachwerkkonstruktion, wodurch zunächst eine kontrollierte Entkernung erfolgen musste, bevor der maschinelle Rückbau beginnen konnte.",
    challengePoints: [
      "Innerörtliche Baustelle mit sehr engen Platzverhältnissen",
      "Grenzbebauung auf zwei Gebäudeseiten",
      "Fachgerechte Entkernung vor dem Abbruch",
      "Schutz der Nachbarbebauung",
      "Kontrollierter maschineller Rückbau",
    ],
    works: [
      {
        title: "Entkernung",
        description:
          "Rückbau sämtlicher nichttragender Bauteile sowie Vorbereitung des Gebäudes für den maschinellen Abbruch.",
        icon: "settings",
      },
      {
        title: "Abbrucharbeiten",
        description:
          "Kontrollierter Rückbau des Wohnhauses mit Longfront-Bagger und Abbruchzange.",
        icon: "hammer",
      },
      {
        title: "Baustellenlogistik",
        description:
          "Organisation der engen Baustelle inklusive Maschinenkoordination, Materialtrennung und Abtransport.",
        icon: "layers",
      },
      {
        title: "Entsorgung",
        description:
          "Sortenreine Trennung und fachgerechte Entsorgung der anfallenden Baustoffe.",
        icon: "shovel",
      },
      {
        title: "Vorbereitung Neubau",
        description:
          "Herstellung eines sauberen und tragfähigen Baufeldes für die anschließenden Rohbauarbeiten.",
        icon: "building",
      },
    ],
    process: [
      {
        title: "Planung",
        description:
          "Bestandsaufnahme, Abstimmung mit Bauherrschaft und Nachunternehmern sowie Erstellung des Rückbaukonzeptes unter Berücksichtigung der angrenzenden Gebäude.",
      },
      {
        title: "Entkernung",
        description:
          "Das Gebäude wurde vollständig entkernt. Wertstoffe und verschiedene Baustoffe wurden getrennt und für die Entsorgung vorbereitet.",
      },
      {
        title: "Kontrollierter Rückbau",
        description:
          "Nach der Entkernung erfolgte der maschinelle Abbruch des Fachwerkhauses mittels Longfront-Bagger. Aufgrund der engen Ortslage wurde abschnittsweise und besonders schonend gearbeitet.",
      },
      {
        title: "Fertigstellung",
        description:
          "Nach Abschluss der Rückbauarbeiten wurden sämtliche Abbruchmaterialien entfernt und das Grundstück als sauberes Baufeld für den anschließenden Neubau übergeben.",
      },
    ],
    result:
      "Durch den kontrollierten Rückbau konnte das Bestandsgebäude sicher und vollständig entfernt werden, ohne die angrenzende Bebauung zu beeinträchtigen. Das Grundstück stand anschließend vollständig für den Neubau zur Verfügung.",
    resultHighlights: [
      "Sicherer Rückbau trotz Grenzbebauung",
      "Fachgerechte Entkernung und Materialtrennung",
      "Präziser maschineller Abbruch",
      "Baufeld vollständig vorbereitet",
    ],
    testimonials: [
      {
        quote:
          "Wir sind äußerst zufrieden mit der Arbeit von Hofmann beim Abbruch und Rohbau unseres Projekts. Der Abbruch wurde präzise und sauber durchgeführt, während der Rohbau pünktlich und in erstklassiger Qualität abgeliefert wurde. Die Kommunikation war durchweg professionell und reibungslos, was die Zusammenarbeit sehr angenehm gemacht hat. Hofmann hat uns mit seiner exzellenten Vorbereitung und der hohen Ausführungsqualität überzeugt. Wer einen zuverlässigen Partner für Abbruch und Rohbau sucht, ist bei Hofmann genau richtig!",
        author: "Arijanit Zogjani",
        role: "Google-Bewertung",
        rating: 5,
      },
    ],
    quote:
      "Bei innerörtlichem Abbruch zählt nicht die Kraft der Maschine – sondern die Präzision der Planung.",
    faqs: defaultTrustFaqs("Groß-Zimmern und Umgebung", "Abbruch"),
  },
  {
    id: "urban-gross-biberau",
    slug: "urban-gross-biberau",
    title: "Projekt Urban Groß-Bieberau",
    folder: "Urban",
    coverFile: "2efb34d2-9f03-4356-a643-1f737fd931caweb.webp",
    midFiles: ["IMG_1333web.webp", "IMG_8670web.webp"],
    resultFile: "IMG_1487web.webp",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Hochwertige Gartengestaltung mit Muschelkalkmauern, Geoceramica-Terrasse, Pflasterflächen und Edelstahlseilzaun.",
    longDescription:
      "In Groß-Bieberau entstand für das Projekt Urban eine durchgängig geplante Außenanlage aus Naturstein, hochwertigen Belägen und präziser Detailarbeit. Muschelkalkmauern setzen klare Linien, die Terrasse wurde mit Geoceramica-Verbundplatten auf Drainbeton ausgeführt, und ergänzende Pflasterflächen, Wegeinfassungen, Eingangstreppen sowie ein Edelstahlseilzaun runden das Gesamtbild ab. Vom Aushub mit 9-Tonnen-Bagger bis zum verlegten Rollrasen: alles aus einer Hand – belastbar, sauber und mit Anspruch an Material und Handwerk.",
    image: {
      src: "/projekte/Urban/2efb34d2-9f03-4356-a643-1f737fd931caweb.webp",
      alt: "Projekt Urban Groß-Bieberau – Gartenanlage mit Naturstein und Terrasse",
    },
    href: "/projekte/urban-gross-biberau",
    meta: {
      location: "Groß-Bieberau",
      completion: "Abgeschlossen",
      duration: "nach Flächenumfang",
      service: "Außenanlagen & Steinarbeiten",
    },
    challenge:
      "Eine Außenanlage dieser Art lebt von der Verbindung aus Optik und Technik. Muschelkalk und Naturstein verlangen präzise Steinarbeit, die Geoceramica-Terrasse braucht einen fachgerechten Aufbau mit Drainbeton, und Pflaster, Wegeinfassungen sowie Treppen müssen maßgenau in die Grundstücksgeometrie passen. Gleichzeitig war der Aushub mit einem 9-Tonnen-Bagger so zu führen, dass die späteren Schichten und Anschlüsse sauber aufeinander aufbauen.",
    challengePoints: [
      "Präzise Steinarbeiten in Muschelkalk und Naturstein",
      "Hochwertiger Terrassenaufbau mit Geoceramica und Drainbeton",
      "Saubere Koordination von Aushub, Pflaster, Treppen und Zaun",
    ],
    works: [
      {
        title: "Erdarbeiten & Aushub",
        description:
          "Fachgerechter Aushub und Modellierung der Flächen – mit 9-Tonnen-Bagger für effiziente und kontrollierte Bodenbewegung.",
        icon: "shovel",
      },
      {
        title: "Steinarbeiten & Muschelkalk",
        description:
          "Herstellung der Muschelkalkmauern und Natursteinarbeiten mit klaren Fugenbildern und dauerhafter Standfestigkeit.",
        icon: "layers",
      },
      {
        title: "Geoceramica-Terrasse",
        description:
          "Verlegung der Geoceramica-Verbundplatten (Keramik) auf Drainbeton – extrem hochwertig, drainfähig und belastbar.",
        icon: "grid",
      },
      {
        title: "Pflaster, Treppen & Zaun",
        description:
          "Pflasterarbeiten, Wegeinfassungen, Eingangstreppen, Edelstahlseilzaun und abschließende Verlegung des Rollrasens.",
        icon: "brick",
      },
    ],
    process: [
      {
        title: "Aushub & Vorbereitung",
        description:
          "Zuerst wurden die Flächen mit dem 9-Tonnen-Bagger ausgehoben und für Mauern, Terrasse, Wege und Treppen vorbereitet.",
      },
      {
        title: "Steinarbeiten",
        description:
          "Anschließend entstanden die Muschelkalkmauern und weiteren Natursteinarbeiten – präzise gesetzt und auf die Grundstücksstruktur abgestimmt.",
      },
      {
        title: "Terrasse & Pflaster",
        description:
          "Die Geoceramica-Terrasse wurde auf Drainbeton verlegt, ergänzt durch Pflasterflächen, Wegeinfassungen und die Treppen am Eingang.",
      },
      {
        title: "Zaun & Fertigstellung",
        description:
          "Zum Abschluss folgten der Edelstahlseilzaun, der Rollrasen und der Feinschliff der gesamten Außenanlage.",
      },
    ],
    result:
      "Entstanden ist eine hochwertige Garten- und Außenanlage, die Naturstein, moderne Belagstechnik und saubere Details zu einem stimmigen Ganzen verbindet. Die Geoceramica-Terrasse, die Muschelkalkmauern und die gepflasterten Wege wirken klar, dauerhaft und bereit für die tägliche Nutzung.",
    resultHighlights: [
      "Muschelkalkmauern und präzise Steinarbeiten",
      "Geoceramica-Terrasse auf Drainbeton",
      "Pflaster, Treppen, Edelstahlseilzaun und Rollrasen",
    ],
    testimonials: [
      {
        quote:
          "Jetzt haben wir den Garten komplett fertig gestaltet bekommen. Das Ergebnis spricht für sich. Super Arbeit. Bei Problemen super Kommunikation! Wunderschöne Gestaltungsvorschläge und absolut zuverlässig. Immer wieder!\n\nVon Anfang bis Ende absolut Top. Super zuverlässig, nett und fachkundig. Sie haben bei uns die komplette Terrasse gestaltet und eine Muschelkalkmauer gesetzt. Alles ist super gelaufen, pünktlich geliefert und gefertigt worden. Herr Hofmann liebt seinen Job und dies merkt man. Er hat tolle Ideen und gute Alternativen und dies immer zu guten Preisen. Es wird schnell gearbeitet und alles sauber hinterlassen. Ich kann die Arbeit mit diesem Baudienstleister nur jedem weiterempfehlen.",
        author: "CU",
        role: "Google-Bewertung",
        rating: 5,
      },
    ],
    quote:
      "Gute Außenanlagen erkennt man nicht nur am Material – sondern an der Präzision, mit der Stein, Belag und Grün ineinandergreifen.",
    faqs: defaultTrustFaqs("Groß-Bieberau und Umgebung", "Außenanlagen"),
  },
  {
    id: "merzhof",
    slug: "merzhof",
    title: "Projekt Merzhof",
    folder: "Projekt_Merzhof",
    coverFile: "IMG_8763web.webp",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Rund 200 m² Hoffläche neu hergestellt – belastbar, wasserdurchlässig und mit Rasengittersteinen maschinell verlegt.",
    longDescription:
      "Im Rahmen dieses Projekts wurde eine rund 200 m² große Hoffläche vollständig neu hergestellt. Ziel war die Schaffung einer dauerhaft belastbaren und gleichzeitig wasserdurchlässigen Fläche durch den Einbau hochwertiger Rasengittersteine. Nach umfangreichen Erdarbeiten wurde der Unterbau fachgerecht hergestellt. Anschließend erfolgte die maschinelle Verlegung der Rasengittersteine mit moderner Verlegetechnik. Zum Abschluss wurden sämtliche Kammern mit hochwertigem Vegetationsboden verfüllt und die Fläche für die spätere Begrünung vorbereitet.",
    image: {
      src: "/projekte/Projekt_Merzhof/IMG_8763web.webp",
      alt: "Projekt Merzhof – Hoffläche mit Rasengittersteinen und Vegetationsboden",
    },
    href: "/projekte/merzhof",
    meta: {
      location: "Rodau",
      completion: "Abgeschlossen",
      service: "Pflaster- & Außenanlagenbau",
      size: "rund 200 m²",
    },
    challenge:
      "Vor Beginn der Pflasterarbeiten musste die bestehende Hoffläche vollständig ausgehoben und für den neuen Oberbau vorbereitet werden. Aufgrund der großen Fläche war eine wirtschaftliche und gleichzeitig präzise Ausführung gefragt. Durch den Einsatz moderner Maschinentechnik konnten die Rasengittersteine effizient verlegt und ein gleichmäßiges Verlegebild erzielt werden. Abschließend wurden sämtliche Rasenkammern mit geeignetem Vegetationssubstrat verfüllt, sodass eine dauerhaft belastbare und begrünbare Oberfläche entstand.",
    challengePoints: [
      "Rund 200 m² Hoffläche",
      "Umfangreiche Erdarbeiten im Bestand",
      "Präziser Unterbau nach technischen Anforderungen",
      "Maschinelle Verlegung mit Probst-Verlegezange",
      "Wasserdurchlässige Flächenbefestigung",
    ],
    works: [
      {
        title: "Erdarbeiten",
        description:
          "Aushub der bestehenden Hoffläche sowie Vorbereitung des Planums in Zusammenarbeit mit einem Nachunternehmer.",
        icon: "shovel",
      },
      {
        title: "Unterbau",
        description:
          "Herstellung eines tragfähigen Untergrundes als Grundlage für die spätere Pflasterfläche.",
        icon: "layers",
      },
      {
        title: "Maschinelle Verlegung",
        description:
          "Verlegung der 10 cm starken Rasengittersteine mit einer Probst-Rasengitter-Verlegezange am Bagger für höchste Präzision und Wirtschaftlichkeit.",
        icon: "brick",
      },
      {
        title: "Vegetationsboden",
        description:
          "Fachgerechtes Einbringen hochwertigen Vegetationsbodens in sämtliche Rasenkammern.",
        icon: "grid",
      },
      {
        title: "Fertigstellung",
        description:
          "Kontrolle der Flächen, Nacharbeiten sowie Vorbereitung der Fläche für die spätere Begrünung.",
        icon: "check",
      },
    ],
    process: [
      {
        title: "Planung",
        description:
          "Bestandsaufnahme, Vermessung der Hoffläche sowie Planung der Erd- und Pflasterarbeiten.",
      },
      {
        title: "Erdarbeiten",
        description:
          "Mit einem 14-Tonnen-Bagger wurde die vorhandene Fläche ausgehoben und für den neuen Aufbau vorbereitet.",
      },
      {
        title: "Verlegung",
        description:
          "Die rund 200 m² Rasengittersteine wurden mit einer Probst-Verlegezange maschinell eingebaut. Dadurch konnte eine schnelle, präzise und gleichmäßige Verlegung sichergestellt werden.",
      },
      {
        title: "Fertigstellung",
        description:
          "Nach Abschluss der Pflasterarbeiten wurden sämtliche Rasenkammern mit hochwertigem Vegetationsboden verfüllt. Die Fläche wurde gereinigt und als belastbare sowie dauerhaft versickerungsfähige Hoffläche an den Bauherrn übergeben.",
      },
    ],
    result:
      "Es entstand eine optisch hochwertige und funktionale Hoffläche, die hohe Belastbarkeit mit einer ökologisch sinnvollen Oberflächenbefestigung verbindet. Durch die maschinelle Verlegung konnten höchste Präzision und eine wirtschaftliche Ausführung gewährleistet werden. Die mit Vegetationsboden verfüllten Rasenkammern ermöglichen eine natürliche Begrünung und sorgen gleichzeitig für eine versickerungsfähige Oberfläche.",
    resultHighlights: [
      "Rund 200 m² Rasengittersteine verlegt",
      "Präzise Maschinentechnik mit Probst-Verlegezange",
      "Tragfähiger Unterbau fachgerecht hergestellt",
      "Hochwertiger Vegetationsboden eingebaut",
      "Dauerhaft belastbare und versickerungsfähige Hoffläche",
    ],
    testimonials: [
      {
        quote:
          "Das Team Hoffmann hat geliefert. Sehr zu unsere absoluten Zufriedenheit. Zuverlässig, termintreu, kreativ und Top-Qualität. Auch die Kommunikation war sehr gut, so konnten aktuelle Hindernisse oder Ideen immer schnell gelöst werden.\n\nUnd trotz oftmals recht widrigen Wetterverhältnissen war immer gute Laune an der Baustelle vorherrschend..\n\nVielen Dank.",
        author: "Michael Nick",
        role: "Google-Bewertung",
        rating: 5,
      },
    ],
    quote:
      "Die maschinelle Verlegung mit der Probst-Verlegezange ermöglicht nicht nur eine deutlich höhere Verlegeleistung, sondern sorgt auch für ein exaktes Fugenbild und eine gleichbleibend hohe Ausführungsqualität.",
    nextProject: {
      href: "/projekte/merzhof-einzaeunung",
      label: "Weiter zur Merzhof Einzäunung",
      description:
        "Im nächsten Bauabschnitt entstand rund 350 Meter Zaunanlage aus Lärchen-Schwartebrettern – inklusive Jagdtoren und ergänzender Pflasterarbeiten.",
    },
    faqs: defaultTrustFaqs("Rodau und Umgebung", "Pflaster- und Außenanlagen"),
  },
  {
    id: "merzhof-einzaeunung",
    slug: "merzhof-einzaeunung",
    title: "Projekt Merzhof Einzäunung",
    folder: "Projekt_Merzhof_Einzaeunung",
    coverFile: "IMG_9361web.webp",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Rund 350 Meter Zaunanlage aus Lärchen-Schwartebrettern – inklusive Jagdtoren und ergänzender Rasengitterflächen.",
    longDescription:
      "Nach der erfolgreichen Herstellung der Rasengitterflächen wurde Baudienstleistungen Hofmann mit einem weiteren Bauabschnitt beauftragt. Im Mittelpunkt stand die Einfriedung des weitläufigen Grundstücks durch eine hochwertige Zaunanlage aus Lärchen-Schwartebrettern. Auf einer Gesamtlänge von rund 350 Metern entstand eine robuste und optisch ansprechende Grundstückseinfassung. Ergänzend wurden weitere Rasengittersteine verlegt sowie zwei großformatige Jagdtore eingebaut. Trotz winterlicher Witterung konnten sämtliche Arbeiten termingerecht und in hoher Qualität abgeschlossen werden.",
    image: {
      src: "/projekte/Projekt_Merzhof_Einzaeunung/IMG_9361web.webp",
      alt: "Projekt Merzhof Einzäunung – rund 350 Meter Zaunanlage aus Lärchenholz",
    },
    href: "/projekte/merzhof-einzaeunung",
    meta: {
      location: "Rodau",
      completion: "Abgeschlossen",
      service: "Zaun- & Außenanlagenbau",
      size: "rund 350 m Zaunanlage",
    },
    challenge:
      "Die Arbeiten fanden während der Wintermonate unter schwierigen Wetterbedingungen statt. Der lange Zaunverlauf von rund 350 Metern erforderte eine exakte Vermessung sowie eine präzise Ausführung über die gesamte Grundstücksgrenze. Für sämtliche Zaunpfosten wurden die Fundamente maschinell mit einem Erdbohrer hergestellt. Anschließend wurden die Pfosten lot- und fluchtgerecht gesetzt und einbetoniert. Die individuell gefertigten Lärchen-Schwartebretter wurden anschließend montiert und bilden heute eine langlebige und natürliche Grundstückseinfassung. Ein weiterer Bestandteil des Projekts war die Verlegung zusätzlicher Rasengittersteine sowie der Einbau zweier großformatiger Jagdtore mit Spannweiten von bis zu vier Metern.",
    challengePoints: [
      "Rund 350 Meter Zaunanlage",
      "Winterbaustelle mit schwierigen Witterungsverhältnissen",
      "Maschinelle Fundamentherstellung mit Erdbohrer",
      "Individuell gefertigte Lärchen-Schwartebretter",
      "Zwei großformatige Jagdtore eingebaut",
    ],
    works: [
      {
        title: "Vermessung & Absteckung",
        description:
          "Einmessen des gesamten Zaunverlaufs sowie Vorbereitung der Fundamentachsen.",
        icon: "ruler",
      },
      {
        title: "Fundamentarbeiten",
        description:
          "Herstellung sämtlicher Pfostenfundamente mit Bagger und Erdbohrer sowie fachgerechtes Einbetonieren der Zaunpfosten.",
        icon: "layers",
      },
      {
        title: "Zaunbau",
        description:
          "Liefern und Montieren der individuell gefertigten Schwartebretter aus hochwertigem Lärchenholz – auf rund 350 Metern Länge.",
        icon: "building",
      },
      {
        title: "Toranlagen",
        description:
          "Montage von zwei großformatigen Jagdtoren mit Spannweiten bis zu vier Metern einschließlich stabiler Pfostenkonstruktion.",
        icon: "settings",
      },
      {
        title: "Pflasterarbeiten",
        description:
          "Verlegung weiterer rund 50 m² Rasengittersteine zur Ergänzung der bereits hergestellten Hofflächen.",
        icon: "brick",
      },
      {
        title: "Fertigstellung",
        description:
          "Kontrolle sämtlicher Zaunfelder, Tore und Pflasterflächen sowie Übergabe der fertiggestellten Außenanlage.",
        icon: "check",
      },
    ],
    process: [
      {
        title: "Planung",
        description:
          "Aufmaß des Grundstücks, Festlegung des rund 350 Meter langen Zaunverlaufs sowie Planung der Toranlagen und Fundamentpunkte.",
      },
      {
        title: "Fundamentarbeiten",
        description:
          "Mit einem hydraulischen Erdbohrer wurden sämtliche Fundamentlöcher hergestellt. Anschließend erfolgte das fachgerechte Einbetonieren aller Zaunpfosten.",
      },
      {
        title: "Zaun- und Pflasterbau",
        description:
          "Nach dem Erhärten der Fundamente wurden die Lärchen-Schwartebretter montiert, die Jagdtore eingebaut und die zusätzlichen Rasengittersteine verlegt.",
      },
      {
        title: "Fertigstellung",
        description:
          "Nach Abschluss aller Arbeiten wurden Zaunanlage, Tore und Pflasterflächen kontrolliert und als hochwertige, langlebige Außenanlage an den Bauherrn übergeben.",
      },
    ],
    result:
      "Entstanden ist eine hochwertige Grundstückseinfassung von rund 350 Metern Länge, die Funktionalität und natürliche Optik miteinander verbindet. Die individuell gefertigten Schwartebretter aus Lärchenholz verleihen der Anlage einen unverwechselbaren Charakter und fügen sich harmonisch in die Landschaft ein. Mit zwei großformatigen Jagdtoren sowie ergänzenden Pflasterarbeiten entstand ein Gesamtprojekt, das sowohl handwerklich als auch optisch überzeugt.",
    resultHighlights: [
      "Rund 350 Meter Zaunanlage errichtet",
      "Individuelle Lärchen-Schwartebretter vom Sägewerk",
      "Sämtliche Pfosten fachgerecht einbetoniert",
      "Zwei Jagdtore mit bis zu 4 Metern Spannweite",
      "Ergänzende Rasengitterflächen fachgerecht hergestellt",
    ],
    testimonials: [
      {
        quote:
          "Das Team Hoffmann hat geliefert. Sehr zu unsere absoluten Zufriedenheit. Zuverlässig, termintreu, kreativ und Top-Qualität. Auch die Kommunikation war sehr gut, so konnten aktuelle Hindernisse oder Ideen immer schnell gelöst werden.\n\nUnd trotz oftmals recht widrigen Wetterverhältnissen war immer gute Laune an der Baustelle vorherrschend..\n\nVielen Dank.",
        author: "Michael Nick",
        role: "Google-Bewertung",
        rating: 5,
      },
    ],
    quote:
      "Rund 350 Meter Zaunanlage – das zeigt, dass Baudienstleistungen Hofmann nicht nur kleine Gartenzäune baut, sondern auch großflächige Einfriedungen und anspruchsvolle Außenanlagen professionell realisiert.",
    faqs: defaultTrustFaqs("Rodau und Umgebung", "Zaun- und Außenanlagen"),
  },
  {
    id: "podeste",
    slug: "podeste",
    title: "Projekt Podeste",
    folder: "Projekt_Podeste",
    coverFile: "038383B5-2E6A-4315-A398-3E9B8C13F839web.webp",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Zwei Eingangspodeste vollständig erneuert – mit Abdichtung, Wärmedämmung und individueller Pflastergestaltung.",
    longDescription:
      "Im Rahmen dieses Projekts wurden zwei in die Jahre gekommene Eingangspodeste in derselben Wohnstraße vollständig erneuert. Die vorhandenen Betonpodeste mit Fliesenbelag entsprachen weder optisch noch technisch den heutigen Anforderungen. Nach dem vollständigen Rückbau wurden die Untergründe neu aufgebaut, fachgerecht abgedichtet und wärmetechnisch verbessert. Anschließend entstanden zwei hochwertige Eingangsbereiche mit individueller Pflastergestaltung, passend zur jeweiligen Architektur der Gebäude.",
    image: {
      src: "/projekte/Projekt_Podeste/038383B5-2E6A-4315-A398-3E9B8C13F839web.webp",
      alt: "Projekt Podeste – erneuerte Eingangspodeste mit Pflastergestaltung",
    },
    href: "/projekte/podeste",
    meta: {
      location: "Georgenhausen",
      completion: "Abgeschlossen",
      service: "Außenanlagen & Pflasterarbeiten",
    },
    challenge:
      "Die bestehenden Eingangspodeste mussten vollständig zurückgebaut werden, ohne die angrenzenden Fassaden oder Türanlagen zu beschädigen. Besonderes Augenmerk lag auf dem fachgerechten Anschluss an die Haustüren. Hier wurden moderne Abdichtungsmaßnahmen, Dämmung sowie Kompriband eingesetzt, um einen dauerhaft dichten und wärmebrückenarmen Anschluss herzustellen. Obwohl beide Podeste in derselben Straße liegen, erhielt jedes Projekt eine individuelle Gestaltung mit unterschiedlichen Pflasterbelägen und Natursteineinfassungen.",
    challengePoints: [
      "Vollständiger Rückbau der alten Betonpodeste",
      "Fachgerechte Abdichtung der Türanschlüsse",
      "Wärmedämmung unter den Eingangsbereichen",
      "Individuelle Pflastergestaltung",
      "Saubere Anarbeitung an Bestand und Fassade",
    ],
    works: [
      {
        title: "Abbrucharbeiten",
        description:
          "Kompletter Rückbau der bestehenden Betonpodeste einschließlich Fliesenbelag.",
        icon: "hammer",
      },
      {
        title: "Untergrund & Abdichtung",
        description:
          "Herstellung des neuen Unterbaus mit fachgerechter Abdichtung, Wärmedämmung sowie Anschlüssen an die Türschwellen mittels Kompriband.",
        icon: "layers",
      },
      {
        title: "Randeinfassung",
        description:
          "Einbau hochwertiger Randsteine zur dauerhaften Einfassung der neuen Podeste.",
        icon: "ruler",
      },
      {
        title: "Pflasterarbeiten",
        description:
          "Verlegung von kleinformatigem Betonpflaster in zwei unterschiedlichen Gestaltungsvarianten – einmal kombiniert mit Muschelkalk, einmal mit einer harmonisch abgestimmten Pflasterfarbe.",
        icon: "brick",
      },
      {
        title: "Fertigstellung",
        description:
          "Präzise Anpassung an die vorhandenen Wegeflächen sowie Übergabe der komplett erneuerten Eingangsbereiche.",
        icon: "check",
      },
    ],
    process: [
      {
        title: "Bestandsaufnahme",
        description:
          "Aufmaß der vorhandenen Podeste und Planung der neuen Konstruktion einschließlich Abdichtungsdetails.",
      },
      {
        title: "Rückbau",
        description:
          "Abbruch der alten Betonpodeste sowie Entfernung des Fliesenbelags bis auf den tragfähigen Untergrund.",
      },
      {
        title: "Neuaufbau",
        description:
          "Herstellung des neuen Unterbaus, Einbau der Abdichtung, Wärmedämmung, Randsteine und fachgerechte Anarbeitung an die Haustüranschlüsse.",
      },
      {
        title: "Pflaster & Fertigstellung",
        description:
          "Verlegung der neuen Pflasterflächen, abschließende Feinarbeiten und Übergabe zweier hochwertig gestalteter Eingangspodeste.",
      },
    ],
    result:
      "Die beiden Eingangsbereiche präsentieren sich heute nicht nur optisch deutlich hochwertiger, sondern erfüllen auch die aktuellen Anforderungen an Abdichtung und Dauerhaftigkeit. Durch die individuelle Gestaltung erhielt jedes Haus einen eigenen Charakter, während beide Podeste handwerklich auf demselben hohen Qualitätsniveau ausgeführt wurden.",
    resultHighlights: [
      "Alte Podeste vollständig erneuert",
      "Fachgerechte Abdichtung und Wärmedämmung",
      "Hochwertige Naturstein- und Pflastergestaltung",
      "Individuelle Optik für beide Hauseingänge",
      "Dauerhafte und saubere Ausführung bis ins Detail",
    ],
    quote:
      "Nicht nur große Bauvorhaben zählen – auch kleinere, technisch anspruchsvolle Arbeiten wie Hauseingänge und Sanierungen verdienen dieselbe Sorgfalt und Fachkompetenz.",
    faqs: defaultTrustFaqs("Georgenhausen und Umgebung", "Podest- und Pflaster"),
  },
  {
    id: "diel-georgenhausen",
    slug: "diel-georgenhausen",
    title: "Projekt Diel Georgenhausen",
    folder: "Projekt_Diel_Georgenhausen",
    coverFile: "IMG_0516web.webp",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    premium: true,
    description:
      "Premium-Terrasse mit großformatigen Platten im Kreuzfugenverband, Geländeaufbau bis 80 cm sowie Stufen und Winkelstützwänden.",
    longDescription:
      "Im Rahmen dieses Projekts entstand eine hochwertige Terrassenanlage mit großformatigen Betonplatten sowie einem seitlichen Zugangsweg entlang des Wohnhauses. Besonderes Augenmerk lag auf einer dauerhaft tragfähigen Konstruktion sowie einer präzisen Ausführung im anspruchsvollen Kreuzfugenverband. Aufgrund der vorhandenen Geländesituation musste die Terrasse im hinteren Bereich um bis zu 80 Zentimeter lagenweise aufgebaut und verdichtet werden. Ergänzend entstanden neue Stufenanlagen sowie eine dauerhaft stabile Einfassung der gesamten Außenanlage.",
    image: {
      src: "/projekte/Projekt_Diel_Georgenhausen/IMG_0516web.webp",
      alt: "Projekt Diel Georgenhausen – Premium-Terrasse mit großformatigen Platten",
    },
    href: "/projekte/diel-georgenhausen",
    meta: {
      location: "Georgenhausen",
      completion: "Abgeschlossen",
      service: "Terrassen- & Außenanlagenbau",
    },
    challenge:
      "Die größte Herausforderung bestand in der erheblichen Höhendifferenz des Geländes. Um eine dauerhaft standsichere Terrasse herzustellen, musste der Untergrund bis zu 80 Zentimeter lagenweise aufgefüllt und mit geeigneten Verdichtungsgeräten fachgerecht verdichtet werden. Zusätzlich verlangte die Verlegung der großformatigen 80 × 40 × 4 cm Terrassenplatten im Kreuzfugenverband höchste Präzision. Die Platten wurden deshalb mit einem Vakuumheber verlegt, um ein exaktes Fugenbild und eine beschädigungsfreie Verarbeitung sicherzustellen. Im Eingangsbereich wurden Winkelstützwände aus Beton eingebaut und mit massiven Blockstufen ergänzt. Den Abschluss bildete eine dauerhaft wasserdurchlässige Verfugung mit hochwertigem, unkrauthemmendem Pflasterfugenmörtel.",
    challengePoints: [
      "Geländeausgleich bis ca. 80 cm",
      "Großformatplatten im Kreuzfugenverband",
      "Verlegung mit Vakuumheber",
      "Winkelstützwände und Blockstufen",
      "Dauerhaft wasserdurchlässige Fugen",
    ],
    works: [
      {
        title: "Erdarbeiten",
        description:
          "Herstellung des Planums sowie lagenweiser Geländeaufbau mit fachgerechter Verdichtung bis zur erforderlichen Aufbauhöhe.",
        icon: "shovel",
      },
      {
        title: "Unterbau",
        description:
          "Einbau eines tragfähigen Untergrundes als Grundlage für die dauerhaft belastbare Terrassenkonstruktion.",
        icon: "layers",
      },
      {
        title: "Terrassenbau",
        description:
          "Verlegung großformatiger Terrassenplatten 80 × 40 × 4 cm mit gestrahlter Oberfläche im technisch anspruchsvollen Kreuzfugenverband unter Einsatz eines Vakuumhebers.",
        icon: "grid",
      },
      {
        title: "Wegebau",
        description:
          "Herstellung des seitlichen Zugangsweges einschließlich Randsteineinfassung und Pflasterarbeiten.",
        icon: "brick",
      },
      {
        title: "Stufen- & Winkelsteinarbeiten",
        description:
          "Einbau von Winkelstützwänden in Beton sowie Herstellung der Treppenanlage mit massiven Blockstufen.",
        icon: "building",
      },
      {
        title: "Verfugung & Fertigstellung",
        description:
          "Verfugung sämtlicher Pflaster- und Terrassenflächen mit hochwertigem, dauerhaft wasserdurchlässigem und unkrauthemmendem Pflasterfugenmörtel.",
        icon: "check",
      },
    ],
    process: [
      {
        title: "Planung",
        description:
          "Bestandsaufnahme, Höhenplanung sowie Festlegung der Terrassen-, Wege- und Treppenanlagen.",
      },
      {
        title: "Erd- und Unterbauarbeiten",
        description:
          "Geländeausgleich durch lagenweisen Aufbau bis rund 80 Zentimeter, fachgerechte Verdichtung sowie Herstellung des tragfähigen Untergrundes.",
      },
      {
        title: "Terrassen- und Wegebau",
        description:
          "Verlegung der großformatigen Terrassenplatten mit Vakuumheber im Kreuzfugenverband sowie Herstellung des seitlichen Zugangsweges einschließlich Randsteineinfassung.",
      },
      {
        title: "Fertigstellung",
        description:
          "Einbau der Winkelstützwände und Blockstufen, Verfugung sämtlicher Flächen mit wasserdurchlässigem Pflasterfugenmörtel sowie abschließende Qualitätskontrolle und Übergabe.",
      },
    ],
    result:
      "Es entstand eine moderne, großzügige Terrassenanlage mit klarer Linienführung und hochwertiger Oberflächenwirkung. Durch den sorgfältigen Geländeaufbau, den präzisen Kreuzfugenverband und die fachgerechte Ausführung aller Anschlüsse überzeugt die Anlage sowohl technisch als auch optisch. Die Kombination aus großformatigen Terrassenplatten, sauber eingefassten Wegen, massiven Blockstufen und dauerhaft wasserdurchlässigen Fugen sorgt für eine langlebige Außenanlage mit hohem Wohn- und Nutzwert.",
    resultHighlights: [
      "Großformatige Terrasse im Kreuzfugenverband",
      "Geländeaufbau bis ca. 80 cm fachgerecht hergestellt",
      "Verlegung mit modernem Vakuumheber",
      "Winkelstützwände und Blockstufen professionell eingebaut",
      "Dauerhaft wasserdurchlässige und unkrauthemmende Verfugung",
    ],
    testimonials: [
      {
        quote:
          "Wir haben mit Herrn Hofmann unsere Terrasse gebaut und sind rundum zufrieden! Von der ersten Beratung bis zur Fertigstellung lief alles absolut professionell und zuverlässig. Herr Hofmann hat sich viel Zeit genommen, unsere Wünsche zu verstehen, und mit tollen Ideen zur Gestaltung beigetragen.\n\nDie Ausführung war präzise, sauber und termingerecht – man merkt sofort, dass hier echtes Handwerk mit Leidenschaft gemacht wird. Auch nach Abschluss der Arbeiten stand Herr Hofmann bei Fragen jederzeit freundlich zur Verfügung.\n\nWir genießen jetzt jeden Tag unsere wunderschöne Terrasse und können Herrn Hofmann uneingeschränkt weiterempfehlen!",
        author: "Bastian Diel",
        role: "Google-Bewertung",
        rating: 5,
      },
    ],
    quote:
      "Premium-Terrassenbau vereint Erdarbeiten, Geländeprofilierung, Stützkonstruktionen und präzise Plattenverlegung – mit dem Qualitätsanspruch von Baudienstleistungen Hofmann bis ins Detail.",
    faqs: defaultTrustFaqs("Georgenhausen und Umgebung", "Terrassen- und Außenanlagen"),
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
];

/** Reihenfolge auf der Projektübersicht */
const projectDisplayOrder: ProjectSlug[] = [
  "diel-georgenhausen",
  "podeste",
  "merzhof",
  "merzhof-einzaeunung",
  "abriss-zoga-bau",
  "keisner",
  "urban-gross-biberau",
];

export function getOrderedProjects(list: Project[] = projects): Project[] {
  const preferred: Project[] = [];
  for (const slug of projectDisplayOrder) {
    const match = list.find((project) => project.slug === slug);
    if (match) preferred.push(match);
  }
  const rest = list.filter(
    (project) => !projectDisplayOrder.includes(project.slug),
  );
  return preferred.concat(rest);
}

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
