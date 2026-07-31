"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type FadeInDirection = "up" | "from-center-left" | "from-center-right";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  direction?: FadeInDirection;
  as?: "div" | "section" | "article" | "li";
};

const directionClass: Record<FadeInDirection, string> = {
  up: "reveal",
  "from-center-left": "reveal-from-center-left",
  "from-center-right": "reveal-from-center-right",
};

export function FadeIn({
  children,
  className,
  delay = 0,
  id,
  direction = "up",
  as: Tag = "div",
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={cn(directionClass[direction], className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
