"use client";

import { mapsDirectionsUrl } from "@/lib/site";

export function MapsFloat() {
  return (
    <a
      href={mapsDirectionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-[110] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-charcoal to-charcoal-700 text-gold-300 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-4 ring-white/95 transition hover:scale-105 hover:shadow-[0_24px_60px_-12px_rgba(212,175,55,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 sm:bottom-7 sm:left-7"
      aria-label="Apri Google Maps e avvia Come Arrivare verso HealthySan"
    >
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden>
        <path d="M12 2a7 7 0 0 0-7 7c0 5.79 6.15 12.23 6.41 12.5a.85.85 0 0 0 1.18 0C12.85 21.23 19 14.79 19 9a7 7 0 0 0-7-7Zm0 10.2A3.2 3.2 0 1 1 12 5.8a3.2 3.2 0 0 1 0 6.4Z" />
      </svg>
    </a>
  );
}
