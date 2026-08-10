'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { navigation, footerLegal } from '@/data/navigation';
import { firma, sozialeMedien } from '@/data/firma';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

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
 * Umsetzung des Designs "5a" (Handoff per Claude Design): links eine
 * abgerundete Kontakt-Karte, rechts die Navigationsliste mit Hairlines,
 * Pfeilen und gestaffelter Eintrittsanimation. Farben/Grössen/Abstände
 * pixelgenau nach Vorgabe.
 *
 * Eine dunkle Fläche fährt von der Kopfzeile nach unten über die ganze
 * Seite, wie ein Rollo (bestehendes Verhalten der Seite); danach steigen
 * Kontakt-Karte und Menüpunkte gestaffelt ein.
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  /** Ob das Menü im DOM steht — getrennt von `open`, damit die Fläche beim
   *  Schliessen noch nach oben fahren kann, bevor sie verschwindet. */
  const [imDom, setImDom] = useState(open);
  /** Ob die Fläche unten steht — steuert die Verschiebung. */
  const [ausgefahren, setAusgefahren] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const vorherFokussiert = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      setImDom(true);
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAusgefahren(true))
      );
      return () => cancelAnimationFrame(id);
    }

    setAusgefahren(false);
    const id = window.setTimeout(() => setImDom(false), 500);
    return () => window.clearTimeout(id);
  }, [open]);

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

    vorherFokussiert.current = document.activeElement as HTMLElement | null;

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

  /** Kontakt-Karte: reines Fade, kein Aufsteigen, .9s Dauer, .35s Verzögerung. */
  const karteKlassen = cn(
    'transition-opacity duration-[900ms] ease-out motion-reduce:transition-none',
    ausgefahren ? 'opacity-100 delay-[350ms]' : 'opacity-0 delay-0'
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
      {/* Die Fläche: steht bereits in voller Höhe da, nach oben aus dem Bild
          geschoben, und fährt beim Öffnen an ihren Platz. */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 bg-[#0d0d0d] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none',
          ausgefahren ? 'translate-y-0' : '-translate-y-full'
        )}
      />

      <div className="relative flex h-full flex-col overflow-y-auto">
        <div className="flex flex-1 flex-col gap-10 px-6 py-8 md:px-10 lg:flex-row lg:gap-20 lg:px-12 lg:pb-12">
          {/* Kontakt-Karte, vertikal zentriert. */}
          <div className="flex flex-1 items-center lg:order-1">
            <div
              className={cn(
                'w-full max-w-[400px] rounded-[24px] bg-[#161616] px-8 py-8 lg:px-12 lg:py-11',
                karteKlassen
              )}
            >
              <div className="flex flex-col gap-7">
                <p className="text-2xl font-semibold text-[#f2f0ed]">Kontakt</p>

                <div className="flex flex-col gap-3.5 text-[19px] text-[#f2f0ed]">
                  <a
                    href={`tel:${firma.telefonHref}`}
                    onClick={onClose}
                    className="w-fit border-b border-[#6a6a6a] pb-[3px] transition-colors duration-300 hover:border-[#f2f0ed]"
                  >
                    {firma.telefon}
                  </a>
                  <a
                    href={`mailto:${firma.email}`}
                    onClick={onClose}
                    className="w-fit border-b border-[#6a6a6a] pb-[3px] transition-colors duration-300 hover:border-[#f2f0ed]"
                  >
                    {firma.email}
                  </a>
                  <Link
                    href="/kontakt"
                    onClick={onClose}
                    className="w-fit border-b border-[#6a6a6a] pb-[3px] transition-colors duration-300 hover:border-[#f2f0ed]"
                  >
                    Kontaktformular
                  </Link>
                </div>

                <p className="text-[15px] leading-[1.7] text-[#9a9a9a]">
                  {firma.name}
                  <br />
                  {firma.strasse}
                  <br />
                  {firma.plz} {firma.ort}
                </p>

                <div className="flex flex-col gap-3.5">
                  <p className="text-[11px] tracking-[3px] text-[#9a9a9a]">FOLGEN SIE UNS</p>
                  <div className="flex gap-3.5">
                    <a
                      href={sozialeMedien.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      aria-label="Atelier AA Architekten auf LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2a2a] text-[#d9d9d9] transition-colors duration-300 hover:bg-[#f2f0ed] hover:text-[#0d0d0d]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={sozialeMedien.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      aria-label="Atelier AA Architekten auf Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2a2a2a] text-[#d9d9d9] transition-colors duration-300 hover:bg-[#f2f0ed] hover:text-[#0d0d0d]"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex gap-7 border-t border-[#2e2e2e] pt-[22px] text-[11px] tracking-[2px] text-[#9a9a9a]">
                  {footerLegal.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="transition-colors duration-300 hover:text-[#f2f0ed]"
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigationsliste, vertikal zentriert, mit Trennlinie zur Karte. */}
          <nav
            aria-label="Hauptnavigation"
            className="flex flex-1 items-center border-t border-[#262626] pt-8 lg:order-2 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-20"
          >
            <ul className="flex w-full flex-col">
              {navigationsZeilen.map((item, idx) => (
                <li
                  key={item.href}
                  style={zeilenEinstieg(idx)}
                  className={cn(
                    idx < navigationsZeilen.length - 1 && 'border-b border-[#1e1e1e]',
                    zeilenKlassen
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between py-3 text-[32px] font-normal leading-none text-[#f2f0ed] transition-all duration-300 ease-out hover:pl-[22px] hover:text-white lg:text-[50px]"
                  >
                    <span>{item.label}</span>
                    <span className="text-[18px] text-[#4a4a4a] transition-colors duration-300 group-hover:text-white lg:text-[26px]">
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
