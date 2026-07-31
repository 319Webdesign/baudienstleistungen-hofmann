import { trustPoints } from "@/data/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function TrustSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14 lg:px-8">
        <FadeIn direction="from-center-left" className="max-w-lg">
          <span className="inline-block rounded-full bg-orange px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Vorteile
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Warum Baudienstleistungen
            <br className="hidden sm:block" /> Hofmann?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Persönliche Betreuung, handwerkliche Qualität und technisches
            Verständnis – ohne Umwege über große Strukturen.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <FadeIn
                key={point.id}
                delay={index * 70}
                direction={index % 2 === 0 ? "from-center-left" : "from-center-right"}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-2xl bg-primary p-6 shadow-[0_12px_40px_rgba(28,61,90,0.18)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(28,61,90,0.28)] sm:p-7">
                  <Icon
                    className="h-7 w-7 text-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
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
