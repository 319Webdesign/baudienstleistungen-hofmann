import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/leistungen",
    "/projekte",
    "/ueber-mich",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${base}${service.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
