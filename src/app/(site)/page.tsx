import { ChiSiamo } from "@/components/ChiSiamo";
import { CtaBand } from "@/components/CtaBand";
import { HeroImmersion } from "@/components/HeroImmersion";
import { HomeExplore } from "@/components/HomeExplore";
import { Macchinari } from "@/components/Macchinari";
import { MapSection } from "@/components/MapSection";
import { OfficialAppCta } from "@/components/OfficialAppCta";
import { Recensioni } from "@/components/Recensioni";
import { SmartSolutionFinder } from "@/components/SmartSolutionFinder";

export default function HomePage() {
  return (
    <main>
      <HeroImmersion />
      <ChiSiamo />
      <HomeExplore />
      <SmartSolutionFinder />
      <Macchinari />
      <OfficialAppCta />
      <Recensioni />
      <MapSection />
      <CtaBand />
    </main>
  );
}
