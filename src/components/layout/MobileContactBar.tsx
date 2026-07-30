"use client";

import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-anthracite/10 bg-white/95 px-3 py-2 shadow-[0_-8px_30px_rgba(28,31,33,0.12)] backdrop-blur-md md:hidden">
      <nav
        aria-label="Schnellkontakt"
        className="mx-auto grid max-w-lg grid-cols-3 gap-2"
      >
        <a
          href={siteConfig.contact.phoneHref}
          className="flex flex-col items-center justify-center gap-1 rounded-md bg-surface px-2 py-2 text-xs font-semibold text-anthracite transition-colors active:bg-orange active:text-white"
        >
          <Phone className="h-5 w-5 text-orange" aria-hidden />
          Anrufen
        </a>
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-md bg-surface px-2 py-2 text-xs font-semibold text-anthracite transition-colors active:bg-orange active:text-white"
        >
          <MessageCircle className="h-5 w-5 text-orange" aria-hidden />
          WhatsApp
        </a>
        <Link
          href="/kontakt"
          className="flex flex-col items-center justify-center gap-1 rounded-md bg-orange px-2 py-2 text-xs font-semibold text-white transition-colors active:bg-orange-light"
        >
          <Send className="h-5 w-5" aria-hidden />
          Anfrage
        </Link>
      </nav>
    </div>
  );
}
