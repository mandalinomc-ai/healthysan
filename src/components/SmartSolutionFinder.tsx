"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { IMAGE_POLISH } from "@/lib/imageStyles";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { RemotePurchaseButton } from "./RemotePurchaseButton";

type FinderCard = {
  name: string;
  blurb: string;
  keywords: string[];
  image: string;
  type: "Trattamento" | "Macchinario" | "Prodotto" | "Rituale";
};

/** Mapping immagine → servizio fisso (non modificabile dinamicamente). */
const LASER_IMG = images.machineLaser;
const LAMPADA_IMG = images.spaLampada;
const PRESSO_IMG = images.machinePressoterapia;
const RF_IMG = images.machineRadiofrequenza;
const RETINOL_IMG = images.treatmentRetinol;

/**
 * Match esclusivo inestetismo → singola tecnologia ad alta tecnologia (come da brief).
 * Ordine: prima Laser (peli), poi Pressoterapia (cellulite / drenaggio gambe), poi Lampada, poi RF, Retinol.
 */
function matchExclusiveTechnology(normalized: string): FinderCard | null {
  const q = normalized.trim().toLowerCase();
  if (!q) return null;

  const laserCard: FinderCard = {
    name: "Laser Epilatorio",
    blurb: "Percorso progressivo per riduzione dei peli superflui.",
    keywords: [],
    image: LASER_IMG,
    type: "Macchinario",
  };

  const pressoCard: FinderCard = {
    name: "Pressoterapia",
    blurb: "Supporto drenante per cellulite, gonfiore e gambe pesanti.",
    keywords: [],
    image: PRESSO_IMG,
    type: "Macchinario",
  };

  const lampadaCard: FinderCard = {
    name: "Lampada al Collagene",
    blurb: "Biostimolazione per luminosita', abbronzatura visiva e qualita' della pelle.",
    keywords: [],
    image: LAMPADA_IMG,
    type: "Macchinario",
  };

  const rfCard: FinderCard = {
    name: "Radiofrequenza",
    blurb: "Stimolo di tono e compattezza per lassita' viso e corpo.",
    keywords: [],
    image: RF_IMG,
    type: "Macchinario",
  };

  const retinolTechCard: FinderCard = {
    name: "Trattamento Retinol (Bioline Jato)",
    blurb: "Supporto anti-age per grana irregolare, rughe e perdita di luminosita'.",
    keywords: [],
    image: RETINOL_IMG,
    type: "Trattamento",
  };

  const laserTriggers = ["peli", "epilaz", "depilaz", "peluria", "laser ep", "epilatore"];
  if (laserTriggers.some((t) => q.includes(t))) {
    return laserCard;
  }

  const pressoTriggers = ["cellulite", "ritenzione idrica", "gambe pesanti", "gambe gonfie", "pressoterap"];
  if (pressoTriggers.some((t) => q.includes(t))) {
    return pressoCard;
  }

  const retinolTriggers = ["retinol", "rughe", "anti age", "anti-age", "macchie viso", "bioline"];
  if (retinolTriggers.some((t) => q.includes(t))) {
    return retinolTechCard;
  }

  const lampadaTriggers = ["abbronzat", "lampada al", "lampada coll", "foto-biostim"];
  if (lampadaTriggers.some((t) => q.includes(t))) {
    return lampadaCard;
  }
  if (q.includes("collagene")) {
    return lampadaCard;
  }
  if (q.includes("pelle abbronzata")) {
    return lampadaCard;
  }

  if (q.includes("radiofrequenza") || /\brf\b/.test(q)) {
    return rfCard;
  }

  return null;
}

const finderCards: FinderCard[] = [
  {
    name: "Trattamento Retinol (Bioline Jato)",
    blurb: "Supporto anti-age per grana irregolare, rughe e perdita di luminosita'.",
    keywords: [
      "rughe",
      "rilassamento cutaneo",
      "macchie viso",
      "pelle luminosa",
      "anti age",
      "linee sottili",
    ],
    image: RETINOL_IMG,
    type: "Trattamento",
  },
  {
    name: "Radiofrequenza",
    blurb: "Stimolo di tono e compattezza per lassita' viso e corpo.",
    keywords: ["rilassamento cutaneo", "corpo tonico", "adipe", "tono", "elasticita"],
    image: RF_IMG,
    type: "Macchinario",
  },
  {
    name: "Laser Epilatorio",
    blurb: "Percorso progressivo per riduzione dei peli superflui.",
    keywords: ["peli superflui", "peli", "epilazione", "depilazione"],
    image: LASER_IMG,
    type: "Macchinario",
  },
  {
    name: "Pressoterapia",
    blurb: "Supporto drenante per cellulite, gonfiore e gambe pesanti.",
    keywords: ["cellulite", "ritenzione idrica", "gambe leggere", "adipe", "drenaggio"],
    image: PRESSO_IMG,
    type: "Macchinario",
  },
  {
    name: "Lampada al Collagene",
    blurb: "Biostimolazione per luminosita' e qualita' generale della pelle.",
    keywords: ["pelle luminosa", "rilassamento cutaneo", "collagene", "pelle abbronzata", "abbronzatura"],
    image: LAMPADA_IMG,
    type: "Macchinario",
  },
  {
    name: "Massaggio Rilassante",
    blurb: "Manualita' avvolgenti per un recupero profondo e relax totale.",
    keywords: ["relax totale", "stanchezza", "tensione", "benessere"],
    image: images.treatmentMassaggio,
    type: "Rituale",
  },
  {
    name: "Massaggio Rimodellante",
    blurb: "Manualita' mirate su silhouette e rimodellamento corporeo per corpo tonico.",
    keywords: ["adipe", "corpo tonico", "rimodellamento", "ritenzione idrica"],
    image: images.treatmentAmbiente,
    type: "Rituale",
  },
  {
    name: "Rituale Urban Spa (Jacuzzi + Sauna)",
    blurb: "Rituale multisensoriale per relax totale e reset fisico-mentale.",
    keywords: ["relax totale", "stanchezza", "gambe leggere"],
    image: images.spaSauna,
    type: "Rituale",
  },
  {
    name: "Crema Viso Anti-Eta HealthySan",
    blurb: "Supporto domiciliare per rughe, luminosita' e uniformita' cutanea.",
    keywords: ["rughe", "macchie viso", "pelle luminosa", "anti age"],
    image: images.productCremaAntiEta,
    type: "Prodotto",
  },
  {
    name: "Crema Viso Liftante HealthySan",
    blurb: "Routine daily lift per sostenere tono e compattezza.",
    keywords: ["rilassamento cutaneo", "corpo tonico", "pelle luminosa"],
    image: images.productCremaLiftante,
    type: "Prodotto",
  },
  {
    name: "Kit Fragoline di Bosco HealthySan",
    blurb: "Routine nutriente per pelle levigata e luminosa a casa.",
    keywords: ["pelle luminosa", "stanchezza", "relax totale"],
    image: images.productKitFragoline,
    type: "Prodotto",
  },
  {
    name: "Protocollo Acne Control",
    blurb: "Valutazione in cabina e protocollo mirato per acne e impurita'.",
    keywords: ["acne", "macchie viso", "pelle luminosa"],
    image: images.treatmentViso,
    type: "Trattamento",
  },
];

const suggestedKeywords = [
  "Cellulite",
  "adipe",
  "ritenzione idrica",
  "rughe",
  "rilassamento cutaneo",
  "peli superflui",
  "macchie viso",
  "acne",
  "pelle luminosa",
  "corpo tonico",
  "relax totale",
  "gambe leggere",
  "collagene",
] as const;

function scoreCard(input: string, card: FinderCard): number {
  const clean = input.trim().toLowerCase();
  if (!clean) return 0;
  if (card.name.toLowerCase().includes(clean)) return 4;
  return card.keywords.reduce((score, key) => {
    return clean.includes(key) || key.includes(clean) ? score + 2 : score;
  }, 0);
}

export function SmartSolutionFinder() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const matches = useMemo(() => {
    const active = submittedQuery.trim().toLowerCase();
    if (!active) return [];

    const exclusive = matchExclusiveTechnology(active);
    if (exclusive) {
      return [exclusive];
    }

    return finderCards
      .map((card) => ({ card, score: scoreCard(active, card) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((entry) => entry.card);
  }, [submittedQuery]);

  const hasNoMatch = submittedQuery.trim().length > 0 && matches.length === 0;

  function runSearch() {
    setSubmittedQuery(query.trim());
  }

  return (
    <section
      id="estetista-digitale"
      className="border-t border-gold-500/15 bg-gradient-to-b from-cream-50 via-white to-cream-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-sans text-xs uppercase tracking-[0.32em] text-charcoal-700">
            Estetista Digitale
          </p>
          <h2 className="mt-3 text-center font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold text-charcoal">
            Trova la soluzione giusta
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-sm leading-relaxed text-charcoal/72">
            Scrivi il tuo inestetismo o obiettivo e premi <strong className="font-medium text-charcoal">Invio</strong>{" "}
            per vedere le schede consigliate (le ricerche tipo &quot;cellulite&quot; o &quot;peli&quot; mostrano la
            tecnologia indicata).
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-4xl">
          <div className="glass-card p-5 sm:p-7">
            <label htmlFor="finder-query" className="sr-only">
              Ciao HealthySan, cerco una soluzione per...
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <input
                id="finder-query"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    runSearch();
                  }
                }}
                placeholder="Ciao HealthySan, cerco una soluzione per... [Inestetismo]"
                className="min-h-[48px] w-full flex-1 rounded-2xl border border-charcoal/15 bg-white/90 px-4 py-3 font-sans text-sm text-charcoal outline-none ring-gold-500/30 transition placeholder:text-charcoal/40 focus:ring-2"
              />
              <button
                type="button"
                onClick={runSearch}
                className="shrink-0 rounded-2xl bg-gradient-to-r from-gold-600 to-gold-500 px-6 py-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-charcoal shadow-lift transition hover:brightness-105"
              >
                Cerca
              </button>
            </div>
            <p className="mt-2 font-sans text-xs text-charcoal/50">Suggerimento: Invio sulla tastiera esegue la ricerca.</p>
            <p className="mt-3 font-sans text-sm font-medium text-charcoal/80">Ecco cosa ti suggeriamo:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestedKeywords.map((word) => (
                <button
                  key={word}
                  type="button"
                  onClick={() => {
                    setQuery(word);
                    setSubmittedQuery(word.trim().toLowerCase());
                  }}
                  className="rounded-full border border-charcoal/20 bg-white px-3 py-1 font-sans text-[11px] text-charcoal/75 transition hover:bg-cream-50"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {submittedQuery.trim().length > 0 && (
          <Reveal className="mt-6">
            <p className="text-center font-sans text-sm text-charcoal/75">
              Risultati per &quot;{submittedQuery.trim()}&quot;:
            </p>
          </Reveal>
        )}

        {matches.length > 0 && (
          <Reveal className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {matches.map((card) => (
                <article
                  key={card.name}
                  className="overflow-hidden rounded-2xl border border-cream-200/90 bg-white shadow-sm ring-1 ring-gold-400/10"
                >
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className={`object-cover ${IMAGE_POLISH}`}
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-gold-700">{card.type}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-charcoal">{card.name}</h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal/70">{card.blurb}</p>
                    <RemotePurchaseButton itemName={card.name} className="mt-4" />
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        )}

        {hasNoMatch && (
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-dashed border-charcoal/25 bg-white/80 p-6 text-center">
              <p className="font-sans text-sm text-charcoal/72">
                Non trovi quello che cerchi? Chiedi una consulenza a Loredana.
              </p>
              <a
                href={`https://wa.me/${site.phoneE164}?text=${encodeURIComponent(
                  "Ciao Loredana, non trovo il trattamento giusto sul sito. Mi aiuti con una consulenza personalizzata?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-gradient-to-r from-gold-600 to-gold-500 px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-charcoal shadow-lift transition hover:brightness-105"
              >
                Consulenza WhatsApp con Loredana
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
