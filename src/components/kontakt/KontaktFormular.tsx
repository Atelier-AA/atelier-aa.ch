'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { firma } from '@/data/firma';

/**
 * Kontaktformular — Vorschau ohne Versand.
 *
 * ACHTUNG: Dieses Formular versendet nichts. Es zeigt Aufbau und Gestaltung,
 * damit die Felder abgestimmt werden können; abgeschickte Eingaben werden
 * verworfen und der Hinweistext verweist auf E-Mail und Telefon.
 *
 * Für den Echtbetrieb fehlt:
 * 1. Eine Route `src/app/api/kontakt/route.ts`, die die Daten annimmt.
 * 2. Ein Versanddienst (z. B. Resend oder SMTP) mit Schlüssel in `.env.local`
 *    — niemals im Code, sonst liegt er auf GitHub.
 * 3. Ein Spamschutz (Honeypot ist unten vorbereitet, besser zusätzlich
 *    Cloudflare Turnstile oder ein Rate-Limit).
 * 4. Serverseitige Prüfung der Eingaben; die Attribute hier sind nur eine
 *    Vorprüfung im Browser und keine Sicherheitsmassnahme.
 * 5. Ein Hinweis in der Datenschutzerklärung zur Bearbeitung der Anfragedaten
 *    (bereits ergänzt, siehe Abschnitt "Kontaktformular").
 *
 * Felder entsprechen dem Forminator-Formular der alten Website: Name, E-Mail,
 * Telefon, Betreff, Nachricht.
 */

const felder =
  'w-full border border-mist bg-white px-4 py-3 text-ink transition-colors placeholder:text-stone/70 focus:border-ink focus:outline-none';

export default function KontaktFormular() {
  const [abgeschickt, setAbgeschickt] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Kein Versand: siehe Hinweis oben. Die Eingaben werden nicht übermittelt.
    setAbgeschickt(true);
  }

  return (
    <div>
      <div className="mb-8 border-l-2 border-stone bg-mist px-5 py-4">
        <p className="text-sm text-graphite leading-relaxed">
          <strong className="font-medium text-ink">Vorschau:</strong> Dieses Formular
          ist noch nicht aktiv und versendet keine Nachricht. Bitte schreiben Sie uns
          direkt an{' '}
          <a href={`mailto:${firma.email}`} className="underline underline-offset-4">
            {firma.email}
          </a>{' '}
          oder rufen Sie an unter{' '}
          <a href={`tel:${firma.telefonHref}`} className="underline underline-offset-4">
            {firma.telefon}
          </a>
          .
        </p>
      </div>

      <form onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Name *
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" className={felder} />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              E-Mail *
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" className={felder} />
          </div>

          <div>
            <label htmlFor="telefon" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Telefon
            </label>
            <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={felder} />
          </div>

          <div>
            <label htmlFor="betreff" className="mb-2 block text-xs uppercase tracking-widest text-stone">
              Anliegen
            </label>
            <select id="betreff" name="betreff" className={cn(felder, 'appearance-none')}>
              <option>Neubau</option>
              <option>Umbau oder Sanierung</option>
              <option>Verdichtung oder Aufstockung</option>
              <option>Machbarkeitsprüfung</option>
              <option>Bewerbung</option>
              <option>Anderes</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="nachricht" className="mb-2 block text-xs uppercase tracking-widest text-stone">
            Nachricht *
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={6}
            required
            className={cn(felder, 'resize-y')}
            placeholder="Beschreiben Sie Ihr Vorhaben in wenigen Sätzen: Ort, Art des Projekts, Zeithorizont."
          />
        </div>

        {/* Honeypot: für Menschen unsichtbar, wird von einfachen Bots ausgefüllt.
            Beim späteren Versand muss die Route Anfragen mit gefülltem Feld
            verwerfen. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <p className="mt-6 text-sm text-stone leading-relaxed">
          Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung der
          Anfrage verwenden. Näheres in der{' '}
          <a href="/datenschutzerklaerung" className="underline underline-offset-4">
            Datenschutzerklärung
          </a>
          .
        </p>

        <button
          type="submit"
          className="mt-8 border border-ink px-8 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Anfrage senden
        </button>

        {abgeschickt && (
          <p role="status" className="mt-6 text-graphite">
            Dies ist eine Vorschau — die Nachricht wurde <strong>nicht</strong>{' '}
            versendet. Bitte nutzen Sie vorerst E-Mail oder Telefon.
          </p>
        )}
      </form>
    </div>
  );
}
