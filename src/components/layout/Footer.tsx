import Link from 'next/link';
import Container from '@/components/ui/Container';
import Logo from './Logo';
import { footerAtelier, footerArbeit, footerLegal } from '@/data/navigation';
import { firma, sozialeMedien } from '@/data/firma';
import { alleKantone } from '@/lib/regionen';
import CookieSettingsLink from '@/components/cookies/CookieSettingsLink';

/**
 * Fusszeile auf einer Ebene: Wortmarke und Kernsatz stehen zusammen mit
 * Kontakt und den zwei Themenspalten in einem einzigen Block, statt in
 * gestapelten, durch Trennlinien geteilten Zonen. Nur die Rechtlich-Zeile
 * am Ende ist durch eine feine Linie abgesetzt.
 *
 * Bewusst ohne eigenen oberen Aussenabstand: Jede Seite bringt ihren
 * Abstand zum Seitenende schon selbst mit (üblich: `pb-20 md:pb-28`).
 * Ein zusätzlicher Abstand hier war unsichtbar auf weissem Grund, erzeugte
 * aber eine störende weisse Lücke, sobald der letzte Seitenabschnitt eine
 * eigene Hintergrundfarbe hatte (z. B. die Karriere-Box auf /ueber-uns).
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const kantone = alleKantone();
  const spaltenTitel = 'mb-6 text-xs uppercase tracking-widest text-white/50';
  const verweis =
    'inline-block py-1 text-sm text-white/75 transition-colors duration-300 hover:text-white rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  return (
    <footer className="bg-ink text-white">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-12">
          <div className="max-w-md">
            <div className="mb-6 h-[35px] text-white md:h-[40px]">
              <Logo />
            </div>
            {/* Vom Kunden ausdrücklich zurückgeholt. Der Gedanke steht damit
                zweimal auf der Startseite — im Hero und hier. Bewusst in Kauf
                genommen: Ganz unten liest sich ein Satz anders als im Hero. */}
            <p className="text-2xl md:text-h2 font-light leading-tight">
              Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.
            </p>
          </div>

          <div>
            <h3 className={spaltenTitel}>Kontakt</h3>
            <address className="not-italic text-sm leading-relaxed space-y-1 text-white/75">
              <p className="text-white">{firma.name}</p>
              <p>{firma.strasse}</p>
              <p>
                {firma.plz} {firma.ort}
              </p>
            </address>
            <p className="mt-4 space-y-1 text-sm">
              <a
                href={`tel:${firma.telefonHref}`}
                className="block rounded-sm text-white transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {firma.telefon}
              </a>{' '}
              <a
                href={`mailto:${firma.email}`}
                className="block rounded-sm text-white transition-opacity duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {firma.email}
              </a>
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={sozialeMedien.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atelier AA Architekten auf LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-300 hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={sozialeMedien.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Atelier AA Architekten auf Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-300 hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="mt-6 text-xs text-white/50">
              Tätigkeitsgebiet:{' '}
              {kantone.map((k, i) => (
                <span key={k.slug}>
                  <Link
                    href={`/regionen/${k.slug}`}
                    className="rounded-sm underline underline-offset-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {k.name}
                  </Link>
                  {i < kantone.length - 1 && ' · '}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h3 className={spaltenTitel}>Atelier</h3>
            <ul>
              {footerAtelier.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={verweis}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={spaltenTitel}>Arbeit</h3>
            <ul>
              {footerArbeit.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={verweis}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rechtliches */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Atelier AA Architekten © {year}. Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink className="rounded-sm transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
