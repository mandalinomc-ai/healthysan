import type { Metadata } from "next";
import { RitualiMassaggi } from "@/components/RitualiMassaggi";

export const metadata: Metadata = {
  title: "Rituali dal Mondo BeWell",
  description:
    "Rituali dal Mondo - Laboratoires BeWell: Hammam, Polinesiano, Ayurvedico, Mediterraneo e Urban Spa.",
};

export default function RitualiPage() {
  return (
    <main>
      <RitualiMassaggi />
    </main>
  );
}
