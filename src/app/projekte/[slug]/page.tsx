import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { loadProjectGallery } from "@/lib/loadProjectGallery";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const gallery = loadProjectGallery(
    project.folder,
    project.title,
    project.coverFile,
    project.image,
  );

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Projekte", href: "/projekte" },
          { name: project.title, href: project.href },
        ])}
      />
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.description}
        image={project.image}
        breadcrumbs={[
          { label: "Startseite", href: "/" },
          { label: "Projekte", href: "/projekte" },
          { label: project.title },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                Projektdetails
              </p>
              <h2 className="mt-4 text-3xl font-bold text-anthracite">
                Über dieses Vorhaben
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                {project.longDescription}
              </p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-anthracite/8 bg-surface px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Kategorie
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-anthracite">
                    {project.category}
                  </dd>
                </div>
                <div className="rounded-lg border border-anthracite/8 bg-surface px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Fotos
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-anthracite">
                    {gallery.length} Aufnahme
                    {gallery.length === 1 ? "" : "n"}
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/kontakt" size="lg">
                  Projekt anfragen
                </Button>
                <Button href="/projekte" variant="secondary" size="lg">
                  Alle Projekte
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <ImageCarousel images={gallery} />
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
