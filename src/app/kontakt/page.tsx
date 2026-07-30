import type { Metadata } from "next";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Projekt anfragen bei Baudienstleistungen Hofmann – persönliche Beratung zu Rohbau, Umbau, Betonarbeiten und Sonderprojekten.",
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Kontakt", href: "/kontakt" },
        ])}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Projekt anfragen"
        description="Beschreiben Sie kurz Ihr Vorhaben. Thomas Hofmann meldet sich persönlich und bespricht die nächsten Schritte."
        image={images.details.schalung}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Kontakt" },
        ]}
        compact
      />
      <ContactSection />
    </>
  );
}
