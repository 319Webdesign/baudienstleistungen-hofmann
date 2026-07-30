export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    id: "leistungen",
    question: "Welche Bauleistungen übernimmt Baudienstleistungen Hofmann?",
    answer:
      "Der Schwerpunkt liegt auf Rohbau- und Betonarbeiten, Umbauten, Sanierungen, Erdarbeiten, Außenanlagen sowie technisch anspruchsvollen Sonderprojekten.",
  },
  {
    id: "kleinprojekte",
    question: "Übernehmen Sie auch kleinere Bauprojekte?",
    answer:
      "Ja. Neben umfangreicheren Projekten werden auch klar abgegrenzte Einzelmaßnahmen und kleinere Bauleistungen geprüft und umgesetzt.",
  },
  {
    id: "statiker",
    question: "Arbeiten Sie mit Statikern zusammen?",
    answer:
      "Bei statisch relevanten Umbauten oder Sonderkonstruktionen erfolgt die Umsetzung auf Grundlage vorhandener statischer Berechnungen oder in Abstimmung mit geeigneten Fachplanern.",
  },
  {
    id: "gewerke",
    question: "Können mehrere Gewerke koordiniert werden?",
    answer:
      "Bei umfangreicheren Projekten kann auf ein bewährtes Netzwerk aus Fachbetrieben und Nachunternehmern zurückgegriffen werden.",
  },
  {
    id: "ablauf",
    question: "Wie läuft eine Projektanfrage ab?",
    answer:
      "Nach der ersten Kontaktaufnahme werden Umfang, Anforderungen und vorhandene Unterlagen besprochen. Anschließend erfolgt die fachliche Einschätzung und Angebotserstellung.",
  },
  {
    id: "gebiet",
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Das genaue Einsatzgebiet wird noch ergänzt. Projektanfragen aus der Region und dem näheren Umfeld können individuell geprüft werden.",
  },
];
