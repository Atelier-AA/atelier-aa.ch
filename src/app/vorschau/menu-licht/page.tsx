import type { Metadata } from 'next';
import { navigation } from '@/data/navigation';
import { firma, sozialeMedien } from '@/data/firma';

export const metadata: Metadata = { robots: { index: false, follow: false } };

/**
 * Vorschau: Menü-Variante "Lichtraum".
 * Maximale Zurückhaltung: sehr grosse, dünne Typografie unten linksbündig
 * im freien Raum, Kontakt nur als leise Randnotiz rechts unten. Ein
 * einzelner, langsam wandernder Lichtschein sorgt für Tiefe.
 */
export default function MenuVorschauLicht() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#f5f5f4]">
      <div className="relative z-10 bg-white px-6 py-3 text-center text-sm text-ink">
        Vorschau — Menü-Variante «Lichtraum»
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/4 -right-1/4 h-[60vh] w-[60vw] rounded-full motion-safe:animate-[lichtdrift_18s_ease-in-out_infinite_alternate]"
        style={{
          background: 'radial-gradient(circle, rgba(177,135,90,0.16), transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-6 py-6 text-xs uppercase tracking-widest text-white/55 md:px-10">
        <span>Atelier AA Architekten</span>
        <span className="text-lg text-white">✕</span>
      </div>

      <div className="relative z-10 flex min-h-[70vh] items-end px-6 pb-12 md:px-10 lg:px-16">
        <ul className="flex flex-col">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block text-[2.6rem] font-extralight leading-[1.02] tracking-tight text-white/90 transition-all hover:text-[#b1875a] hover:tracking-normal md:text-[5rem]"
              >
                {item.label}
              </a>
              {item.unterlink && (
                <a
                  href={item.unterlink.href}
                  className="mb-1 mt-0.5 block text-sm text-white/40 hover:text-[#b1875a]"
                >
                  {item.unterlink.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-6 bottom-6 z-10 text-right text-sm leading-relaxed text-white/55 md:right-10 lg:right-16">
        <a href={`tel:${firma.telefonHref}`} className="block border-b border-white/25 text-white/75 hover:border-[#b1875a] hover:text-[#b1875a]">
          {firma.telefon}
        </a>
        <a href={`mailto:${firma.email}`} className="mt-1 block border-b border-white/25 text-white/75 hover:border-[#b1875a] hover:text-[#b1875a]">
          {firma.email}
        </a>
        <div className="mt-2 text-white/40">
          {firma.strasse}
          <br />
          {firma.plz} {firma.ort}
        </div>
        <div className="mt-3 flex justify-end gap-3">
          <a href={sozialeMedien.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-[#b1875a]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href={sozialeMedien.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-[#b1875a]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes lichtdrift {
          from { transform: translate(0, 0); }
          to { transform: translate(-6%, 8%); }
        }
      `}</style>
    </div>
  );
}
