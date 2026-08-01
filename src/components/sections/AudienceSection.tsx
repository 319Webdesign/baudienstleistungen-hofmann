import { audiences } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function AudienceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Zielgruppen"
            title="Für private, gewerbliche und öffentliche Auftraggeber"
            description="Baudienstleistungen Hofmann übernimmt Bauleistungen für Privatkunden, Unternehmen, Hausverwaltungen, Architekten, Statiker und öffentliche Auftraggeber. Dabei reicht das Spektrum von einzelnen Bauleistungen bis zur Koordination umfangreicherer Projekte."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn
                key={item.id}
                delay={index * 60}
                as="article"
                className="flex h-full flex-col items-center rounded-xl border border-primary/8 bg-surface px-4 py-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-sm font-bold text-anthracite">
                  {item.title}
                </h3>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
