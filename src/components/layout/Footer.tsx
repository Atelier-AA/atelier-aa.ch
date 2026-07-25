import Link from 'next/link';
import Container from '@/components/ui/Container';
import { navigation, footerLegal } from '@/data/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80 mt-24">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-white mb-6">
              Kontakt
            </h3>
            <address className="not-italic text-sm leading-relaxed space-y-1">
              <p className="text-white">Atelier AA Architekten GmbH</p>
              <p>Bachstrasse 29</p>
              <p>8912 Obfelden</p>
              <p className="pt-3">
                <a href="tel:+41447700506" className="hover:text-white transition-colors">
                  +41 44 770 05 06
                </a>
              </p>
              <p>
                <a href="mailto:info@atelier-aa.ch" className="hover:text-white transition-colors">
                  info@atelier-aa.ch
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-white mb-6">
              Rechtliches
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLegal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/50">
          <p>Atelier AA Architekten © {year}. Alle Rechte vorbehalten.</p>
          <p>www.atelier-aa.ch</p>
        </div>
      </Container>
    </footer>
  );
}
