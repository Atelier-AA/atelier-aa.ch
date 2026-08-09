'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CONSENT_EVENT,
  ladeEinwilligung,
  speichereEinwilligung,
} from '@/lib/consent';

export const COOKIE_SETTINGS_EVENT = 'atelier-aa-cookie-open';

/**
 * Eigener, schlanker Cookie-Banner statt eines Drittanbieter-CMPs — passend
 * zum bestehenden Farb- und Typo-System. Erscheint nur, solange keine
 * Entscheidung gespeichert ist; danach lässt er sich über den
 * "Cookie-Einstellungen"-Link im Footer erneut öffnen (siehe Footer.tsx).
 */
export default function CookieBanner() {
  const [sichtbar, setSichtbar] = useState(false);
  const [einstellungenOffen, setEinstellungenOffen] = useState(false);
  const [statistik, setStatistik] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const bestehende = ladeEinwilligung();
    if (!bestehende) setSichtbar(true);
    else {
      setStatistik(bestehende.statistik);
      setMarketing(bestehende.marketing);
    }

    const oeffnen = () => {
      const aktuell = ladeEinwilligung();
      setStatistik(aktuell?.statistik ?? false);
      setMarketing(aktuell?.marketing ?? false);
      setEinstellungenOffen(true);
      setSichtbar(true);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, oeffnen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, oeffnen);
  }, []);

  if (!sichtbar) return null;

  const schliessen = () => {
    setSichtbar(false);
    setEinstellungenOffen(false);
  };

  const alleAkzeptieren = () => {
    speichereEinwilligung({ statistik: true, marketing: true });
    schliessen();
  };

  const alleAblehnen = () => {
    speichereEinwilligung({ statistik: false, marketing: false });
    schliessen();
  };

  const auswahlSpeichern = () => {
    speichereEinwilligung({ statistik, marketing });
    schliessen();
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-mist bg-paper/98 px-6 py-6 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur sm:px-10"
    >
      <div className="mx-auto max-w-4xl">
        {!einstellungenOffen ? (
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="text-sm leading-relaxed text-graphite">
              Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und
              Ihnen relevante Inhalte zu zeigen. Notwendige Cookies sind für den Betrieb
              der Seite erforderlich. Mehr dazu in unserer{' '}
              <Link
                href="/datenschutzerklaerung"
                className="underline underline-offset-4 hover:text-ink"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setEinstellungenOffen(true)}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
              >
                Einstellungen
              </button>
              <button
                type="button"
                onClick={alleAblehnen}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={alleAkzeptieren}
                className="rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <p className="text-sm leading-relaxed text-graphite">
              Wählen Sie, welche Kategorien Sie zulassen möchten. Sie können Ihre
              Auswahl jederzeit über den Link «Cookie-Einstellungen» im Footer ändern.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-mist p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-ink">Notwendig</span>
                  <input type="checkbox" checked disabled className="h-4 w-4 accent-ink" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone">
                  Für den Betrieb der Website erforderlich, immer aktiv.
                </p>
              </div>

              <div className="rounded-lg border border-mist p-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="cookie-statistik" className="text-sm font-medium text-ink">
                    Statistik
                  </label>
                  <input
                    id="cookie-statistik"
                    type="checkbox"
                    checked={statistik}
                    onChange={(e) => setStatistik(e.target.checked)}
                    className="h-4 w-4 accent-ink"
                  />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone">
                  Hilft uns zu verstehen, wie die Website genutzt wird (Google Analytics).
                </p>
              </div>

              <div className="rounded-lg border border-mist p-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="cookie-marketing" className="text-sm font-medium text-ink">
                    Marketing
                  </label>
                  <input
                    id="cookie-marketing"
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="h-4 w-4 accent-ink"
                  />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone">
                  Wird genutzt, um Werbung ausserhalb unserer Website relevanter zu
                  gestalten.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={alleAblehnen}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={auswahlSpeichern}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
              >
                Nur ausgewählte
              </button>
              <button
                type="button"
                onClick={alleAkzeptieren}
                className="rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-85"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
