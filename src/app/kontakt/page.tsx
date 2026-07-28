import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';
import { kontaktFragen } from '@/data/insights';
import FragenAntworten from '@/components/insights/FragenAntworten';
import KontaktFormular from '@/components/kontakt/KontaktFormular';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Atelier AA Architekten GmbH, Bachstrasse 39, 8912 Obfelden, Kanton Zürich. Telefon +41 44 770 05 06, info@atelier-aa.ch. Erstgespräch für Neubau, Umbau und Sanierung.',
};

export default function KontaktPage() {
  // FAQPage-Markup zu den sichtbaren Fragen weiter unten. Ergänzt die
  // Organisationsdaten im Layout um konkrete Antworten zu Region, Leistungen
  // und Ablauf — die Fragen, mit denen Interessenten tatsächlich suchen.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.atelier-aa.ch/kontakt#faq',
    inLanguage: 'de-CH',
    mainEntity: kontaktFragen.map((f) => ({
      '@type': 'Question',
      name: f.frage,
      acceptedAnswer: { '@type': 'Answer', text: f.antwort },
    })),
  };

  return (
    <div className="pt-24 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-tight mb-10">
              Der erste Schritt ist ein Gespräch.
            </h1>
            {/* Text wörtlich von der alten Kontaktseite (Post 88). */}
            <p className="text-lg text-graphite leading-relaxed">
              Wir stehen für einen offenen, direkten Austausch und freuen uns über
              neue Projekte, spannende Aufgaben und anspruchsvolle Fragestellungen.
              Schreiben Sie uns oder rufen Sie an – wir melden uns verlässlich zurück.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                Adresse
              </p>
              <address className="not-italic text-lg text-ink leading-relaxed">
                {firma.name}
                <br />
                {firma.strasse}
                <br />
                {firma.plz} {firma.ort}
              </address>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                Telefon
              </p>
              <p className="text-lg text-ink">
                <a
                  href={`tel:${firma.telefonHref}`}
                  className="hover:text-graphite transition-colors"
                >
                  {firma.telefon}
                </a>
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-3">
                E-Mail
              </p>
              <p className="text-lg text-ink">
                <a
                  href={`mailto:${firma.email}`}
                  className="hover:text-graphite transition-colors"
                >
                  {firma.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <section className="mt-24 max-w-3xl border-t border-mist pt-16 md:mt-32">
          <h2 className="mb-4 text-2xl md:text-3xl font-medium text-ink">
            Schreiben Sie uns
          </h2>
          <p className="mb-10 text-graphite leading-relaxed">
            Je konkreter Ihre Angaben, desto genauer können wir antworten. Ort, Art
            des Vorhabens und Zeithorizont helfen uns am meisten.
          </p>
          <KontaktFormular />
        </section>

        <div className="max-w-3xl">
          <FragenAntworten fragen={kontaktFragen} titel="Häufige Fragen" />
        </div>
      </Container>
    </div>
  );
}
