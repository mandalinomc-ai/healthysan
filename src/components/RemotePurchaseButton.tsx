"use client";

import { site } from "@/lib/site";

type Props = {
  itemName: string;
  label?: string;
  className?: string;
};

export function RemotePurchaseButton({
  itemName,
  label = "Acquista a Distanza",
  className = "",
}: Props) {
  const infoMessage = `Ciao, vorrei più info su ${itemName}. Mi aiuti?`;
  const purchaseMessage = `Vorrei acquistare ${itemName}. Mandami il QR Code`;
  const infoHref = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(infoMessage)}`;
  const purchaseHref = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(purchaseMessage)}`;

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-2.5">
        <a
          href={infoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-charcoal/20 bg-white px-4 py-2 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-charcoal shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:bg-cream-50"
        >
          Chiedi Info
        </a>
        <a
          href={purchaseHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gold-400 px-5 py-2.5 text-center font-sans text-xs font-semibold uppercase tracking-[0.12em] text-charcoal shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition hover:bg-gold-300"
        >
          {label}
        </a>
      </div>
      <p className="mt-2 text-[11px] leading-snug text-charcoal/60">
        Pagamento elettronico sicuro tramite QR Code inviato su WhatsApp.
      </p>
    </div>
  );
}
