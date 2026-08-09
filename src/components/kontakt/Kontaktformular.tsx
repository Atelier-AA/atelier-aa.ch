'use client';

import { useState } from 'react';
import Link from 'next/link';
import { firma } from '@/data/firma';

const anliegenOptionen = [
  'Machbarkeitsstudie',
  'Neubau',
  'Umbau & Sanierung',
  'Bauleitung',
  'Sonstiges',
];

/** Gemeinsamer Stil für alle Eingabefelder: unterstrichen statt umrahmt,
 * passend zur zurückhaltenden Linie der übrigen Website. */
const feldStil =
  'w-full border-0 border-b border-mist bg-transparent py-2 text-lg text-ink placeholder:text-stone/60 focus:border-ink focus:outline-none';

/**
 * Öffnet das Mail-Programm mit vorausgefüllter Nachricht statt eines
 * eigenen Versand-Backends — es ist noch kein E-Mail-Dienst mit
 * Zugangsdaten hinterlegt. Sobald einer feststeht, kann hier eine echte
 * serverseitige Zustellung eingesetzt werden, ohne die Feldnamen zu ändern.
 */
export default function Kontaktformular() {
  const [gesendet, setGesendet] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const daten = new FormData(form);
    const vorname = String(daten.get('vorname') ?? '');
    const nachname = String(daten.get('nachname') ?? '');
    const email = String(daten.get('email') ?? '');
    const telefon = String(daten.get('telefon') ?? '');
    const ort = String(daten.get('ort') ?? '');
    const anliegen = String(daten.get('anliegen') ?? '');
    const nachricht = String(daten.get('nachricht') ?? '');

    const betreff = `Anfrage über die Website: ${anliegen}`;
    const textzeilen = [
      `Name: ${vorname} ${nachname}`,
      `E-Mail: ${email}`,
      telefon && `Telefon: ${telefon}`,
      ort && `Ort des Vorhabens: ${ort}`,
      `Anliegen: ${anliegen}`,
      '',
      nachricht,
    ].filter(Boolean);

    const mailto = `mailto:${firma.email}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(textzeilen.join('\n'))}`;
    window.location.href = mailto;
    setGesendet(true);
  };

  return (
    <div>
      <p className="mb-4 text-xs uppercase tracking-widest text-stone">
        Kontaktformular
      </p>
      <h2 className="mb-8 max-w-lg text-3xl font-normal leading-tight text-ink md:text-4xl">
        Erzählen Sie uns von{' '}
        <span className="font-semibold">Ihrem Vorhaben.</span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-3xl">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div>
            <label htmlFor="vorname" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Vorname <span className="text-stone">*</span>
            </label>
            <input id="vorname" name="vorname" type="text" required className={feldStil} placeholder="Ihr Vorname" />
          </div>
          <div>
            <label htmlFor="nachname" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Nachname <span className="text-stone">*</span>
            </label>
            <input id="nachname" name="nachname" type="text" required className={feldStil} placeholder="Ihr Nachname" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              E-Mail <span className="text-stone">*</span>
            </label>
            <input id="email" name="email" type="email" required className={feldStil} placeholder="name@beispiel.ch" />
          </div>
          <div>
            <label htmlFor="telefon" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Telefonnummer
            </label>
            <input id="telefon" name="telefon" type="tel" className={feldStil} placeholder="078 000 00 00" />
            <p className="mt-2 text-xs text-stone">Optional — nur falls ein Rückruf einfacher ist.</p>
          </div>

          <div>
            <label htmlFor="ort" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Ort des Vorhabens
            </label>
            <input id="ort" name="ort" type="text" className={feldStil} placeholder="z. B. Obfelden" />
          </div>
          <div>
            <label htmlFor="anliegen" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Ihr Anliegen <span className="text-stone">*</span>
            </label>
            <select id="anliegen" name="anliegen" required defaultValue="" className={feldStil}>
              <option value="" disabled>
                Bitte wählen
              </option>
              {anliegenOptionen.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-9">
          <label htmlFor="nachricht" className="mb-2 block text-xs uppercase tracking-widest text-stone">
            Nachricht <span className="text-stone">*</span>
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            required
            rows={5}
            className={feldStil}
            placeholder="Erzählen Sie uns kurz von Ihrem Grundstück und Ihrer Idee."
          />
        </div>

        <label className="mt-10 flex max-w-xl items-start gap-3 text-sm leading-relaxed text-graphite">
          <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-ink" />
          <span>
            Ich habe die{' '}
            <Link href="/datenschutzerklaerung" className="text-ink underline underline-offset-4 hover:text-graphite">
              Datenschutzerklärung
            </Link>{' '}
            gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung dieser Anfrage
            verwendet werden.
          </span>
        </label>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-stone">
            Lieber direkt?{' '}
            <a href={`tel:${firma.telefonHref}`} className="text-ink hover:text-graphite">
              {firma.telefon}
            </a>{' '}
            ·{' '}
            <a href={`mailto:${firma.email}`} className="text-ink hover:text-graphite">
              {firma.email}
            </a>
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:bg-graphite"
          >
            Anfrage senden
          </button>
        </div>

        {gesendet && (
          <p className="mt-6 text-sm text-graphite">
            Ihr E-Mail-Programm sollte sich mit einer vorausgefüllten Nachricht geöffnet haben.
            Falls nicht, schreiben Sie uns direkt an{' '}
            <a href={`mailto:${firma.email}`} className="text-ink underline underline-offset-4">
              {firma.email}
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
