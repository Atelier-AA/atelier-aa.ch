import Link from 'next/link';
import Container from '@/components/ui/Container';
import Logo from './Logo';
import { navigation, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';

/**
 * Fusszeile, im Aufbau an elindo.ch angeglichen: ein Abschluss-Aufruf über
 * die volle Breite (Wortmarke, Kernsatz, Kontakt-Button), darunter ein
 * schmaleres Verzeichnis mit feinen Linien statt Kacheln, zuletzt eine
 * schmale Rechtlich-Zeile. Ohne die dortigen "Bewertung"- und
 * "Leistungen"-Spalten, da es dafür bei Atelier AA keine Entsprechung gibt.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const spaltenTitel = 'mb-6 text-xs uppercase tracking-widest text-white/50';
  const verweis =
    'inline-block py-1 text-sm text-white/75 transition-colors duration-300 hover:text-white';

  return (
    <footer className="mt-24 bg-ink text-white">
      {/* Abschluss-Aufruf */}
      <Container className="border-b border-white/10 py-16 md:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-8 h-[35px] md:h-[40px] text-white">
              <Logo />
            </div>
            <p className="text-2xl md:text-3xl font-light leading-tight">
              Wir entwerfen nicht für den Moment. Wir schaffen Orte mit Bestand.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="inline-flex shrink-0 items-center justify-center border border-white bg-white px-8 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-colors duration-300 hover:bg-transparent hover:text-white"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
      </Container>

      {/* Verzeichnis */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
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
                className="block text-white transition-opacity duration-300 hover:opacity-70"
              >
                {firma.telefon}
              </a>
              <a
                href={`mailto:${firma.email}`}
                className="block text-white transition-opacity duration-300 hover:opacity-70"
              >
                {firma.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className={spaltenTitel}>Navigation</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={verweis}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Rechtliches */}
      <Container className="border-t border-white/10 py-8">
        <div className="flex flex-col gap-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Atelier AA Architekten © {year}. Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
