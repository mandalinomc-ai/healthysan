import { images } from "@/lib/images";
import { getSiteOrigin, site } from "@/lib/site";

export function JsonLd() {
  const origin = getSiteOrigin();
  const ogImageAbsolute = `${origin}${images.og}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${origin}/#business`,
    inLanguage: "it-IT",
    name: site.name,
    description: site.description,
    url: origin,
    telephone: "+393911729755",
    email: site.email,
    priceRange: site.priceRange,
    image: ogImageAbsolute,
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.role,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    sameAs: [site.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
