import { VOUCHER_GALLERY_COUNT } from "@/lib/images";
import { RemotePurchaseButton } from "./RemotePurchaseButton";
import { Reveal } from "./Reveal";
import { VoucherSlotImage } from "./VoucherSlotImage";

export function VoucherGallery() {
  const voucherSlots = Array.from({ length: VOUCHER_GALLERY_COUNT }, (_, i) => i + 1);

  return (
    <Reveal className="mt-16">
      <ul className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {voucherSlots.map((sourceSlot, idx) => (
          <li key={`voucher-tile-${idx + 1}`}>
            <VoucherSlotImage
              slot1Based={sourceSlot}
              sizes="(min-width: 1280px) 20vw, (min-width: 640px) 33vw, 90vw"
            />
            <RemotePurchaseButton
              itemName={`Voucher Regalo n. ${idx + 1}`}
              label="Acquista a distanza"
              className="mt-3"
            />
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
