import { Quote, Star } from "lucide-react";
import type { ProjectTestimonial } from "@/data/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectTestimonialsProps = {
  testimonials: ProjectTestimonial[];
};

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < rating;
        return (
          <Star
            key={index}
            className={`h-4 w-4 ${filled ? "fill-orange text-orange" : "text-primary/20"}`}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

export function ProjectTestimonials({ testimonials }: ProjectTestimonialsProps) {
  if (testimonials.length === 0) return null;

  const single = testimonials.length === 1;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Kundenstimme"
            title={
              single
                ? "Was der Auftraggeber sagt"
                : "Was Auftraggeber zu diesem Projekt sagen"
            }
            description="Echte Rückmeldungen zu genau diesem Vorhaben."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div
          className={`mt-12 grid gap-6 ${
            single
              ? "mx-auto max-w-2xl"
              : testimonials.length === 2
                ? "mx-auto max-w-4xl sm:grid-cols-2"
                : "lg:grid-cols-3"
          }`}
        >
          {testimonials.map((item, index) => (
            <FadeIn
              key={`${item.author}-${index}`}
              delay={index * 80}
              as="article"
              className="flex h-full flex-col rounded-2xl border border-primary/8 bg-surface p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <Quote className="h-8 w-8 shrink-0 text-orange" aria-hidden />
                {item.rating ? <RatingStars rating={item.rating} /> : null}
              </div>
              <blockquote className="mt-4 flex-1 whitespace-pre-line text-base leading-relaxed text-ink">
                „{item.quote}“
              </blockquote>
              <footer className="mt-6 border-t border-primary/10 pt-4">
                <p className="text-sm font-semibold text-primary">{item.author}</p>
                {item.role ? (
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {item.role}
                  </p>
                ) : null}
              </footer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
