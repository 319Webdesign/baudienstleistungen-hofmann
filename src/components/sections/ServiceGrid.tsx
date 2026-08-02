import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const badges: Record<string, string> = {
  mobilfunkfundamente: "MOBILFUNK",
  "rohbau-betonarbeiten": "ROHBAU",
  "umbau-sanierung": "UMBAU",
  "erdarbeiten-aussenanlagen": "AUSSEN",
};

/** Startseite: Spezialprojekte nur auf /leistungen zeigen */
const homepageServices = services.filter(
  (service) => service.id !== "spezialprojekte",
);

export function ServiceGrid() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="leistungen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Leistungen"
            title={
              <>
                Vier Schwerpunkte.
                <br />
                Ein Ansprechpartner.
              </>
            }
            description="Von Mobilfunkfundamenten über klassische Bauleistungen bis zu technisch anspruchsvollen Sonderlösungen – klar strukturiert und persönlich betreut."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {homepageServices.map((service, index) => (
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
