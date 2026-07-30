/**
 * Google-Bewertungsteaser für den Hero.
 * Stil: Logo in weißem Kreis, Sterne darüber, Text „5/5 Sterne - Google-Bewertungen“.
 * TODO: googleUrl durch echten Google-Unternehmensprofil-Link ersetzen.
 */
export function GoogleRatingTeaser({
  href = "#",
}: {
  href?: string;
}) {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="mt-8 inline-flex items-center gap-2.5 rounded-xl border border-white/35 bg-white/15 px-3 py-2 shadow-sm backdrop-blur-md transition-colors hover:bg-white/20 sm:gap-3 sm:px-3.5 sm:py-2.5"
      aria-label="5 von 5 Sternen – Google-Bewertungen"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-9 sm:w-9">
        <GoogleMark className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>

      <span className="flex flex-col gap-0.5">
        <span className="flex items-center gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} className="h-3.5 w-3.5 text-[#FABB05]" />
          ))}
        </span>
        <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
          5/5 Sterne - Google-Bewertungen
        </span>
      </span>
    </a>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.3 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-1.3 3.7-4.5 6.4-8.3 7.1l.1.1 6.2 5.2C34.8 41.3 44 35 44 24c0-1.3-.1-2.6-.4-3.9z"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
    </svg>
  );
}
