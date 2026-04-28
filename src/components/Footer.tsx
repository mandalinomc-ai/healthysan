import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { SocialNavLinks } from "@/components/SocialNavLinks";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/rituali", label: "Rituali dal mondo" },
  { href: "/urban-spa", label: "Urban Spa" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/voucher-regalo", label: "Voucher & Gift Card" },
  { href: "/scheda-cliente", label: "Scheda cliente" },
  { href: "/#chi-siamo", label: "Chi siamo" },
  { href: "/#dove-siamo", label: "Dove siamo" },
] as const;

export function Footer() {
  const addressLine = `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}`;

  return (
    <footer className="border-t border-gold-500/20 bg-charcoal py-12 text-cream-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 sm:px-6">
        <div className="lg:col-span-2">
          <SiteLogo
            variant="footer"
            width={220}
            height={62}
            className="h-14 w-auto max-w-[220px] object-contain object-left"
          />
          <p className="mt-3 font-sans text-sm text-cream-100/75">
            Beauty &amp; Spa · Benevento
          </p>
          <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-cream-100/70">
            {addressLine}
          </p>
          <div className="mt-6">
            <p className="font-medium text-cream-50">Social</p>
            <SocialNavLinks variant="footer" className="mt-3 gap-3" />
            <p className="mt-3 font-sans text-xs leading-relaxed text-cream-100/55">
              Instagram @healthysan_centroestetico · TikTok @healthysan · Facebook HealthySan
            </p>
          </div>
        </div>
        <div>
          <p className="font-medium text-cream-50">Naviga</p>
          <ul className="mt-3 space-y-2 font-sans text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream-100/80 transition hover:text-gold-400"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-sans text-sm text-cream-100/80">
          <p className="font-medium text-cream-50">Orari di apertura</p>
          <p className="mt-2">Da martedì a sabato: 9:30–19:30</p>
          <p>Lunedì e domenica: chiuso</p>
          <p className="mt-6 text-xs leading-relaxed text-cream-100/55">
            Verifica aggiornamenti sui canali social ufficiali del centro.
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center font-sans text-xs leading-relaxed text-cream-100/45 sm:px-6">
        © {new Date().getFullYear()} {site.name}. Sito informativo: verificare orari e
        trattamenti direttamente in sede o tramite i canali ufficiali del centro.
      </p>
    </footer>
  );
}
