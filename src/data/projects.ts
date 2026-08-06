import { images, type ImageAsset } from "./images";
import type { FAQItem } from "./faqs";

export type ProjectCategory =
  | "Rohbau"
  | "Betonarbeiten"
  | "Umbau & Sanierung"
  | "Umbau & Abrissarbeiten"
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
  /** Optionaler Weiter-Link zur nächsten Projektphase */
  nextProject?: {
    href: string;
    label: string;
    description?: string;
  };
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
    coverFile: "IMG_0065web.webp",
    midFiles: ["IMG_0064web.webp", "IMG_3300web.webp"],
    category: "Umbau & Abrissarbeiten",
    filterCategories: ["Umbau & Sanierung", "Außenanlagen"],
    description:
      "Umbau und Abrissarbeiten im Bestand – Stahlträgereinbau nach Statik sowie Abriss der bestehenden Terrasse.",
    longDescription:
      "Im Projekt Keisner wurden Umbau- und Abrissarbeiten im Bestand umgesetzt. Im Fokus standen der fachgerechte Einbau von Stahlträgern nach den vorliegenden statischen Vorgaben sowie der kontrollierte Abriss der bestehenden Terrasse. Arbeiten im Bestand erfordern besondere Sorgfalt: klare Abstützung, sichere Arbeitsabläufe und eine saubere Übergabe an die nachfolgenden Gewerke.",
    image: {
      src: "/projekte/Projekt_Keisner/IMG_0065web.webp",
      alt: "Projekt Keisner – Umbau, Stahlträgereinbau und Abrissarbeiten",
    },
    href: "/projekte/keisner",
    meta: {
      location: "Reinheim",
      completion: "Abgeschlossen",
      duration: "8 Tage",
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
      "Durch den kontrollierten Rückbau konnte das Bestandsgebäude sicher und vollständig entfernt werden, ohne die angrenzende Bebauung zu beeinträchtigen. Das Grundstück stand anschließend vollständig für den Neubau zur Verfügung, der im nächsten Bauabschnitt ebenfalls durch Baudienstleistungen Hofmann realisiert wurde.",
    resultHighlights: [
      "Sicherer Rückbau trotz Grenzbebauung",
      "Fachgerechte Entkernung und Materialtrennung",
      "Präziser maschineller Abbruch",
      "Baufeld vollständig vorbereitet",
      "Nahtloser Übergang zum anschließenden Rohbau",
    ],
    quote:
      "Bei innerörtlichem Abbruch zählt nicht die Kraft der Maschine – sondern die Präzision der Planung.",
    nextProject: {
      href: "/projekte/zoga-bau",
      label: "Weiter zum Projekt Rohbau Zoga Bau",
      description:
        "Auf dem freigemachten Grundstück entstand im nächsten Bauabschnitt der Neubau – ebenfalls durch Baudienstleistungen Hofmann.",
    },
    faqs: defaultTrustFaqs("Groß-Zimmern und Umgebung", "Abbruch"),
  },
  {
    id: "urban-gross-biberau",
    slug: "urban-gross-biberau",
    title: "Projekt Urban Groß-Biberau",
    folder: "Urban",
    coverFile: "2efb34d2-9f03-4356-a643-1f737fd931caweb.webp",
    midFiles: ["IMG_1333web.webp", "IMG_8670web.webp"],
    resultFile: "IMG_1487web.webp",
    category: "Außenanlagen",
    filterCategories: ["Außenanlagen"],
    description:
      "Hochwertige Gartengestaltung mit Muschelkalkmauern, Geoceramica-Terrasse, Pflasterflächen und Edelstahlseilzaun.",
    longDescription:
      "In Groß-Biberau entstand für das Projekt Urban eine durchgängig geplante Außenanlage aus Naturstein, hochwertigen Belägen und präziser Detailarbeit. Muschelkalkmauern setzen klare Linien, die Terrasse wurde mit Geoceramica-Verbundplatten auf Drainbeton ausgeführt, und ergänzende Pflasterflächen, Wegeinfassungen, Eingangstreppen sowie ein Edelstahlseilzaun runden das Gesamtbild ab. Vom Aushub mit 9-Tonnen-Bagger bis zum verlegten Rollrasen: alles aus einer Hand – belastbar, sauber und mit Anspruch an Material und Handwerk.",
    image: {
      src: "/projekte/Urban/2efb34d2-9f03-4356-a643-1f737fd931caweb.webp",
      alt: "Projekt Urban Groß-Biberau – Gartenanlage mit Naturstein und Terrasse",
    },
    href: "/projekte/urban-gross-biberau",
    meta: {
      location: "Groß-Biberau",
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
    quote:
      "Gute Außenanlagen erkennt man nicht nur am Material – sondern an der Präzision, mit der Stein, Belag und Grün ineinandergreifen.",
    faqs: defaultTrustFaqs("Groß-Biberau und Umgebung", "Außenanlagen"),
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
    title: "Rohbau Zoga Bau",
    folder: "Projekt_Zoga_Bau_Rohbau",
    category: "Rohbau",
    filterCategories: ["Rohbau"],
    description:
      "Neubau und Rohbauarbeiten auf dem freigemachten Grundstück – der direkte Folgeabschnitt nach dem Abbruch.",
    longDescription:
      "Nach dem vollständigen Rückbau des Bestandsgebäudes entstand auf dem Grundstück in Groß-Zimmern der Neubau. Baudienstleistungen Hofmann übernahm die Rohbauarbeiten und führte das Vorhaben nach dem Abbruch nahtlos weiter – solide geplant und sauber umgesetzt.",
    image: {
      src: images.projects.pflaster.src,
      alt: "Rohbau Zoga Bau – Neubau nach dem Abbruch",
    },
    href: "/projekte/zoga-bau",
    meta: {
      location: "Groß-Zimmern",
      completion: "Abgeschlossen",
      duration: "nach Projektumfang",
      service: "Rohbau",
    },
    challenge:
      "Nach dem Abbruch musste der Rohbau auf dem vorbereiteten Baufeld zügig und präzise starten. Entscheidend waren eine saubere Schnittstelle zum Rückbau, solide Fundament- und Rohbauqualität sowie eine klare Abstimmung der Bauabschnitte.",
    challengePoints: [
      "Nahtloser Anschluss an den Abbruch",
      "Solide Fundament- und Rohbauausführung",
      "Klare Bauabschnitte auf demselben Grundstück",
    ],
    works: [
      {
        title: "Baufeld & Fundament",
        description: "Nutzung des vorbereiteten Baufeldes und solide Fundamentarbeiten.",
        icon: "layers",
      },
      {
        title: "Rohbau",
        description: "Fachgerechte Ausführung der Rohbauarbeiten für den Neubau.",
        icon: "brick",
      },
      {
        title: "Betonarbeiten",
        description: "Betonage und tragende Konstruktion nach den Anforderungen des Vorhabens.",
        icon: "grid",
      },
      {
        title: "Abschluss",
        description: "Saubere Übergabe an die weiteren Ausbauschritte.",
        icon: "check",
      },
    ],
    process: defaultProcess,
    result:
      "Auf dem freigeräumten Grundstück entstand der Neubau als direkter Folgeabschnitt des Abbruchs – aus einer Hand geplant und umgesetzt.",
    resultHighlights: [
      "Direkter Anschluss an den Abbruch",
      "Solide Rohbauqualität",
      "Komplettleistung aus einer Hand",
    ],
    faqs: defaultTrustFaqs("Groß-Zimmern und Umgebung", "Rohbau"),
  },
];

/** Reihenfolge auf der Projektübersicht: Zoga, Keisner und Urban zuerst */
const projectDisplayOrder: ProjectSlug[] = [
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
