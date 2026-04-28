"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { whatsappConsultUrl } from "@/lib/site";
import { MagneticWrap } from "./motion/MagneticWrap";
import { usePrefersReducedMotion } from "./motion/usePrefersReducedMotion";

export function HeroImmersion() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 180]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <motion.div className="absolute inset-0 scale-[1.08]" style={{ y: imgY }}>
          <Image
            src={images.hero}
            alt="HealthySan: atmosfera di spa e benessere nel centro storico di Benevento"
            fill
            priority
            sizes="100vw"
            className={`object-cover ${IMAGE_POLISH}`}
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/42 to-cream-50/95"
          aria-hidden
        />
      </div>

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-5xl flex-col items-center justify-center px-4 pb-24 pt-12 text-center sm:px-6"
      >
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.38em] text-gold-300/95">
          Urban spa · Centro estetico · Benevento
        </p>
        <h1 className="font-display text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[0.95] tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
          Benvenuti nel cuore
          <span className="mt-2 block font-normal italic text-cream-100/95">
            del benessere a Benevento
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-sans text-base font-light leading-relaxed text-cream-100/95 sm:text-lg">
          HealthySan accoglie ogni ospite in un rifugio di quiete: estetica avanzata,
          macchinari professionali e rituali ispirati al mondo, tra le{" "}
          <strong className="font-medium text-cream-50">Mura Longobarde</strong> e il lusso
          discreto del benessere contemporaneo nel centro storico.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <MagneticWrap>
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex items-center justify-center rounded-full bg-cream-200 px-10 py-4 font-sans text-sm font-semibold text-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/30 transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              Prenota ora — WhatsApp
            </a>
          </MagneticWrap>
          <MagneticWrap>
            <Link
              href="/#chi-siamo"
              data-magnetic
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-10 py-4 font-sans text-sm font-medium text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:bg-white/20"
            >
              La nostra filosofia
            </Link>
          </MagneticWrap>
        </div>
      </motion.div>
    </section>
  );
}
