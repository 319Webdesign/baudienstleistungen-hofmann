import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { FadeIn } from "@/components/ui/FadeIn";

type ServiceCardProps = {
  service: Service;
  index?: number;
  badge?: string;
};

export function ServiceCard({ service, index = 0, badge }: ServiceCardProps) {
  const Icon = service.icon;
  const label = badge ?? service.shortTitle.toUpperCase();

  return (
    <FadeIn delay={index * 80} className="h-full">
      <Link
        href={service.href}
        className="group relative block h-full min-h-[420px] overflow-hidden rounded-[1.25rem] shadow-[0_12px_40px_rgba(28,61,90,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(28,61,90,0.18)] sm:min-h-[460px] lg:min-h-[480px]"
        aria-label={`${service.title} – Mehr erfahren`}
      >
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
          aria-hidden
        />

        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-md sm:left-5 sm:top-5 sm:h-12 sm:w-12">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span className="inline-block rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            {label}
          </span>
          <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
            {service.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/90">
            {service.description}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
