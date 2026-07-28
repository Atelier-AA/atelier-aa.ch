/**
 * Liniengrafiken im Stil einer Architekturskizze — statisch, ohne
 * Zeichen-Animation. Jede Grafik ist inhaltlich auf den zugehörigen Text in
 * `leistungsangebot` abgestimmt, nicht nur auf den Titel.
 */

const BESCHRIFTUNG = { fontFamily: 'ui-monospace, monospace', stroke: 'none', fill: 'currentColor' };

/**
 * 01 Beratung — Lageplan mit Nordpfeil und Setzungslinie (Grundstücks­
 * beurteilung), dazu eine Lupe («Prüfung fremder Projekte») und ein
 * Haken/Kreuz-Paar («wir sagen Ihnen offen, wenn ein Vorhaben nicht trägt»).
 */
export function BeratungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="35" y="45" width="200" height="200" />
      <rect x="60" y="70" width="150" height="150" strokeDasharray="6 6" />
      <circle cx="135" cy="145" r="24" />
      <path d="M135 129 L135 121 M143 125 L135 121 L127 125" />
      <text x="135" y="171" textAnchor="middle" fontSize="10" {...BESCHRIFTUNG}>N</text>

      {/* Lupe — Prüfung fremder Projekte */}
      <circle cx="248" cy="70" r="20" />
      <line x1="262" y1="84" x2="278" y2="100" strokeWidth="1.6" />

      {/* Haken / Kreuz — Entscheidung, ob ein Vorhaben trägt */}
      <path d="M225 240 L233 248 L249 228" strokeWidth="2" />
      <path d="M40 232 L54 246 M54 232 L40 246" strokeWidth="1.6" />

      <line x1="35" y1="270" x2="235" y2="270" />
      <line x1="35" y1="266" x2="35" y2="274" />
      <line x1="235" y1="266" x2="235" y2="274" />
      <text x="135" y="288" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>PARZELLE</text>
    </svg>
  );
}

/**
 * 02 Projektentwicklung — gestufte Massstudie mit Ertragskurve
 * («Ertragsrechnung») und einem in Einheiten unterteilten Baukörper
 * («Wohnungsmix»).
 */
export function ProjektentwicklungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="40" y1="240" x2="260" y2="240" />
      <rect x="55" y="190" width="40" height="50" />
      <rect x="110" y="140" width="40" height="100" />
      {/* Baukörper mit Wohnungsmix — horizontal unterteilt */}
      <rect x="165" y="90" width="40" height="150" />
      <line x1="165" y1="120" x2="205" y2="120" strokeDasharray="3 4" />
      <line x1="165" y1="155" x2="205" y2="155" strokeDasharray="3 4" />
      <line x1="165" y1="195" x2="205" y2="195" strokeDasharray="3 4" />
      <rect x="220" y="160" width="40" height="80" />

      {/* Ertragskurve */}
      <polyline points="50,205 105,175 160,130 215,100 255,78" strokeDasharray="2 4" />
      <circle cx="50" cy="205" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="105" cy="175" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="160" cy="130" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="215" cy="100" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="255" cy="78" r="2.5" fill="currentColor" stroke="none" />
      <text x="258" y="72" fontSize="9" {...BESCHRIFTUNG}>ERTRAG</text>
    </svg>
  );
}

/**
 * 03 Planung und Entwurf — Grundriss mit Türanschlägen, Treppe, Fenstern
 * und Möblierung, weil Entwurf «von der Analyse von Ort, Nutzung und
 * Bauordnung» ausgeht, nicht von einer leeren Fläche.
 */
export function PlanungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="35" y="45" width="230" height="210" />
      <line x1="150" y1="45" x2="150" y2="150" />
      <line x1="35" y1="150" x2="265" y2="150" />
      <line x1="150" y1="150" x2="150" y2="255" />

      {/* Fenster in der Aussenwand */}
      <line x1="60" y1="45" x2="90" y2="45" strokeWidth="2.4" />
      <line x1="195" y1="45" x2="225" y2="45" strokeWidth="2.4" />
      <line x1="35" y1="90" x2="35" y2="115" strokeWidth="2.4" />

      {/* Türanschläge */}
      <path d="M115 150 A 35 35 0 0 1 150 115" />
      <path d="M150 185 A 35 35 0 0 1 185 150" />

      {/* Bett — Schlafzimmer oben links */}
      <rect x="55" y="60" width="34" height="48" />
      <line x1="55" y1="76" x2="89" y2="76" />

      {/* Tisch mit Stühlen — Zimmer oben rechts */}
      <rect x="205" y="95" width="30" height="20" />
      <circle cx="200" cy="90" r="4" />
      <circle cx="245" cy="90" r="4" />
      <circle cx="200" cy="120" r="4" />
      <circle cx="245" cy="120" r="4" />

      {/* Treppe — unten rechts */}
      <line x1="200" y1="230" x2="200" y2="180" />
      <line x1="200" y1="180" x2="230" y2="180" />
      <line x1="204" y1="222" x2="230" y2="222" />
      <line x1="208" y1="214" x2="230" y2="214" />
      <line x1="212" y1="206" x2="230" y2="206" />
    </svg>
  );
}

/**
 * 04 Baugesuch und Bewilligung — Fassade mit Bewilligungsstempel, dazu die
 * drei Kantone und ein Fristen-Symbol («planen Fristen entsprechend ein»).
 */
export function BaugesuchArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M50 250 L50 110 L150 55 L250 110 L250 250 Z" />
      <line x1="50" y1="250" x2="250" y2="250" />
      <rect x="75" y="150" width="30" height="30" />
      <rect x="135" y="150" width="30" height="30" />
      <rect x="195" y="150" width="30" height="30" />
      <rect x="130" y="200" width="40" height="50" />

      {/* Bewilligungsstempel */}
      <circle cx="215" cy="90" r="34" strokeDasharray="4 4" />
      <path d="M203 90 L212 99 L228 79" strokeWidth="2" />

      {/* Frist — kleine Uhr */}
      <circle cx="60" cy="90" r="14" />
      <path d="M60 82 L60 90 L66 94" strokeWidth="1" />

      <text x="150" y="272" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>ZH · AG · ZG</text>
    </svg>
  );
}

/**
 * 05 Bauleitung und Kostenkontrolle — Baustellenschnitt mit Gerüst,
 * Kontrollhaken je Geschoss, und einem Budgetbalken («gleichen den
 * Kostenvoranschlag laufend mit dem Baufortschritt ab»).
 */
export function BauleitungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <line x1="40" y1="55" x2="260" y2="55" />
      <line x1="40" y1="110" x2="260" y2="110" />
      <line x1="40" y1="165" x2="260" y2="165" />
      <line x1="40" y1="220" x2="260" y2="220" />
      <line x1="60" y1="55" x2="60" y2="220" />
      <g strokeDasharray="3 5">
        <line x1="80" y1="55" x2="100" y2="110" />
        <line x1="100" y1="55" x2="120" y2="110" />
        <line x1="120" y1="55" x2="140" y2="110" />
        <line x1="80" y1="110" x2="100" y2="165" />
        <line x1="100" y1="110" x2="120" y2="165" />
        <line x1="80" y1="165" x2="100" y2="220" />
      </g>
      <path d="M180 98 L188 106 L204 86" strokeWidth="2" />
      <path d="M180 153 L188 161 L204 141" strokeWidth="2" />

      {/* Budgetbalken */}
      <rect x="40" y="250" width="220" height="16" />
      <rect x="40" y="250" width="150" height="16" fill="currentColor" fillOpacity="0.12" stroke="none" />
      <line x1="190" y1="244" x2="190" y2="272" strokeWidth="1.6" />
      <text x="266" y="262" fontSize="9" {...BESCHRIFTUNG}>FR.</text>
    </svg>
  );
}

/**
 * 06 Generalplanung — Organigramm mit unterschiedlichen Fachplaner-Rollen
 * (Kreis, Quadrat, Dreieck), koordiniert über ein zentrales Mandat.
 */
export function GeneralplanungArt() {
  const knoten: { x: number; y: number; form: 'kreis' | 'quadrat' | 'dreieck'; label?: string }[] = [
    { x: 150, y: 55, form: 'quadrat', label: 'ING' },
    { x: 227, y: 92, form: 'dreieck' },
    { x: 245, y: 150, form: 'quadrat', label: 'HT' },
    { x: 227, y: 208, form: 'dreieck' },
    { x: 150, y: 245, form: 'quadrat', label: 'ELEK' },
    { x: 73, y: 208, form: 'dreieck' },
    { x: 55, y: 150, form: 'quadrat' },
    { x: 73, y: 92, form: 'dreieck' },
  ];
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="150" cy="150" r="20" />
      <text x="150" y="153" textAnchor="middle" fontSize="8" {...BESCHRIFTUNG}>AA</text>
      {knoten.map((k) => (
        <line key={`l-${k.x}-${k.y}`} x1="150" y1="150" x2={k.x} y2={k.y} />
      ))}
      {knoten.map((k) => {
        if (k.form === 'kreis') return <circle key={`n-${k.x}-${k.y}`} cx={k.x} cy={k.y} r="9" />;
        if (k.form === 'quadrat')
          return <rect key={`n-${k.x}-${k.y}`} x={k.x - 8} y={k.y - 8} width="16" height="16" />;
        return (
          <path
            key={`n-${k.x}-${k.y}`}
            d={`M${k.x} ${k.y - 10} L${k.x + 9} ${k.y + 7} L${k.x - 9} ${k.y + 7} Z`}
          />
        );
      })}
      {knoten
        .filter((k) => k.label)
        .map((k) => (
          <text key={`t-${k.x}-${k.y}`} x={k.x} y={k.y - 16} textAnchor="middle" fontSize="8" {...BESCHRIFTUNG}>
            {k.label}
          </text>
        ))}
    </svg>
  );
}

/**
 * 07 Wettbewerbe und Studien — drei axonometrische Varianten («Studien und
 * Testplanungen»), eine davon mit Auswahlmarke («neue Lösungsansätze
 * erproben»).
 */
export function WettbewerbeArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M35 220 L35 150 L85 122 L85 192 Z" />
      <path d="M35 150 L85 122 M35 220 L85 192" />
      <text x="45" y="248" fontSize="8" {...BESCHRIFTUNG}>A</text>

      <path d="M118 232 L118 130 L178 96 L178 198 Z" />
      <path d="M118 130 L178 96 M118 232 L178 198" />
      <circle cx="148" cy="78" r="12" />
      <path d="M142 78 L146 83 L155 72" strokeWidth="1.6" />
      <text x="140" y="248" fontSize="8" {...BESCHRIFTUNG}>B — GEWÄHLT</text>

      <path d="M210 220 L210 160 L255 135 L255 195 Z" strokeDasharray="5 5" />
      <path d="M210 160 L255 135 M210 220 L255 195" strokeDasharray="5 5" />
      <text x="222" y="248" fontSize="8" {...BESCHRIFTUNG}>C</text>
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
