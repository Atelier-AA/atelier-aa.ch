import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Atelier AA Architekten. Bachstrasse 29, 8912 Obfelden. Telefon +41 44 770 05 06.',
};

export default function KontaktPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-mist">
        <Image
          src="/images/kontakt/kontakt-hero.jpg"
          alt="Atelier AA Architekten Büro"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <Container className="mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Kontakt
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-10">
              Der erste Schritt ist ein Gespräch.
            </h1>
            <p className="text-lg text-graphite leading-relaxed">
              Ob konkretes Bauvorhaben, eine erste Idee oder eine Frage zu unserer
              Arbeit – wir freuen uns über Ihre Kontaktaufnahme. Vereinbaren Sie
              gerne ein unverbindliches Erstgespräch.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                Adresse
              </p>
              <address className="not-italic text-lg text-ink leading-relaxed">
                Atelier AA Architekten GmbH<br />
                Bachstrasse 29<br />
                8912 Obfelden
              </address>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                Telefon
              </p>
              <p className="text-lg text-ink">
                <a href="tel:+41447700506" className="hover:text-graphite transition-colors">
                  +41 44 770 05 06
                </a>
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                E-Mail
              </p>
              <p className="text-lg text-ink">
                <a
                  href="mailto:info@atelier-aa.ch"
                  className="hover:text-graphite transition-colors"
                >
                  info@atelier-aa.ch
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
