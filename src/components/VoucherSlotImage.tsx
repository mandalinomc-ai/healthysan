"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { voucherGalleryPaths } from "@/lib/images";

type Props = {
  slot1Based: number;
  sizes: string;
  className?: string;
};

/** Prova `voucher N.jpg` / `.png` (varianti nome) finché un file esiste in `/public/images/`. */
export function VoucherSlotImage({ slot1Based, sizes, className = "" }: Props) {
  const candidates = voucherGalleryPaths(slot1Based);
  const [index, setIndex] = useState(0);
  const exhausted = index >= candidates.length;

  const onError = useCallback(() => {
    setIndex((i) => i + 1);
  }, []);

  if (exhausted) {
    return (
      <div
        className={`flex aspect-[4/5] flex-col items-center justify-center rounded-xl border border-dashed border-gold-500/35 bg-cream-100/80 p-4 text-center ${className}`}
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-700">
          Voucher {slot1Based}
        </span>
        <span className="mt-2 font-sans text-[11px] leading-snug text-charcoal/55">
          Disponibile in sede
        </span>
      </div>
    );
  }

  const src = candidates[index]!;

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-xl border border-gold-500/20 bg-cream-100 ${className}`}
    >
      <Image
        src={src}
        alt={`Voucher regalo HealthySan — variante ${slot1Based}`}
        fill
        unoptimized
        sizes={sizes}
        className={`object-contain p-1.5 ${IMAGE_POLISH}`}
        onError={onError}
      />
    </div>
  );
}
