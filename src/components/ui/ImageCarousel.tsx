"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryMedia } from "@/data/images";

type ImageCarouselProps = {
  items: GalleryMedia[];
  className?: string;
};

const SWIPE_THRESHOLD = 50;

function playVideo(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.setAttribute("muted", "");
  video.playsInline = true;

  const start = () => {
    void video.play().catch(() => {});
  };

  if (video.readyState >= 2) {
    video.currentTime = 0;
    start();
    return;
  }

  const onCanPlay = () => {
    video.removeEventListener("canplay", onCanPlay);
    video.currentTime = 0;
    start();
  };

  video.addEventListener("canplay", onCanPlay);
  video.load();
}

export function ImageCarousel({ items, className }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(() => new Set([0]));
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const swipeStartX = useRef<number | null>(null);
  const total = items.length;

  const imageIndexes = useMemo(
    () =>
      items
        .map((item, itemIndex) => (item.type === "image" ? itemIndex : -1))
        .filter((itemIndex) => itemIndex >= 0),
    [items],
  );

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  const goToAdjacentImage = useCallback(
    (direction: -1 | 1) => {
      if (imageIndexes.length === 0) return;
      const currentPos = imageIndexes.indexOf(index);
      const from =
        currentPos >= 0
          ? currentPos
          : direction === 1
            ? -1
            : imageIndexes.length;
      const nextPos =
        (from + direction + imageIndexes.length) % imageIndexes.length;
      goTo(imageIndexes[nextPos]);
    },
    [goTo, imageIndexes, index],
  );

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

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
      playVideo(video);
    });
  }, [index]);

  useEffect(() => {
    if (!lightboxOpen) return;
    if (items[index]?.type === "image") return;
    if (imageIndexes.length === 0) {
      setLightboxOpen(false);
      return;
    }
    goTo(imageIndexes[0]);
  }, [goTo, imageIndexes, index, items, lightboxOpen]);

  useEffect(() => {
    if (total <= 1 && !lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxOpen) {
          event.preventDefault();
          closeLightbox();
        }
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (lightboxOpen) goToAdjacentImage(-1);
        else previous();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (lightboxOpen) goToAdjacentImage(1);
        else next();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [
    closeLightbox,
    goToAdjacentImage,
    lightboxOpen,
    next,
    previous,
    total,
  ]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const onLightboxPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    swipeStartX.current = event.clientX;
  };

  const onLightboxPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return;
    const deltaX = event.clientX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) goToAdjacentImage(1);
    else goToAdjacentImage(-1);
  };

  const onLightboxPointerCancel = () => {
    swipeStartX.current = null;
  };

  if (total === 0) return null;

  const active = items[index];
  const lightboxImage =
    active?.type === "image"
      ? active
      : imageIndexes.length > 0
        ? items[imageIndexes[0]]
        : null;
  const showLightbox = lightboxOpen && lightboxImage?.type === "image";

  return (
    <>
      <div className={cn("w-full min-w-0 max-w-full space-y-4", className)}>
        <div className="relative aspect-[16/10] w-full max-w-full overflow-hidden rounded-xl bg-surface shadow-lg">
          {items.map((item, itemIndex) => {
            if (!mounted.has(itemIndex)) return null;
            const isActive = itemIndex === index;

            if (item.type === "video") {
              return (
                <video
                  key={item.src}
                  ref={(node) => {
                    if (!node) {
                      videoRefs.current.delete(itemIndex);
                      return;
                    }
                    videoRefs.current.set(itemIndex, node);
                    if (itemIndex === index) playVideo(node);
                  }}
                  src={item.src}
                  controls={isActive}
                  muted
                  playsInline
                  preload={isActive ? "auto" : "metadata"}
                  className={cn(
                    "absolute inset-0 h-full w-full bg-anthracite object-contain transition-opacity duration-300",
                    isActive
                      ? "z-[1] opacity-100"
                      : "pointer-events-none z-0 opacity-0",
                  )}
                  aria-label={item.alt}
                />
              );
            }

            return (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightboxOpen(true)}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  isActive
                    ? "z-[1] opacity-100"
                    : "pointer-events-none z-0 opacity-0",
                )}
                aria-label="Bild in Großansicht öffnen"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  quality={75}
                  priority={itemIndex === 0}
                  loading={itemIndex === 0 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </button>
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

      {showLightbox ? (
        <div
          className="fixed inset-0 z-[100] flex touch-none items-center justify-center bg-primary/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Bildgroßansicht"
          onClick={closeLightbox}
          onPointerDown={onLightboxPointerDown}
          onPointerUp={onLightboxPointerUp}
          onPointerCancel={onLightboxPointerCancel}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            className="absolute right-4 top-4 z-[2] flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-orange"
            aria-label="Großansicht schließen"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>

          {imageIndexes.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToAdjacentImage(-1);
                }}
                className="absolute left-4 top-1/2 z-[2] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-orange"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="h-7 w-7" aria-hidden />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goToAdjacentImage(1);
                }}
                className="absolute right-4 top-1/2 z-[2] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-orange"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="h-7 w-7" aria-hidden />
              </button>
              <div className="absolute bottom-4 left-1/2 z-[2] -translate-x-1/2 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                {imageIndexes.indexOf(index) + 1} / {imageIndexes.length}
              </div>
            </>
          ) : null}

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              fill
              sizes="100vw"
              quality={85}
              className="pointer-events-none object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
