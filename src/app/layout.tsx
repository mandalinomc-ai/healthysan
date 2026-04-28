import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { images } from "@/lib/images";
import { getSiteOrigin, site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: {
    default:
      "HealthySan Benevento | Urban Spa, Centro Estetico, Radiofrequenza e Pressoterapia",
    template: `%s | ${site.shortName} Benevento`,
  },
  description: site.description,
  keywords: [
    "centro estetico Benevento",
    "urban spa Benevento",
    "trattamenti viso avanzati Benevento",
    "radiofrequenza viso corpo Benevento",
    "pressoterapia Benevento",
    "massaggi Benevento",
    "rituali benessere",
    "HealthySan",
    "Loredana Santoro",
    "Via Orbilio Pupillo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: getSiteOrigin(),
    siteName: site.name,
    title: "HealthySan — Urban spa e centro estetico nel cuore di Benevento",
    description: site.description,
    images: [
      {
        url: images.og,
        width: 1200,
        height: 630,
        alt: `${site.name}: benessere, rituali e tecnologie nel centro storico`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthySan Benevento — Urban spa e benessere d’autore",
    description: site.description,
    images: [images.og],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      suppressHydrationWarning
      className={`${display.variable} ${playfair.variable} ${dmSans.variable}`}
    >
      <body suppressHydrationWarning className="font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
