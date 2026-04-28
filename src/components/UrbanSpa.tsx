import Image from "next/image";
import Link from "next/link";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

const tiles = [
  {
    src: images.spaJacuzzi,
    alt: "Jacuzzi — percorso acqua HealthySan Urban Spa",
  },
  {
    src: images.spaSauna,
    alt: "Sauna — area benessere HealthySan",
  },
  {
    src: images.spaDettaglio,
    alt: "Dettaglio ambienti urban spa HealthySan — luce e materiale",
  },
] as const;

export function UrbanSpa() {
  return (
    <section id="urban-spa" className="border-t border-gold-500/15 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Urban Spa
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Urban spa nel centro storico
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center font-sans text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Un&apos;oasi urbana dove le{" "}
            <strong className="font-medium text-charcoal">mura longobarde</strong>{" "}
            incontrano
            il design contemporaneo: esperienze singole o di coppia con{" "}
            <strong className="font-medium text-charcoal">vasca idromassaggio</strong>,{" "}
            <strong className="font-medium text-charcoal">sauna</strong>, bagno di vapore e
            massaggi su misura — per rigenerarsi in poche ore, lontano dal rumore della
            città.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.06} className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-200 shadow-sm ring-1 ring-gold-500/20 lg:aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition duration-700 group-hover:scale-[1.02] ${IMAGE_POLISH}`}
                  priority={i === 0}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent opacity-0 transition group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 glass-card p-8 sm:p-10">
          <ul className="grid gap-4 font-sans text-charcoal/80 sm:grid-cols-2">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
              Accesso spa con idromassaggio, sauna e massaggio a scelta
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
              Rituali multisensoriali con profumi e atmosfere dedicate
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
              Ambiente riservato, curato nei dettagli: privacy e comfort
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
              Consulenza prima di ogni percorso, con équipe accogliente
            </li>
          </ul>
          <p className="mt-8 text-center">
            <Link
              href="/trattamenti"
              className="font-sans text-sm font-medium text-gold-700 underline-offset-4 hover:text-gold-600 hover:underline"
            >
              Menu trattamenti e massaggi →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
