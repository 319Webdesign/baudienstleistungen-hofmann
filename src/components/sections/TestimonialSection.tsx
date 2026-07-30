import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

/** Platzhalter-Kundenstimmen – durch echte Bewertungen ersetzen. */
export function TestimonialSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Kundenstimmen"
            title="Was Auftraggeber schätzen"
            description="Die folgenden Texte sind Platzhalter und müssen durch echte Kundenstimmen ersetzt werden."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 80}
              as="article"
              className="flex h-full flex-col rounded-xl border border-dashed border-orange/30 bg-surface p-6 sm:p-7"
            >
              {/* PLACEHOLDER_TESTIMONIAL: durch echte Kundenstimme ersetzen */}
              <Quote className="h-8 w-8 text-orange" aria-hidden />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                „{item.quote}“
              </blockquote>
              <footer className="mt-6 border-t border-anthracite/10 pt-4">
                <p className="text-sm font-semibold text-anthracite">
                  {item.attribution}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                  Platzhalter – noch keine echte Bewertung
                </p>
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
