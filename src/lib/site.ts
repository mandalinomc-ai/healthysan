/** Dati pubblici — verificare periodicamente su Google Business Profile. */
export const site = {
  name: "HealthySan Beauty & Spa",
  shortName: "HealthySan",
  founder: {
    name: "Loredana Santoro",
    role: "Fondatrice ed estetista professionista certificata",
  },
  description:
    "Urban spa e centro estetico d’eccellenza nel cuore di Benevento, tra le Mura Longobarde: rituali multisensoriali, macchinari avanzati, massaggi su misura e accoglienza raffinata a due passi da Piazza Roma.",
  address: {
    streetAddress: "Via Orbilio Pupillo, 4",
    addressLocality: "Benevento",
    postalCode: "82100",
    addressRegion: "BN",
    addressCountry: "IT",
  },
  geo: {
    latitude: 41.13085,
    longitude: 14.77755,
  },
  phoneDisplay: "+39 391 172 9755",
  /** E.164 senza + per wa.me */
  phoneE164: "393911729755",
  email: "healthysanspa@gmail.com",
  priceRange: "$$",
  openingHours: {
    mon: "closed",
    tue: "09:30-19:30",
    wed: "09:30-19:30",
    thu: "09:30-19:30",
    fri: "09:30-19:30",
    sat: "09:30-19:30",
    sun: "closed",
  },
  social: {
    instagram: "https://www.instagram.com/healthysan_centroestetico/",
    tiktok: "https://www.tiktok.com/@healthysan",
    facebook: "https://www.facebook.com/healthysan/",
  },
  mapsSearchQuery:
    "HealthySan Beauty & Spa, Via Orbilio Pupillo 4, 82100 Benevento BN, Italia",
  /** Messaggio precompilato WhatsApp (italiano) */
  whatsappPrefilledMessage:
    "Salve HealthySan, vorrei prenotare una consulenza gratuita. Grazie!",
} as const;

export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv?.startsWith("http")) return fromEnv.replace(/\/$/, "");
  return "http://localhost:3000";
}

export const whatsappConsultUrl = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(
  site.whatsappPrefilledMessage
)}`;

export const mapsDirectionsUrl =
  "http://maps.google.com/?daddr=HealthySan+Centro+Estetico";
