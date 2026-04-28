import Image from "next/image";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images, machineStockImages } from "@/lib/images";
import { Reveal } from "./Reveal";

const editorialShots = [
  {
    src: images.treatmentMassaggio,
    alt: "Massaggio professionale HealthySan in cabina dedicata",
    className: "sm:col-span-2 lg:col-span-3",
    ratio: "aspect-[16/10]",
  },
  {
    src: images.treatmentAmbiente,
    alt: "Dettagli ambiente trattamenti HealthySan",
    className: "sm:col-span-1 lg:col-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: machineStockImages.radiofrequenza,
    alt: "Trattamento viso tecnologia professionale",
    className: "sm:col-span-1 lg:col-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    src: machineStockImages.pressoterapia,
    alt: "Percorso corpo benessere con tecnologia drenante",
    className: "sm:col-span-1 lg:col-span-3",
    ratio: "aspect-[16/9]",
  },
] as const;

export function ServiziEditorialGallery() {
  return (
    <section className="border-t border-gold-500/15 bg-gradient-to-b from-cream-50/70 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Lifestyle HealthySan
          </p>
          <h2 className="font-display mt-3 text-center text-[clamp(1.6rem,3.5vw,2.5rem)] font-semibold tracking-tight text-charcoal">
            Rituali, tecnologia, benessere
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {editorialShots.map((shot, idx) => (
            <Reveal key={shot.alt} delay={Math.min(idx * 0.05, 0.2)} className={shot.className}>
              <div className="glass-card overflow-hidden p-2 shadow-[0_20px_50px_rgba(0,0,0,0.38)] ring-1 ring-white/15">
                <div className={`relative overflow-hidden rounded-[1.25rem] ${shot.ratio}`}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 95vw"
                    className={`object-cover ${IMAGE_POLISH}`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
