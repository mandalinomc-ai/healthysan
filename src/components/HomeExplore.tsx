import Link from "next/link";
import { Reveal } from "./Reveal";

const links = [
  {
    href: "/trattamenti",
    title: "Trattamenti",
    desc: "High-tech: laser, radiofrequenza, pressoterapia, retinol, lampada al collagene + Estetista digitale.",
  },
  {
    href: "/rituali",
    title: "Rituali dal Mondo",
    desc: "Laboratoires BeWell: Hammam, Polinesiano, Ayurvedico e Mediterraneo.",
  },
  {
    href: "/urban-spa",
    title: "Urban Spa",
    desc: "Jacuzzi, sauna e rituali benessere nel centro storico.",
  },
  {
    href: "/prodotti",
    title: "Prodotti",
    desc: "Linea esclusiva HealthySan, disponibile in sede.",
  },
  {
    href: "/voucher-regalo",
    title: "Gift & voucher",
    desc: "Regala un’emozione o una gift card ricaricabile.",
  },
  {
    href: "/scheda-cliente",
    title: "Scheda cliente",
    desc: "Compila la scheda estetica e inviala su WhatsApp.",
  },
] as const;

export function HomeExplore() {
  return (
    <section className="border-t border-gold-500/15 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-center text-[clamp(2rem,4.5vw,3rem)] font-semibold tracking-tight text-charcoal">
            Esplora HealthySan Centro Estetico
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.05}>
              <Link
                href={item.href}
                className="glass-card group flex h-full flex-col p-7 transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-gold-700">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-charcoal/70">
                  {item.desc}
                </p>
                <span className="mt-4 font-sans text-xs font-semibold uppercase tracking-wider text-gold-700">
                  Apri →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
