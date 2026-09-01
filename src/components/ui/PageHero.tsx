import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
  imageClassName?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  compact?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageClassName,
  breadcrumbs,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-primary text-white",
        compact ? "min-h-[40vh]" : "min-h-[48vh]",
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className={cn("object-cover", imageClassName)}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/50"
        aria-hidden
      />

      <div
        className={cn(
          "relative mx-auto flex max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8",
          compact ? "min-h-[40vh] pb-12 pt-24" : "min-h-[48vh] pb-14 pt-28",
        )}
      >
        {breadcrumbs ? (
          <nav aria-label="Brotkrumen" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-white/65">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1">
                  {index > 0 ? (
                    <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                  ) : null}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-orange-light"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-light">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
