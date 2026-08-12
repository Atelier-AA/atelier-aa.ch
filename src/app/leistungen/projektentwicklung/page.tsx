import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektGrid from '@/components/projekte/ProjektGrid';
import { projekte } from '@/data/projekte';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Projektentwicklung',
  description:
    'Projektentwicklung von Atelier AA Architekten GmbH: von der Grundstücksidee über Potenzialanalyse und Wirtschaftlichkeit bis zum bewilligungsfähigen Projekt — für Investoren und Grundstückeigentümer in Zürich, Aargau und Zug.',
  alternates: { canonical: '/leistungen/projektentwicklung' },
};

const schritte = [
  {
    nummer: '01',
    titel: 'Grundstück analysieren',
    text: 'Lage, Zone, Ausnützung und Erschliessung — die Ausgangslage, bevor über Varianten gesprochen wird.',
  },
  {
    nummer: '02',
    titel: 'Potenzial ermitteln',
    text: 'Wir zeigen, welche Nutzung und welches Volumen auf dem Grundstück realistisch sind.',
  },
  {
    nummer: '03',
    titel: 'Varianten entwickeln',
    text: 'Mehrere städtebauliche und architektonische Ansätze, vergleichbar in Aufwand und Ertrag.',
  },
  {
    nummer: '04',
    titel: 'Wirtschaftlichkeit prüfen',
    text: 'Erstellungskosten, Mietzinsniveau und Wohnungsmix rechnen wir gegeneinander, nicht erst am Ende.',
  },
  {
    nummer: '05',
    titel: 'Projekt planen',
    text: 'Die gewählte Variante wird zum bewilligungsfähigen Projekt ausgearbeitet.',
  },
  {
    nummer: '06',
    titel: 'Bewilligung erwirken',
    text: 'Wir begleiten das Baugesuch durch das Verfahren der zuständigen Gemeinde.',
  },
  {
    nummer: '07',
    titel: 'Realisierung begleiten',
    text: 'Auf Wunsch als Generalplaner: ein Ansprechpartner von der Ausschreibung bis zur Übergabe.',
  },
];

const beispiele = projekte.filter((p) =>
  ['mfh-sihlaurain', 'wohnueberbauung-zelgi'].includes(p.slug)
);

export default function ProjektentwicklungPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.atelier-aa.ch/leistungen/projektentwicklung#service',
        name: 'Projektentwicklung',
        provider: { '@id': 'https://www.atelier-aa.ch/#organisation' },
        areaServed: ['Zürich', 'Aargau', 'Zug'],
        description:
          'Von der Grundstücksidee über Potenzialanalyse und Wirtschaftlichkeit bis zum bewilligungsfähigen Projekt.',
      },
      breadcrumbSchema([
        { name: 'Startseite', pfad: '/' },
        { name: 'Kompetenzen', pfad: '/leistungen' },
        { name: 'Projektentwicklung', pfad: '/leistungen/projektentwicklung' },
      ]),
    ],
  };

  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container>
        <div className="max-w-2xl">
          <Link
            href="/leistungen"
            className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
          >
            ← Kompetenzen
          </Link>
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Projektentwicklung
          </p>
          <h1 className="mb-8 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Von der Grundstücksidee zum <span className="font-semibold">bewilligungsfähigen Projekt.</span>
          </h1>
          <p className="text-lg leading-relaxed text-graphite md:text-xl">
            Wir entwickeln Grundstücke und Liegenschaften von der ersten
            Potenzialanalyse bis zur bewilligungsfähigen Projektidee — für
            Investoren, Grundstückeigentümer und institutionelle Bauherrschaften.
          </p>
          <div className="mt-8">
            <Button href="/kontakt" variant="primary">
              Potenzial besprechen
            </Button>
          </div>
        </div>

        <div className="mt-20 border-t border-mist pt-16 md:mt-28">
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Ablauf</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {schritte.map((s) => (
              <div key={s.nummer}>
                <p className="mb-3 text-sm text-stone">{s.nummer}</p>
                <h2 className="mb-2 text-xl font-medium text-ink">{s.titel}</h2>
                <p className="text-graphite leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {beispiele.length > 0 && (
          <div className="mt-20 border-t border-mist pt-16 md:mt-28">
            <p className="mb-10 text-xs uppercase tracking-widest text-stone">Beispiele</p>
            <ProjektGrid projekte={beispiele} />
          </div>
        )}
      </Container>
    </div>
  );
}
