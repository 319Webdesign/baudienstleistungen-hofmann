import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const badges: Record<string, string> = {
  "rohbau-betonarbeiten": "ROHBAU",
  "umbau-sanierung": "UMBAU",
  "erdarbeiten-aussenanlagen": "AUSSEN",
  spezialprojekte: "SPEZIAL",
};

export function ServiceGrid() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-24" id="leistungen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Leistungen"
            title="Vier Schwerpunkte. Ein Ansprechpartner."
            description="Von klassischen Bauleistungen bis zu technisch anspruchsvollen Sonderlösungen – klar strukturiert und persönlich betreut."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              badge={badges[service.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
