import { cn } from '@/lib/utils';

interface LogoProps {
  /** Beim Scrollen wird nur noch das Signet gezeigt. */
  collapsed?: boolean;
  className?: string;
}

/**
 * Wortmarke und Signet.
 *
 * Pfade übernommen 1:1 aus dem alten WordPress-Theme
 * (wp-content/themes/aaelindo/template-parts/header/site-branding.php,
 * Zeile 43-67).
 *
 * Übergang beim Kollabieren im Stil von elindo.ch (siehe dortige
 * `Logo.tsx`): Der Kasten schrumpft in der Breite (`aspect-ratio`,
 * `overflow-hidden`), das Signet bleibt dabei vollkommen unbewegt stehen —
 * animiert wird nur der Rest der Wortmarke, der ausblendet und leicht nach
 * links wegschiebt. Ersetzt die alte Lösung, bei der das Signet stattdessen
 * 12px nach unten wanderte.
 *
 * Nicht anfassen: Die Pfaddaten sind das Markenzeichen. Wer sie ändert,
 * verändert das Logo.
 */

/** Pfade der Wortmarke "telier AA Architekten" (ohne das Signet-A). */
const WORDMARK_PATHS = [
  'M293.033 49.7748V60.8485H291.736L285.701 52.154H285.593V60.8485H284.252V49.7748H285.55L291.606 58.491H291.714V49.7748H293.033Z',
  'M273.63 60.8485V49.7748H280.313V50.9644H274.971V54.7061H279.967V55.8956H274.971V59.659H280.399V60.8485H273.63Z',
  'M261.732 50.9644V49.7748H270.037V50.9644H266.555V60.8485H265.214V50.9644H261.732Z',
  'M250.882 60.8485V49.7748H252.223V55.2684H252.353L257.327 49.7748H259.079L254.429 54.771L259.079 60.8485H257.457L253.607 55.701L252.223 57.2582V60.8485H250.882Z',
  'M240.26 60.8485V49.7748H246.943V50.9644H241.601V54.7061H246.597V55.8956H241.601V59.659H247.029V60.8485H240.26Z',
  'M228.362 50.9644V49.7748H236.667V50.9644H233.185V60.8485H231.844V50.9644H228.362Z',
  'M224.756 49.7748V60.8485H223.415V49.7748H224.756Z',
  'M210.622 60.8485V49.7748H211.963V54.7061H217.867V49.7748H219.208V60.8485H217.867V55.8956H211.963V60.8485H210.622Z',
  'M206.932 53.2353H205.591C205.512 52.8496 205.373 52.5108 205.175 52.2188C204.98 51.9268 204.742 51.6817 204.461 51.4835C204.184 51.2816 203.875 51.1302 203.537 51.0293C203.198 50.9283 202.845 50.8779 202.477 50.8779C201.806 50.8779 201.199 51.0473 200.655 51.3861C200.114 51.725 199.683 52.2242 199.362 52.8839C199.045 53.5435 198.887 54.3528 198.887 55.3117C198.887 56.2705 199.045 57.0798 199.362 57.7394C199.683 58.3991 200.114 58.8984 200.655 59.2372C201.199 59.576 201.806 59.7455 202.477 59.7455C202.845 59.7455 203.198 59.695 203.537 59.5941C203.875 59.4931 204.184 59.3435 204.461 59.1453C204.742 58.9434 204.98 58.6965 205.175 58.4045C205.373 58.1089 205.512 57.7701 205.591 57.388H206.932C206.831 57.9539 206.648 58.4604 206.381 58.9074C206.114 59.3544 205.782 59.7347 205.386 60.0483C204.989 60.3583 204.544 60.5944 204.05 60.7566C203.56 60.9188 203.036 60.9999 202.477 60.9999C201.532 60.9999 200.693 60.7692 199.957 60.3078C199.222 59.8464 198.643 59.1903 198.222 58.3396C197.8 57.4889 197.589 56.4796 197.589 55.3117C197.589 54.1437 197.8 53.1344 198.222 52.2837C198.643 51.433 199.222 50.7769 199.957 50.3155C200.693 49.8541 201.532 49.6234 202.477 49.6234C203.036 49.6234 203.56 49.7045 204.05 49.8667C204.544 50.029 204.989 50.2669 205.386 50.5805C205.782 50.8905 206.114 51.269 206.381 51.716C206.648 52.1593 206.831 52.6658 206.932 53.2353Z',
  'M186.759 60.8485V49.7748H190.501C191.366 49.7748 192.076 49.9226 192.631 50.2182C193.186 50.5102 193.597 50.9121 193.864 51.424C194.131 51.9359 194.264 52.518 194.264 53.1705C194.264 53.8229 194.131 54.4015 193.864 54.9062C193.597 55.4108 193.188 55.8073 192.637 56.0957C192.085 56.3805 191.38 56.5229 190.523 56.5229H187.495V55.3117H190.479C191.07 55.3117 191.546 55.2252 191.907 55.0521C192.271 54.8791 192.534 54.634 192.696 54.3168C192.862 53.996 192.945 53.6139 192.945 53.1705C192.945 52.7271 192.862 52.3396 192.696 52.008C192.53 51.6763 192.265 51.4204 191.901 51.2402C191.537 51.0563 191.056 50.9644 190.458 50.9644H188.1V60.8485H186.759ZM191.972 55.874L194.697 60.8485H193.14L190.458 55.874H191.972Z',
  'M175.401 60.8485H173.995L178.061 49.7748H179.446L183.512 60.8485H182.106L178.797 51.5267H178.71L175.401 60.8485ZM175.92 56.5229H181.587V57.7124H175.92V56.5229Z',
  'M178.823 33.9487V0.727661H190.664C193.238 0.727661 195.374 1.17104 197.072 2.0578C198.781 2.94456 200.057 4.17197 200.9 5.74002C201.744 7.29726 202.165 9.09782 202.165 11.1417C202.165 13.1748 201.738 14.9645 200.884 16.5109C200.04 18.0465 198.764 19.2415 197.056 20.0958C195.358 20.9501 193.222 21.3773 190.648 21.3773H181.678V17.0624H190.194C191.816 17.0624 193.136 16.8299 194.152 16.3649C195.179 15.8999 195.931 15.224 196.407 14.3373C196.883 13.4505 197.121 12.3853 197.121 11.1417C197.121 9.88725 196.877 8.80043 196.391 7.88123C195.915 6.96202 195.163 6.2591 194.136 5.77247C193.119 5.27501 191.784 5.02629 190.129 5.02629H183.835V33.9487H178.823ZM195.223 18.9603L203.431 33.9487H197.721L189.675 18.9603H195.223Z',
  'M146.732 33.9487V0.727661H167.56V5.04251H151.744V15.1646H166.473V19.4632H151.744V29.6339H167.754V33.9487H146.732Z',
  'M134.864 0.727661V33.9487H129.852V0.727661H134.864Z',
  'M99.5004 33.9487V0.727661H104.513V29.6339H119.566V33.9487H99.5004Z',
  'M67.409 33.9487V0.727661H88.2371V5.04251H72.4214V15.1646H87.1502V19.4632H72.4214V29.6339H88.4317V33.9487H67.409Z',
  'M31.449 5.04251V0.727661H57.1596V5.04251H46.7943V33.9487H41.7981V5.04251H31.449Z',
  'M231.178 33.4412H225.857L237.812 0.220093H243.603L255.558 33.4412H250.238L240.846 6.25439H240.586L231.178 33.4412ZM233.593 20.4317H241.226L242.478 25.1568H233.593V20.4317Z',
  'M268.229 33.4412H262.908L274.863 0.220093H280.654L292.609 33.4412H287.288L277.896 6.25439H277.637L268.229 33.4412ZM270.643 20.4317H278.277L279.528 25.1568H270.643V20.4317Z',
];

/** Das Signet: der "A"-Umriss, x 0–29.7 im viewBox-Koordinatensystem. */
const SIGN_PATH =
  'M5.32056 34.1794H0L11.955 0.958313H17.746L29.7011 34.1794H24.3805L14.9884 6.99261H14.7289L5.32056 34.1794ZM7.73536 21.17H15.3686L16.6203 25.895H7.73536V21.17Z';

/** Die Wortmarke ohne das Signet-A — der Teil, der beim Kollabieren verschwindet. */
function WortmarkeOhneSignet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 294 61"
      aria-hidden="true"
      focusable="false"
      className={cn('h-full w-auto shrink-0 fill-current', className)}
    >
      {WORDMARK_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/**
 * Signet: das "A" allein, im vollen 294×61-Raster der Wortmarke.
 *
 * Derselbe viewBox wie die Wortmarke (nicht ein eigener, kleinerer) — so
 * sitzt das A zwangsläufig genau dort, wo es auch in "Atelier AA
 * Architekten" steht, ohne Umrechnung.
 */
export function Signet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 294 61"
      aria-hidden="true"
      focusable="false"
      className={cn('h-full w-auto shrink-0 fill-current', className)}
    >
      <path d={SIGN_PATH} />
    </svg>
  );
}

/**
 * Das Signet allein, auf seine eigene Bounding-Box zugeschnitten (statt im
 * vollen 294×61-Raster der Wortmarke) — für Verwendungen als eigenständiges
 * Icon, z. B. anstelle eines Pfeils.
 */
export function SignetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 29.7 61"
      aria-hidden="true"
      focusable="false"
      className={cn('h-full w-auto shrink-0 fill-current', className)}
    >
      <path d={SIGN_PATH} />
    </svg>
  );
}

/**
 * Wortmarke und Signet, weich ineinander übergehend.
 *
 * Das Signet wird nie überblendet — zwei deckungsgleiche A gegeneinander zu
 * blenden liesse das Zeichen in der Mitte des Übergangs kurz aufhellen und
 * wieder abdunkeln. Es steht deshalb als eigenes, dauerhaft sichtbares
 * Element, das sich beim Scrollen überhaupt nicht verändert. Verblendet
 * wird allein der Rest der Wortmarke — der Teil, der tatsächlich
 * verschwindet —, zusätzlich mit einem leichten Wegschieben nach links.
 */
export default function Logo({ collapsed = false, className }: LogoProps) {
  const kurve = 'duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]';

  return (
    <span
      className={cn(
        'relative block h-full text-current',
        // `overflow-hidden` schneidet ab, was über die aktuelle Breite
        // hinausragt. Beide Ebenen zeichnen im vollen 294-Einheiten-Raster;
        // im zusammengeklappten Zustand ist der Kasten nur 29,7 Einheiten
        // breit (Breite des A), und alles rechts davon wird abgeschnitten.
        'overflow-hidden',
        'transition-[aspect-ratio]',
        kurve,
        collapsed ? 'aspect-[29.7/61]' : 'aspect-[294/61]',
        className
      )}
    >
      {/* Der Rest der Wortmarke — der Teil, der verschwindet. Ausgeblendet
          und zugleich ein Stück nach links geschoben (4% der Breite), um
          eine Richtung anzudeuten statt als Bewegung aufzufallen. */}
      <span
        className={cn(
          'absolute inset-y-0 left-0 block h-full origin-left transition-[opacity,transform]',
          kurve,
          collapsed ? '-translate-x-[4%] opacity-0' : 'translate-x-0 opacity-100'
        )}
      >
        <WortmarkeOhneSignet />
      </span>

      {/* Das Signet — unverändert in beiden Zuständen, ohne jede Animation. */}
      <span className="absolute inset-y-0 left-0 block h-full">
        <Signet />
      </span>
    </span>
  );
}
