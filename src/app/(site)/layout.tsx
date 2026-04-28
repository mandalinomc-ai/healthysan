import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImmersionChrome } from "@/components/ImmersionChrome";
import { MapsFloat } from "@/components/MapsFloat";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ImmersionChrome />
      <Header />
      <div className="pt-[calc(4rem+env(safe-area-inset-top))]">{children}</div>
      <Footer />
      <MapsFloat />
      <WhatsAppFloat />
    </>
  );
}
