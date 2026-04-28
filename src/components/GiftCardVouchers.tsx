import { images } from "@/lib/images";
import { whatsappConsultUrl } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SafeImage } from "./SafeImage";
import { SiteLogo } from "./SiteLogo";
import { TiltCard } from "./motion/TiltCard";
import { VoucherGallery } from "./VoucherGallery";
import { VoucherPlaceholder } from "./VoucherPlaceholder";

export function GiftCardVouchers() {
  return (
    <section
      id="gift-vouchers"
      className="border-t border-gold-500/15 bg-gradient-to-b from-cream-50 via-white to-cream-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.35em] text-gold-700">
            Regali esclusivi
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl text-charcoal sm:text-4xl md:text-[2.75rem]">
            Voucher e gift card
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-sm leading-relaxed text-charcoal/70 sm:text-base">
            Sorprendi chi ami con un&apos;esperienza HealthySan: scegli un trattamento
            dedicato oppure una gift card ricaricabile da utilizzare in centro.
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <div className="glass-card overflow-hidden p-8 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.28em] text-gold-700">
                  Voucher trattamenti
                </p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal sm:text-3xl">
                  Voucher dedicati ai trattamenti
                </h3>
                <p className="mt-4 font-sans leading-relaxed text-charcoal/75">
                  Acquista in sede un voucher dedicato a un trattamento specifico — massaggio,
                  percorso spa o rituali — da regalare a chi desideri. Il destinatario
                  prenoterà la data preferita con il nostro team, nel rispetto delle
                  disponibilità.
                </p>
                <ul className="mt-6 space-y-2 font-sans text-sm text-charcoal/70">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    Personalizzabile sul servizio scelto
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    Ideale per compleanni, anniversari, lauree
                  </li>
                </ul>
                <a
                  href={whatsappConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full bg-charcoal px-8 py-3 font-sans text-sm font-semibold text-cream-50 shadow-card transition hover:bg-charcoal/90"
                >
                  Richiedi informazioni voucher
                </a>
              </div>
              <div className="rounded-2xl border border-gold-500/20 bg-cream-50/80 p-4">
                <VoucherGallery />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-charcoal px-6 py-12 shadow-lift sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />

            <div className="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_340px] lg:items-center">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-400">
                  HealthySan Gift Card
                </p>
                <h3 className="mt-3 font-serif text-3xl text-cream-50 sm:text-4xl">
                  Gift card ricaricabile
                </h3>
                <p className="mt-4 font-sans leading-relaxed text-cream-100/85">
                  Una carta fisica elegante, pensata per chi ama scegliere liberamente tra
                  trattamenti e prodotti in centro. Ricaricabile in qualsiasi momento,
                  valida <strong className="text-gold-300">12 mesi</strong> dall&apos;ultima
                  ricarica — il regalo perfetto per chi vuole flessibilità e stile.
                </p>
                <ul className="mt-8 space-y-3 font-sans text-sm text-cream-100/90">
                  <li className="flex gap-3">
                    <span className="text-gold-400">✦</span>
                    Ricaricabile presso HealthySan Beauty &amp; Spa
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400">✦</span>
                    Valida 12 mesi • carta fisica premium
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold-400">✦</span>
                    Utilizzabile per trattamenti e linea prodotti in sede
                  </li>
                </ul>
              </div>

              <div className="relative mx-auto w-full max-w-[340px] lg:mx-0">
                <TiltCard tiltAmount={14} className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold-400/35 bg-charcoal shadow-[0_28px_80px_-24px_rgba(212,175,55,0.55)]">
                    <SafeImage
                      src={images.giftCardCoppia}
                      alt="Gift card coppia HealthySan"
                      fill
                      sizes="(min-width: 1024px) 340px, 80vw"
                      fallback={<VoucherPlaceholder label="Gift card coppia" />}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 rounded-full bg-charcoal/65 px-3 py-2 ring-1 ring-white/15 backdrop-blur-md">
                      <SiteLogo
                        variant="darkCard"
                        width={116}
                        height={34}
                        className="h-7 w-auto object-contain"
                      />
                      <span className="rounded-full bg-white/10 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-gold-300">
                        Gift Card
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 rounded-xl bg-charcoal/75 p-3 ring-1 ring-white/15 backdrop-blur-md">
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-gold-300">
                        Valida 12 mesi · ricaricabile
                      </p>
                    </div>
                  </div>
                  <div className="sr-only">
                    Anteprima grafica gift card: file public/images/gift card coppia.jpg
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
