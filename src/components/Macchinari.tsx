import Image from "next/image";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { RemotePurchaseButton } from "./RemotePurchaseButton";
import { Reveal } from "./Reveal";
import { TiltCard } from "./motion/TiltCard";

/** Overlay luxury black & gold su ogni hero macchinario (solo asset locali hardcoded). */
function MachinePhotoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">{children}</div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-charcoal/70 via-charcoal/20 to-gold-500/18"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] shadow-[inset_0_0_0_1px_rgba(212,175,55,0.24)]"
        aria-hidden
      />
    </div>
  );
}

const MACHINE_IMAGE_META = [
  {
    title: "Trattamento Retinol (Bioline Jato)",
    src: images.treatmentRetinol,
    caption: "retinol.jpg",
    alt: "Protocollo retinol Bioline Jato — HealthySan Benevento",
    desc: "Protocollo retinol specialistico Bioline Jato per attenuare segni del tempo e rendere la pelle piu' uniforme e levigata, con un piano progressivo personalizzato.",
  },
  {
    title: "Laser epilatorio",
    src: images.machineLaser,
    caption: "laser.jpg",
    alt: "Laser epilatorio professionale — HealthySan Benevento",
    desc: "Laser epilatorio professionale HealthySan: tecnologia ad alta definizione per epilazione progressiva confortevole e risultati duraturi. Consulenza specialistica, parametri personalizzati su fototipo e zona trattata, protocolli graduali e preparazione cutanea con cosmetica Bioline Jato quando indicato — per una pelle uniforme, liscia e curata nel tempo.",
  },
  {
    title: "Radiofrequenza",
    src: images.machineRadiofrequenza,
    caption: "radiofrequenza.jpg",
    alt: "Radiofrequenza professionale — HealthySan Benevento",
    desc: "Radiofrequenza in cabina: energia RF controllata per stimolare collagene ed elastina e ridefinire compattezza e luminosità. Protocolli personalizzati su viso e corpo, spesso in sinergia con cosmeceutici Bioline Jato per massimizzare idratazione, tonicità e definizione dell’ovale — secondo il calendario del trattamento concordato.",
  },
  {
    title: "Pressoterapia",
    src: images.machinePressoterapia,
    caption: "pressoterapia.jpg",
    alt: "Pressoterapia pneumatica — HealthySan Benevento",
    desc: "Pressoterapia pneumatica sequenziale: azione ritmica mirata al drenaggio meccanico e al sollievo delle gambe pesanti. Ideale nei trattamenti corpo Bioline Jato e dopo massaggi manuali per consolidare leggerezza, comfort periferico e silhouette più armoniosa.",
  },
  {
    title: "Lampada al Collagene",
    src: images.spaLampada,
    caption: "lampada.jpg",
    alt: "Lampada al collagene — HealthySan Benevento",
    desc: "Foto-biostimolazione specializzata per il rinnovamento cutaneo: la lampada al collagene supporta la produzione di nuovo collagene, migliora luminosità e tono e si integra nei protocolli HealthySan ispirati ai trattamenti Instagram del centro, con intensità e frequenza personalizzate in cabina.",
  },
] as const;

export function Macchinari() {
  return (
    <section
      id="macchinari"
      className="border-t border-cream-200/80 bg-gradient-to-b from-white via-cream-50/40 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Trattamenti · alta tecnologia
          </p>
          <h2 className="font-display mt-3 text-center text-[clamp(1.85rem,4vw,2.85rem)] font-semibold tracking-tight text-charcoal sm:text-4xl md:text-[2.75rem]">
            Macchinari professionali
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center font-sans leading-relaxed text-ink/75">
            Laser, radiofrequenza, pressoterapia, retinol Bioline Jato e lampada al collagene: tecnologie in
            cabina con protocolli personalizzati orientati ai risultati.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {MACHINE_IMAGE_META.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <TiltCard tiltAmount={11} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200/90 bg-gradient-to-b from-charcoal/[0.03] to-white shadow-[0_24px_60px_-20px_rgba(26,26,26,0.18)] ring-1 ring-gold-400/15">
                  <MachinePhotoFrame>
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className={`object-cover object-center ${IMAGE_POLISH}`}
                      priority={i === 0}
                    />
                  </MachinePhotoFrame>

                  <div className="flex flex-1 flex-col border-t border-gold-500/15 bg-white/95 p-7">
                    <div
                      className="h-1 w-14 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600/40"
                      aria-hidden
                    />
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-charcoal">
                      {m.title}
                    </h3>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-ink/75">{m.desc}</p>
                    <RemotePurchaseButton itemName={m.title} className="mt-4" label="Acquista a Distanza" />
                    <p className="mt-5 border-t border-cream-200/90 pt-4 font-sans text-[11px] uppercase tracking-[0.16em] text-charcoal/45">
                      Asset fisso · {m.caption}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
