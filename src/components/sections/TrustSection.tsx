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
              <FadeIn key={point.id} delay={index * 80} className="h-full">
                <article className="group h-full rounded-xl border border-primary/8 bg-surface p-6 shadow-[0_4px_20px_rgba(28,61,90,0.04)] transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1.5 hover:border-primary/15 hover:bg-white hover:shadow-[0_16px_40px_rgba(28,61,90,0.1)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-anthracite">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {point.text}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
