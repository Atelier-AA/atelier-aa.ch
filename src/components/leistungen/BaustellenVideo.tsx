'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface BaustellenVideoProps {
  mp4: string;
  poster: string;
  beschreibung: string;
}

/**
 * Hintergrundvideo, das nicht ungefragt 5 MB lädt.
 *
 * Vorher lief es mit `autoPlay` und festem `src`. Gemessen im Browser: die
 * Seite übertrug auf dem Handy 6,29 MB, während alle anderen Seiten zwischen
 * 0,6 und 2,6 MB liegen. `preload="none"` half nicht — Autostart lädt
 * trotzdem. Deshalb:
 *
 * - Auf schmalen Bildschirmen und bei eingeschaltetem Datensparmodus wird
 *   nur das Standbild gezeigt; das Video lädt erst auf Tippen.
 * - Bei `prefers-reduced-motion` startet es ebenfalls nicht von selbst.
 * - Wo es automatisch läuft, gibt es eine Pausetaste. Bewegung über fünf
 *   Sekunden ohne Möglichkeit zum Anhalten verstösst gegen WCAG 2.2,
 *   Kriterium 2.2.2.
 *
 * Die Quelle wird erst gesetzt, wenn wirklich abgespielt werden soll — ein
 * `<video>` ohne `src` lädt nichts.
 */
export default function BaustellenVideo({ mp4, poster, beschreibung }: BaustellenVideoProps) {
  const [aktiv, setAktiv] = useState(false);
  const [laeuft, setLaeuft] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const schmal = window.matchMedia('(max-width: 900px)').matches;
    const wenigerBewegung = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // @ts-expect-error - connection ist nicht in allen Browsern typisiert
    const sparen = navigator.connection?.saveData === true;
    if (!schmal && !wenigerBewegung && !sparen) {
      setAktiv(true);
      setLaeuft(true);
    }
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v || !aktiv) return;
    if (laeuft) v.play().catch(() => setLaeuft(false));
    else v.pause();
  }, [aktiv, laeuft]);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-mist lg:aspect-[4/3]">
      {aktiv ? (
        <video
          ref={video}
          className="absolute inset-0 h-full w-full object-cover"
          src={mp4}
          poster={poster}
          aria-label={beschreibung}
          muted
          loop
          playsInline
          preload="none"
        />
      ) : (
        <Image
          src={poster}
          alt={beschreibung}
          fill
          sizes="(max-width: 1100px) 100vw, 50vw"
          className="object-cover"
        />
      )}

      {/* Ein Knopf für beide Fälle: startet das Video oder hält es an. */}
      <button
        type="button"
        onClick={() => {
          if (!aktiv) { setAktiv(true); setLaeuft(true); return; }
          setLaeuft((l) => !l);
        }}
        aria-label={!aktiv ? 'Video abspielen' : laeuft ? 'Video anhalten' : 'Video fortsetzen'}
        className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center bg-ink/70 text-white backdrop-blur-sm transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {!aktiv || !laeuft ? (
          <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true" fill="currentColor">
            <path d="M0 0l14 8-14 8z" />
          </svg>
        ) : (
          <svg width="12" height="16" viewBox="0 0 12 16" aria-hidden="true" fill="currentColor">
            <rect x="0" y="0" width="4" height="16" />
            <rect x="8" y="0" width="4" height="16" />
          </svg>
        )}
      </button>
    </div>
  );
}
