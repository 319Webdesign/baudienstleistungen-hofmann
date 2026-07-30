import { siteConfig } from "@/lib/siteConfig";
import type { FAQItem } from "@/data/faqs";

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ConstructionBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/og-image.jpg`,
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
      jobTitle: "Maurermeister & staatlich geprüfter Bautechniker",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.zip,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: "DE",
    },
    areaServed: siteConfig.contact.serviceArea,
    openingHours: siteConfig.hours.weekdays,
  };
}

export function buildFaqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; href: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}
