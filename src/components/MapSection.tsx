import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapsSearchQuery
)}&hl=it&z=17&output=embed`;

export function MapSection() {
  const addressLine = `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality} (${site.address.addressRegion})`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    site.mapsSearchQuery
  )}`;

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

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,430px)_minmax(0,1fr)] lg:items-start lg:justify-center">
          <Reveal>
            <article className="mx-auto w-full overflow-hidden rounded-[1.4rem] border border-gold-400/25 bg-white shadow-[0_22px_60px_-24px_rgba(26,26,26,0.35)] ring-1 ring-gold-400/20">
              <div className="border-b border-cream-200/90 px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-charcoal/60">
                  Social proof
                </p>
                <h3 className="mt-1 font-serif text-2xl text-charcoal">
                  Video da Instagram
                </h3>
              </div>
              <div style={{ maxWidth: "320px", margin: "0 auto" }}>
                <div className="my-6 aspect-[9/16] overflow-hidden rounded-xl shadow-md">
                  <iframe
                    title="HealthySan su Instagram"
                    src={site.instagramVideoEmbedUrl}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allow="encrypted-media"
                  />
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-md ring-1 ring-gold-400/15">
              <div className="border-b border-cream-200/90 px-5 py-4">
                <p className="font-sans text-xs uppercase tracking-[0.24em] text-charcoal/60">
                  Come arrivare
                </p>
                <h3 className="mt-1 font-serif text-2xl text-charcoal">
                  Mappa e indicazioni
                </h3>
              </div>

              <iframe
                title="Mappa Google: HealthySan Beauty & Spa, Benevento"
                src={embedSrc}
                className="aspect-[16/10] min-h-[280px] w-full border-0 sm:min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              <div className="flex flex-wrap gap-3 border-t border-cream-200/90 px-5 py-4">
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-2.5 font-sans text-sm font-semibold text-cream-50 transition hover:bg-charcoal/90"
                >
                  Come Arrivare
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-charcoal/15 bg-white px-5 py-2.5 font-sans text-sm font-semibold text-charcoal transition hover:bg-cream-50"
                >
                  Guarda su Instagram
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
