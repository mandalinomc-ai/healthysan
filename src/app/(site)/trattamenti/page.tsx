import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { Macchinari } from "@/components/Macchinari";
import { Reveal } from "@/components/Reveal";
import { SmartSolutionFinder } from "@/components/SmartSolutionFinder";

export const metadata: Metadata = {
  title: "Trattamenti tecnologie avanzate",
  description:
    "Tecnologie avanzate HealthySan: laser, radiofrequenza, pressoterapia, retinol e lampada al collagene.",
};

export default function TrattamentiPage() {
  return (
    <main>
      <section className="border-b border-gold-500/15 bg-gradient-to-b from-cream-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            HealthySan · Benevento
          </p>
          <h1 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">
            Trattamenti
          </h1>
          <p className="mt-4 max-w-2xl font-sans leading-relaxed text-charcoal/75">
            Sezione dedicata all&apos;estetica avanzata: tecnologie professionali in cabina con
            protocolli personalizzati e consulenza specialistica.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200 shadow-card ring-1 ring-gold-500/20">
                <Image
                  src={images.machineLaser}
                  alt="Laser epilatorio HealthySan — tecnologia in cabina"
                  fill
                  priority
                  unoptimized
                  className={`object-cover ${IMAGE_POLISH}`}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <p className="mt-3 font-sans text-sm text-charcoal/60">
                Laser epilatorio professionale in cabina.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200 shadow-card ring-1 ring-gold-500/20">
                <Image
                  src={images.machinePressoterapia}
                  alt="Pressoterapia HealthySan — tecnologia in cabina"
                  fill
                  unoptimized
                  className={`object-cover ${IMAGE_POLISH}`}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
              <p className="mt-3 font-sans text-sm text-charcoal/60">
                Pressoterapia pneumatica sequenziale.
              </p>
            </Reveal>
          </div>

          <p className="mt-10">
            <Link
              href="/urban-spa"
              className="font-sans text-sm font-medium text-gold-700 underline-offset-4 hover:underline"
            >
              Esplora l&apos;Urban Spa →
            </Link>
          </p>
        </div>
      </section>

      <SmartSolutionFinder />
      <Macchinari />
    </main>
  );
}
