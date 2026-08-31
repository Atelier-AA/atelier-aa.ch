'use client';

import { FormEvent, useState } from 'react';

/**
 * Anmeldung über Einmal-Link statt Passwort.
 *
 * Die Seite verrät nichts: Sie bestätigt den Versand mit demselben Text, egal
 * ob die eingegebene Adresse zugelassen ist. Wer die Adresse nicht kennt,
 * erfährt hier auch nicht, welche es wäre.
 */
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [zustand, setZustand] = useState<'bereit' | 'sendet' | 'verschickt'>('bereit');
  const [fehler, setFehler] = useState('');

  async function absenden(ereignis: FormEvent) {
    ereignis.preventDefault();
    setFehler('');
    setZustand('sendet');
    try {
      const antwort = await fetch('/api/mailer/auth/anfordern', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const daten = await antwort.json();
      if (!antwort.ok) throw new Error(daten.error || 'Anmeldung fehlgeschlagen.');
      setZustand('verschickt');
    } catch (f) {
      setFehler(f instanceof Error ? f.message : 'Anmeldung fehlgeschlagen.');
      setZustand('bereit');
    }
  }

  return (
    <div className="mailer-ui">
      <main className="login-shell">
        <section className="login-card">
          <div className="brand-mark">AA</div>
          <p className="eyebrow">ATELIER AA — INTERN</p>
          <h1>Mailing</h1>

          {zustand === 'verschickt' ? (
            <>
              <p className="muted">
                Wenn die Adresse zugelassen ist, liegt jetzt ein Anmeldelink im
                Postfach. Er ist 15 Minuten gültig und funktioniert nur in
                diesem Browser.
              </p>
              <button
                className="button"
                type="button"
                onClick={() => setZustand('bereit')}
              >
                Erneut anfordern
              </button>
            </>
          ) : (
            <>
              <p className="muted">
                Geben Sie Ihre Adresse ein. Sie erhalten einen Anmeldelink per
                E-Mail, ein Passwort gibt es nicht.
              </p>
              <form onSubmit={absenden} className="login-form">
                <label>
                  E-Mail
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                {fehler && <div className="notice error">{fehler}</div>}
                <button className="button button-dark" disabled={zustand === 'sendet'}>
                  {zustand === 'sendet' ? 'Link wird verschickt…' : 'Anmeldelink senden'}
                </button>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
