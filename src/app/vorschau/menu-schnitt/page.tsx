import type { Metadata } from 'next';
import { navigation, footerLegal } from '@/data/navigation';
import { firma, sozialeMedien } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/** Geschossbezeichnung je Menüpunkt, von oben (Dachgeschoss) nach unten. */
const geschosse = ['4.OG', '3.OG', '2.OG', '1.OG', '1.OG', 'EG'];

/**
 * Vorschau: Menü-Variante "Schnitt".
 * Die Navigation liest sich wie ein Gebäudeschnitt: jeder Punkt ein
 * Geschoss, "Kontakt" liegt folgerichtig im Erdgeschoss beim Eingang.
 * Helles Papier statt Dunkelfläche, Terrakotta als Materialfarbe.
 */
export default function MenuVorschauSchnitt() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1c1a16]">
      <div className="bg-ink px-6 py-3 text-center text-sm text-white">
        Vorschau — Menü-Variante «Schnitt»
      </div>

      <div className="flex items-center justify-between px-6 pt-8 pb-4 md:px-10">
        <span className="text-sm font-semibold tracking-wide">ATELIER AA</span>
        <span className="text-lg">✕</span>
      </div>

      <div className="flex flex-col px-6 md:px-10 lg:px-16">
        {navigation.map((item, idx) => (
          <div
            key={item.href}
            className="grid grid-cols-[76px_1fr] items-center gap-6 border-t border-black/10 py-6 last:border-b"
          >
            <span className="font-mono text-xs tracking-wide text-[#b5613f]">{geschosse[idx]}</span>
            <div>
              <a
                href={item.href}
                className="inline-block text-[2.2rem] font-light leading-none tracking-tight transition-transform hover:translate-x-1.5 hover:text-[#b5613f] md:text-[3.2rem]"
              >
                {item.label}
              </a>
              {item.unterlink && (
                <a href={item.unterlink.href} className="mt-1 block text-base text-black/50 hover:text-[#b5613f]">
                  {item.unterlink.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-[#1c1a16] px-6 py-5 text-sm text-[#f5f0e8] md:px-10 lg:px-16">
        <div>
          <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-widest text-[#b5613f]">
            Eingang
          </span>
          <a href={`tel:${firma.telefonHref}`} className="underline decoration-white/40 hover:decoration-white">
            {firma.telefon}
          </a>{' '}
          ·{' '}
          <a href={`mailto:${firma.email}`} className="underline decoration-white/40 hover:decoration-white">
            {firma.email}
          </a>
          <div className="mt-1 text-[#f5f0e8]/60">
            {firma.strasse}, {firma.plz} {firma.ort}
          </div>
        </div>
        <div className="flex gap-2">
          <a
            href={sozialeMedien.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center border border-white/30 hover:border-[#b5613f] hover:text-[#b5613f]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={sozialeMedien.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-8 w-8 items-center justify-center border border-white/30 hover:border-[#b5613f] hover:text-[#b5613f]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="px-6 py-4 text-xs uppercase tracking-widest text-black/40 md:px-10 lg:px-16">
        {footerLegal.map((item) => item.label).join(' · ')}
      </div>
    </div>
  );
}
