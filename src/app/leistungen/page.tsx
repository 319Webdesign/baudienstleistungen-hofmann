import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Rohbau, Betonarbeiten, Umbau, Sanierung, Erdarbeiten, Außenanlagen und Spezialprojekte – Baudienstleistungen Hofmann.",
};

export default function LeistungenPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Leistungen", href: "/leistungen" },
        ])}
      />
      <PageHero
        eyebrow="Leistungen"
        title="Bauleistungen mit Substanz und technischem Verständnis"
        description="Vier klar definierte Schwerpunkte – von Rohbau und Betonarbeiten bis zu individuellen Sonderlösungen."
        image={images.services.spezial}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen" },
        ]}
      />

      <div className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;
            const imageDirection = reverse
              ? "from-center-right"
              : "from-center-left";
            const textDirection = reverse
              ? "from-center-left"
              : "from-center-right";

            return (
              <article
                key={service.id}
                id={service.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeIn direction={imageDirection}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </FadeIn>

                <FadeIn direction={textDirection} delay={80}>
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-3xl font-bold text-anthracite">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted leading-relaxed">
                      {service.longDescription}
                    </p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-ink"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button href={service.href}>Mehr erfahren</Button>
                      <Button href="/kontakt" variant="outline">
                        Projekt anfragen
                      </Button>
                    </div>
                  </div>
                </FadeIn>
              </article>
            );
          })}
        </div>
      </div>

      <CTASection />
    </>
  );
}
