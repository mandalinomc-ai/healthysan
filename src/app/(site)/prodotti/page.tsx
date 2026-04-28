import type { Metadata } from "next";
import { ProdottiEsclusivi } from "@/components/ProdottiEsclusivi";

export const metadata: Metadata = {
  title: "Prodotti esclusivi HealthySan",
  description:
    "Kit Fragoline di Bosco, creme viso anti-età e liftanti — disponibili solo in sede a Benevento.",
};

export default function ProdottiPage() {
  return (
    <main>
      <section className="border-b border-gold-500/15 bg-cream-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">
            Prodotti HealthySan
          </h1>
          <p className="mt-4 font-sans leading-relaxed text-charcoal/75">
            Linea pensata per prolungare i rituali in cabina. Tutti gli articoli sono{" "}
            <strong className="text-charcoal">acquistabili esclusivamente in centro</strong>,
            con consulenza dedicata.
          </p>
        </div>
      </section>
      <ProdottiEsclusivi />
    </main>
  );
}
