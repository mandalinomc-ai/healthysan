"use client";

import Image from "next/image";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { RemotePurchaseButton } from "./RemotePurchaseButton";
import { Reveal } from "./Reveal";
import { TiltCard } from "./motion/TiltCard";
import { usePrefersReducedMotion } from "./motion/usePrefersReducedMotion";

const products = [
  {
    name: "Kit Fragoline di Bosco HealthySan",
    src: images.productKitFragoline,
    description:
      "Un trattamento sensoriale completo alle fragoline di bosco per nutrire la pelle e deliziare i sensi.",
  },
  {
    name: "Crema Viso Anti-Età HealthySan",
    src: images.productCremaAntiEta,
    description:
      "Formulazione avanzata per contrastare i segni del tempo e donare luminosità immediata.",
  },
  {
    name: "Crema Viso Liftante HealthySan",
    src: images.productCremaLiftante,
    description:
      "Effetto lifting immediato e idratazione profonda per una pelle visibilmente più giovane.",
  },
] as const;

export function ProdottiEsclusivi() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="prodotti-esclusivi"
      className="border-t border-gold-400/20 bg-gradient-to-b from-cream-50 via-white to-cream-100/90 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.38em] text-gold-700">
            Linea HealthySan
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-4xl text-center text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-tight text-charcoal">
            L&apos;eccellenza a casa tua
          </h2>
          <div className="mx-auto mt-6 h-px w-36 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-sm leading-relaxed text-charcoal/75 sm:text-base">
            Selezionati per estendere i benefici dei rituali in cabina.{" "}
            <strong className="font-semibold text-charcoal">Non sono in vendita online</strong>
            : li trovi solo in sede, con consiglio personalizzato del team.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            return (
              <Reveal key={p.name} delay={i * 0.06}>
                <article className="glass-card overflow-hidden rounded-[1.5rem] p-4 shadow-float ring-1 ring-white/10 sm:p-5">
                  <TiltCard className="relative">
                    <div
                      className={`relative mx-auto aspect-[4/5] max-w-[220px] overflow-hidden rounded-2xl bg-charcoal/5 ${
                        reduced ? "" : "motion-reduce:animate-none animate-bob"
                      }`}
                      style={
                        reduced
                          ? undefined
                          : { animationDuration: `${4.8 + i * 0.35}s` }
                      }
                    >
                      <Image
                        src={p.src}
                        alt={p.name}
                        fill
                        priority={i === 0}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 35vw, 70vw"
                        unoptimized
                        className={`object-contain p-1 ${IMAGE_POLISH}`}
                      />
                    </div>
                  </TiltCard>
                  <div className="pt-5">
                    <p className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold-700">
                      Esclusiva in sede
                    </p>
                    <h3 className="font-display mt-2 text-xl font-semibold leading-tight text-charcoal">
                      {p.name}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/78">
                      {p.description}
                    </p>
                    <RemotePurchaseButton
                      itemName={p.name}
                      className="mt-5"
                      label="Acquista a distanza"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
