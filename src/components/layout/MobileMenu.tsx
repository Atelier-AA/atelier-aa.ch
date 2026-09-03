'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  /** Farbgebung der Fläche. Siehe PALETTEN. */
  variante?: Variante;
}

type Variante = 'hell' | 'dunkel';

/**
 * Die beiden Farbgebungen des Menüs.
 *
 * Die Klassennamen stehen bewusst als vollständige Zeichenketten da und
 * werden nicht zusammengesetzt: Tailwind liest den Quelltext und erzeugt nur
 * Klassen, die es wörtlich darin findet. Ein `text-[${farbe}]` ergäbe zur
 * Laufzeit den richtigen Namen, aber kein CSS dazu.
 */
const PALETTEN = {
  hell: {
    /** Flächenfarbe als RGB — der Verlauf braucht sie mit Alpha 0. */
    flaecheRgb: '242, 240, 237',
    /* Zwei gleich breite Hälften: links durchsichtig, rechts die Navigation. */
    platzhalterSpalte: 'lg:flex-1',
    navSpalte: 'lg:flex-1',
    navAbstand: 'lg:pl-20',
    /** Wie weit links der Schriftkante die Fläche noch voll deckt. Negativ =
     *  der Verlauf setzt rechts davon an, läuft also in die Schrift hinein. */
    verlaufPufferPx: 24,
    /** Alternativer Ansatz als Anteil der Breite, von rechts gezählt. Wenn
     *  gesetzt, wird nicht an der Schriftkante gemessen. */
    verlaufAnsatzProzent: null,
    text: 'text-[#0d0d0d]',
    textAktiv: 'hover:text-black focus-visible:text-black',
    umriss: 'focus-visible:outline-[#0d0d0d]',
    linie: 'border-[#e4e1dc]',
    pfeil: 'text-[#b2afaa]',
    pfeilAktiv: 'group-hover:text-black group-focus-visible:text-black',
  },
  dunkel: {
    flaecheRgb: '13, 13, 13',
    /* Schmaler und weiter rechts: Die Navigationsspalte ist um 40% ihrer
       Breite nach rechts gerückt und entsprechend schmaler (30% statt 50%),
       die durchsichtige Fläche wächst dadurch von 50% auf 70%. Der kleinere
       Innenabstand hält die Zeilen in der schmaleren Spalte lesbar. */
    platzhalterSpalte: 'lg:flex-[7]',
    navSpalte: 'lg:flex-[3]',
    navAbstand: 'lg:pl-10',
    verlaufPufferPx: 0,
    /* Der Verlauf setzt schlicht in der Bildschirmmitte an: deckend von
       rechts bis zur Mitte, von dort nach links auf durchsichtig. Die
       Navigationsspalte (ab 70%) steht damit vollständig auf deckendem
       Grund, links davon bleiben 20% Deckung als Puffer. Fester Anteil statt
       Messung an der Schrift — "etwa Mitte" ist eine Aussage über die
       Fläche, nicht über die Textkante. */
    verlaufAnsatzProzent: 50,
    text: 'text-[#f2f0ed]',
    textAktiv: 'hover:text-white focus-visible:text-white',
    umriss: 'focus-visible:outline-white',
    linie: 'border-[#1e1e1e]',
    pfeil: 'text-[#4a4a4a]',
    pfeilAktiv: 'group-hover:text-white group-focus-visible:text-white',
  },
} as const;

/**
 * Gestaffelter Eintritt der Navigationszeilen (Design "5a"): keine
 * gleichmässigen Abstände, sondern diese exakten Verzögerungen — Team
 * (dritte Zeile) rückt näher an Büro heran als die übrigen Abstände.
 */
const ZEILEN_VERZOEGERUNG_MS = [80, 150, 190, 220, 290, 360, 430];

/** "Team" wird als eigene, gleich grosse Zeile direkt nach "Büro" geführt
 *  statt als kleinerer Unterpunkt — Vorgabe aus dem Design. */
const navigationsZeilen = navigation.flatMap((item) =>
  item.unterlink ? [item, { href: item.unterlink.href, label: item.unterlink.label }] : [item]
);

/**
 * Vollbild-Menü, für alle Bildschirmbreiten.
 *
 * Aus dem Design "5a" (Handoff per Claude Design) stammen die Navigations-
 * liste mit Hairlines, Pfeilen und gestaffelter Eintrittsanimation. Die
 * links stehende Kontakt-Karte ist entfallen; die Navigation bleibt auf der
 * rechten Hälfte, links scheint die Seite durch.
 *
 * Eine helle Fläche fährt von der Kopfzeile nach unten über die ganze
 * Seite, wie ein Rollo (bestehendes Verhalten der Seite); danach steigen
 * die Menüpunkte gestaffelt ein.
 *
 * Die Farbgebung ist gegenüber der Seite umgekehrt: helle Fläche, dunkle
 * Schrift. Das offene Menü setzt sich dadurch klar vom Rest ab. Alle Werte
 * sind paarweise gespiegelt — Fläche #0d0d0d wurde #f2f0ed, Schrift #f2f0ed
 * wurde #0d0d0d, die Grautöne entsprechend.
 *
 * Die Fläche deckt nicht durchgehend: Rechts hinter der Navigation ist sie
 * voll deckend und läuft nach links auf durchsichtig aus (siehe
 * VERLAUF_PUFFER_PX und die Messung der Navigationskante).
 */
export default function MobileMenu({ open, onClose, variante = 'hell' }: MobileMenuProps) {
  const farben = PALETTEN[variante];
  /** Ob das Menü im DOM steht — getrennt von `open`, damit die Fläche beim
   *  Schliessen noch nach oben fahren kann, bevor sie verschwindet. */
  const [imDom, setImDom] = useState(open);
  /** Ob die Fläche unten steht — steuert die Verschiebung. */
  const [ausgefahren, setAusgefahren] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const vorherFokussiert = useRef<HTMLElement | null>(null);
  /** Der Textblock der Navigation — an seiner linken Kante setzt der Verlauf
   *  an. Bewusst die Liste und nicht die Spalte: Die Spalte hat links noch
   *  80px Innenabstand, der Verlauf begänne sonst unnötig weit links. */
  const textRef = useRef<HTMLUListElement>(null);
  const [deckendBreite, setDeckendBreite] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      setImDom(true);
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAusgefahren(true))
      );
      return () => cancelAnimationFrame(id);
    }

    setAusgefahren(false);
    const id = window.setTimeout(() => setImDom(false), 300);
    return () => window.clearTimeout(id);
  }, [open]);

  /**
   * Linke Kante des Navigationstextes messen: Bis dorthin deckt die Fläche
   * voll, von dort läuft sie nach links auf durchsichtig aus.
   *
   * `offsetLeft` statt `getBoundingClientRect()`: Die Fläche fährt beim Öffnen
   * per `translateY` herein: eine Messung am Bildschirmrechteck würde während
   * der Bewegung falsche Werte liefern. `offsetLeft` ist eine Layout-Grösse und
   * von der Verschiebung unberührt. Bezugspunkt ist die Fläche selbst, weil
   * sie als einziges Element dazwischen positioniert ist.
   */
  useEffect(() => {
    if (!imDom || farben.verlaufAnsatzProzent !== null) return;

    const messen = () => {
      const text = textRef.current;
      if (!text) return;
      // Abstand vom rechten Rand bis zur linken Kante des Textes.
      const breite = text.offsetParent?.clientWidth ?? window.innerWidth;
      setDeckendBreite(breite - text.offsetLeft + farben.verlaufPufferPx);
    };

    messen();
    window.addEventListener('resize', messen);
    return () => window.removeEventListener('resize', messen);
  }, [imDom, farben.verlaufPufferPx, farben.verlaufAnsatzProzent]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fokus im Menü halten und danach an den Burger zurückgeben.
  useEffect(() => {
    if (!open) {
      vorherFokussiert.current?.focus();
      vorherFokussiert.current = null;
      return;
    }

    if (!imDom) return;

    /* Nur beim erstmaligen Öffnen festhalten. Liefe der Effekt erneut,
       während das Menü offen ist, würde hier ein Menülink gespeichert und
       beim Schliessen ein bereits entferntes Element fokussiert. */
    if (!vorherFokussiert.current) {
      vorherFokussiert.current = document.activeElement as HTMLElement | null;
    }

    const fokussierbare = () =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => el.offsetParent !== null);

    fokussierbare()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const elemente = fokussierbare();
      if (elemente.length === 0) return;

      const erstes = elemente[0];
      const letztes = elemente[elemente.length - 1];

      if (e.shiftKey && document.activeElement === erstes) {
        e.preventDefault();
        letztes.focus();
      } else if (!e.shiftKey && document.activeElement === letztes) {
        e.preventDefault();
        erstes.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, imDom, onClose]);

  if (!imDom) return null;

  /** Navigationszeile: "softUp" — Fade + Aufsteigen aus 14px, .7s ease. */
  const zeilenEinstieg = (index: number) =>
    ({
      transitionDelay: ausgefahren ? `${ZEILEN_VERZOEGERUNG_MS[index]}ms` : '0ms',
    }) satisfies React.CSSProperties;

  const zeilenKlassen = cn(
    'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
    ausgefahren ? 'translate-y-0 opacity-100' : 'translate-y-[14px] opacity-0'
  );

  return (
    <div
      id="mobile-menu"
      ref={dialogRef}
      className="fixed inset-0 z-40 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Hauptnavigation"
    >
      {/* Die Fläche trägt Hintergrund UND Inhalt in einem Element, damit beim
          Schliessen alles gemeinsam nach oben verschwindet — auch die
          Trennlinie zwischen Kontakt und Navigation, die vorher als Teil
          eines separaten, nicht mitgleitenden Inhalts-Elements liegen blieb.
          Schliessen ist deutlich schneller als Öffnen. */}
      <div
        className={cn(
          'absolute inset-0 flex flex-col overflow-y-auto transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
          ausgefahren ? 'translate-y-0 duration-500' : '-translate-y-full duration-300'
        )}
        style={{
          /* Waagrecht: rechts deckend hinter der Navigation, nach links auf
             durchsichtig auslaufend — dort scheint die Seite durch. `to left`
             heisst, 0px liegt am rechten Rand. Solange noch nicht gemessen
             ist, deckt die Fläche voll: sonst blitzt beim Öffnen kurz die
             Seite durch. */
          background: (() => {
            // `to left` heisst: 0 liegt am rechten Rand.
            const ansatz =
              farben.verlaufAnsatzProzent !== null
                ? `${farben.verlaufAnsatzProzent}%`
                : deckendBreite !== null
                  ? `${deckendBreite}px`
                  : null;
            if (ansatz === null) return `rgb(${farben.flaecheRgb})`;
            return `linear-gradient(to left, rgb(${farben.flaecheRgb}) 0px, rgb(${farben.flaecheRgb}) ${ansatz}, rgba(${farben.flaecheRgb}, 0) 100%)`;
          })(),
        }}
      >
        <div className="mx-auto flex w-full max-w-content flex-1 flex-col gap-10 px-6 pt-24 pb-8 md:px-10 md:pt-28 lg:flex-row lg:gap-20 lg:px-16 lg:pt-8 lg:pb-12">
          {/* Platzhalter statt der früheren Kontakt-Karte: hält die
              Navigation auf der rechten Hälfte. Ihre linke Kante ist der
              Ansatzpunkt des Verlaufs, links davon scheint die Seite durch.
              Nur ab lg wirksam — auf dem Handy nimmt die Navigation ohnehin
              die volle Breite, die Fläche deckt dort also fast ganz. */}
          <div aria-hidden="true" className={cn('hidden lg:block', farben.platzhalterSpalte)} />

          {/* Navigationsliste. Die senkrechte Trennlinie ist entfallen: Sie
              trennte von der Kontakt-Karte, und ohne diese liefe sie ins
              Leere — sie stünde ausserdem mitten im Verlauf und wäre als
              Strich über der durchscheinenden Seite sichtbar. Der linke
              Innenabstand bleibt, damit die Zeilen an derselben Stelle
              stehen wie zuvor. */}
          <nav
            aria-label="Hauptnavigation"
            className={cn(
              'order-1 flex flex-1 items-start lg:order-2 lg:items-center',
              farben.navSpalte,
              farben.navAbstand
            )}
          >
            <ul ref={textRef} className="flex w-full flex-col">
              {navigationsZeilen.map((item, idx) => (
                <li
                  key={item.href}
                  style={zeilenEinstieg(idx)}
                  className={cn(
                    idx < navigationsZeilen.length - 1 && `border-b ${farben.linie}`,
                    zeilenKlassen
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'group flex items-baseline justify-between rounded-sm py-3 text-[32px] font-normal leading-none transition-all duration-300 ease-out hover:pl-[22px] focus-visible:pl-[22px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:text-[50px]',
                      farben.text,
                      farben.textAktiv,
                      farben.umriss
                    )}
                  >
                    <span>{item.label}</span>
                    <span
                      className={cn(
                        'text-[18px] transition-colors duration-300 lg:text-[26px]',
                        farben.pfeil,
                        farben.pfeilAktiv
                      )}
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
