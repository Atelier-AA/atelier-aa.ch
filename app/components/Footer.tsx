import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray text-white">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Elindo Immobilien"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
              <span className="text-xl font-light">Elindo Immobilien</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr Partner für hochwertige Immobilien und Projektentwicklungen in der Schweiz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-elindo-light transition">Startseite</Link></li>
              <li><Link href="/kaufen-mieten" className="hover:text-elindo-light transition">Kaufen & Mieten</Link></li>
              <li><Link href="/leistungen" className="hover:text-elindo-light transition">Leistungen</Link></li>
              <li><Link href="/ueber-uns" className="hover:text-elindo-light transition">Über uns</Link></li>
              <li><Link href="/kontakt" className="hover:text-elindo-light transition">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Immobilienverkauf</li>
              <li>Immobilienkauf</li>
              <li>Immobilienbewertung</li>
              <li>Projektentwicklung</li>
              <li>Beratung</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wide mb-4">
              Kontakt
            </h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>Elindo Immobilien</p>
              <p>Zürich, Schweiz</p>
              <p>
                <a href="mailto:info@elindo-immobilien.ch" className="hover:text-elindo-light">
                  info@elindo-immobilien.ch
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} Elindo Immobilien. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-elindo-light">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-elindo-light">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
