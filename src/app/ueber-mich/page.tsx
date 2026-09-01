import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { images } from "@/data/images";
import { aboutHighlights } from "@/data/content";
import { siteConfig } from "@/lib/siteConfig";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Thomas Hofmann – Maurermeister und staatlich geprüfter Bautechniker. Persönliche Betreuung, handwerkliche Ausführung und technische Kompetenz.",
};

const sections = [
  {
    title: "Persönliche Vorstellung",
    text: "Bauen bedeutet für mich, Verantwortung zu übernehmen. Für die technische Lösung, für die handwerkliche Ausführung und für eine ehrliche Kommunikation mit dem Auftraggeber.",
  },
  {
    title: "Qualifikationen",
    text: "Als Maurermeister und staatlich geprüfter Bautechniker verbinde ich handwerkliche Praxis mit bautechnischem Verständnis. Das hilft besonders dort, wo Ausführung und Konstruktion eng zusammenhängen.",
  },
  {
    title: "Berufliche Erfahrung",
    text: "Die Erfahrung im Bauwesen umfasst klassische Rohbau- und Betonarbeiten ebenso wie Umbauten im Bestand, Fundamentlösungen und technisch anspruchsvollere Sonderaufgaben. Jedes Projekt wird individuell betrachtet.",
  },
  {
    title: "Arbeitsweise",
    text: "Am Anfang steht die klare Einschätzung: Was ist nötig, was ist sinnvoll, und wie lässt sich das Vorhaben zuverlässig umsetzen? Darauf folgen transparente Abstimmung, sorgfältige Vorbereitung und eine saubere Ausführung.",
  },
  {
    title: "Netzwerk und Partnerbetriebe",
    text: "Baudienstleistungen Hofmann ist kein klassischer Großbetrieb. Bei umfangreicheren oder gewerkeübergreifenden Arbeiten greife ich auf ein bewährtes Netzwerk aus Fachbetrieben und Nachunternehmern zurück.",
  },
  {
    title: "Qualitätsanspruch",
    text: "Qualität zeigt sich in der Vorbereitung, in der Ausführung und in der Übergabe. Ziel ist eine fachgerechte Lösung, die den Anforderungen entspricht – ohne unnötige Versprechen.",
  },
  {
    title: "Persönliche Projektbetreuung",
    text: "Auftraggeber haben einen direkten Ansprechpartner. Das hält Abstimmungen kurz, Entscheidungen nachvollziehbar und die Umsetzung verbindlich.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Über mich", href: "/ueber-mich" },
        ])}
      />
      <PageHero
        eyebrow="Über mich"
        title={`${siteConfig.owner} – Handwerk, Technik und Erfahrung`}
        description="Maurermeister und staatlich geprüfter Bautechniker mit Fokus auf persönliche Betreuung und fachgerechte Bauausführung."
        image={images.about}
        imageClassName="object-[center_32%]"
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Über mich" },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
            <ul className="mt-6 space-y-3">
              {aboutHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-anthracite"
                >
                  <Check className="h-5 w-5 text-orange" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 40}>
                <article>
                  <h2 className="text-2xl font-bold text-anthracite">
                    {section.title}
                  </h2>
                  <span
                    className="mt-3 block h-1 w-10 rounded-full bg-orange"
                    aria-hidden
                  />
                  <p className="mt-4 text-muted leading-relaxed">
                    {section.text}
                  </p>
                </article>
              </FadeIn>
            ))}

            <FadeIn>
              <Button href="/kontakt" size="lg">
                Projekt anfragen
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
