import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/seo";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/leistungen",
    "/projekte",
    "/ueber-mich",
    "/kontakt",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: canonicalUrl(path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: canonicalUrl(service.href),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: canonicalUrl(project.href),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
