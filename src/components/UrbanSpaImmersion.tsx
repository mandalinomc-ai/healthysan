"use client";

import Image from "next/image";
import Link from "next/link";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { usePrefersReducedMotion } from "./motion/usePrefersReducedMotion";

const tiles = [
  {
    id: "jacuzzi",
    src: images.spaJacuzzi,
    alt: "Jacuzzi — percorso acqua HealthySan Urban Spa",
    depth: 0,
  },
  {
    id: "sauna",
    src: images.spaSauna,
    alt: "Sauna — area benessere HealthySan Urban Spa",
    depth: 28,
  },
  {
    id: "dettaglio",
    src: images.spaDettaglio,
    alt: "Ambienti urban spa HealthySan — dettaglio",
    depth: -22,
  },
] as const;

function ContainedSpaVisual({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="glass-card flex min-h-[320px] items-center justify-center overflow-hidden p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/15 sm:min-h-[360px] sm:p-10">
      <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-[1.35rem] bg-cream-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-2 ring-white/25 ring-offset-4 ring-offset-cream-50/90 sm:max-w-[260px]">
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 220px, 260px"
          className={`object-contain p-2 ${IMAGE_POLISH}`}
          priority={priority}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent opacity-50"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function UrbanSpaImmersion() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="urban-spa"
      className="relative overflow-hidden border-t border-gold-500/15 bg-gradient-to-b from-cream-50 via-charcoal/[0.02] to-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(212,175,55,0.07),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.38em] text-charcoal-700">
            Urban Spa
          </p>
          <h2 className="font-display mt-4 text-center text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-charcoal">
            Urban spa nel centro storico
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Un&apos;oasi urbana dove le{" "}
            <strong className="font-medium text-charcoal">mura longobarde</strong> incontrano
            il design contemporaneo: esperienze singole o di coppia con{" "}
            <strong className="font-medium text-charcoal">vasca idromassaggio</strong>,{" "}
            <strong className="font-medium text-charcoal">sauna</strong>, bagno di vapore e
            massaggi su misura.
          </p>
        </Reveal>

        <div className="relative mt-16 md:mt-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {tiles.map((item, i) => (
              <ParallaxTile
                key={item.id}
                scrollYProgress={scrollYProgress}
                depth={item.depth}
                reduced={reduced}
                delay={i * 0.05}
              >
                <ContainedSpaVisual
                  src={item.src}
                  alt={item.alt}
                  priority={i === 0}
                />
              </ParallaxTile>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 glass-card mx-auto max-w-4xl p-8 sm:p-10">
          <ul className="grid gap-4 font-sans text-charcoal/85 sm:grid-cols-2">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              Rituali spa con idromassaggio, sauna e massaggio a scelta
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              Rituali multisensoriali con profumi e atmosfere dedicate
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              Ambiente riservato, curato nei dettagli: privacy e comfort
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(212,175,55,0.6)]" />
              Consulenza prima di ogni trattamento, con équipe accogliente
            </li>
          </ul>
          <p className="mt-10 text-center">
            <Link
              href="/trattamenti"
              className="font-sans text-sm font-medium text-gold-700 underline-offset-4 hover:text-gold-600 hover:underline"
            >
              Menu trattamenti e massaggi →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ParallaxTile({
  children,
  scrollYProgress,
  depth,
  reduced,
  delay,
}: {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  depth: number;
  reduced: boolean;
  delay: number;
}) {
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [depth, -depth]);
  return (
    <Reveal delay={delay}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </Reveal>
  );
}
