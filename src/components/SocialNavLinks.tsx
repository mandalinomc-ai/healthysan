import Link from "next/link";
import { site } from "@/lib/site";

/** Link ufficiali Instagram, TikTok, Facebook (handle in `aria-label`). */
export function SocialNavLinks({
  variant = "footer",
  className = "",
}: {
  variant?: "footer" | "header";
  className?: string;
}) {
  const iconWrap =
    variant === "header"
      ? "rounded-full border border-charcoal/10 bg-white/70 p-2 text-charcoal/80 transition hover:border-gold-400/40 hover:bg-white hover:text-charcoal"
      : "rounded-full border border-white/15 bg-white/5 p-2.5 text-cream-100/90 transition hover:border-gold-400/35 hover:bg-white/10 hover:text-gold-300";

  const items = [
    {
      label: "Instagram — @healthysan_centroestetico",
      href: site.social.instagram,
      icon: IconInstagram,
    },
    {
      label: "TikTok — @healthysan",
      href: site.social.tiktok,
      icon: IconTikTok,
    },
    {
      label: "Facebook — HealthySan",
      href: site.social.facebook,
      icon: IconFacebook,
    },
  ] as const;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className={`inline-flex ${iconWrap}`}
          aria-label={item.label}
        >
          <item.icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}
