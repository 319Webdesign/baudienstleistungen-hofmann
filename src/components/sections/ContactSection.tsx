import { Mail, MapPin, Phone, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function ContactSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" id="kontakt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Kontakt"
            title="Projekt anfragen"
            description="Schildern Sie Ihr Vorhaben – mit oder ohne Planunterlagen. Die Einschätzung erfolgt persönlich und praxisnah."
          />
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <aside className="space-y-5 rounded-xl bg-primary p-6 text-white sm:p-8">
              <h3 className="text-xl font-bold text-white">
                Direkter Draht zu {siteConfig.owner}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                Kein Callcenter, kein anonymes Ticket-System – Ihre Anfrage geht
                direkt an den Ansprechpartner vor Ort.
              </p>

              <ul className="space-y-4 pt-2">
                <ContactLine
                  icon={Phone}
                  label="Telefon"
                  value={siteConfig.contact.phone}
                  href={siteConfig.contact.phoneHref}
                />
                <ContactLine
                  icon={Mail}
                  label="E-Mail"
                  value={siteConfig.contact.email}
                  href={siteConfig.contact.emailHref}
                />
                <ContactLine
                  icon={MapPin}
                  label="Adresse"
                  value={siteConfig.contact.address.full}
                />
                <ContactLine
                  icon={Navigation}
                  label="Einsatzgebiet"
                  value={siteConfig.contact.serviceArea}
                />
              </ul>

              <p className="border-t border-white/10 pt-5 text-sm text-white/60">
                {siteConfig.hours.label}
                <br />
                {siteConfig.hours.weekdays}
              </p>
            </aside>
          </FadeIn>

          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange/20 text-orange-light">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-white/50">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-medium text-white">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="flex items-start gap-3 transition-colors hover:text-orange-light"
        >
          {content}
        </a>
      </li>
    );
  }

  return <li className="flex items-start gap-3">{content}</li>;
}
