import { processSteps } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProcessSection() {
  return (
    <section className="relative bg-primary pt-16 text-white sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <FadeIn>
          <SectionHeading
            eyebrow="Ablauf"
            title="So läuft Ihr Bauprojekt ab"
            description="Klare Schritte, direkte Kommunikation und nachvollziehbare Entscheidungen – vom ersten Kontakt bis zur Übergabe."
            light
          />
        </FadeIn>

        <ol className="mt-12 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn
                key={step.step}
                delay={index * 70}
                as="li"
                className="relative h-full rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <Icon className="h-5 w-5 text-orange-light" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {step.text}
                </p>
                {index < processSteps.length - 1 ? (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-orange/50 lg:block"
                    aria-hidden
                  />
                ) : null}
              </FadeIn>
            );
          })}
        </ol>
      </div>

      {/* Weicher Wellenübergang in die Zielgruppen-Sektion */}
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
