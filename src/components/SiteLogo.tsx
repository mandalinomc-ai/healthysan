"use client";

import Image from "next/image";
import { useState } from "react";
import { LOGO_PATHS } from "@/lib/images";

type SiteLogoProps = {
  className?: string;
  /** Header chiaro: contrasto su fondo cream — logo scuro può usare filtri. */
  variant?: "header" | "footer" | "darkCard";
  /** Deprecato: preferisci `variant`. Se impostato, ha precedenza sulla logica variant. */
  inverted?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function SiteLogo({
  className = "h-9 w-auto object-contain sm:h-10",
  variant = "header",
  inverted,
  priority = false,
  width = 168,
  height = 48,
}: SiteLogoProps) {
  const [index, setIndex] = useState(0);
  const src = LOGO_PATHS[index] ?? LOGO_PATHS[0];
  const exhausted = index >= LOGO_PATHS.length;

  /** Applica inversione solo se esplicitamente richiesta (evita regressioni logo invisibile). */
  const useNegativeFilter = Boolean(inverted);

  const toneClass =
    variant === "footer"
      ? "drop-shadow-[0_2px_14px_rgba(212,175,55,0.2)] saturate-[1.05]"
      : variant === "darkCard"
        ? "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]"
        : "";

  if (exhausted) {
    return (
      <div className="inline-flex items-center">
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold tracking-wider ${
            variant === "footer" || variant === "darkCard"
              ? "border-gold-300/45 bg-white/10 text-gold-200"
              : "border-charcoal/25 bg-white text-charcoal"
          }`}
          aria-hidden
        >
          HS
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      priority={priority}
      quality={100}
      className={`${className} ${useNegativeFilter ? "brightness-0 invert" : ""} ${toneClass} shrink-0 [image-rendering:-webkit-optimize-contrast]`}
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
