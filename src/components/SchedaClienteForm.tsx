"use client";

import { useState } from "react";
import {
  buildSchedaWhatsAppUrl,
  type SchedaFormData,
  type SchedaGoal,
} from "@/lib/schedaCliente";

const goals: SchedaGoal[] = [
  "Pelle abbronzata",
  "Senza peli",
  "Viso giovane",
  "Gambe sgonfie",
  "Corpo tonico",
];

const initial: SchedaFormData = {
  fullName: "",
  birthDate: "",
  goals: [],
  skinType: "",
  heightCm: "",
  weightKg: "",
  allergies: "",
  medications: "",
  recentSurgery: "",
  medicalNotes: "",
};

export function SchedaClienteForm() {
  const [data, setData] = useState<SchedaFormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [goalError, setGoalError] = useState(false);

  function setField<K extends keyof SchedaFormData>(key: K, value: SchedaFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleGoalToggle(goal: SchedaGoal, checked: boolean) {
    setData((prev) => ({
      ...prev,
      goals: checked ? [...prev.goals, goal] : prev.goals.filter((g) => g !== goal),
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (data.goals.length === 0) {
      setGoalError(true);
      return;
    }
    setGoalError(false);
    const url = buildSchedaWhatsAppUrl(data);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-6 rounded-3xl glass-card p-8 sm:p-10"
    >
      <div>
        <label htmlFor="fullName" className="block font-sans text-sm font-medium text-charcoal">
          Nome e cognome *
        </label>
        <input
          id="fullName"
          name="fullName"
          required
          autoComplete="name"
          value={data.fullName}
          onChange={(e) => setField("fullName", e.target.value)}
          className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-charcoal outline-none ring-gold-500/30 transition focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="birthDate" className="block font-sans text-sm font-medium text-charcoal">
          Data di nascita *
        </label>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
          required
          value={data.birthDate}
          onChange={(e) => setField("birthDate", e.target.value)}
          className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-charcoal outline-none ring-gold-500/30 transition focus:ring-2"
        />
      </div>

      <fieldset className="rounded-2xl border border-charcoal/12 bg-white/65 p-4">
        <legend className="px-2 font-sans text-sm font-medium text-charcoal">Obiettivi *</legend>
        <p className="px-2 pb-3 font-sans text-xs text-charcoal/65">
          Seleziona uno o più obiettivi del percorso.
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {goals.map((goal) => (
            <label
              key={goal}
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal/10 bg-white/75 px-3 py-2 font-sans text-sm text-charcoal"
            >
              <input
                type="checkbox"
                checked={data.goals.includes(goal)}
                onChange={(e) => {
                  handleGoalToggle(goal, e.target.checked);
                  setGoalError(false);
                }}
                className="h-4 w-4 accent-gold-600"
              />
              {goal}
            </label>
          ))}
        </div>
        {goalError && (
          <p className="px-2 pt-3 font-sans text-xs text-red-600">
            Seleziona almeno un obiettivo prima di inviare.
          </p>
        )}
      </fieldset>

      <p className="rounded-xl border border-dashed border-charcoal/25 bg-white/70 px-4 py-3 font-sans text-xs text-charcoal/65">
        Se non conosci un dato, lascia pure il campo vuoto.
      </p>

      <div>
        <label htmlFor="skinType" className="block font-sans text-sm font-medium text-charcoal">
          Tipo di pelle *
        </label>
        <input
          id="skinType"
          name="skinType"
          required
          placeholder="es. mista, sensibile, secca…"
          value={data.skinType}
          onChange={(e) => setField("skinType", e.target.value)}
          className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-charcoal outline-none ring-gold-500/30 transition placeholder:text-charcoal/35 focus:ring-2"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="heightCm" className="block font-sans text-sm font-medium text-charcoal">
            Altezza (cm)
          </label>
          <input
            id="heightCm"
            name="heightCm"
            inputMode="decimal"
            value={data.heightCm}
            onChange={(e) => setField("heightCm", e.target.value)}
            className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-charcoal outline-none ring-gold-500/30 transition focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="weightKg" className="block font-sans text-sm font-medium text-charcoal">
            Peso (kg)
          </label>
          <input
            id="weightKg"
            name="weightKg"
            inputMode="decimal"
            value={data.weightKg}
            onChange={(e) => setField("weightKg", e.target.value)}
            className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-charcoal outline-none ring-gold-500/30 transition focus:ring-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="allergies" className="block font-sans text-sm font-medium text-charcoal">
          Allergie note
        </label>
        <textarea
          id="allergies"
          name="allergies"
          rows={3}
          value={data.allergies}
          onChange={(e) => setField("allergies", e.target.value)}
          placeholder="Eventuali allergie da segnalare"
          className="mt-2 w-full resize-y rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-sm leading-relaxed text-charcoal outline-none ring-gold-500/30 transition placeholder:text-charcoal/35 focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="medications" className="block font-sans text-sm font-medium text-charcoal">
          Farmaci in uso
        </label>
        <textarea
          id="medications"
          name="medications"
          rows={3}
          value={data.medications}
          onChange={(e) => setField("medications", e.target.value)}
          placeholder="Se stai assumendo farmaci, indicali qui"
          className="mt-2 w-full resize-y rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-sm leading-relaxed text-charcoal outline-none ring-gold-500/30 transition placeholder:text-charcoal/35 focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="recentSurgery" className="block font-sans text-sm font-medium text-charcoal">
          Operazioni o interventi chirurgici recenti
        </label>
        <p id="recentSurgery-hint" className="mt-1 font-sans text-xs text-charcoal/60">
          Se non ricordi o non hai dati, lascia pure il campo vuoto.
        </p>
        <textarea
          id="recentSurgery"
          name="recentSurgery"
          rows={4}
          aria-describedby="recentSurgery-hint"
          value={data.recentSurgery}
          onChange={(e) => setField("recentSurgery", e.target.value)}
          placeholder="Es. intervento negli ultimi 12 mesi (tipo e data approssimativa), oppure lascia vuoto."
          className="mt-2 w-full resize-y rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-sm leading-relaxed text-charcoal outline-none ring-gold-500/30 transition placeholder:text-charcoal/35 focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="medicalNotes" className="block font-sans text-sm font-medium text-charcoal">
          Note utili per la consulenza
        </label>
        <textarea
          id="medicalNotes"
          name="medicalNotes"
          rows={5}
          value={data.medicalNotes}
          onChange={(e) => setField("medicalNotes", e.target.value)}
          placeholder="Informazioni aggiuntive che vuoi condividere"
          className="mt-2 w-full resize-y rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 font-sans text-sm leading-relaxed text-charcoal outline-none ring-gold-500/30 transition placeholder:text-charcoal/35 focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-gradient-to-r from-gold-600 to-gold-500 py-4 font-sans text-sm font-semibold text-charcoal shadow-lift transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
      >
        Invia su WhatsApp
      </button>

      {submitted && (
        <p className="text-center font-sans text-sm text-charcoal/65" role="status">
          Se non si è aperta una nuova scheda, consenti i popup o copia il messaggio dalla finestra
          WhatsApp.
        </p>
      )}
    </form>
  );
}
