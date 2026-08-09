'use client';

import { useState } from 'react';
import Link from 'next/link';
import { firma } from '@/data/firma';

/** Einfacher, klassischer Formularstil mit umrahmten Feldern statt
 * unterstrichenen Linien — auf Kundenwunsch, angelehnt an ein bestehendes
 * Vorbild. Versand vorerst über mailto, siehe Kontaktformular.tsx. */
const feldStil =
  'w-full rounded-[3px] border border-[#d9d7d4] bg-white px-4 py-3 text-base text-ink placeholder:text-stone focus:border-ink focus:outline-none';

export default function KontaktformularEinfach() {
  const [gesendet, setGesendet] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const daten = new FormData(form);
    const vorname = String(daten.get('vorname') ?? '');
    const nachname = String(daten.get('nachname') ?? '');
    const email = String(daten.get('email') ?? '');
    const telefon = String(daten.get('telefon') ?? '');
    const unternehmen = String(daten.get('unternehmen') ?? '');
    const betreff = String(daten.get('betreff') ?? '');
    const nachricht = String(daten.get('nachricht') ?? '');

    const mailBetreff = betreff || 'Anfrage über die Website';
    const textzeilen = [
      `Name: ${vorname} ${nachname}`,
      `E-Mail: ${email}`,
      telefon && `Telefon: ${telefon}`,
      unternehmen && `Unternehmen: ${unternehmen}`,
      '',
      nachricht,
    ].filter(Boolean);

    const mailto = `mailto:${firma.email}?subject=${encodeURIComponent(mailBetreff)}&body=${encodeURIComponent(textzeilen.join('\n'))}`;
    window.location.href = mailto;
    setGesendet(true);
  };

  return (
    <div>
      <p className="mb-8 text-lg text-graphite">Wir freuen uns über Ihre Kontaktaufnahme.</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <input name="vorname" type="text" required placeholder="Vorname" className={feldStil} />
          <input name="nachname" type="text" required placeholder="Nachname" className={feldStil} />
          <input name="email" type="email" required placeholder="E-Mail" className={feldStil} />
          <input name="telefon" type="tel" placeholder="Telefonnummer" className={feldStil} />
        </div>

        <input name="unternehmen" type="text" placeholder="Unternehmen" className={`${feldStil} mt-5`} />
        <input name="betreff" type="text" placeholder="Betreff" className={`${feldStil} mt-5`} />
        <textarea name="nachricht" required rows={6} placeholder="Nachricht" className={`${feldStil} mt-5 resize-y`} />

        <label className="mt-6 flex items-start gap-2.5 text-xs leading-relaxed text-stone">
          <input type="checkbox" required className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-ink" />
          <span>
            Ich habe die{' '}
            <Link href="/datenschutzerklaerung" className="underline underline-offset-2 hover:text-ink">
              Datenschutzerklärung
            </Link>{' '}
            gelesen und bin einverstanden.
          </span>
        </label>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-3 rounded-full border border-ink px-6 py-3 text-base text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            Absenden
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>

        {gesendet && (
          <p className="mt-4 text-sm text-graphite">
            Ihr E-Mail-Programm sollte sich geöffnet haben. Falls nicht: {firma.email}
          </p>
        )}
      </form>
    </div>
  );
}
