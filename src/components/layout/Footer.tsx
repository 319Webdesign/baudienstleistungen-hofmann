import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-light">
            Baudienstleistungen
          </p>
          <p className="mt-1 text-2xl font-bold">Hofmann</p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-light">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-orange-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-light">
            Leistungen
          </h2>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="text-sm text-white/75 transition-colors hover:text-orange-light"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-light">
            Kontakt
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-start gap-3 transition-colors hover:text-orange-light"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.emailHref}
                className="inline-flex items-start gap-3 transition-colors hover:text-orange-light"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden />
              <span>
                {siteConfig.contact.address.full}
                <br />
                Einsatzgebiet: {siteConfig.contact.serviceArea}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            {siteConfig.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-orange-light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
