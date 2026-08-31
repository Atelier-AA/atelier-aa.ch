'use client';

// Achtung bei der Hintergrundfarbe: `bg-paper/[0.98]` mit Klammern. Die
// Kurzform `bg-paper/98` erzeugt keine CSS-Regel, weil 98 nicht in Tailwinds
// Deckkraft-Skala steht — das Banner stand deshalb ohne Fuellfarbe ueber dem
// Seiteninhalt.

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  CONSENT_EVENT,
  ladeEinwilligung,
  speichereEinwilligung,
} from '@/lib/consent';

export const COOKIE_SETTINGS_EVENT = 'atelier-aa-cookie-open';

/**
 * CSS-Variable mit der aktuellen Banner-Höhe, damit bodenbündige Inhalte
 * (z. B. der Hero-Titel auf der Startseite) ihr nicht ausweichen müssen,
 * ohne von diesem Banner zu wissen — sie reservieren einfach Platz über
 * `var(--cookie-banner-h, 0px)`. Ohne das lag der Banner beim ersten
 * Besuch direkt über dem Hero-Titel, weil beide unabhängig voneinander an
 * der Fensterunterkante verankert sind.
 */
function setzeBannerHoehe(px: number) {
  document.documentElement.style.setProperty('--cookie-banner-h', `${px}px`);
}

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
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sichtbar) return;
    const el = bannerRef.current;
    if (!el) return;
    // getBoundingClientRect statt contentRect: Letzteres schliesst Padding
    // und Rand aus, wir brauchen aber die tatsächliche, sichtbare Höhe.
    const beobachter = new ResizeObserver(() => {
      setzeBannerHoehe(el.getBoundingClientRect().height);
    });
    beobachter.observe(el);
    return () => {
      beobachter.disconnect();
      setzeBannerHoehe(0);
    };
  }, [sichtbar]);

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
      ref={bannerRef}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-mist bg-paper/[0.98] px-6 py-6 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur sm:px-10"
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
                className="rounded-sm underline underline-offset-4 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setEinstellungenOffen(true)}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Einstellungen
              </button>
              <button
                type="button"
                onClick={alleAblehnen}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={alleAkzeptieren}
                className="rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
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
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={auswahlSpeichern}
                className="rounded-full border border-mist px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Nur ausgewählte
              </button>
              <button
                type="button"
                onClick={alleAkzeptieren}
                className="rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
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
