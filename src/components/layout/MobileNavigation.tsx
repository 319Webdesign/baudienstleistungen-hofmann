"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-0 top-[var(--header-height)] z-40 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        type="button"
        aria-label="Menü schließen"
        className={cn(
          "absolute inset-0 bg-anthracite/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      <nav
        aria-label="Mobile Navigation"
        className={cn(
          "absolute right-0 top-0 flex h-[calc(100dvh-var(--header-height))] w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {siteConfig.navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-md px-3 py-3 text-lg font-semibold transition-colors",
                      active
                        ? "bg-surface text-orange"
                        : "text-anthracite hover:bg-surface hover:text-orange",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-3 border-t border-anthracite/8 p-6">
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-3 text-sm font-medium text-anthracite"
          >
            <Phone className="h-5 w-5 text-orange" aria-hidden />
            {siteConfig.contact.phone}
          </a>
          <Button href="/kontakt" className="w-full">
            Projekt anfragen
          </Button>
        </div>
      </nav>
    </div>
  );
}
