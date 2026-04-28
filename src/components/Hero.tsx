import Image from "next/image";
import Link from "next/link";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { whatsappConsultUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="HealthySan: atmosfera di spa e benessere nel centro storico di Benevento"
          fill
          priority
          sizes="100vw"
          className={`object-cover ${IMAGE_POLISH}`}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/38 to-cream-50/95"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-4xl flex-col items-center justify-center px-4 pb-24 pt-12 text-center sm:px-6">
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.32em] text-gold-300/95">
          Urban spa · Centro estetico · Benevento
        </p>
        <h1 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Benvenuti nel Cuore del Benessere a Benevento
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-cream-100/95 sm:text-lg">
          HealthySan accoglie ogni ospite in un rifugio di quiete: estetica avanzata,
          macchinari professionali e rituali ispirati al mondo, tra le Mura Longobarde e il
          lusso discreto del benessere contemporaneo nel centro storico.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-cream-200 px-8 py-3.5 font-sans text-sm font-semibold text-charcoal shadow-md transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            Prenota consulenza gratuita
          </a>
          <Link
            href="/#chi-siamo"
            className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/10 px-8 py-3.5 font-sans text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Scopri la nostra filosofia
          </Link>
        </div>
      </div>
    </section>
  );
}
