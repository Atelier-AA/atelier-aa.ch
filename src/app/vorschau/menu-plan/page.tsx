import type { Metadata } from 'next';
import { navigation, footerLegal } from '@/data/navigation';
import { firma, sozialeMedien } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü-Variante "Planvorlage".
 * Jeder Menüpunkt wie eine Massangabe auf einem technischen Plan
 * beschriftet, die Kontaktdaten in einem Titelblock wie unten rechts auf
 * einem Architekturplan. Rasterpapier im Hintergrund, gedämpftes Messing
 * als einzige Akzentfarbe.
 */
export default function MenuVorschauPlan() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 48px), #0c1210',
      }}
    >
      <div className="bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau — Menü-Variante «Planvorlage»
      </div>

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 font-mono text-xs uppercase tracking-widest text-white/55 md:px-10">
        <span>Atelier AA — Architekten</span>
        <span className="text-lg">✕</span>
      </div>

      <div className="grid gap-10 px-6 py-10 md:grid-cols-[1fr_minmax(260px,320px)] md:px-10 lg:gap-16 lg:px-16">
        <nav aria-label="Vorschau-Navigation">
          <ul className="flex flex-col justify-center">
            {navigation.map((item, idx) => (
              <li key={item.href} className="py-4">
                <div className="mb-1 flex items-center gap-2 font-mono text-[0.68rem] tracking-widest text-[#b1875a]/85">
                  <span>├</span>
                  <span>
                    {String(idx + 1).padStart(2, '0')} / {String(navigation.length).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-[#b1875a]/35" />
                </div>
                <a
                  href={item.href}
                  className="block text-[2.1rem] font-light leading-tight tracking-tight transition-colors hover:text-[#b1875a] md:text-[2.8rem]"
                >
                  {item.label}
                </a>
                {item.unterlink && (
                  <a
                    href={item.unterlink.href}
                    className="mt-1 block font-mono text-sm text-white/45 transition-colors hover:text-[#b1875a]"
                  >
                    ↳ {item.unterlink.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Titelblock — wie das Feld unten rechts auf einem Architekturplan. */}
        <div className="self-center border border-white/20">
          <div className="grid grid-cols-[88px_1fr] border-b border-white/15">
            <div className="border-r border-white/15 px-2 py-2 font-mono text-[0.62rem] uppercase tracking-widest text-[#b1875a]">
              Büro
            </div>
            <div className="px-3 py-2 text-sm">{firma.name}</div>
          </div>
          <div className="grid grid-cols-[88px_1fr] border-b border-white/15">
            <div className="border-r border-white/15 px-2 py-2 font-mono text-[0.62rem] uppercase tracking-widest text-[#b1875a]">
              Adresse
            </div>
            <div className="px-3 py-2 text-sm">
              {firma.strasse}
              <br />
              {firma.plz} {firma.ort}
            </div>
          </div>
          <div className="grid grid-cols-[88px_1fr] border-b border-white/15">
            <div className="border-r border-white/15 px-2 py-2 font-mono text-[0.62rem] uppercase tracking-widest text-[#b1875a]">
              Telefon
            </div>
            <div className="px-3 py-2 text-sm">
              <a href={`tel:${firma.telefonHref}`} className="border-b border-white/30 hover:border-[#b1875a] hover:text-[#b1875a]">
                {firma.telefon}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[88px_1fr] border-b border-white/15">
            <div className="border-r border-white/15 px-2 py-2 font-mono text-[0.62rem] uppercase tracking-widest text-[#b1875a]">
              E-Mail
            </div>
            <div className="px-3 py-2 text-sm">
              <a href={`mailto:${firma.email}`} className="border-b border-white/30 hover:border-[#b1875a] hover:text-[#b1875a]">
                {firma.email}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[88px_1fr]">
            <div className="border-r border-white/15 px-2 py-2 font-mono text-[0.62rem] uppercase tracking-widest text-[#b1875a]">
              Social
            </div>
            <div className="flex gap-2 px-3 py-2">
              <a
                href={sozialeMedien.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center border border-white/25 text-white/70 hover:border-[#b1875a] hover:text-[#b1875a]"
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
                className="flex h-8 w-8 items-center justify-center border border-white/25 text-white/70 hover:border-[#b1875a] hover:text-[#b1875a]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 font-mono text-[0.65rem] uppercase tracking-widest text-white/40 md:px-10">
        {footerLegal.map((item) => item.label).join(' · ')}
      </div>
    </div>
  );
}
