import Container from './Container';
import Button from './Button';

interface WeiterLinkProps {
  text: string;
  href: string;
  linkText: string;
}

/**
 * Dezenter Verweis am Seitenende zur nächsten thematisch sinnvollen Seite —
 * ein kurzer Satz plus Pfeil-Link, statt eines schweren, dunkel hinterlegten
 * Blocks. Führt Besucher konsequent durch die Seite: Startseite → Projekte,
 * Projekte → Über uns, Über uns → Leistungen.
 */
export default function WeiterLink({ text, href, linkText }: WeiterLinkProps) {
  return (
    <section className="border-t border-mist py-14 md:py-16">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-graphite">{text}</p>
          <Button href={href} variant="text" className="shrink-0">
            {linkText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
