import Image from "next/image";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { RemotePurchaseButton } from "./RemotePurchaseButton";

const wellnessCards = [
  {
    name: "Rituale Hammam BeWell",
    desc: "Rituale di ispirazione orientale con gesti avvolgenti e texture ricche per purificare e rigenerare la pelle.",
    image: images.ritualeMondo1,
  },
  {
    name: "Rituale Polinesiano BeWell",
    desc: "Manualita' fluide e profonde dal mood tropicale per sciogliere tensioni e favorire un relax totale multisensoriale.",
    image: images.ritualeMondo2,
  },
  {
    name: "Rituale Ayurvedico BeWell",
    desc: "Sequenza ispirata alla tradizione ayurvedica per riequilibrare corpo e mente e supportare il benessere globale.",
    image: images.ritualeMondo3,
  },
  {
    name: "Rituale Mediterraneo BeWell",
    desc: "Trattamento nutriente e luminosita' con attivi mediterranei per una pelle vellutata e radiosa.",
    image: images.ritualeMondo4,
  },
  {
    name: "Rituale Urban Spa (Jacuzzi + Sauna)",
    desc: "Esperienza Urban Spa con jacuzzi e sauna in ambiente riservato, ideale come rituale coppia o relax individuale.",
    image: images.spaSauna,
  },
] as const;

export function RitualiMassaggi() {
  return (
    <section
      id="rituali-massaggi"
      className="border-t border-gold-500/15 bg-gradient-to-b from-white via-cream-50/80 to-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Sezione B
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Rituali dal Mondo - Laboratoires BeWell
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl text-center">
          <p className="font-sans text-sm leading-relaxed text-charcoal/72">
            Una collezione di rituali corpo BeWell con ispirazioni internazionali: Hammam,
            Polinesiano, Ayurvedico e Mediterraneo, piu l&apos;esperienza Urban Spa con jacuzzi e sauna.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {wellnessCards.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <article className="overflow-hidden rounded-2xl border border-cream-200/90 bg-white shadow-[0_20px_48px_-22px_rgba(26,26,26,0.25)] ring-1 ring-gold-400/10">
                <div className="relative aspect-[5/4]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className={`object-cover ${IMAGE_POLISH}`}
                  />
                </div>
                <div className="bg-gradient-to-b from-white to-cream-50/70 p-7">
                  <h4 className="font-display text-2xl font-semibold text-charcoal">{item.name}</h4>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/70">{item.desc}</p>
                  <RemotePurchaseButton
                    itemName={item.name}
                    className="mt-4"
                    label="Acquista a distanza"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
