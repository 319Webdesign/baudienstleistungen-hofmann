import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, services, type ServiceSlug } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug as ServiceSlug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Leistungen", href: "/leistungen" },
          { name: service.title, href: service.href },
        ])}
      />
      <PageHero
        eyebrow="Leistung"
        title={service.title}
        description={service.description}
        image={service.image}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                Leistungsübersicht
              </p>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-anthracite">
              Was wir in diesem Bereich übernehmen
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {service.longDescription}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-anthracite/8 bg-surface px-4 py-3 text-sm font-medium text-anthracite"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/kontakt" size="lg">
                Projekt anfragen
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
