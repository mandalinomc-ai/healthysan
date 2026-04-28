import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsSearchQuery
)}&hl=it&z=17&output=embed`;

export function MapSection() {
  const addressLine = `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality} (${site.address.addressRegion})`;

  return (
    <section
      id="dove-siamo"
      className="border-t border-cream-200/80 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-charcoal-700">
            Urban spa Benevento
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl">
            Dove siamo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-sans leading-relaxed text-ink/75">
            {addressLine} — a pochi passi da Piazza Roma e da Corso Garibaldi.
          </p>
        </Reveal>

        <Reveal className="mt-10 overflow-hidden rounded-2xl border border-cream-200 shadow-md ring-1 ring-gold-400/15">
          <iframe
            title="Mappa Google: HealthySan Beauty & Spa, Benevento"
            src={embedSrc}
            className="aspect-[16/10] min-h-[280px] w-full border-0 sm:min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
