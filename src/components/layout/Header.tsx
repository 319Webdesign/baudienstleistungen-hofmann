"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-anthracite/8 bg-white/95 shadow-[0_8px_30px_rgba(28,31,33,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid h-[var(--header-height)] max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link
          href="/"
          className="relative flex shrink-0 items-center justify-self-start"
          aria-label={`${siteConfig.name} – Startseite`}
        >
          <Image
            src="/bh-logo.png"
            alt="Baudienstleistungen Hofmann"
            width={160}
            height={160}
            priority
            className="h-[4.25rem] w-auto object-contain sm:h-[4.75rem]"
          />
        </Link>

        <nav
          className="hidden items-center justify-center gap-1 lg:flex"
          aria-label="Hauptnavigation"
        >
          {siteConfig.navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-base font-medium transition-colors",
                  active
                    ? "text-orange"
                    : "text-anthracite/80 hover:text-orange",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center justify-self-end lg:flex">
          <Button href="/kontakt" size="md">
            Projekt anfragen
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-md border border-anthracite/10 bg-white lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <span className="relative block h-4 w-5" aria-hidden>
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-full bg-anthracite transition-all duration-300",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-full bg-anthracite transition-all duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-full bg-anthracite transition-all duration-300",
                open && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
