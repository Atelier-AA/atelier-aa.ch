'use client';

import { useState, type FormEvent } from 'react';

const inputClass =
  'w-full border border-mist bg-white px-4 py-3 text-ink placeholder:text-stone focus:border-ink focus:outline-none';

export default function KontaktFormular() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const daten = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(daten),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <p className="text-lg text-ink">
        Vielen Dank für Ihre Nachricht — wir melden uns innert kurzer Zeit zurück.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="mb-2 text-lg text-graphite">Wir freuen uns über Ihre Kontaktaufnahme.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input required name="vorname" placeholder="Vorname" className={inputClass} />
        <input required name="nachname" placeholder="Nachname" className={inputClass} />
        <input required type="email" name="email" placeholder="E-Mail" className={inputClass} />
        <input name="telefon" type="tel" placeholder="Telefonnummer" className={inputClass} />
      </div>
      <input name="unternehmen" placeholder="Unternehmen" className={inputClass} />
      <input name="betreff" placeholder="Betreff" className={inputClass} />
      <textarea required name="nachricht" placeholder="Nachricht" rows={6} className={inputClass} />

      {status === 'error' && (
        <p className="text-sm text-red-700">
          Senden hat nicht funktioniert — schreiben Sie uns direkt an{' '}
          <a href="mailto:info@atelier-aa.ch" className="underline">
            info@atelier-aa.ch
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group inline-flex items-center gap-4 rounded-full border border-ink px-6 py-3 text-sm uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white disabled:opacity-50"
      >
        {status === 'sending' ? 'Wird gesendet …' : 'Absenden'}
      </button>
    </form>
  );
}
