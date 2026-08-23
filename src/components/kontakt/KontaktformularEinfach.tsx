'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { firma } from '@/data/firma';

/** Einfacher, klassischer Formularstil mit umrahmten Feldern statt
 * unterstrichenen Linien — auf Kundenwunsch, angelehnt an ein bestehendes
 * Vorbild. Versand über /api/kontakt (Resend); schlägt der Versand fehl
 * (z. B. RESEND_API_KEY noch nicht gesetzt), öffnet ein mailto-Link als
 * Auffangnetz, statt die Anfrage stillschweigend zu verlieren. */
const feldStil =
  'w-full rounded-[3px] border border-[#d9d7d4] bg-white px-4 py-3 text-base text-ink placeholder:text-stone focus:border-ink focus:outline-none';

type Status = 'idle' | 'senden' | 'gesendet' | 'fehler';

export default function KontaktformularEinfach() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const daten = new FormData(form);
    const werte = {
      vorname: String(daten.get('vorname') ?? ''),
      nachname: String(daten.get('nachname') ?? ''),
      email: String(daten.get('email') ?? ''),
      telefon: String(daten.get('telefon') ?? ''),
      unternehmen: String(daten.get('unternehmen') ?? ''),
      betreff: String(daten.get('betreff') ?? ''),
      nachricht: String(daten.get('nachricht') ?? ''),
      webseite: String(daten.get('webseite') ?? ''), // Honeypot, muss leer bleiben
    };

    setStatus('senden');

    try {
      const antwort = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(werte),
      });
      if (!antwort.ok) throw new Error('Versand fehlgeschlagen');
      setStatus('gesendet');
      form.reset();
    } catch {
      // Auffangnetz: E-Mail-Programm mit vorausgefüllter Nachricht öffnen,
      // damit die Anfrage nicht verloren geht, während der Versanddienst
      // noch nicht eingerichtet oder kurzzeitig nicht erreichbar ist.
      const mailBetreff = werte.betreff || 'Anfrage über die Website';
      const textzeilen = [
        `Name: ${werte.vorname} ${werte.nachname}`,
        `E-Mail: ${werte.email}`,
        werte.telefon && `Telefon: ${werte.telefon}`,
        werte.unternehmen && `Unternehmen: ${werte.unternehmen}`,
        '',
        werte.nachricht,
      ].filter(Boolean);
      const mailto = `mailto:${firma.email}?subject=${encodeURIComponent(mailBetreff)}&body=${encodeURIComponent(textzeilen.join('\n'))}`;
      window.location.href = mailto;
      setStatus('fehler');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Honeypot: für Menschen unsichtbar und aus der Tab-Reihenfolge
            genommen, von simplen Spam-Bots aber oft automatisch befüllt. */}
        <input
          name="webseite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <input name="vorname" type="text" required placeholder="Vorname *" className={feldStil} />
          <input name="nachname" type="text" required placeholder="Nachname *" className={feldStil} />
          <input name="email" type="email" required placeholder="E-Mail *" className={feldStil} />
          <input name="telefon" type="tel" placeholder="Telefonnummer" className={feldStil} />
        </div>

        <input name="unternehmen" type="text" placeholder="Unternehmen" className={`${feldStil} mt-5`} />
        <input name="betreff" type="text" placeholder="Betreff" className={`${feldStil} mt-5`} />
        <textarea name="nachricht" required rows={6} placeholder="Nachricht *" className={`${feldStil} mt-5 resize-y`} />

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

        <p className="mt-4 text-xs text-stone">* Pflichtfeld</p>

        <div className="mt-6 flex justify-end">
          <Button type="submit" variant="outline" disabled={status === 'senden'}>
            {status === 'senden' ? 'Wird gesendet …' : 'Absenden'}
          </Button>
        </div>

        {status === 'gesendet' && (
          <p className="mt-4 text-sm text-graphite">
            Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich zurück.
          </p>
        )}
        {status === 'fehler' && (
          <p className="mt-4 text-sm text-graphite">
            Der direkte Versand hat nicht geklappt — Ihr E-Mail-Programm sollte sich mit der
            vorausgefüllten Anfrage geöffnet haben. Falls nicht, schreiben Sie uns direkt an{' '}
            {firma.email}.
          </p>
        )}
      </form>
    </div>
  );
}
