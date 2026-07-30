import type { Metadata } from "next";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectFilter } from "@/components/ui/ProjectFilter";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Ausgewählte Bauprojekte von Baudienstleistungen Hofmann – Rohbau, Umbau, Betonarbeiten, Außenanlagen und Spezialfundamente.",
};

export default function ProjektePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Projekte", href: "/projekte" },
        ])}
      />
      <PageHero
        eyebrow="Projekte"
        title="Ausgewählte Bauprojekte"
        description="Eine Auswahl typischer Vorhaben – als Grundlage für echte Projektreferenzen, die später ergänzt werden."
        image={images.projects.anbau}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Projekte" },
        ]}
      />

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <ProjectFilter />
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
