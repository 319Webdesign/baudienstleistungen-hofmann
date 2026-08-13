import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { images } from "@/data/images";
import { aboutHighlights } from "@/data/content";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSection() {
  return (
    <section className="relative bg-primary pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <FadeIn direction="from-center-left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:aspect-[5/6]">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-light">
                Thomas Hofmann
              </p>
              <p className="mt-1 text-white">
                Maurermeister &amp; staatlich geprüfter Bautechniker
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="from-center-right" delay={80}>
          <SectionHeading
            eyebrow="Über mich"
            title="Handwerk, Technik und Verantwortung"
            light
          />
          <div className="mt-6 space-y-4 leading-relaxed text-white/75">
            <p>
              Bauen ist für mich mehr als ein Beruf – es ist seit über 25 Jahren
              ein wesentlicher Teil meines Lebens.
            </p>
            <p>
              Seit 1999 bin ich Maurermeister und staatlich geprüfter
              Bautechniker. In dieser Zeit habe ich sowohl als selbstständiger
              Unternehmer als auch viele Jahre im technischen Vertrieb
              gearbeitet. Diese Kombination aus praktischer Baustellenerfahrung,
              technischem Verständnis und Beratung prägt meine Arbeit bis heute.
            </p>
            <p>
              Mit Baudienstleistungen Hofmann stehe ich persönlich für meine
              Projekte ein – vom ersten Gespräch über die technische Lösung bis
              zur fachgerechten Ausführung. Bei größeren Aufgaben arbeite ich
              mit einem bewährten Netzwerk aus Fachbetrieben und
              Nachunternehmern zusammen.
            </p>
            <p>
              Verantwortung endet für mich aber nicht auf der Baustelle.
              Ehrenamtlich engagiere ich mich als Sanitäter und First Responder
              und gebe meine Erfahrung als Erste-Hilfe-Ausbilder weiter. Denn ob
              auf der Baustelle oder im Notfall: Wenn es darauf ankommt, zählen
              Fachwissen, Verlässlichkeit und die Bereitschaft, Verantwortung zu
              übernehmen.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-white"
              >
                <Check className="h-5 w-5 shrink-0 text-orange" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-4">
            <Button href="/ueber-mich">Mehr über Thomas Hofmann</Button>
            <a
              href={siteConfig.ersteHilfeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-light transition-colors hover:text-white"
            >
              Mehr über mein Engagement und meine Erste-Hilfe-Kurse
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Weicher Wellenübergang ins Weiß */}
      <svg
        className="pointer-events-none relative block h-14 w-full sm:h-16 lg:h-[4.5rem]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          fill="#ffffff"
          d="M0,28 C240,70 480,6 720,34 C960,62 1200,14 1440,36 L1440,81 L0,81 Z"
        />
      </svg>
    </section>
  );
}
