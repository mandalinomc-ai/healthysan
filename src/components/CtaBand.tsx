"use client";

import { Reveal } from "./Reveal";
import { MagneticWrap } from "./motion/MagneticWrap";
import { site, whatsappConsultUrl } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-t border-gold-500/20 bg-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-tight text-cream-50">
            La tua pausa di lusso inizia qui
          </h2>
          <p className="mt-4 font-sans leading-relaxed text-cream-100/88">
            Prenota una{" "}
            <strong className="font-semibold text-gold-300">consulenza gratuita</strong>{" "}
            su WhatsApp: ti risponderemo con cortesia, disponibilità e un percorso
            personalizzato su misura.
          </p>
          <p className="mt-2 font-sans text-sm text-cream-200/85">
            {site.phoneDisplay} · {site.email}
          </p>
          <div className="mt-10 flex justify-center">
            <MagneticWrap>
              <a
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cream-200 px-10 py-4 font-sans text-sm font-semibold text-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/25 transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
              >
                Scrivici su WhatsApp
              </a>
            </MagneticWrap>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
