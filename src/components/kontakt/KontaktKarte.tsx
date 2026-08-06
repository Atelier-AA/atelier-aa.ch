'use client';

import { useMapsConsent } from '@/lib/mapsConsent';

/**
 * Lädt die Google-Maps-Einbettung erst nach Zustimmung — vorher steht nur
 * ein Platzhalter mit eigenem Zustimmungs-Button. Verhindert, dass das
 * Drittanbieter-Cookie ungefragt gesetzt wird.
 */
export default function KontaktKarte() {
  const { consent, grant } = useMapsConsent();

  return (
    <div className="relative aspect-square w-full bg-mist">
      {consent ? (
        <iframe
          src="https://www.google.com/maps?q=Atelier+AA+Architekten+GmbH,+Bachstrasse+39,+8912+Obfelden&output=embed"
          title="Standort der Atelier AA Architekten GmbH auf Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full grayscale"
          style={{ border: 0 }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
          <p className="max-w-xs text-sm text-graphite">
            Die Karte wird von Google Maps eingebettet und setzt dabei Cookies. Mit
            Klick auf «Karte laden» stimmen Sie dem zu.
          </p>
          <button
            type="button"
            onClick={grant}
            className="rounded-full border border-ink px-6 py-2 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Karte laden
          </button>
        </div>
      )}
    </div>
  );
}
