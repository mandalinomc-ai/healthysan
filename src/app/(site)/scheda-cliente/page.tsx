import type { Metadata } from "next";
import { SchedaClienteForm } from "@/components/SchedaClienteForm";

export const metadata: Metadata = {
  title: "Scheda cliente — Percorso Healthy",
  description:
    "Compila la scheda estetica HealthySan e inviala a Loredana tramite WhatsApp.",
};

export default function SchedaClientePage() {
  return (
    <main className="border-t border-gold-500/10 bg-gradient-to-b from-cream-50 via-white to-cream-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-charcoal-700">
            Consulenza personalizzata
          </p>
          <h1 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Scheda Cliente HealthySan — Percorso Healthy
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans leading-relaxed text-charcoal/75">
            Compila i campi con attenzione. Premendo <strong>Invia su WhatsApp</strong> si
            aprirà una chat con il numero del centro con tutti i dati già formattati per
            Loredana e il team.
          </p>
        </div>
        <div className="mt-12">
          <SchedaClienteForm />
        </div>
      </div>
    </main>
  );
}
