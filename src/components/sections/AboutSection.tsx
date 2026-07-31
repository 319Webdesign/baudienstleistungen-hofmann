import Image from "next/image";
import { Check } from "lucide-react";
import { images } from "@/data/images";
import { aboutHighlights } from "@/data/content";
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
            title="Handwerk, Technik und Erfahrung"
            light
          />
          <div className="mt-6 space-y-4 leading-relaxed text-white/75">
            <p>
              Thomas Hofmann ist Maurermeister und staatlich geprüfter
              Bautechniker. Seine Erfahrung verbindet praktische Bauausführung
              mit technischem Verständnis und einem geschulten Blick für
              tragfähige Lösungen.
            </p>
            <p>
              Ob klassischer Rohbau, anspruchsvoller Umbau, Stahlträgereinbau
              oder individuell geplantes Fundament: Jedes Projekt wird persönlich
              betrachtet, sorgfältig vorbereitet und zuverlässig umgesetzt.
            </p>
            <p>
              Bei umfangreicheren Bauvorhaben arbeitet Baudienstleistungen
              Hofmann mit bewährten Fachbetrieben und Nachunternehmern zusammen.
              Dadurch können auch gewerkeübergreifende Leistungen koordiniert und
              professionell ausgeführt werden.
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

          <div className="mt-8">
            <Button href="/ueber-mich">Mehr über Thomas Hofmann</Button>
          </div>
        </FadeIn>
      </div>

      {/* Weicher Wellenübergang ins Weiß */}
      <div className="pointer-events-none leading-[0]" aria-hidden>
        <svg
          className="relative block w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,40 C240,72 480,8 720,32 C960,56 1200,16 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}
