import type { Metadata } from "next";
import { GiftCardVouchers } from "@/components/GiftCardVouchers";

export const metadata: Metadata = {
  title: "Voucher regalo & Gift Card",
  description:
    "Voucher su trattamento e HealthySan Gift Card ricaricabile — valida 12 mesi. Disponibili in sede.",
};

export default function VoucherRegaloPage() {
  return (
    <main>
      <section className="border-b border-gold-500/15 bg-gradient-to-b from-white to-cream-50 px-4 py-14 text-center sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">Regala HealthySan</h1>
          <p className="mt-4 font-sans leading-relaxed text-charcoal/75">
            Voucher su trattamenti selezionati e gift card fisica ricaricabile — pensati per
            sorprendere con stile e flessibilità.
          </p>
        </div>
      </section>
      <GiftCardVouchers />
    </main>
  );
}
