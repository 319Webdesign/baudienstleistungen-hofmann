"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryMedia } from "@/data/images";

type ImageCarouselProps = {
  items: GalleryMedia[];
  className?: string;
};

function videoMimeType(src: string): string | undefined {
  const lower = src.toLowerCase();
  if (lower.endsWith(".mp4") || lower.endsWith(".m4v")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".mov")) return "video/quicktime";
  return undefined;
}

export function ImageCarousel({ items, className }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(() => new Set([0]));
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const total = items.length;

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
    return [index, (index - 1 + total) % total, (index + 1) % total];
  }, [index, total]);

  useEffect(() => {
    setMounted((prev) => {
      const nextSet = new Set(prev);
      for (const i of preloadIndexes) nextSet.add(i);
      return nextSet;
    });
  }, [preloadIndexes]);

  useEffect(() => {
    videoRefs.current.forEach((video, videoIndex) => {
      if (videoIndex !== index) {
        video.pause();
        return;
      }

      // Autoplay erfordert in den meisten Browsern muted.
      video.muted = true;
      video.currentTime = 0;
      void video.play().catch(() => {
        // Autoplay kann vom Browser blockiert werden – Controls bleiben nutzbar.
      });
    });
  }, [index]);

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
    <div className={cn("w-full min-w-0 max-w-full space-y-4", className)}>
      <div className="relative aspect-[16/10] w-full max-w-full overflow-hidden rounded-xl bg-surface shadow-lg">
        {items.map((item, itemIndex) => {
          if (!mounted.has(itemIndex)) return null;

          const isActive = itemIndex === index;

          if (item.type === "video") {
            const mime = videoMimeType(item.src);

            return (
              <video
                key={item.src}
                ref={(node) => {
                  if (!node) {
                    videoRefs.current.delete(itemIndex);
                    return;
                  }

                  videoRefs.current.set(itemIndex, node);
                  if (itemIndex === index) {
                    node.muted = true;
                    void node.play().catch(() => {});
                  }
                }}
                controls={isActive}
                muted
                playsInline
                autoPlay={isActive}
                preload={isActive ? "auto" : "none"}
                className={cn(
                  "absolute inset-0 h-full w-full bg-anthracite object-contain transition-opacity duration-300",
                  isActive ? "opacity-100" : "pointer-events-none opacity-0",
                )}
                aria-label={item.alt}
              >
                <source src={item.src} type={mime} />
              </video>
            );
          }

          return (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 720px"
              quality={75}
              priority={itemIndex === 0}
              loading={itemIndex === 0 ? "eager" : "lazy"}
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
              aria-label="Vorheriges Medium"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-primary/85 text-white transition-colors hover:bg-orange"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nächstes Medium"
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
        <div className="flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1">
          {items.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              onClick={() => goTo(itemIndex)}
              aria-label={
                item.type === "video"
                  ? `Video ${itemIndex + 1} anzeigen`
                  : `Bild ${itemIndex + 1} anzeigen`
              }
              aria-current={itemIndex === index}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                itemIndex === index
                  ? "border-orange"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                    aria-hidden
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-anthracite/35">
                    <Play
                      className="h-5 w-5 fill-white text-white"
                      aria-hidden
                    />
                  </span>
                </>
              ) : (
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="96px"
                  quality={50}
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
