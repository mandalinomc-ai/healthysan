export function VoucherPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gold-500/70 bg-gradient-to-br from-cream-100 via-white to-cream-50 p-6 text-center shadow-inner ring-2 ring-gold-400/25">
      <span className="font-serif text-lg text-charcoal">{label}</span>
      <span className="mt-2 font-sans text-xs uppercase tracking-[0.25em] text-gold-700">
        HealthySan
      </span>
      <span className="mt-4 font-sans text-[11px] leading-snug text-charcoal/55">
        Immagine voucher — disponibile in sede
      </span>
    </div>
  );
}
