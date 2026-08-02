import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { ImageAsset } from "@/data/images";

const IMAGE_EXT = /\.(webp|png|jpe?g)$/i;

/**
 * Lädt alle Bilder aus public/projekte/{folder}.
 * Nur auf dem Server nutzbar (nicht in Client Components importieren).
 */
export function loadProjectGallery(
  folder: string,
  altPrefix: string,
  preferredCover?: string,
  fallback?: ImageAsset,
): ImageAsset[] {
  const dir = path.join(process.cwd(), "public", "projekte", folder);

  if (fs.existsSync(dir)) {
    const files = fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXT.test(file))
      .sort((a, b) => a.localeCompare(b, "de", { numeric: true }));

    const ordered = preferredCover
      ? [
          ...files.filter((file) => file === preferredCover),
          ...files.filter((file) => file !== preferredCover),
        ]
      : files;

    if (ordered.length > 0) {
      return ordered.map((file, index) => ({
        src: `/projekte/${folder}/${file}`,
        alt: `${altPrefix} – Foto ${index + 1}`,
      }));
    }
  }

  return fallback ? [fallback] : [];
}
