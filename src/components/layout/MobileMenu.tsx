'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { navigation, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Vollbild-Menü, für alle Bildschirmbreiten — im Stil von elindo.ch.
 *
 * Eine dunkle Fläche fährt von der Kopfzeile nach unten über die Seite, wie
 * ein Rollo; danach steigen die Menüpunkte gestaffelt ein. Kontakt links,
 * Navigation rechts, damit sie auf derselben Seite steht wie der Burger, der
 * sie geöffnet hat.
 *
 * Bewusst kompakt gehalten: kleinere Schrift und engere Abstände als in
 * einer ersten Fassung, damit das Menü auf kleinen Bildschirmen ohne
 * Scrollen Platz hat.
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

  /** Gestaffelter Einstieg: 220ms Vorlauf für die Fläche, danach je 45ms Versatz. */
  const einstieg = (index: number) =>
    ({
      transitionDelay: ausgefahren ? `${220 + index * 45}ms` : '0ms',
    }) satisfies React.CSSProperties;

  const einstiegKlassen = cn(
    'transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none',
    ausgefahren ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
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
          'absolute inset-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none',
          ausgefahren ? 'translate-y-0' : '-translate-y-full'
        )}
      />

      <div className="relative flex h-full flex-col overflow-y-auto py-20">
        <div className="mx-auto my-auto grid w-full max-w-content grid-cols-1 gap-x-16 gap-y-8 px-6 text-white md:px-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-end lg:px-16">
          {/* Erste Spalte: Kontakt und Rechtliches. Sobald sie ab lg neben
              die Navigation springt, unten bündig mit ihr statt oben. */}
          <div className="order-2 text-right lg:order-1">
            <div style={einstieg(navigation.length)} className={einstiegKlassen}>
              {/* Kein eigener oberer Strich mehr — auf dem Handy steht direkt
                  darüber schon der untere Strich des letzten Navigationspunkts,
                  zwei Linien so kurz hintereinander sahen doppelt aus. */}
              <div className="pt-6">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Kontakt
                </p>
                <p className="mt-3 text-base">
                  <a
                    href={`tel:${firma.telefonHref}`}
                    onClick={onClose}
                    className="transition-colors hover:text-white/70"
                  >
                    {firma.telefon}
                  </a>
                </p>
                <p className="text-base">
                  <a
                    href={`mailto:${firma.email}`}
                    onClick={onClose}
                    className="transition-colors hover:text-white/70"
                  >
                    {firma.email}
                  </a>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {firma.strasse}
                  <br />
                  {firma.plz} {firma.ort}
                </p>
              </div>

              <ul className="mt-6 flex flex-col">
                {footerLegal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="inline-flex min-h-[32px] items-center text-xs uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Zweite Spalte: die Navigation. Drei Grössenstufen statt
              einheitlicher Zeilen: Projekte (stufe 1) am grössten, Atelier
              (stufe 2) mittel, der Rest (stufe 3) kleiner — gibt dem Menü
              eine klare Rangfolge statt einer Liste gleich wichtiger Punkte. */}
          <nav aria-label="Hauptnavigation" className="order-1 lg:order-2">
            <ul className="flex flex-col text-right">
              {navigation.map((item, idx) => (
                <li
                  key={item.href}
                  style={einstieg(idx)}
                  className={cn('border-b border-white/10', einstiegKlassen)}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'block font-medium leading-tight transition-colors hover:text-white/70',
                      item.stufe === 1 && 'py-3 text-[1.6rem] md:text-[2.8rem]',
                      item.stufe === 2 && 'py-3 text-[1.75rem] md:text-[3rem]',
                      (!item.stufe || item.stufe === 3) &&
                        'py-2 text-[1.125rem] md:text-[1.5rem]'
                    )}
                  >
                    {item.label}
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
