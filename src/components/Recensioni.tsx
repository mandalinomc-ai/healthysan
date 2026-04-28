import { Reveal } from "./Reveal";
import { clientReviews } from "@/data/reviews";

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold-500" aria-label="Valutazione cinque stelle">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-base" aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export function Recensioni() {
  return (
    <section
      id="recensioni"
      className="border-t border-cream-200/80 bg-cream-50/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Dicono di noi
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Recensioni dei clienti
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-sm leading-relaxed text-ink/65">
            Esperienze condivise da chi ha scelto HealthySan per cura del corpo, massaggi
            e atmosfera nel centro storico — tra le Mura Longobarde, tecnologia e
            accoglienza
            discreta.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {clientReviews.map((rev, i) => (
            <Reveal key={rev.name} delay={Math.min(i * 0.02, 0.25)}>
              <blockquote className="mb-6 break-inside-avoid rounded-2xl border border-cream-200/90 bg-white p-6 shadow-sm">
                <Stars />
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink/80">
                  &ldquo;{rev.text}&rdquo;
                </p>
                <footer className="mt-4 font-sans text-xs font-semibold uppercase tracking-wide text-charcoal">
                  {rev.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
