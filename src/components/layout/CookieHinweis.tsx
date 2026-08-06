'use client';

import { useState } from 'react';
import { useMapsConsent } from '@/lib/mapsConsent';

/**
 * Schlichter, sitegweiter Hinweis statt eines Kategorien-Banners — auf der
 * ganzen Seite gibt es aktuell nur ein Element, das Cookies von einem
 * Drittanbieter setzen könnte: die Google-Maps-Karte auf /kontakt. Die Karte
 * lädt erst nach Zustimmung (siehe `KontaktKarte`), dieser Hinweis holt die
 * Zustimmung dafür ein, unabhängig davon, ob die Kontaktseite schon besucht
 * wurde.
 */
export default function CookieHinweis() {
  const { consent, grant } = useMapsConsent();
  const [dismissed, setDismissed] = useState(false);

  if (consent || dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-mist bg-white px-6 py-4 text-sm text-graphite shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>
          Auf der Kontaktseite binden wir eine Google-Maps-Karte ein. Dabei können
          Cookies von Google gesetzt werden.{' '}
          <a href="/datenschutzerklaerung" className="underline">
            Mehr dazu
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            grant();
            setDismissed(true);
          }}
          className="shrink-0 rounded-full border border-ink px-5 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
