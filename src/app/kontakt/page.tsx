import type { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';
import { kontaktFragen } from '@/data/insights';
import FragenAntworten from '@/components/insights/FragenAntworten';
import KontaktKarte from '@/components/kontakt/KontaktKarte';
import KontaktFormular from '@/components/kontakt/KontaktFormular';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Atelier AA Architekten GmbH, Bachstrasse 39, 8912 Obfelden, Kanton Zürich. Telefon +41 44 770 05 06, info@atelier-aa.ch. Erstgespräch für Neubau, Umbau und Sanierung.',
};

export default function KontaktPage() {
  // FAQPage-Markup zu den sichtbaren Fragen weiter unten.
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
    <div className="pt-24 md:pt-28 pb-20 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container className="mt-16 md:mt-24">
        {/* Links Bild, rechts Text — wie auf stage.atelier-aa.ch/kontakt/. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square w-full bg-mist">
            <Image
              src="/images/kontakt/kontakt-buero.jpg"
              alt="Atelier AA Architekten Büro an der Bachstrasse"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="mt-10 lg:mt-0 lg:pl-8">
            <p className="text-xs uppercase tracking-widest text-stone mb-4">
              Kontakt
            </p>
            <h1 className="text-4xl font-normal leading-tight text-ink mb-10 max-w-lg md:text-5xl lg:text-6xl">
              Der erste <span className="font-semibold">Schritt</span> ist ein{' '}
              <span className="font-semibold">Gespräch.</span>
            </h1>
            <p className="text-lg text-graphite leading-relaxed max-w-md">
              Wir stehen für einen offenen, direkten Austausch und freuen uns über
              neue Projekte, spannende Aufgaben und anspruchsvolle Fragestellungen.
              Schreiben Sie uns oder rufen Sie an – wir melden uns verlässlich zurück.
            </p>

            {/* Adresse, Telefon und E-Mail als ein durchlaufender Block statt
                einzeln beschrifteter Kästen — wie auf stage.atelier-aa.ch/kontakt/. */}
            <address className="not-italic text-lg text-ink leading-relaxed mt-8 max-w-md">
              {firma.name}
              <br />
              {firma.strasse}
              <br />
              {firma.plz} {firma.ort}
            </address>
            <a
              href={`tel:${firma.telefonHref}`}
              className="mt-8 block text-4xl font-semibold leading-none tracking-tight text-ink transition-opacity hover:opacity-70 md:text-5xl"
            >
              {firma.telefon}
            </a>
            <a
              href={`mailto:${firma.email}`}
              className="mt-4 inline-block text-lg font-medium text-ink transition-colors hover:text-graphite"
            >
              {firma.email}
            </a>
          </div>
        </div>

        {/* Karte und Kontaktformular nebeneinander statt einer vollflächigen
            Karte — die Karte lädt erst nach Zustimmung zur Google-Maps-
            Einbettung (siehe KontaktKarte). */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 md:mt-20">
          <KontaktKarte />
          <KontaktFormular />
        </div>

        <div className="mt-16 max-w-3xl border-t border-mist pt-16 md:mt-20">
          <FragenAntworten fragen={kontaktFragen} titel="Häufige Fragen" />
        </div>
      </Container>
    </div>
  );
}
