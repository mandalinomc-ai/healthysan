import { Reveal } from "./Reveal";

const APP_DOWNLOAD_URL = "https://www.cureconnect.it/download";

export function OfficialAppCta() {
  return (
    <section className="border-t border-gold-500/15 bg-gradient-to-b from-charcoal to-charcoal-800 py-16 text-cream-50 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="glass-card-dark p-8 sm:p-10">
          <p className="font-sans text-xs uppercase tracking-[0.32em] text-gold-300">
            App ufficiale HealthySan
          </p>
          <h2 className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-tight">
            Cure Connect / Ygital
          </h2>
          <p className="mt-4 max-w-3xl font-sans leading-relaxed text-cream-100/90">
            Prenota e gestisci trattamenti direttamente dal tuo smartphone: agenda
            personale, promemoria appuntamenti, storico trattamenti e comunicazioni rapide
            con il centro.
          </p>
          <div className="mt-8">
            <a
              href={APP_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gold-400 px-8 py-3 font-sans text-sm font-semibold text-charcoal shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition hover:bg-gold-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-200"
            >
              Scarica l&apos;App Ufficiale
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
