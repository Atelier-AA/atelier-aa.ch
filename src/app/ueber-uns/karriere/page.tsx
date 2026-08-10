import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { firma } from '@/data/firma';

export const metadata: Metadata = {
  title: 'Karriere',
  description:
    'Offene Position bei Atelier AA Architekten GmbH in Obfelden: Architekt/in für Entwurf, Projektentwicklung und Bauleitung in der ganzen Schweiz.',
  alternates: { canonical: '/ueber-uns/karriere' },
};

/**
 * Platzhalter-Struktur für die Karriereseite — Aufbau (Überschrift,
 * Einleitung, Anforderungen, Bewerbungshinweis) steht bereits; der
 * endgültige Text zum gesuchten Profil folgt separat vom Büro und ersetzt
 * dann die Absätze und die Liste unten.
 */
export default function KarrierePage() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Karriere</p>
          <h1 className="mb-8 text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl">
            Wir suchen <span className="font-semibold">Architekt:innen</span>, die mit
            uns <span className="font-semibold">gestalten</span> wollen.
          </h1>
          <p className="text-lg leading-relaxed text-graphite">
            Wir verstärken unser Team in Obfelden und suchen eine Persönlichkeit, die
            Entwurf, Projektentwicklung oder Bauleitung mit Sorgfalt und Eigeninitiative
            vorantreibt — für Projekte in der ganzen Schweiz.
          </p>

          <div className="mt-14 border-t border-mist pt-10">
            <h2 className="mb-5 text-xs uppercase tracking-widest text-stone">
              Was du mitbringst
            </h2>
            <ul className="space-y-3 text-ink">
              <li>Abgeschlossenes Studium oder Ausbildung als Architekt:in</li>
              <li>Erfahrung in Entwurf, Baueingabe oder Bauleitung</li>
              <li>Sicherer Umgang mit gängiger Planungssoftware</li>
              <li>Selbstständige, sorgfältige Arbeitsweise im Team</li>
            </ul>
          </div>

          <div className="mt-14 border-t border-mist pt-10">
            <h2 className="mb-5 text-xs uppercase tracking-widest text-stone">
              So bewirbst du dich
            </h2>
            <p className="text-graphite leading-relaxed">
              Schick uns deine Bewerbung mit den üblichen Unterlagen an{' '}
              <Link
                href={`mailto:${firma.email}`}
                className="text-ink underline underline-offset-4 transition-colors hover:text-graphite"
              >
                {firma.email}
              </Link>
              . Wir melden uns verlässlich zurück.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="text">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
