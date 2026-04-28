import type { Metadata } from "next";
import { UrbanSpaImmersion } from "@/components/UrbanSpaImmersion";

export const metadata: Metadata = {
  title: "Urban Spa Benevento",
  description:
    "Jacuzzi, sauna e rituali benessere nel centro storico di Benevento — HealthySan Urban Spa.",
};

export default function UrbanSpaPage() {
  return (
    <main>
      <UrbanSpaImmersion />
    </main>
  );
}
