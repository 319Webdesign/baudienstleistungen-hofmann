import { trustPoints } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Vertrauen"
            title="Warum Baudienstleistungen Hofmann?"
            description="Persönliche Betreuung, handwerkliche Qualität und technisches Verständnis – ohne Umwege über große Strukturen."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <FadeIn
                key={point.id}
                delay={index * 80}
                as="article"
                className="h-full rounded-xl border border-anthracite/8 bg-surface p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-anthracite">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {point.text}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
