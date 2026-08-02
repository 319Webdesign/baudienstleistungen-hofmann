"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/data/images";

type ImageCarouselProps = {
  images: ImageAsset[];
  className?: string;
};

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(() => new Set([0]));
  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const preloadIndexes = useMemo(() => {
    if (total <= 1) return [0];
    return [
      index,
      (index - 1 + total) % total,
      (index + 1) % total,
    ];
  }, [index, total]);

  useEffect(() => {
    setMounted((prev) => {
      const nextSet = new Set(prev);
      for (const i of preloadIndexes) nextSet.add(i);
      return nextSet;
    });
  }, [preloadIndexes]);

  useEffect(() => {
    if (total <= 1) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous, total]);

  if (total === 0) return null;

  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface shadow-lg">
        {images.map((image, imageIndex) => {
          if (!mounted.has(imageIndex)) return null;

          const isActive = imageIndex === index;

          return (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              quality={75}
              priority={imageIndex === 0}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              className={cn(
                "object-cover transition-opacity duration-300",
                isActive ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            />
          );
        })}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Vorheriges Bild"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-primary/85 text-white transition-colors hover:bg-orange"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nächstes Bild"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-primary/85 text-white transition-colors hover:bg-orange"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
            <div className="absolute bottom-3 right-3 z-10 rounded-md bg-primary/85 px-3 py-1 text-xs font-semibold tracking-wide text-white">
              {index + 1} / {total}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goTo(imageIndex)}
              aria-label={`Bild ${imageIndex + 1} anzeigen`}
              aria-current={imageIndex === index}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                imageIndex === index
                  ? "border-orange"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="96px"
                quality={50}
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
