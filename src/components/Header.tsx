"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { SocialNavLinks } from "@/components/SocialNavLinks";
import { MagneticWrap } from "@/components/motion/MagneticWrap";
import { site, whatsappConsultUrl } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/trattamenti", label: "Trattamenti" },
  { href: "/rituali", label: "Rituali dal mondo" },
  { href: "/urban-spa", label: "Urban Spa" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/voucher-regalo", label: "Gift & Voucher" },
  { href: "/scheda-cliente", label: "Scheda cliente" },
  { href: "/#chi-siamo", label: "Chi siamo" },
  { href: "/#dove-siamo", label: "Dove siamo" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/25 bg-cream-50/90 shadow-lg backdrop-blur-xl"
          : "border-b border-transparent bg-cream-50/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-1 sm:min-h-[4.25rem] sm:px-6 lg:gap-6">
        <Link
          href="/"
          className="relative z-[92] mr-2 flex w-[132px] shrink-0 items-center sm:w-[152px] lg:mr-6 lg:w-[168px]"
          onClick={() => setMenuOpen(false)}
        >
          <SiteLogo
            variant="header"
            priority
            className="h-8 w-full object-contain sm:h-9 lg:h-10"
          />
          <span className="sr-only">{site.shortName} Beauty &amp; Spa</span>
        </Link>

        <nav
          className="relative z-[91] hidden min-w-0 flex-1 items-center justify-center gap-x-2 overflow-x-auto px-2 lg:flex lg:gap-x-3 xl:gap-x-4"
          aria-label="Navigazione principale"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium text-charcoal/75 transition hover:bg-white/50 hover:text-charcoal xl:text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <SocialNavLinks
            variant="header"
            className="hidden lg:flex lg:mr-1"
          />
          <MagneticWrap className="hidden sm:inline-flex">
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-4 py-2 text-xs font-semibold text-charcoal shadow-md transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 sm:text-sm"
            >
              Consulenza gratuita
            </a>
          </MagneticWrap>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-charcoal/10 bg-white/60 text-charcoal backdrop-blur-sm transition hover:bg-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full rounded-full bg-charcoal transition ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full rounded-full bg-charcoal transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-full rounded-full bg-charcoal transition ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 z-[89] lg:hidden ${
          menuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        style={{
          top: "calc(4rem + env(safe-area-inset-top, 0px))",
        }}
      >
        <button
          type="button"
          aria-label="Chiudi menu"
          className={`absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-0 max-h-[calc(100dvh-4rem-env(safe-area-inset-top,0px))] overflow-y-auto rounded-b-3xl border-b border-white/30 bg-cream-50/95 px-4 py-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 font-sans text-base font-medium text-charcoal transition hover:bg-white/70"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-charcoal/10 pt-5">
              <p className="px-1 text-xs font-medium uppercase tracking-widest text-charcoal/55">
                Social
              </p>
              <SocialNavLinks variant="header" className="mt-3 justify-center gap-3" />
            </div>
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-gold-600 to-gold-500 py-3.5 font-semibold text-charcoal shadow-lift"
              onClick={() => setMenuOpen(false)}
            >
              Consulenza gratuita — WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
