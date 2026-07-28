/**
 * Architektonische Skizzen mit gestischer Linienführung: jede Zeichnung
 * folgt echten Konventionen (Grundriss, Schnitt, Fassade, Axonometrie),
 * die Kanten werden aber zwei- bis dreifach mit leicht versetzten Linien
 * nachgezogen — die "Suchlinie" gestischer Handzeichnungen, ohne dass die
 * Form ihre architektonische Lesbarkeit verliert. Jede Skizze bleibt
 * inhaltlich auf den Text der zugehörigen Leistung in `leistungsangebot`
 * bezogen.
 */

const BESCHRIFTUNG = { fontFamily: 'ui-monospace, monospace', stroke: 'none', fill: 'currentColor' };

/** Zeichnet dieselbe Kante zwei- bis dreifach mit leichtem Versatz nach. */
function Geste({ pfade, breite = 1.15 }: { pfade: string[]; breite?: number }) {
  return (
    <>
      {pfade.map((d, i) => (
        <path key={i} d={d} strokeWidth={breite - i * 0.15} opacity={1 - i * 0.2} />
      ))}
    </>
  );
}

const svgProps = {
  viewBox: '0 0 300 220',
  className: 'h-auto w-full',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/** 01 Beratung — Hauselevation mit Grundstücksgrenze und Nordpfeil. */
export function BeratungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M60 175 L60 110 L110 78 L160 110 L160 175 Z',
          'M63 172 L62 113 L110 82 L157 113 L156 172',
        ]}
      />
      <path d="M60 110 L110 78 L160 110" opacity="0.7" />
      <rect x="78" y="130" width="20" height="24" />
      <rect x="122" y="130" width="20" height="20" />
      <line x1="10" y1="185" x2="290" y2="185" />
      <line x1="10" y1="181" x2="10" y2="189" />

      {/* Kompass — Orientierung der Parzelle */}
      <circle cx="235" cy="95" r="22" />
      <path d="M235 79 L235 71 M241 76 L235 71 L229 76" />
      <text x="235" y="126" textAnchor="middle" fontSize="8" {...BESCHRIFTUNG}>N</text>

      {/* Prüfvermerk */}
      <path d="M200 170 L208 178 L224 158" strokeWidth="1.6" />
      <text x="10" y="207" fontSize="9" {...BESCHRIFTUNG}>GRUNDSTÜCKSBEURTEILUNG</text>
    </svg>
  );
}

/** 02 Projektentwicklung — axonometrische Massstudie mit Ertragslinie. */
export function ProjektentwicklungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M40 185 L40 155 L65 143 L90 155 L90 185 L65 197 Z',
          'M43 182 L44 157 L66 146 L88 157 L87 182',
        ]}
      />
      <path d="M40 155 L65 143 L90 155 M65 143 L65 197" opacity="0.6" />

      <Geste
        pfade={[
          'M105 185 L105 130 L140 113 L175 130 L175 185 L140 202 Z',
          'M108 182 L109 133 L141 118 L172 133 L171 182',
        ]}
      />
      <path d="M105 130 L140 113 L175 130 M140 113 L140 202" opacity="0.6" />

      <Geste
        pfade={[
          'M190 185 L190 95 L225 78 L260 95 L260 185 L225 202 Z',
          'M193 182 L194 98 L226 83 L257 98 L256 182',
        ]}
      />
      <path d="M190 95 L225 78 L260 95 M225 78 L225 202" opacity="0.6" />

      <Geste pfade={['M45 138 C 90 110, 170 85, 220 62']} breite={1} />
      <path d="M212 58 L222 60 L218 70" strokeWidth="1" />
      <text x="10" y="207" fontSize="9" {...BESCHRIFTUNG}>PROJEKTENTWICKLUNG</text>
    </svg>
  );
}

/** 03 Planung und Entwurf — Grundriss mit Wandstärke, Türanschlägen und Fenstern. */
export function PlanungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M45 185 L45 55 L255 55 L255 185 Z',
          'M48 182 L47 58 L252 58 L251 182',
        ]}
        breite={1.2}
      />
      <path d="M150 55 L150 185" opacity="0.7" />
      <path d="M45 120 L150 120" opacity="0.7" />

      {/* Türanschläge */}
      <path d="M115 120 A 35 35 0 0 1 150 85" opacity="0.85" />
      <path d="M150 152 A 32 32 0 0 1 182 120" opacity="0.85" />

      {/* Fenster in der Aussenwand */}
      <line x1="65" y1="55" x2="95" y2="55" strokeWidth="2.6" />
      <line x1="175" y1="55" x2="205" y2="55" strokeWidth="2.6" />
      <line x1="45" y1="90" x2="45" y2="112" strokeWidth="2.6" />

      {/* Treppe */}
      <path d="M225 185 L225 130 M225 130 L200 130 M204 178 L225 178 M208 168 L225 168 M212 158 L225 158 M216 148 L225 148 M220 138 L225 138" opacity="0.8" />

      <text x="10" y="207" fontSize="9" {...BESCHRIFTUNG}>GRUNDRISS — ENTWURF</text>
    </svg>
  );
}

/** 04 Baugesuch und Bewilligung — Fassade mit Fensterraster und Bewilligungsstempel. */
export function BaugesuchArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M55 185 L55 90 L150 50 L245 90 L245 185 Z',
          'M58 182 L57 93 L150 55 L242 93 L241 182',
        ]}
        breite={1.2}
      />
      <path d="M55 90 L150 50 L245 90" opacity="0.7" />

      <rect x="80" y="112" width="28" height="30" />
      <rect x="136" y="112" width="28" height="30" />
      <rect x="192" y="112" width="28" height="30" />
      <rect x="130" y="152" width="40" height="33" />
      <line x1="150" y1="152" x2="150" y2="185" opacity="0.5" />

      {/* Bewilligungsstempel */}
      <circle cx="222" cy="130" r="28" strokeDasharray="3 3" />
      <path d="M209 130 L219 140 L237 116" strokeWidth="1.6" />

      <text x="150" y="207" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>ZH · AG · ZG</text>
    </svg>
  );
}

/** 05 Bauleitung und Kostenkontrolle — Gebäudeschnitt mit Geschossdecken und Kran. */
export function BauleitungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M45 185 L45 55 L155 55 L155 185',
          'M47 182 L48 58 L153 58 L152 182',
        ]}
      />
      {/* Geschossdecken, im Schnitt schraffiert */}
      {[185, 140, 95, 55].map((y) => (
        <g key={y}>
          <rect x="45" y={y - 8} width="110" height="8" opacity="0.9" />
          <line x1="48" y1={y - 6} x2="56" y2={y - 2} strokeWidth="0.7" opacity="0.6" />
          <line x1="58" y1={y - 6} x2="66" y2={y - 2} strokeWidth="0.7" opacity="0.6" />
          <line x1="68" y1={y - 6} x2="76" y2={y - 2} strokeWidth="0.7" opacity="0.6" />
        </g>
      ))}
      <path d="M180 108 L188 116 L204 92" strokeWidth="1.6" />
      <path d="M180 153 L188 161 L204 137" strokeWidth="1.6" />

      {/* Kran */}
      <path d="M225 185 L225 62 L268 62" strokeWidth="1" />
      <path d="M246 62 L246 45 L225 62" strokeWidth="1" />
      <path d="M256 62 L262 82" strokeDasharray="2 3" strokeWidth="1" />

      <text x="10" y="207" fontSize="9" {...BESCHRIFTUNG}>SCHNITT — BAULEITUNG</text>
    </svg>
  );
}

/** 06 Generalplanung — axonometrisches Gebäude, umgeben von Fachplaner-Rollen. */
export function GeneralplanungArt() {
  const rollen: { x: number; y: number; label: string }[] = [
    { x: 150, y: 18, label: 'ARCH' },
    { x: 258, y: 60, label: 'ING' },
    { x: 272, y: 150, label: 'HT' },
    { x: 150, y: 202, label: 'BAULEITUNG' },
    { x: 28, y: 150, label: 'ELEKTRO' },
    { x: 42, y: 60, label: 'LANDSCHAFT' },
  ];
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M115 148 L115 100 L150 84 L185 100 L185 148 L150 164 Z',
          'M118 145 L117 103 L150 89 L182 103 L181 145',
        ]}
        breite={1.2}
      />
      <path d="M115 100 L150 84 L185 100 M150 84 L150 164" opacity="0.6" />

      {rollen.map((r) => (
        <line key={`l-${r.label}`} x1="150" y1="120" x2={r.x} y2={r.y} opacity="0.5" strokeWidth="0.9" strokeDasharray="1 4" />
      ))}
      {rollen.map((r) => (
        <g key={`n-${r.label}`}>
          <rect x={r.x - 7} y={r.y - 7} width="14" height="14" />
          <text x={r.x} y={r.y > 120 ? r.y + 16 : r.y - 10} textAnchor="middle" fontSize="7.5" {...BESCHRIFTUNG}>
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** 07 Wettbewerbe und Studien — drei axonometrische Volumenvarianten, eine gewählt. */
export function WettbewerbeArt() {
  return (
    <svg {...svgProps}>
      <Geste pfade={['M35 185 L35 150 L65 138 L95 150 L95 185 L65 197 Z', 'M38 182 L39 152 L66 141 L92 152 L91 182']} breite={1} />
      <path d="M35 150 L65 138 L95 150 M65 138 L65 197" opacity="0.55" />
      <text x="38" y="205" fontSize="8" {...BESCHRIFTUNG}>A</text>

      <Geste
        pfade={[
          'M118 190 L118 130 L155 113 L192 130 L192 190 L155 207 Z',
          'M121 187 L122 133 L156 118 L189 133 L188 187',
        ]}
        breite={1.2}
      />
      <path d="M118 130 L155 113 L192 130 M155 113 L155 207" opacity="0.55" />
      <circle cx="155" cy="160" r="46" strokeDasharray="2 3" opacity="0.8" />
      <text x="120" y="216" fontSize="8" {...BESCHRIFTUNG}>B — WEITER VERFOLGT</text>

      <Geste pfade={['M215 178 L215 148 L245 134 L275 148 L275 178 L245 192 Z', 'M218 175 L219 150 L246 137 L272 150 L271 175']} breite={0.95} />
      <path d="M215 148 L245 134 L275 148 M245 134 L245 192" opacity="0.5" strokeDasharray="2 3" />
      <text x="218" y="205" fontSize="8" {...BESCHRIFTUNG}>C</text>
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
