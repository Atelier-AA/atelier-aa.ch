/**
 * Architekturskizzen im Stil einer dichten Filzstift-Handzeichnung: jede
 * Kante wird mehrfach mit leichtem, aber deterministischem Versatz
 * nachgezogen (kein `Math.random()` — das würde Server- und
 * Client-Rendering in Next.js auseinanderlaufen lassen und einen
 * Hydration-Fehler auslösen). Jedes Gebäude steht perspektivisch auf einer
 * Bodenlinie, mit winzigen Figuren für den Massstab — angelehnt an das
 * Prinzip dichter, energetischer Architektur-Skizzen, aber eigens für die
 * sieben Leistungen von Atelier AA gezeichnet.
 */

const BESCHRIFTUNG = { fontFamily: 'ui-monospace, monospace', stroke: 'none', fill: 'currentColor' };

/** Deterministischer Pseudozufall — dieselbe Zahl liefert immer denselben Wert. */
function zufall(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** Eine Kante, mehrfach mit Versatz nachgezogen — die "Suchlinie" der Skizze. */
function Kritzel({
  x1,
  y1,
  x2,
  y2,
  seed,
  durchgaenge = 4,
  staerke = 1,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  seed: number;
  durchgaenge?: number;
  staerke?: number;
}) {
  return (
    <>
      {Array.from({ length: durchgaenge }, (_, i) => {
        const s = seed + i * 9.17;
        const j = (n: number) => (zufall(s + n) - 0.5) * 3.2;
        return (
          <line
            key={i}
            x1={x1 + j(1)}
            y1={y1 + j(2)}
            x2={x2 + j(3)}
            y2={y2 + j(4)}
            strokeWidth={staerke * (0.85 + zufall(s + 5) * 0.3)}
            opacity={0.5 + zufall(s + 6) * 0.35}
          />
        );
      })}
    </>
  );
}

/** Ein perspektivischer Baukörper (Vorder-, Ober- und Seitenfläche) aus Kritzel-Kanten. */
function Baukoerper({
  x,
  y,
  w,
  h,
  dx,
  dy,
  seed,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  dx: number;
  dy: number;
  seed: number;
}) {
  const kanten: [number, number, number, number][] = [
    [x, y, x + w, y], // vorne oben
    [x + w, y, x + w, y + h], // vorne rechts
    [x + w, y + h, x, y + h], // vorne unten
    [x, y + h, x, y], // vorne links
    [x, y, x + dx, y + dy], // Tiefe oben links
    [x + w, y, x + w + dx, y + dy], // Tiefe oben rechts
    [x + dx, y + dy, x + w + dx, y + dy], // hinten oben
    [x + w + dx, y + dy, x + w + dx, y + h + dy], // hinten rechts
    [x + w, y + h, x + w + dx, y + h + dy], // Tiefe unten rechts
  ];
  return (
    <>
      {kanten.map(([x1, y1, x2, y2], i) => (
        <Kritzel key={i} x1={x1} y1={y1} x2={x2} y2={y2} seed={seed + i * 3.3} />
      ))}
    </>
  );
}

/** Winzige Figuren am Boden, für den Massstab. */
function Figuren({ x, y, anzahl, seed }: { x: number; y: number; anzahl: number; seed: number }) {
  return (
    <>
      {Array.from({ length: anzahl }, (_, i) => {
        const px = x + i * (9 + zufall(seed + i) * 5);
        const s = seed + i * 11;
        return (
          <g key={i}>
            <circle cx={px} cy={y - 8} r="2.2" />
            <line x1={px} y1={y - 6} x2={px + (zufall(s) - 0.5) * 3} y2={y} strokeWidth="1" />
          </g>
        );
      })}
    </>
  );
}

/** Bodenlinie mit perspektivischem Richtungspfeil. */
function Boden({ seed }: { seed: number }) {
  return (
    <>
      <Kritzel x1={10} y1={192} x2={290} y2={192} seed={seed} staerke={1.1} />
      <path d="M230 205 L268 200 L262 208" opacity="0.7" strokeWidth="1" />
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

/** 01 Beratung — ein Wohnhaus, von Figuren begutachtet, bevor eine Entscheidung fällt. */
export function BeratungArt() {
  return (
    <svg {...svgProps}>
      <Baukoerper x={90} y={80} w={100} h={95} dx={45} dy={-28} seed={4} />
      <Figuren x={40} y={192} anzahl={2} seed={21} />
      <Figuren x={225} y={192} anzahl={2} seed={38} />
      <path d="M205 130 L216 141 L236 116" strokeWidth="1.5" opacity="0.85" />
      <Boden seed={60} />
      <text x="10" y="215" fontSize="9" {...BESCHRIFTUNG}>BERATUNG — GRUNDSTÜCK</text>
    </svg>
  );
}

/** 02 Projektentwicklung — gestufte Volumen mit wachsendem Überhang, Ertragslinie. */
export function ProjektentwicklungArt() {
  return (
    <svg {...svgProps}>
      <Baukoerper x={60} y={140} w={60} h={52} dx={22} dy={-14} seed={2} />
      <Baukoerper x={80} y={95} w={65} h={45} dx={26} dy={-16} seed={30} />
      <Baukoerper x={102} y={52} w={70} h={43} dx={30} dy={-18} seed={58} />
      <Kritzel x1={45} y1={128} x2={225} y2={45} seed={90} durchgaenge={3} />
      <path d="M215 40 L228 44 L221 55" strokeWidth="1.2" opacity="0.85" />
      <Figuren x={195} y={192} anzahl={3} seed={12} />
      <Boden seed={110} />
      <text x="10" y="215" fontSize="9" {...BESCHRIFTUNG}>PROJEKTENTWICKLUNG</text>
    </svg>
  );
}

/**
 * 03 Planung und Entwurf — das auskragende Volumen: ein schmaler Kern trägt
 * ein weit auskragendes Obergeschoss, wie im ersten Konzeptentwurf.
 */
export function PlanungArt() {
  return (
    <svg {...svgProps}>
      <Baukoerper x={95} y={110} w={45} h={80} dx={20} dy={-14} seed={5} />
      <Baukoerper x={55} y={55} w={140} h={58} dx={28} dy={-18} seed={45} />
      <Kritzel x1={110} y1={130} x2={130} y2={130} seed={95} durchgaenge={3} staerke={0.9} />
      <Figuren x={40} y={192} anzahl={2} seed={7} />
      <Figuren x={220} y={192} anzahl={3} seed={19} />
      <path d="M20 205 L52 186" strokeWidth="1" opacity="0.8" />
      <path d="M49 188 L57 181 L60 189 Z" fill="currentColor" fillOpacity="0.18" />
      <Boden seed={70} />
      <text x="10" y="215" fontSize="9" {...BESCHRIFTUNG}>ENTWURF</text>
    </svg>
  );
}

/** 04 Baugesuch und Bewilligung — Baukörper mit Fensterraster und Bewilligungsstempel. */
export function BaugesuchArt() {
  return (
    <svg {...svgProps}>
      <Baukoerper x={55} y={62} w={130} h={110} dx={35} dy={-22} seed={8} />
      <Kritzel x1={72} y1={85} x2={72} y2={150} seed={140} durchgaenge={3} staerke={0.8} />
      <Kritzel x1={100} y1={85} x2={100} y2={150} seed={150} durchgaenge={3} staerke={0.8} />
      <Kritzel x1={128} y1={85} x2={128} y2={150} seed={160} durchgaenge={3} staerke={0.8} />
      <Kritzel x1={156} y1={85} x2={156} y2={150} seed={170} durchgaenge={3} staerke={0.8} />

      <circle cx={232} cy={80} r={26} strokeDasharray="3 3" opacity="0.9" />
      <path d="M219 80 L228 89 L245 66" strokeWidth="1.6" />

      <Figuren x={65} y={192} anzahl={2} seed={16} />
      <Boden seed={80} />
      <text x="150" y="215" textAnchor="middle" fontSize="9" {...BESCHRIFTUNG}>ZH · AG · ZG</text>
    </svg>
  );
}

/** 05 Bauleitung und Kostenkontrolle — Rohbau mit Gerüst und Kran, im Bau. */
export function BauleitungArt() {
  return (
    <svg {...svgProps}>
      <Baukoerper x={60} y={70} w={110} h={105} dx={30} dy={-20} seed={9} />
      <Kritzel x1={60} y1={105} x2={170} y2={105} seed={200} durchgaenge={3} staerke={0.8} />
      <Kritzel x1={60} y1={140} x2={170} y2={140} seed={210} durchgaenge={3} staerke={0.8} />
      <Kritzel x1={45} y1={70} x2={45} y2={185} seed={220} durchgaenge={3} staerke={0.9} />
      <Kritzel x1={45} y1={185} x2={60} y2={175} seed={230} durchgaenge={3} staerke={0.9} />
      <Kritzel x1={45} y1={140} x2={60} y2={130} seed={240} durchgaenge={3} staerke={0.9} />
      <Kritzel x1={45} y1={105} x2={60} y2={95} seed={250} durchgaenge={3} staerke={0.9} />

      <Kritzel x1={225} y1={192} x2={225} y2={45} seed={260} durchgaenge={3} />
      <Kritzel x1={225} y1={45} x2={272} y2={45} seed={270} durchgaenge={3} />
      <path d="M250 45 L244 32 L225 45" strokeWidth="1" opacity="0.85" />
      <Kritzel x1={256} y1={45} x2={262} y2={68} seed={280} durchgaenge={2} staerke={0.8} />

      <Figuren x={95} y={192} anzahl={2} seed={17} />
      <Boden seed={90} />
      <text x="10" y="215" fontSize="9" {...BESCHRIFTUNG}>BAULEITUNG</text>
    </svg>
  );
}

/** 06 Generalplanung — ein Baukörper, koordiniert von mehreren Fachplaner-Rollen. */
export function GeneralplanungArt() {
  const rollen: { x: number; y: number; label: string }[] = [
    { x: 150, y: 15, label: 'ARCH' },
    { x: 260, y: 55, label: 'ING' },
    { x: 270, y: 150, label: 'HT' },
    { x: 150, y: 205, label: 'BAULEITUNG' },
    { x: 30, y: 150, label: 'ELEKTRO' },
    { x: 42, y: 55, label: 'LANDSCHAFT' },
  ];
  return (
    <svg {...svgProps}>
      <Baukoerper x={115} y={95} w={70} h={65} dx={25} dy={-16} seed={11} />
      {rollen.map((r) => (
        <Kritzel
          key={`l-${r.label}`}
          x1={150}
          y1={120}
          x2={r.x}
          y2={r.y}
          seed={r.x + r.y}
          durchgaenge={2}
          staerke={0.7}
        />
      ))}
      {rollen.map((r) => (
        <g key={`n-${r.label}`}>
          <rect x={r.x - 7} y={r.y - 7} width={14} height={14} />
          <text x={r.x} y={r.y > 120 ? r.y + 16 : r.y - 10} textAnchor="middle" fontSize="7.5" {...BESCHRIFTUNG}>
            {r.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** 07 Wettbewerbe und Studien — drei rasch skizzierte Volumenvarianten, eine gewählt. */
export function WettbewerbeArt() {
  return (
    <svg {...svgProps}>
      <Baukoerper x={30} y={130} w={45} h={55} dx={16} dy={-11} seed={13} />
      <text x="32" y="205" fontSize="8" {...BESCHRIFTUNG}>A</text>

      <Baukoerper x={115} y={100} w={55} h={85} dx={20} dy={-14} seed={40} />
      <circle cx={150} cy={140} r={44} strokeDasharray="2 3" opacity="0.85" />
      <text x="115" y="205" fontSize="8" {...BESCHRIFTUNG}>B — WEITER VERFOLGT</text>

      <Baukoerper x={215} y={130} w={45} h={55} dx={16} dy={-11} seed={65} />
      <text x="217" y="205" fontSize="8" {...BESCHRIFTUNG}>C</text>
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
