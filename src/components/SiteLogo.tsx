"use client";

import Image from "next/image";
import { useState } from "react";
import { LOGO_PATHS } from "@/lib/images";
import { site } from "@/lib/site";

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
      <span
        className={`font-serif text-lg font-semibold tracking-tight ${
          variant === "footer" || variant === "darkCard" ? "text-cream-50" : "text-charcoal"
        } ${className ?? ""}`}
      >
        {site.shortName}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${site.name} logo`}
      width={width}
      height={height}
      unoptimized
      priority={priority}
      className={`${className} ${useNegativeFilter ? "brightness-0 invert" : ""} ${toneClass} shrink-0`}
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
