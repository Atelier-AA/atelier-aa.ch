/**
 * Architekturskizzen im Stil einer Handzeichnung — lose Linienführung,
 * Schraffuren, kleine Staffage (Menschen, Bäume) statt technischer
 * Diagramme mit Massketten und Symbolen. Jede Skizze ist inhaltlich auf
 * den Text der zugehörigen Leistung in `leistungsangebot` abgestimmt.
 */

const BESCHRIFTUNG = { fontFamily: 'ui-monospace, monospace', stroke: 'none', fill: 'currentColor' };

/** Kleine stehende Figur, für den Massstab in der Skizze. */
function Figur({ x, y }: { x: number; y: number }) {
  return (
    <g strokeLinecap="round">
      <circle cx={x} cy={y - 22} r="4.5" />
      <path d={`M${x} ${y - 17.5} L${x} ${y - 2} M${x} ${y - 12} L${x - 7} ${y - 6} M${x} ${y - 12} L${x + 6} ${y - 5} M${x} ${y - 2} L${x - 6} ${y + 12} M${x} ${y - 2} L${x + 6} ${y + 12}`} />
    </g>
  );
}

/** Baum als lockere Kritzel-Krone auf einem Stamm. */
function Baum({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x} ${y} L${x} ${y - 20}`} />
      <path
        d={`M${x - 16} ${y - 22} C ${x - 20} ${y - 40}, ${x - 6} ${y - 46}, ${x} ${y - 34} C ${x + 8} ${y - 48}, ${x + 22} ${y - 38}, ${x + 15} ${y - 20} C ${x + 20} ${y - 10}, ${x - 4} ${y - 6}, ${x - 10} ${y - 16} C ${x - 22} ${y - 12}, ${x - 22} ${y - 26}, ${x - 16} ${y - 22} Z`}
      />
    </g>
  );
}

/** Schräge Schraffur-Linien, für Schatten und Dachflächen. */
function Schraffur({
  x,
  y,
  breite,
  hoehe,
  anzahl = 6,
}: {
  x: number;
  y: number;
  breite: number;
  hoehe: number;
  anzahl?: number;
}) {
  const linien = Array.from({ length: anzahl }, (_, i) => {
    const versatz = (i / (anzahl - 1)) * (breite + hoehe);
    const x1 = Math.max(x, x + versatz - hoehe);
    const y1 = y + Math.min(versatz, hoehe);
    const x2 = Math.min(x + breite, x + versatz);
    const y2 = y + Math.max(0, versatz - breite);
    return { x1, y1, x2, y2 };
  });
  return (
    <g strokeWidth="0.7" opacity="0.7">
      {linien.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
      ))}
    </g>
  );
}

/**
 * 01 Beratung — eine Person begutachtet ein Grundstück mit Baumbestand,
 * bevor eine Entscheidung fällt.
 */
export function BeratungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M35 245 Q150 251 265 245" />
      <path d="M70 245 L70 165 L140 120 L140 245" />
      <path d="M70 165 L108 143 L140 165" />
      <line x1="90" y1="190" x2="90" y2="215" />
      <line x1="118" y1="190" x2="118" y2="215" />
      <Baum x={200} y={245} />
      <Figur x={175} y={248} />
      <path d="M181 224 L192 220 L192 232 Z" opacity="0.8" />
      <text x="35" y="272" fontSize="9" {...BESCHRIFTUNG}>GRUNDSTÜCKSBEURTEILUNG</text>
    </svg>
  );
}

/**
 * 02 Projektentwicklung — lose Massstudie: mehrere Volumen in loser
 * Perspektive, mit einem handgezeichneten Pfeil für das Ertragspotenzial.
 */
export function ProjektentwicklungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M30 245 Q150 251 270 245" />

      <path d="M50 245 L50 205 L85 190 L85 245" />
      <path d="M50 205 L70 197 L85 190" />

      <path d="M100 245 L100 175 L145 155 L145 245" />
      <path d="M100 175 L128 163 L145 155" />
      <Schraffur x={100} y={175} breite={45} hoehe={0} anzahl={5} />

      <path d="M160 245 L160 130 L215 105 L215 245" />
      <path d="M160 130 L192 116 L215 105" />
      <Schraffur x={160} y={130} breite={55} hoehe={0} anzahl={6} />

      <path
        d="M235 230 C 245 190, 250 150, 258 108"
        strokeDasharray="1 5"
        strokeLinecap="round"
      />
      <path d="M251 118 L258 105 L263 121" strokeLinecap="round" />
      <text x="230" y="98" fontSize="9" {...BESCHRIFTUNG}>ERTRAGSPOTENZIAL</text>
    </svg>
  );
}

/**
 * 03 Planung und Entwurf — Handskizze eines Wohnhauses in Perspektive,
 * mit Bleistift als Werkzeug des Entwurfs.
 */
export function PlanungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M30 250 Q150 256 270 250" />

      <path d="M60 250 L60 155 L150 105 L240 155 L240 250" />
      <path d="M60 155 L150 105 L240 155" />
      <path d="M150 105 L150 250" strokeDasharray="2 4" opacity="0.6" />
      <Schraffur x={150} y={130} breite={90} hoehe={25} anzahl={7} />

      <rect x="82" y="190" width="30" height="60" />
      <rect x="135" y="170" width="28" height="34" />
      <rect x="190" y="170" width="28" height="34" />
      <line x1="149" y1="187" x2="149" y2="204" />
      <line x1="204" y1="187" x2="204" y2="204" />

      <Baum x={255} y={250} />

      <g strokeLinecap="round">
        <path d="M45 275 L85 245" />
        <path d="M82 246 L88 240 L92 246 L86 252 Z" fill="currentColor" fillOpacity="0.15" />
      </g>
      <text x="35" y="290" fontSize="9" {...BESCHRIFTUNG}>ENTWURF</text>
    </svg>
  );
}

/**
 * 04 Baugesuch und Bewilligung — Fassadenskizze mit handgezeichnetem
 * Bewilligungsstempel und den drei Kantonen.
 */
export function BaugesuchArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M40 250 Q150 256 260 250" />
      <path d="M65 250 L65 130 L150 78 L235 130 L235 250" />
      <path d="M65 130 L150 78 L235 130" />
      <Schraffur x={65} y={100} breite={170} hoehe={30} anzahl={8} />

      <rect x="90" y="160" width="32" height="32" />
      <rect x="134" y="160" width="32" height="32" />
      <rect x="178" y="160" width="32" height="32" />
      <rect x="128" y="205" width="44" height="45" />

      <g strokeDasharray="3 3">
        <circle cx="222" cy="95" r="30" />
      </g>
      <path d="M208 96 L219 106 L238 80" strokeWidth="1.8" />
      <path d="M198 108 L246 82" opacity="0.5" strokeDasharray="1 3" />

      <text x="150" y="272" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>ZH · AG · ZG</text>
    </svg>
  );
}

/**
 * 05 Bauleitung und Kostenkontrolle — Baustellenskizze mit Gerüst, Kran
 * und einer Person auf der Baustelle.
 */
export function BauleitungArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M25 250 Q150 256 275 250" />

      <path d="M70 250 L70 110 L170 110 L170 250" />
      <g strokeDasharray="2 3" opacity="0.8">
        <line x1="70" y1="150" x2="170" y2="150" />
        <line x1="70" y1="190" x2="170" y2="190" />
      </g>

      <g opacity="0.85">
        <line x1="55" y1="250" x2="55" y2="95" />
        <line x1="185" y1="250" x2="185" y2="95" />
        <line x1="55" y1="95" x2="185" y2="95" />
        <line x1="55" y1="130" x2="185" y2="130" />
        <line x1="55" y1="165" x2="185" y2="165" />
        <line x1="55" y1="200" x2="185" y2="200" />
        <line x1="55" y1="130" x2="185" y2="95" strokeDasharray="2 3" />
        <line x1="55" y1="165" x2="185" y2="130" strokeDasharray="2 3" />
        <line x1="55" y1="200" x2="185" y2="165" strokeDasharray="2 3" />
      </g>

      {/* Kran */}
      <path d="M225 250 L225 80 L268 80" strokeLinecap="round" />
      <path d="M245 80 L245 60 L225 80" strokeLinecap="round" />
      <path d="M255 80 L262 100" strokeDasharray="2 2" />

      <Figur x={205} y={252} />
      <text x="25" y="272" fontSize="9" {...BESCHRIFTUNG}>BAUSTELLE — KOSTENKONTROLLE</text>
    </svg>
  );
}

/**
 * 06 Generalplanung — ein Gebäude, um das sich die Fachplaner-Rollen
 * anordnen, mit dem Atelier AA als koordinierender Mittelpunkt.
 */
export function GeneralplanungArt() {
  const rollen: { x: number; y: number; label: string }[] = [
    { x: 150, y: 40, label: 'ARCH' },
    { x: 245, y: 90, label: 'ING' },
    { x: 260, y: 190, label: 'HT' },
    { x: 190, y: 258, label: 'ELEKTRO' },
    { x: 95, y: 258, label: 'BAULEITUNG' },
    { x: 40, y: 190, label: 'GEOLOGIE' },
    { x: 55, y: 90, label: 'LANDSCHAFT' },
  ];
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M108 190 L108 130 L150 108 L192 130 L192 190 L108 190" />
      <path d="M108 130 L150 108 L192 130" />
      <Schraffur x={108} y={112} breite={84} hoehe={18} anzahl={5} />

      {rollen.map((r) => (
        <line
          key={`l-${r.label}`}
          x1="150"
          y1="150"
          x2={r.x}
          y2={r.y}
          strokeDasharray="1 4"
          opacity="0.7"
        />
      ))}
      {rollen.map((r) => (
        <g key={`n-${r.label}`}>
          <circle cx={r.x} cy={r.y} r="4" />
          <text
            x={r.x}
            y={r.y > 150 ? r.y + 14 : r.y - 8}
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

/**
 * 07 Wettbewerbe und Studien — eine Skizzenblatt-Seite mit drei
 * Studienvarianten, eine davon eingekreist als gewählter Ansatz.
 */
export function WettbewerbeArt() {
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <rect x="20" y="20" width="260" height="260" strokeDasharray="1 3" opacity="0.4" />

      <path d="M45 210 L45 160 L85 138 L85 188 Z" />
      <path d="M45 160 L85 138" />
      <text x="48" y="228" fontSize="8" {...BESCHRIFTUNG}>STUDIE A</text>

      <path d="M118 225 L118 145 L168 118 L168 198 Z" />
      <path d="M118 145 L168 118" />
      <Schraffur x={118} y={145} breite={50} hoehe={0} anzahl={4} />
      <circle cx="143" cy="170" r="42" strokeDasharray="2 3" opacity="0.8" />
      <text x="112" y="243" fontSize="8" {...BESCHRIFTUNG}>STUDIE B — WEITER VERFOLGT</text>

      <path d="M205 205 L205 165 L245 145 L245 185 Z" strokeDasharray="1 3" opacity="0.7" />
      <path d="M205 165 L245 145" strokeDasharray="1 3" opacity="0.7" />
      <text x="208" y="222" fontSize="8" {...BESCHRIFTUNG}>STUDIE C</text>
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
