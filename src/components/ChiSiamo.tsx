import Image from "next/image";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function ChiSiamo() {
  return (
    <section
      id="chi-siamo"
      className="border-t border-cream-200/80 bg-gradient-to-b from-cream-50 via-white to-cream-50/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.32em] text-charcoal-700">
            Identità e valori
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Chi siamo
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <Reveal>
            <figure className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-cream-200/90 bg-cream-100 shadow-md ring-1 ring-gold-400/15 lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
              <Image
                src={images.chiSiamoPortrait}
                alt="Loredana Santoro, estetista certificata, durante un massaggio professionale in cabina HealthySan"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className={`object-cover object-center ${IMAGE_POLISH}`}
              />
            </figure>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-cream-200/90 bg-white/90 p-8 shadow-sm ring-1 ring-gold-400/15 sm:p-10">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold-600">
                  Fondatrice
                </p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal sm:text-3xl">
                  {site.founder.name}
                </h3>
                <p className="mt-1 font-sans text-sm font-medium text-charcoal-700">
                  {site.founder.role}
                </p>
                <p className="mt-6 font-sans leading-relaxed text-ink/80">
                  <strong className="font-semibold text-charcoal">
                    Loredana Santoro
                  </strong>{" "}
                  è un&apos;estetista professionista{" "}
                  <strong className="font-semibold text-charcoal">certificata</strong>{" "}
                  ed esperta in trattamenti viso e corpo, con{" "}
                  <strong className="font-semibold text-charcoal">
                    patentino per massaggiatori italiani
                  </strong>
                  : un percorso formativo rigoroso che unisce competenza estetica e
                  manualità terapeutica. Da anni accompagna donne e uomini nella cura
                  della pelle, del benessere psicofisico e dell&apos;armonia personale,
                  con uno sguardo attento alle evoluzioni della medicina estetica e della
                  cosmesi professionale.
                </p>
                <p className="mt-4 font-sans leading-relaxed text-ink/80">
                  La sua esperienza nell&apos;estetica avanzata e nel wellness si traduce
                  in protocolli personalizzati, ascolto autentico e risultati nel tempo,
                  sempre nel rispetto della salute e delle aspettative di ogni ospite.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-cream-200/80 bg-cream-50/70 p-8">
                <h4 className="font-serif text-xl text-charcoal">La nostra storia</h4>
                <p className="mt-3 font-sans leading-relaxed text-ink/80">
                  HealthySan nasce nel{" "}
                  <strong className="text-charcoal">luglio 2020</strong>, in un momento
                  in cui Benevento cercava un nuovo linguaggio di benessere urbano: la
                  struttura è stata presentata proprio come{" "}
                  <em className="text-charcoal">urban spa</em> nel centro storico, a
                  pochi passi dal cuore pulsante della città.
                </p>
                <p className="mt-4 font-sans leading-relaxed text-ink/80">
                  Qui le <strong className="text-charcoal">Mura Longobarde</strong> del
                  centro storico dialogano con arredi contemporanei, luci soffuse e
                  materiali naturali: un incontro tra patrimonio longobardo e comfort
                  moderno, pensato per chi desidera rigenerarsi senza uscire dalla città.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-gold-500/20 bg-cream-100/90 p-8">
                <h4 className="font-serif text-xl text-charcoal">Filosofia</h4>
                <p className="mt-3 text-lg font-medium leading-snug text-charcoal">
                  Armonizzare i sensi e riappropriarsi del proprio tempo.
                </p>
                <p className="mt-4 font-sans leading-relaxed text-ink/75">
                  Ogni trattamento è un invito a rallentare, a ritrovare equilibrio tra
                  corpo e mente. Accoglienza discreta, professionalità certificata e
                  ambienti riservati: il lusso che preferiamo è quello silenzioso,
                  autentico e profondamente umano.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
                  <div className="relative aspect-[3/4] max-w-[140px] overflow-hidden rounded-xl border border-gold-500/20 bg-cream-50 shadow-sm">
                    <Image
                      src={images.chiSiamoPortraitSecondary}
                      alt="Loredana Santoro, ritratto professionale HealthySan"
                      fill
                      sizes="140px"
                      className={`object-cover ${IMAGE_POLISH}`}
                    />
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-ink/75">
                    Un secondo sguardo sulla fondatrice racconta il tratto distintivo
                    HealthySan: tecnica professionale, cura autentica e attenzione ai
                    dettagli in ogni protocollo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
