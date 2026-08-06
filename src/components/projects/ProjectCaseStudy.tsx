import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Phone,
  Quote,
  ArrowUpRight,
  ClipboardList,
  Wrench,
  HardHat,
  FileCheck,
} from "lucide-react";
import type { Project } from "@/data/projects";
import type { GalleryMedia } from "@/data/images";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { metaIconMap, workIconMap } from "@/components/projects/projectIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

type ProjectCaseStudyProps = {
  project: Project;
  gallery: GalleryMedia[];
  related: Project[];
};

const processIcons = [ClipboardList, Wrench, HardHat, FileCheck];

function galleryImages(gallery: GalleryMedia[]): GalleryMedia[] {
  return gallery.filter((item) => item.type === "image");
}

function findGalleryImageByFile(
  images: GalleryMedia[],
  fileName: string,
): GalleryMedia | undefined {
  const encoded = encodeURIComponent(fileName);
  return images.find(
    (item) =>
      item.src.endsWith(`/${fileName}`) || item.src.endsWith(`/${encoded}`),
  );
}

export function ProjectCaseStudy({
  project,
  gallery,
  related,
}: ProjectCaseStudyProps) {
  const imagesOnly = galleryImages(gallery);
  const fallbackImage = {
    ...project.image,
    type: "image" as const,
  };
  const challengeImage = imagesOnly[1] ?? imagesOnly[0] ?? fallbackImage;
  const midImageA =
    (project.midFiles?.[0]
      ? findGalleryImageByFile(imagesOnly, project.midFiles[0])
      : undefined) ??
    imagesOnly[2] ??
    imagesOnly[0] ??
    fallbackImage;
  const midImageB =
    (project.midFiles?.[1]
      ? findGalleryImageByFile(imagesOnly, project.midFiles[1])
      : undefined) ??
    imagesOnly[3] ??
    imagesOnly[1] ??
    midImageA;
  const resultImage =
    imagesOnly[imagesOnly.length - 1] ?? imagesOnly[0] ?? fallbackImage;

  const metaItems = [
    { key: "location" as const, label: "Ort", value: project.meta.location },
    {
      key: "completion" as const,
      label: "Fertigstellung",
      value: project.meta.completion,
    },
    {
      key: "duration" as const,
      label: "Bauzeit",
      value: project.meta.duration,
    },
    { key: "service" as const, label: "Leistung", value: project.meta.service },
    { key: "client" as const, label: "Auftraggeber", value: project.meta.client },
    { key: "size" as const, label: "Projektgröße", value: project.meta.size },
  ].filter((item) => Boolean(item.value));

  const trustPoints = [
    "Zuverlässige Terminplanung",
    "Saubere Ausführung",
    "Hochwertige Materialien",
    "Persönliche Beratung",
    "Langjährige Erfahrung",
    "Fachgerechte Umsetzung",
  ];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Startseite", href: "/" },
          { name: "Projekte", href: "/projekte" },
          { name: project.title, href: project.href },
        ])}
      />
      <JsonLd data={buildFaqJsonLd(project.faqs)} />

      {/* 1. Case-Study Hero */}
      <section className="bg-white pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Brotkrumen" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-orange">
                  Startseite
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/projekte"
                  className="transition-colors hover:text-orange"
                >
                  Projekte
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-primary">{project.title}</li>
            </ol>
          </nav>

          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:items-start">
            <FadeIn direction="from-center-left" className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange">
                {project.category}
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                {project.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {project.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/kontakt" size="lg">
                  Projekt anfragen
                </Button>
                <Button href="/projekte" variant="secondary" size="lg">
                  Alle Projekte
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {metaItems.map((item) => {
                  const Icon = metaIconMap[item.key];
                  return (
                    <div
                      key={item.key}
                      className="rounded-xl border border-primary/8 bg-surface px-4 py-4 transition-transform duration-500 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-2 text-orange">
                        <Icon className="h-4 w-4" aria-hidden />
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {item.label}
                        </p>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-primary">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
                <div className="rounded-xl border border-primary/8 bg-surface px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Medien
                  </p>
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {gallery.length} Aufnahme{gallery.length === 1 ? "" : "n"}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="from-center-right" delay={80} className="min-w-0">
              <ImageCarousel items={gallery} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Herausforderung */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn direction="from-center-left">
            <SectionHeading eyebrow="Ausgangslage" title="Herausforderung" />
            <p className="mt-5 text-muted leading-relaxed">{project.challenge}</p>
            <ul className="mt-6 space-y-3">
              {project.challengePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm font-medium text-primary"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="from-center-right" delay={80}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={challengeImage.src}
                alt={challengeImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Unsere Leistungen */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Umsetzung"
              title="Unsere Leistungen in diesem Projekt"
              description="Die wesentlichen Arbeitsschritte, die bei diesem Vorhaben fachgerecht ausgeführt wurden."
            />
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {project.works.map((work, index) => {
              const Icon = workIconMap[work.icon];
              return (
                <FadeIn key={work.title} delay={index * 60} className="h-full">
                  <article className="group h-full rounded-2xl border border-primary/8 bg-surface p-6 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(28,61,90,0.1)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-primary">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {work.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bildpaar */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          <FadeIn direction="from-center-left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={midImageA.src}
                alt={midImageA.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>
          <FadeIn direction="from-center-right" delay={80}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={midImageB.src}
                alt={midImageB.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Projektablauf */}
      <section className="bg-primary py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Ablauf"
              title="So ist das Projekt gelaufen"
              description="Von der ersten Einschätzung bis zur Fertigstellung – klar strukturiert und persönlich begleitet."
              light
            />
          </FadeIn>
          <ol className="mt-12 grid gap-5 lg:grid-cols-4">
            {project.process.map((step, index) => {
              const Icon = processIcons[index] ?? HardHat;
              return (
                <FadeIn
                  key={step.title}
                  delay={index * 70}
                  as="li"
                  className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange text-sm font-bold">
                      {index + 1}
                    </span>
                    <Icon className="h-5 w-5 text-orange-light" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                  {index < project.process.length - 1 ? (
                    <span
                      className="absolute -right-2.5 top-1/2 hidden h-px w-5 bg-orange/40 lg:block"
                      aria-hidden
                    />
                  ) : null}
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 7. Ergebnis */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn direction="from-center-left" className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={resultImage.src}
                alt={resultImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </FadeIn>
          <FadeIn direction="from-center-right" delay={80} className="order-1 lg:order-2">
            <SectionHeading eyebrow="Ergebnis" title="Das Ergebnis" />
            <p className="mt-5 text-muted leading-relaxed">{project.result}</p>
            <ul className="mt-6 space-y-3">
              {project.resultHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium text-primary"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Zitat */}
      {project.quote ? (
        <section className="bg-surface py-14 sm:py-16">
          <FadeIn className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Quote className="mx-auto h-10 w-10 text-orange" aria-hidden />
            <blockquote className="mt-5 text-xl font-medium leading-relaxed text-primary sm:text-2xl">
              „{project.quote}“
            </blockquote>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
              {siteConfig.owner} · Baudienstleistungen Hofmann
            </p>
          </FadeIn>
        </section>
      ) : null}

      {/* 8. Trust */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Vertrauen"
              title="Warum Baudienstleistungen Hofmann?"
              description="Persönliche Betreuung, handwerkliche Qualität und technische Kompetenz – in jedem Projekt."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point, index) => (
              <FadeIn key={point} delay={index * 50} className="h-full">
                <article className="flex h-full items-start gap-3 rounded-2xl border border-primary/8 bg-surface p-5 transition-transform duration-500 hover:-translate-y-1">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <h3 className="text-base font-bold text-primary">{point}</h3>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Weitere Referenzen */}
      {related.length > 0 ? (
        <section className="bg-surface py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Referenzen"
                title="Weitere Projekte"
                description="Ähnliche Vorhaben aus dem Portfolio von Baudienstleistungen Hofmann."
              />
            </FadeIn>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ProjectCard key={item.id} project={item} index={index} />
              ))}
            </div>
            <FadeIn className="mt-10 text-center">
              <Button href="/projekte" variant="secondary">
                Alle Projekte ansehen
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </FadeIn>
          </div>
        </section>
      ) : null}

      {/* 10. FAQ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <FadeIn className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
            <SectionHeading
              eyebrow="FAQ"
              title="Häufige Fragen zu diesem Projekt"
              description="Kurze Antworten rund um Ablauf, Leistungen und Zusammenarbeit."
            />
          </FadeIn>
          <FadeIn delay={80}>
            <Accordion items={project.faqs} />
          </FadeIn>
        </div>
      </section>

      {/* 11. Abschluss-CTA */}
      <section className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          aria-hidden
        >
          <Image
            src={project.image.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-light">
              Nächster Schritt
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Haben Sie ein ähnliches Bauprojekt geplant?
            </h2>
            <span
              className="mx-auto mt-4 block h-1 w-14 rounded-full bg-orange"
              aria-hidden
            />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Beschreiben Sie kurz Ihr Vorhaben. {siteConfig.owner} meldet sich
              persönlich und bespricht die nächsten Schritte.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/kontakt" size="lg">
                Projekt anfragen
              </Button>
              <Button
                href={siteConfig.contact.phoneHref}
                size="lg"
                variant="white"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Telefonisch kontaktieren
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
