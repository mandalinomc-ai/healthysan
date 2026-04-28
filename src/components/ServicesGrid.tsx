import { Reveal } from "./Reveal";

export function ServicesGrid() {
  return (
    <section
      id="percorso-centro"
      className="border-t border-cream-200/80 bg-cream-50/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Centro estetico Benevento
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Il centro e le sezioni
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans leading-relaxed text-ink/75">
            Le tecnologie avanzate sono descritte in{" "}
            <strong className="font-medium text-charcoal">Trattamenti</strong> e nella griglia{" "}
            <strong className="font-medium text-charcoal">Macchinari professionali</strong>, così la
            scelta resta chiara e senza sovrapposizioni.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-cream-200/90 bg-white/85 p-8 text-center shadow-sm ring-1 ring-gold-400/10">
            <p className="font-sans text-sm leading-relaxed text-charcoal/72">
              Per orientarti al volo, usa l&apos;{" "}
              <strong className="font-medium text-charcoal">Estetista Digitale</strong> e poi le
              pagine <strong className="font-medium text-charcoal">Trattamenti</strong>,{" "}
              <strong className="font-medium text-charcoal">Rituali dal mondo</strong> e{" "}
              <strong className="font-medium text-charcoal">Urban Spa</strong>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
