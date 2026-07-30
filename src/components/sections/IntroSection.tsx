import { introAdvantages } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function IntroSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Einstieg"
            title="Baukompetenz aus einer Hand"
            description="Baudienstleistungen Hofmann verbindet handwerkliche Erfahrung mit technischem Know-how. Als Maurermeister und staatlich geprüfter Bautechniker begleitet Thomas Hofmann Bauprojekte von der ersten Einschätzung bis zur fachgerechten Umsetzung. Auch bei komplexen Anforderungen, individuellen Konstruktionen oder gewerkeübergreifenden Arbeiten steht eine durchdachte und zuverlässige Lösung im Mittelpunkt."
          />
        </FadeIn>

        <FadeIn delay={120}>
          <ul className="space-y-4">
            {introAdvantages.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-anthracite/8 bg-surface px-5 py-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-base font-semibold text-anthracite">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
