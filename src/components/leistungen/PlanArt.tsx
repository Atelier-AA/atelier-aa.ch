/**
 * Gestische Architekturskizzen — inspiriert vom Prinzip berühmter
 * Handzeichnungen (etwa Frank Gehrys übereinanderliegende Suchlinien):
 * jede Form wird zwei- oder dreifach mit leicht versetzten Kurven
 * nachgezogen, statt einmal sauber gezeichnet. Das erzeugt Energie und
 * Bewegung statt technischer Präzision. Jede Skizze bleibt inhaltlich auf
 * den Text der zugehörigen Leistung in `leistungsangebot` bezogen.
 */

const BESCHRIFTUNG = { fontFamily: 'ui-monospace, monospace', stroke: 'none', fill: 'currentColor' };

/**
 * Zeichnet dieselbe Form mehrfach mit leicht unterschiedlichen Pfaden —
 * das "Suchen" der Linie, das gestische Skizzen lebendig macht.
 */
function Geste({ pfade, breite = 1.1 }: { pfade: string[]; breite?: number }) {
  return (
    <>
      {pfade.map((d, i) => (
        <path
          key={i}
          d={d}
          strokeWidth={breite - i * 0.15}
          opacity={1 - i * 0.22}
        />
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

/** 01 Beratung — ein Grundstück, mehrfach umkreist, wie beim Abwägen einer Entscheidung. */
export function BeratungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M45 175 C 40 120, 55 65, 110 55 C 160 46, 220 55, 245 95 C 262 122, 250 165, 205 180 C 160 194, 85 192, 45 175 Z',
          'M50 170 C 44 118, 62 70, 115 58 C 158 50, 215 58, 240 92 C 258 118, 246 158, 202 176 C 162 190, 90 188, 50 170 Z',
          'M55 165 C 50 122, 68 76, 118 64 C 155 57, 208 63, 232 90',
        ]}
        breite={1.2}
      />
      <Geste
        pfade={[
          'M120 150 C 132 130, 150 128, 158 145 C 165 130, 182 132, 185 150',
          'M122 154 C 133 135, 149 132, 157 148',
        ]}
        breite={1}
      />
      <text x="45" y="205" fontSize="9" {...BESCHRIFTUNG}>BERATUNG — GRUNDSTÜCK</text>
    </svg>
  );
}

/** 02 Projektentwicklung — gestapelte Volumen mit einer suchenden Ertragslinie. */
export function ProjektentwicklungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M40 185 L40 150 C 62 142, 78 145, 82 152 L82 185 Z',
          'M43 183 L44 152 C 63 144, 76 147, 80 153',
        ]}
      />
      <Geste
        pfade={[
          'M95 185 L95 110 C 118 98, 145 102, 150 115 L150 185 Z',
          'M98 183 L99 113 C 119 101, 142 105, 147 116',
        ]}
      />
      <Geste
        pfade={[
          'M163 185 L163 70 C 188 54, 220 60, 226 78 L226 185 Z',
          'M167 182 L168 74 C 190 59, 216 64, 222 80',
        ]}
      />
      <Geste
        pfade={[
          'M60 168 C 100 140, 150 100, 190 90 C 215 84, 235 75, 250 55',
        ]}
        breite={1}
      />
      <path d="M242 50 L252 54 L246 63" strokeWidth="1" />
      <text x="40" y="205" fontSize="9" {...BESCHRIFTUNG}>PROJEKTENTWICKLUNG</text>
    </svg>
  );
}

/** 03 Planung und Entwurf — ein Haus, zweimal überzeichnet, wie beim ersten Konzeptentwurf. */
export function PlanungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M55 185 L55 100 L148 55 L240 100 L240 185 Z',
          'M60 182 L58 103 L150 60 L236 103 L235 182',
          'M55 100 L148 55 L240 100',
        ]}
        breite={1.2}
      />
      <Geste pfade={['M92 185 L92 135 C 100 128, 112 128, 118 135 L118 185']} breite={1} />
      <Geste pfade={['M150 150 C 156 143, 168 143, 172 150 C 168 157, 156 157, 150 150 Z']} breite={0.9} />
      <path d="M35 205 L75 178" strokeWidth="1" />
      <path d="M73 180 L80 172 L84 179 Z" fill="currentColor" fillOpacity="0.2" />
      <text x="35" y="212" fontSize="9" {...BESCHRIFTUNG}>ENTWURF</text>
    </svg>
  );
}

/** 04 Baugesuch und Bewilligung — Fassade mit einem locker gekreiselten Bewilligungsstempel. */
export function BaugesuchArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M60 185 L60 90 L150 48 L240 90 L240 185 Z',
          'M64 182 L63 93 L150 53 L236 93 L235 182',
        ]}
        breite={1.2}
      />
      <path d="M95 130 L95 160 L120 160 L120 130 Z" />
      <path d="M145 130 L145 160 L170 160 L170 130 Z" />
      <Geste
        pfade={[
          'M210 60 C 232 52, 250 66, 246 88 C 242 108, 218 114, 202 100 C 188 88, 190 66, 210 60 Z',
          'M214 58 C 234 52, 248 68, 244 86 C 240 104, 220 112, 206 98',
        ]}
        breite={0.9}
      />
      <path d="M198 82 L210 92 L232 66" strokeWidth="1.4" />
      <text x="150" y="207" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>ZH · AG · ZG</text>
    </svg>
  );
}

/** 05 Bauleitung und Kostenkontrolle — Baustelle mit Kran, in Bewegung skizziert. */
export function BauleitungArt() {
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M55 185 L55 85 L145 85 L145 185',
          'M58 183 L59 88 L142 88 L142 183',
        ]}
      />
      <path d="M55 120 L145 120 M55 152 L145 152" opacity="0.6" strokeDasharray="2 4" />
      <Geste
        pfade={[
          'M195 185 L195 55 L245 55',
          'M198 183 L199 58 L242 58',
        ]}
        breite={1}
      />
      <path d="M218 55 L212 40 L195 55" strokeWidth="1" />
      <path d="M228 55 L236 78" strokeDasharray="2 3" />
      <Geste pfade={['M275 185 C 268 165, 270 145, 278 130']} breite={0.9} />
      <circle cx="279" cy="122" r="4.5" />
      <text x="35" y="207" fontSize="9" {...BESCHRIFTUNG}>BAUSTELLE — KOSTENKONTROLLE</text>
    </svg>
  );
}

/** 06 Generalplanung — ein Haus, umkreist von locker skizzierten Fachplaner-Punkten. */
export function GeneralplanungArt() {
  const rollen: { x: number; y: number; label: string }[] = [
    { x: 150, y: 20, label: 'ARCH' },
    { x: 255, y: 65, label: 'ING' },
    { x: 268, y: 150, label: 'HT' },
    { x: 150, y: 200, label: 'BAULEITUNG' },
    { x: 35, y: 150, label: 'ELEKTRO' },
    { x: 48, y: 65, label: 'LANDSCHAFT' },
  ];
  return (
    <svg {...svgProps}>
      <Geste
        pfade={[
          'M115 148 L115 108 L150 92 L185 108 L185 148 L115 148 Z',
          'M118 145 L117 111 L150 96 L182 111 L181 145',
        ]}
        breite={1.15}
      />
      {rollen.map((r) => (
        <path
          key={`l-${r.label}`}
          d={`M150 120 Q ${(150 + r.x) / 2 + (r.y - 120) * 0.15} ${(120 + r.y) / 2 - (150 - r.x) * 0.1}, ${r.x} ${r.y}`}
          opacity="0.55"
          strokeWidth="0.9"
        />
      ))}
      {rollen.map((r) => (
        <g key={`n-${r.label}`}>
          <path
            d={`M${r.x - 6} ${r.y} C ${r.x - 6} ${r.y - 6}, ${r.x + 6} ${r.y - 6}, ${r.x + 6} ${r.y} C ${r.x + 6} ${r.y + 6}, ${r.x - 6} ${r.y + 6}, ${r.x - 6} ${r.y} Z`}
            strokeWidth="1"
          />
          <text
            x={r.x}
            y={r.y > 120 ? r.y + 15 : r.y - 10}
            textAnchor="middle"
            fontSize="7.5"
            {...BESCHRIFTUNG}
          >
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** 07 Wettbewerbe und Studien — drei rasch skizzierte Varianten, eine eingekreist. */
export function WettbewerbeArt() {
  return (
    <svg {...svgProps}>
      <Geste pfade={['M40 175 L40 130 L78 112 L78 157 Z', 'M43 172 L42 133 L76 116 L76 155']} breite={1} />
      <text x="42" y="192" fontSize="8" {...BESCHRIFTUNG}>A</text>

      <Geste
        pfade={[
          'M110 185 L110 118 L165 92 L165 158 Z',
          'M113 182 L112 121 L163 96 L162 156',
        ]}
        breite={1.15}
      />
      <Geste
        pfade={[
          'M100 148 C 100 118, 175 118, 175 148 C 175 178, 100 178, 100 148 Z',
        ]}
        breite={0.9}
      />
      <text x="112" y="202" fontSize="8" {...BESCHRIFTUNG}>B — WEITER VERFOLGT</text>

      <Geste pfade={['M205 178 L205 140 L245 122 L245 160 Z', 'M208 175 L207 143 L243 126 L243 158']} breite={0.95} />
      <text x="207" y="195" fontSize="8" {...BESCHRIFTUNG}>C</text>
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
