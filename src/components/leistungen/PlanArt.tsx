/**
 * Reduzierte, einfache Architekturskizzen: einzelne, saubere Linien statt
 * Schraffur oder Mehrfach-Nachzeichnung — viel Weissraum, wenige Elemente
 * pro Motiv. Jede Skizze bleibt inhaltlich auf die zugehörige Leistung in
 * `leistungsangebot` bezogen.
 */

const BESCHRIFTUNG = { fontFamily: 'ui-monospace, monospace', stroke: 'none', fill: 'currentColor' };

const svgProps = {
  viewBox: '0 0 300 220',
  className: 'h-auto w-full',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** 01 Beratung — ein Haus auf seiner Parzelle, mit Prüfvermerk. */
export function BeratungArt() {
  return (
    <svg {...svgProps}>
      <path d="M90 175 L90 110 L150 75 L210 110 L210 175 Z" />
      <line x1="30" y1="185" x2="270" y2="185" opacity="0.5" />
      <path d="M180 155 L189 164 L206 143" strokeWidth="1.6" opacity="0.85" />
      <text x="30" y="205" fontSize="9" {...BESCHRIFTUNG}>BERATUNG</text>
    </svg>
  );
}

/** 02 Projektentwicklung — drei gestufte Volumen. */
export function ProjektentwicklungArt() {
  return (
    <svg {...svgProps}>
      <rect x="60" y="140" width="45" height="45" />
      <rect x="115" y="105" width="45" height="80" />
      <rect x="170" y="65" width="45" height="120" />
      <line x1="30" y1="185" x2="270" y2="185" opacity="0.5" />
      <path d="M45 130 C 100 95, 170 65, 225 45" opacity="0.7" />
      <path d="M217 40 L227 44 L221 53" opacity="0.7" />
      <text x="30" y="205" fontSize="9" {...BESCHRIFTUNG}>PROJEKTENTWICKLUNG</text>
    </svg>
  );
}

/** 03 Planung und Entwurf — ein einfacher Grundriss. */
export function PlanungArt() {
  return (
    <svg {...svgProps}>
      <rect x="60" y="55" width="180" height="130" />
      <line x1="150" y1="55" x2="150" y2="185" opacity="0.6" />
      <path d="M120 185 A 30 30 0 0 1 150 155" opacity="0.8" />
      <line x1="90" y1="55" x2="115" y2="55" strokeWidth="2.4" />
      <line x1="185" y1="55" x2="210" y2="55" strokeWidth="2.4" />
      <text x="30" y="205" fontSize="9" {...BESCHRIFTUNG}>ENTWURF</text>
    </svg>
  );
}

/** 04 Baugesuch und Bewilligung — Fassade mit Bewilligungsstempel. */
export function BaugesuchArt() {
  return (
    <svg {...svgProps}>
      <path d="M70 175 L70 100 L150 60 L230 100 L230 175 Z" />
      <line x1="30" y1="185" x2="270" y2="185" opacity="0.5" />
      <circle cx="205" cy="90" r="24" strokeDasharray="3 3" opacity="0.85" />
      <path d="M193 90 L202 99 L217 78" strokeWidth="1.6" />
      <text x="150" y="205" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>ZH · AG · ZG</text>
    </svg>
  );
}

/** 05 Bauleitung und Kostenkontrolle — Baukörper mit Kran. */
export function BauleitungArt() {
  return (
    <svg {...svgProps}>
      <rect x="60" y="80" width="110" height="105" />
      <line x1="60" y1="115" x2="170" y2="115" opacity="0.5" />
      <line x1="60" y1="150" x2="170" y2="150" opacity="0.5" />
      <path d="M215 185 L215 55 L255 55" />
      <path d="M235 55 L229 42 L215 55" />
      <line x1="30" y1="185" x2="270" y2="185" opacity="0.5" />
      <text x="30" y="205" fontSize="9" {...BESCHRIFTUNG}>BAULEITUNG</text>
    </svg>
  );
}

/** 06 Generalplanung — ein Baukörper, koordiniert über wenige Rollen. */
export function GeneralplanungArt() {
  const rollen: { x: number; y: number; label: string }[] = [
    { x: 150, y: 25, label: 'ARCH' },
    { x: 245, y: 110, label: 'ING' },
    { x: 150, y: 195, label: 'BAULEITUNG' },
    { x: 55, y: 110, label: 'HT' },
  ];
  return (
    <svg {...svgProps}>
      <rect x="120" y="85" width="60" height="55" />
      {rollen.map((r) => (
        <line key={`l-${r.label}`} x1="150" y1="112" x2={r.x} y2={r.y} opacity="0.45" />
      ))}
      {rollen.map((r) => (
        <g key={`n-${r.label}`}>
          <circle cx={r.x} cy={r.y} r="5" />
          <text x={r.x} y={r.y > 112 ? r.y + 15 : r.y - 9} textAnchor="middle" fontSize="8" {...BESCHRIFTUNG}>
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** 07 Wettbewerbe und Studien — drei Varianten, eine gewählt. */
export function WettbewerbeArt() {
  return (
    <svg {...svgProps}>
      <rect x="45" y="130" width="42" height="42" />
      <text x="47" y="192" fontSize="8" {...BESCHRIFTUNG}>A</text>

      <rect x="129" y="100" width="42" height="72" />
      <circle cx="150" cy="136" r="34" strokeDasharray="2 3" opacity="0.8" />
      <text x="118" y="192" fontSize="8" {...BESCHRIFTUNG}>B — GEWÄHLT</text>

      <rect x="213" y="130" width="42" height="42" />
      <text x="215" y="192" fontSize="8" {...BESCHRIFTUNG}>C</text>
    </svg>
  );
}

/** Reihenfolge exakt wie `leistungsangebot` in `data/expertise.ts`. */
export const planArtReihenfolge = [
  BeratungArt,
  ProjektentwicklungArt,
  PlanungArt,
  BaugesuchArt,
  BauleitungArt,
  GeneralplanungArt,
  WettbewerbeArt,
];
