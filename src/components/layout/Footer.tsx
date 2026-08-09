import Link from 'next/link';
import Container from '@/components/ui/Container';
import Logo from './Logo';
import { navigation, footerZusatz, footerLegal } from '@/data/navigation';
import { firma } from '@/data/firma';
import { alleKantone } from '@/lib/regionen';
import CookieSettingsLink from '@/components/cookies/CookieSettingsLink';

/**
 * Fusszeile auf einer Ebene: Wortmarke und Kernsatz stehen zusammen mit
 * Kontakt und Navigation in einem einzigen Block, statt in gestapelten,
 * durch Trennlinien geteilten Zonen. Nur die Rechtlich-Zeile am Ende ist
 * durch eine feine Linie abgesetzt.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const kantone = alleKantone();
  const spaltenTitel = 'mb-6 text-xs uppercase tracking-widest text-white/50';
  const verweis =
    'inline-block py-1 text-sm text-white/75 transition-colors duration-300 hover:text-white';

  return (
    <footer className="mt-24 bg-ink text-white">
      <Container className="py-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16">
          <div className="max-w-md">
            <div className="mb-6 h-[35px] text-white md:h-[40px]">
              <Logo />
            </div>
            <p className="text-2xl md:text-3xl font-light leading-tight">
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
              {footerZusatz.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={verweis}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={spaltenTitel}>Projekte nach Kanton</h3>
            <ul>
              {kantone.map((k) => (
                <li key={k.slug}>
                  <Link href={`/regionen/${k.slug}`} className={verweis}>
                    Kanton {k.name}
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
                  className="transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink className="transition-colors duration-300 hover:text-white" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
