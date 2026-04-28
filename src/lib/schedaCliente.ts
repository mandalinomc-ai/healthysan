import { site } from "./site";

export type SchedaGoal =
  | "Pelle abbronzata"
  | "Senza peli"
  | "Viso giovane"
  | "Gambe sgonfie"
  | "Corpo tonico";

export type SchedaFormData = {
  fullName: string;
  birthDate: string;
  goals: SchedaGoal[];
  skinType: string;
  heightCm: string;
  weightKg: string;
  allergies: string;
  medications: string;
  recentSurgery: string;
  medicalNotes: string;
};

export function buildSchedaWhatsAppMessage(data: SchedaFormData): string {
  const lines = [
    "*Scheda Cliente HealthySan — Percorso Healthy*",
    "",
    `*Nome e cognome:* ${data.fullName.trim() || "—"}`,
    `*Data di nascita:* ${data.birthDate || "—"}`,
    `*Obiettivi:* ${data.goals.length > 0 ? data.goals.join(", ") : "—"}`,
    `*Tipo di pelle:* ${data.skinType.trim() || "—"}`,
    `*Altezza:* ${data.heightCm.trim() ? `${data.heightCm.trim()} cm` : "—"}`,
    `*Peso:* ${data.weightKg.trim() ? `${data.weightKg.trim()} kg` : "—"}`,
    `*Allergie specifiche:* ${data.allergies.trim() || "—"}`,
    `*Farmaci in uso:* ${data.medications.trim() || "—"}`,
    `*Operazioni o interventi chirurgici recenti:* ${data.recentSurgery.trim() || "—"}`,
    `*Note utili:* ${data.medicalNotes.trim() || "—"}`,
    "",
    "_Messaggio inviato dal modulo sul sito HealthySan._",
  ];
  return lines.join("\n");
}

export function buildSchedaWhatsAppUrl(data: SchedaFormData): string {
  const text = buildSchedaWhatsAppMessage(data);
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(text)}`;
}
