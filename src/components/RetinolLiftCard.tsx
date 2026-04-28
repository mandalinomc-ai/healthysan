"use client";

import Image from "next/image";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { RemotePurchaseButton } from "./RemotePurchaseButton";

/** Protocollo Bioline Retinol — immagine fissa retinol.jpg */
export function RetinolLiftCard({
  title,
  desc,
  indexLabel,
}: {
  title: string;
  desc: string;
  indexLabel: string;
}) {
  return (
    <article className="glass-card overflow-hidden transition duration-300 hover:-translate-y-0.5 hover:shadow-lift md:grid md:grid-cols-[minmax(0,200px)_1fr] md:gap-0 md:p-0 lg:grid-cols-[minmax(0,220px)_1fr]">
      <div className="relative aspect-[3/4] min-h-[200px] w-full border-b border-white/10 md:border-b-0 md:border-r">
        <Image
          src={images.treatmentRetinol}
          alt={`Protocollo Bioline Retinol — ${title}`}
          fill
          unoptimized
          sizes="(min-width: 768px) 220px, 100vw"
          className={`object-cover ${IMAGE_POLISH}`}
        />
      </div>
      <div className="flex flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 font-serif text-sm font-semibold text-charcoal">
            {indexLabel}
          </span>
          <h4 className="font-serif text-lg text-charcoal">{title}</h4>
        </div>
        <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-charcoal/70">{desc}</p>
        <RemotePurchaseButton itemName={title} className="mt-4" label="Acquista a Distanza" />
      </div>
    </article>
  );
}
