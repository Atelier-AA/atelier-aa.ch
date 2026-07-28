'use client';

import { useEffect, useRef, useState } from 'react';
import { leistungsangebot } from '@/data/expertise';
import { planArtReihenfolge } from './PlanArt';
import { cn } from '@/lib/utils';

/** Registrierungsmarke, wie die Passermarken auf einer Planvorlage. */
function Registermarke({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn('absolute h-4 w-4 text-stone/60', className)}
    >
      <path d="M0 8H16M8 0V16" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

interface PlateProps {
  index: number;
  titel: string;
  text: string;
}

/**
 * Eine Leistung als vollflächiges 50/50-Blatt: Liniengrafik links oder
 * rechts, Text auf der anderen Seite, im Wechsel weiss/nebel. Die Grafik
 * "zeichnet" sich, sobald das Blatt in den Bildschirm scrollt.
 */
function Plate({ index, titel, text }: PlateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const beobachter = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) setRevealed(true);
      },
      { threshold: 0.3 }
    );
    beobachter.observe(el);
    return () => beobachter.disconnect();
  }, []);

  const gerade = index % 2 === 0;
  const Art = planArtReihenfolge[index];

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid grid-cols-1 border-b border-mist md:grid-cols-2',
        gerade ? 'bg-white' : 'bg-mist'
      )}
    >
      <Registermarke className="left-4 top-4" />
      <Registermarke className="bottom-4 right-4" />

      <div
        className={cn(
          'flex items-center justify-center overflow-hidden p-12',
          gerade ? 'bg-mist md:order-2' : 'bg-white md:order-1'
        )}
      >
        <div className="w-full max-w-[400px] text-ink">
          <Art revealed={revealed} />
        </div>
      </div>

      <div
        className={cn(
          'flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 lg:px-16',
          gerade ? 'md:order-1' : 'md:order-2'
        )}
      >
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-stone">
          {String(index + 1).padStart(2, '0')} / {String(leistungsangebot.length).padStart(2, '0')}
        </p>
        <h3 className="mb-5 max-w-[14ch] text-2xl font-medium leading-tight text-ink md:text-3xl">
          {titel}
        </h3>
        <p className="max-w-[40ch] leading-relaxed text-graphite">{text}</p>
      </div>
    </div>
  );
}

/**
 * Das Leistungsangebot als Folge vollflächiger Blätter statt eines
 * Karten­rasters — je eine Leistung pro Blatt, Liniengrafik und Text
 * flächig nebeneinander, ohne Container-Rand. Ersetzt das frühere
 * Raster aus Titel + Kurztext.
 */
export default function LeistungenPlates() {
  return (
    <div>
      {leistungsangebot.map((l, index) => (
        <Plate key={l.titel} index={index} titel={l.titel} text={l.text} />
      ))}
    </div>
  );
}
