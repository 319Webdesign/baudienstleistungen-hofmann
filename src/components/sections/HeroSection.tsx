import Image from "next/image";
import { Check } from "lucide-react";
import { images } from "@/data/images";
import { heroTrustItems } from "@/data/content";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { GoogleRatingTeaser } from "@/components/ui/GoogleRatingTeaser";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-primary text-white">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_72%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-start px-4 pb-20 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-light">
            Baudienstleistungen Hofmann
          </p>
          <h1 className="mt-4 text-[2.5rem] font-bold leading-[1.15] text-white sm:text-5xl lg:text-[3.25rem]">
            Ihr Baudienstleister für
            <br />
            Rohbau, Umbau und Betonarbeiten in Reinheim
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Von Rohbau und Betonarbeiten über Umbau und Sanierung bis zu
            technisch anspruchsvollen Sonderprojekten – persönlich geplant und
            fachgerecht umgesetzt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/kontakt" size="md">
              Projekt anfragen
            </Button>
            <Button
              href="/leistungen"
              size="md"
              variant="outline"
              className="border-white/40 text-white hover:bg-white hover:text-primary"
            >
              Leistungen ansehen
            </Button>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {heroTrustItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange/20">
                  <Check className="h-3.5 w-3.5 text-orange-light" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <GoogleRatingTeaser href={siteConfig.social.googleReviews} />
        </div>
      </div>
    </section>
  );
}
