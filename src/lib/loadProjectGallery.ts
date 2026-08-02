import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { GalleryMedia, ImageAsset } from "@/data/images";

const VIDEO_EXT = /\.(mov|mp4|webm|m4v)$/i;
const MEDIA_EXT = /\.(webp|png|jpe?g|mov|mp4|webm|m4v)$/i;

function mediaType(file: string): GalleryMedia["type"] {
  return VIDEO_EXT.test(file) ? "video" : "image";
}

/**
 * Lädt alle Bilder und Videos aus public/projekte/{folder}.
 * Nur auf dem Server nutzbar (nicht in Client Components importieren).
 */
export function loadProjectGallery(
  folder: string,
  altPrefix: string,
  preferredCover?: string,
  fallback?: ImageAsset,
): GalleryMedia[] {
  const dir = path.join(process.cwd(), "public", "projekte", folder);

  if (fs.existsSync(dir)) {
    const files = fs
      .readdirSync(dir)
      .filter((file) => MEDIA_EXT.test(file))
      .sort((a, b) => a.localeCompare(b, "de", { numeric: true }));

    const ordered = preferredCover
      ? [
          ...files.filter((file) => file === preferredCover),
          ...files.filter((file) => file !== preferredCover),
        ]
      : files;

    if (ordered.length > 0) {
      let imageCount = 0;
      let videoCount = 0;

      return ordered.map((file) => {
        const type = mediaType(file);
        if (type === "video") {
          videoCount += 1;
          return {
            src: `/projekte/${folder}/${file}`,
            alt: `${altPrefix} – Video ${videoCount}`,
            type,
          };
        }

        imageCount += 1;
        return {
          src: `/projekte/${folder}/${file}`,
          alt: `${altPrefix} – Foto ${imageCount}`,
          type,
        };
      });
    }
  }

  if (!fallback) return [];

  return [
    {
      src: fallback.src,
      alt: fallback.alt,
      type: "image",
    },
  ];
}
