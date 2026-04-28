/**
 * Asset in `public/images/`. Spazi nei nomi → encodeURIComponent nell’URL.
 */
function imagePath(filename: string): `/images/${string}` {
  return `/images/${encodeURIComponent(filename)}` as `/images/${string}`;
}

/** Possibili nomi file logo — SiteLogo prova in ordine. */
export const LOGO_PATHS = [
  imagePath("logo healthysan.PNG"),
  imagePath("logo healthysan.png"),
  imagePath("logo-healthysan.png"),
  imagePath("logo healthysan.webp"),
  imagePath("logo-healthysan.webp"),
  imagePath("logo healthysan.jpeg"),
  imagePath("logo-healthysan.jpeg"),
  imagePath("logo healthysan.jpg"),
  imagePath("logo-healthysan.jpg"),
] as const;

/** Primo candidato (per metadata / fallback statico). */
export const images = {
  logo: LOGO_PATHS[0],
  hero: imagePath("urban spa.jpg"),
  /** Founder — Chi siamo */
  chiSiamoPortrait: imagePath("loredana santoro estetista.jpg"),
  chiSiamoPortraitSecondary: imagePath("loredana santoro estetista.jpg"),
  treatmentMassaggio: imagePath("massaggio.jpg"),
  treatmentAmbiente: imagePath("urban spa dettaglio.jpg"),
  /** Urban Spa gallery */
  spaJacuzzi: imagePath("jacuzzi 2.jpg"),
  spaLampada: imagePath("lampada.jpg"),
  spaSauna: imagePath("sauna urban spa.jpg"),
  spaDettaglio: imagePath("urban spa dettaglio.jpg"),
  treatmentViso: imagePath("trattamento viso.jpg"),
  treatmentRetinol: imagePath("retinol.jpg"),
  machineLaser: imagePath("laser.jpg"),
  /** Mapping fisso — non sostituire con asset generici */
  machinePressoterapia: imagePath("pressoterapia.jpg"),
  machineRadiofrequenza: imagePath("radiofrequenza.jpg"),
  ritualeMondo1: imagePath("rituali dal mondo 1.jpg"),
  ritualeMondo2: imagePath("rituali dal mondo 2.jpg"),
  ritualeMondo3: imagePath("rituali dal mondo 3.jpg"),
  ritualeMondo4: imagePath("rituali dal mondo 4.jpg"),
  /** Gift & voucher */
  giftCardCoppia: imagePath("gift card coppia.png"),
  voucherMassaggio: imagePath("massaggio.jpg"),
  voucherUrbanSpa: imagePath("urban spa.jpg"),
  voucherImmagine1: imagePath("voucher regalo.jpg"),
  voucherImmagine2: imagePath("voucher healthy san.jpg"),
  productKitFragoline: imagePath("kit fragoline di bosco healthysan.jpg"),
  productCremaAntiEta: imagePath("crema viso anti eta healthysan.jpg"),
  productCremaLiftante: imagePath("crema viso liftante healthysan.jpg"),
  og: imagePath("urban spa.jpg"),
} as const;

export const VOUCHER_GALLERY_COUNT = 7;

export type ProductImageKey = "fragoline" | "antiEta" | "liftante";

/** Candidati file prodotto in ordine di preferenza (alta risoluzione originali). */
export function productImagePaths(key: ProductImageKey): `/images/${string}`[] {
  if (key === "fragoline") {
    return [
      imagePath("fragoline.jpg"),
      imagePath("kit fragoline di bosco healthysan.jpg"),
    ];
  }
  if (key === "antiEta") {
    return [imagePath("crema viso anti eta healthysan.jpg")];
  }
  return [imagePath("crema viso liftante healthysan.jpg")];
}

/** Candidati immagine per lo slot voucher n (1-based), in ordine di prova (.jpg poi .png). */
export function voucherGalleryPaths(slotIndex1Based: number): `/images/${string}`[] {
  const n = slotIndex1Based;
  return [
    imagePath(`voucher ${n}.jpg`),
    imagePath(`voucher ${n}.png`),
    imagePath(`voucher${n}.jpg`),
    imagePath(`voucher${n}.png`),
    imagePath(`voucher-${n}.jpg`),
    imagePath(`voucher-${n}.png`),
  ];
}

/**
 * Visual premium coordinati (nero/oro, clinica minimal) — finché non arrivano foto in sede.
 * Stesso crop w=1200 per coerenza di griglia.
 */
export const machineStockImages = {
  laser:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
  radiofrequenza:
    "https://images.unsplash.com/photo-1570172619647-dfcb53f8e8fe?auto=format&fit=crop&w=1200&q=85",
  pressoterapia:
    "https://images.unsplash.com/photo-1544161515-4ab6be6adb8e?auto=format&fit=crop&w=1200&q=85",
  pressoterapiaOculare:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=85",
} as const;
