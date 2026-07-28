/**
 * Liniengrafiken im Stil einer Architekturskizze — statisch, ohne
 * Zeichen-Animation. Jede Grafik zu einer Leistung aus `leistungsangebot`.
 */

/** 01 Beratung — Lageplan mit Nordpfeil, wie eine Parzellenbeurteilung. */
export function BeratungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="40" y="40" width="220" height="220" />
      <rect x="70" y="70" width="160" height="160" strokeDasharray="6 6" />
      <circle cx="150" cy="150" r="26" />
      <path d="M150 132 L150 124 M158 128 L150 124 L142 128" />
      <text x="150" y="180" textAnchor="middle" fontSize="11" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">N</text>
      <line x1="40" y1="270" x2="260" y2="270" />
      <line x1="40" y1="266" x2="40" y2="274" />
      <line x1="260" y1="266" x2="260" y2="274" />
      <text x="150" y="288" textAnchor="middle" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">PARZELLE</text>
    </svg>
  );
}

/** 02 Projektentwicklung — Massstudie, gestufte Volumen wie im Kostenrahmen. */
export function ProjektentwicklungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="40" y1="240" x2="260" y2="240" />
      <rect x="55" y="190" width="40" height="50" />
      <rect x="110" y="140" width="40" height="100" />
      <rect x="165" y="90" width="40" height="150" />
      <rect x="220" y="160" width="40" height="80" />
      <path d="M205 90 L215 90 M210 85 L210 95" />
      <text x="222" y="80" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">+12.4M</text>
    </svg>
  );
}

/** 03 Planung und Entwurf — Grundriss mit Türanschlägen und Treppe. */
export function PlanungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="35" y="45" width="230" height="210" />
      <line x1="150" y1="45" x2="150" y2="150" />
      <line x1="35" y1="150" x2="265" y2="150" />
      <line x1="150" y1="150" x2="150" y2="255" />
      <path d="M115 150 A 35 35 0 0 1 150 115" />
      <path d="M150 185 A 35 35 0 0 1 185 150" />
      <line x1="200" y1="230" x2="200" y2="180" />
      <line x1="200" y1="180" x2="230" y2="180" />
      <line x1="204" y1="222" x2="230" y2="222" />
      <line x1="208" y1="214" x2="230" y2="214" />
      <line x1="212" y1="206" x2="230" y2="206" />
    </svg>
  );
}

/** 04 Baugesuch und Bewilligung — Fassade mit Fenstergitter und Bewilligungsstempel. */
export function BaugesuchArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M50 250 L50 110 L150 55 L250 110 L250 250 Z" />
      <line x1="50" y1="250" x2="250" y2="250" />
      <rect x="75" y="150" width="30" height="30" />
      <rect x="135" y="150" width="30" height="30" />
      <rect x="195" y="150" width="30" height="30" />
      <rect x="130" y="200" width="40" height="50" />
      <circle cx="215" cy="90" r="34" strokeDasharray="4 4" />
      <path d="M203 90 L212 99 L228 79" strokeWidth="2" />
    </svg>
  );
}

/** 05 Bauleitung und Kostenkontrolle — Baustellenschnitt mit Gerüst und Kontrollhaken. */
export function BauleitungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="40" y1="60" x2="260" y2="60" />
      <line x1="40" y1="120" x2="260" y2="120" />
      <line x1="40" y1="180" x2="260" y2="180" />
      <line x1="40" y1="240" x2="260" y2="240" />
      <line x1="60" y1="60" x2="60" y2="240" />
      <g strokeDasharray="3 5">
        <line x1="80" y1="60" x2="100" y2="120" />
        <line x1="100" y1="60" x2="120" y2="120" />
        <line x1="120" y1="60" x2="140" y2="120" />
        <line x1="80" y1="120" x2="100" y2="180" />
        <line x1="100" y1="120" x2="120" y2="180" />
        <line x1="80" y1="180" x2="100" y2="240" />
      </g>
      <path d="M180 108 L188 116 L204 96" strokeWidth="2" />
      <path d="M180 168 L188 176 L204 156" strokeWidth="2" />
    </svg>
  );
}

/** 06 Generalplanung — Organigramm, ein Knoten koordiniert alle Fachplaner. */
export function GeneralplanungArt() {
  const knoten: [number, number][] = [
    [150, 60],
    [230, 95],
    [245, 150],
    [230, 205],
    [150, 240],
    [70, 205],
    [55, 150],
    [70, 95],
  ];
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="150" cy="150" r="18" />
      {knoten.map(([x, y]) => (
        <line key={`${x}-${y}`} x1="150" y1="150" x2={x} y2={y} />
      ))}
      {knoten.map(([x, y]) => (
        <circle key={`k-${x}-${y}`} cx={x} cy={y} r="9" />
      ))}
    </svg>
  );
}

/** 07 Wettbewerbe und Studien — zwei axonometrische Volumenvarianten im Vergleich. */
export function WettbewerbeArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M60 210 L60 130 L130 95 L130 175 Z" />
      <path d="M60 130 L130 95 M60 210 L130 175" />
      <path d="M170 230 L170 120 L240 80 L240 190 Z" strokeDasharray="5 5" />
      <path d="M170 120 L240 80 M170 230 L240 190" strokeDasharray="5 5" />
      <text x="80" y="255" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">VARIANTE A</text>
      <text x="190" y="255" fontSize="9" fill="currentColor" stroke="none" fontFamily="ui-monospace, monospace">VARIANTE B</text>
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
