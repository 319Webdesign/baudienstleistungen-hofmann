import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-orange/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-light">
            Nächster Schritt
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Sie planen ein Bauprojekt?
          </h2>
          <span
            className="mx-auto mt-4 block h-1 w-14 rounded-full bg-orange"
            aria-hidden
          />
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Beschreiben Sie kurz Ihr Vorhaben. {siteConfig.owner} meldet sich
            persönlich bei Ihnen und bespricht die nächsten Schritte.
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
              Jetzt anrufen
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
