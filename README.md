# Baudienstleistungen Hofmann – Website

Professioneller Internetauftritt für Baudienstleistungen Hofmann (Maurermeister & Bautechniker).

## Starten

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React

## Wichtige Dateien

- `src/lib/siteConfig.ts` – Unternehmensdaten, Kontakt, SEO
- `src/data/` – Leistungen, Projekte, FAQs, Bilder, Inhalte
- `src/components/` – Layout, Sections, UI

## Vor dem Livegang

1. Platzhalter in `siteConfig.ts` ersetzen (Telefon, E-Mail, Adresse, Domain, Einsatzgebiet)
2. Impressum und Datenschutz rechtlich prüfen
3. Unsplash-Platzhalterbilder durch echte Projektfotos ersetzen (`src/data/images.ts`)
4. Kundenstimmen in `src/data/testimonials.ts` austauschen
5. Kontaktformular an API / E-Mail-Dienst anbinden
