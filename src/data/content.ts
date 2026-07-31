import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  GraduationCap,
  BadgeCheck,
  Handshake,
  MessageSquare,
  ClipboardList,
  FileCheck,
  HardHat,
  CheckCircle2,
  Users,
  Building,
  Landmark,
  Home,
  Briefcase,
} from "lucide-react";

export type TrustPoint = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export const trustPoints: TrustPoint[] = [
  {
    id: "erfahrung",
    title: "Erfahrung",
    text: "Langjährige Erfahrung im Bauwesen und zahlreiche erfolgreich umgesetzte Bauprojekte.",
    icon: CalendarDays,
  },
  {
    id: "kompetenz",
    title: "Kompetenz",
    text: "Meisterbetrieb mit technischem Know-how für durchdachte und sichere Lösungen.",
    icon: GraduationCap,
  },
  {
    id: "qualitaet",
    title: "Qualität",
    text: "Saubere Ausführung, hochwertige Arbeit und ein Ergebnis, das überzeugt.",
    icon: BadgeCheck,
  },
  {
    id: "persoenlich",
    title: "Persönlich",
    text: "Ein Ansprechpartner, kurze Wege und ehrliche Beratung während des gesamten Projekts.",
    icon: Handshake,
  },
];

export const introAdvantages = [
  {
    id: "beratung",
    title: "fundierte Beratung",
    icon: MessageSquare,
  },
  {
    id: "kommunikation",
    title: "direkte Kommunikation",
    icon: Handshake,
  },
  {
    id: "umsetzung",
    title: "saubere Umsetzung",
    icon: CheckCircle2,
  },
] as const;

export const heroTrustItems = [
  "persönliche Betreuung",
  "fachgerechte Ausführung",
  "individuelle Lösungen",
] as const;

export const heroStats = [
  { label: "langjährige Bauerfahrung" },
  { label: "Meister- und Technikerkompetenz" },
  { label: "ein persönlicher Ansprechpartner" },
] as const;

export type ProcessStep = {
  step: number;
  title: string;
  text: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Anfrage",
    text: "Sie schildern kurz Ihr Vorhaben und senden vorhandene Informationen, Bilder oder Planunterlagen.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Persönliche Beratung",
    text: "Das Projekt wird gemeinsam besprochen und die Anforderungen werden fachlich eingeschätzt.",
    icon: Handshake,
  },
  {
    step: 3,
    title: "Planung und Angebot",
    text: "Auf Grundlage des Umfangs erhalten Sie eine transparente Leistungsbeschreibung und ein passendes Angebot.",
    icon: ClipboardList,
  },
  {
    step: 4,
    title: "Ausführung",
    text: "Die Arbeiten werden zuverlässig, sauber und nach den vereinbarten Vorgaben umgesetzt.",
    icon: HardHat,
  },
  {
    step: 5,
    title: "Fertigstellung",
    text: "Nach Abschluss erfolgt die gemeinsame Kontrolle und Übergabe des Projekts.",
    icon: FileCheck,
  },
];

export type Audience = {
  id: string;
  title: string;
  icon: LucideIcon;
};

export const audiences: Audience[] = [
  { id: "privat", title: "Privatkunden", icon: Home },
  { id: "gewerbe", title: "Gewerbekunden", icon: Briefcase },
  { id: "architekten", title: "Architekten & Statiker", icon: Building },
  { id: "verwaltung", title: "Hausverwaltungen", icon: Users },
  { id: "kommunen", title: "Kommunen", icon: Landmark },
];

export const aboutHighlights = [
  "persönlicher Ansprechpartner",
  "praxisnahe Beratung",
  "fachliche Koordination",
  "zuverlässige Projektabwicklung",
] as const;

export const projectTypes = [
  "Rohbau",
  "Betonarbeiten",
  "Umbau",
  "Sanierung",
  "Erdarbeiten",
  "Außenanlagen",
  "Sonderfundament",
  "anderes Bauprojekt",
] as const;
