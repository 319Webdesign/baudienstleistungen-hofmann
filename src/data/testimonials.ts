/**
 * Platzhalter-Kundenstimmen – später durch echte Bewertungen ersetzen.
 * Keine erfundenen Namen oder Firmen verwenden.
 */
export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
  isPlaceholder: true;
};

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote:
      "Die Zusammenarbeit war unkompliziert, zuverlässig und fachlich überzeugend. Besonders positiv war die direkte Kommunikation während des gesamten Projekts.",
    attribution: "Kundenstimme – Platzhalter",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    quote:
      "Von der ersten Einschätzung bis zur Fertigstellung verlief alles klar und nachvollziehbar. Die Ausführung war sauber und an den vereinbarten Vorgaben orientiert.",
    attribution: "Kundenstimme – Platzhalter",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    quote:
      "Technische Fragen wurden verständlich erklärt, und auch bei komplexeren Anforderungen blieb die Betreuung persönlich und verbindlich.",
    attribution: "Kundenstimme – Platzhalter",
    isPlaceholder: true,
  },
];
