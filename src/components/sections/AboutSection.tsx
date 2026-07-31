import Image from "next/image";
import { Check } from "lucide-react";
import { images } from "@/data/images";
import { aboutHighlights } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn direction="from-center-left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(28,31,33,0.15)] sm:aspect-[5/6]">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-anthracite/80 to-transparent p-6">
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
          />
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
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
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-anthracite">
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
    </section>
  );
}
