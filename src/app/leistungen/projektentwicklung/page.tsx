import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ProjektentwicklungAnimation from '@/components/leistungen/ProjektentwicklungAnimation';
import { projekte } from '@/data/projekte';
import { firma } from '@/data/firma';
import { breadcrumbSchema } from '@/lib/schema';
import { ortMitKanton } from '@/lib/utils';

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
  ['mfh-sihlaurain', 'wohnueberbauung-zelgi', 'mfh-letten', 'mfh-hochwarting'].includes(p.slug)
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
        { name: 'Leistungen', pfad: '/leistungen' },
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
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_600px] lg:gap-16">
          <div>
            <Link
              href="/leistungen"
              className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
            >
              ← Leistungen
            </Link>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Projektentwicklung
            </p>
            <h1 className="mb-8 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Von der Grundstücksidee zum{' '}
              <span className="font-semibold">bewilligungsfähigen Projekt.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-graphite md:text-xl">
              Wir entwickeln Grundstücke und Liegenschaften von der ersten
              Potenzialanalyse bis zur bewilligungsfähigen Projektidee — für
              Investoren, Grundstückeigentümer und institutionelle Bauherrschaften.
            </p>
            <div className="mt-10 flex items-baseline gap-4 border-t border-mist pt-8">
              <span className="text-6xl font-semibold leading-none text-ink">7</span>
              <span className="max-w-[22ch] text-graphite leading-snug">
                Schritte von der Grundstücksidee bis zur Übergabe.
              </span>
            </div>
            <div className="mt-8">
              <Button href="/kontakt" variant="primary">
                Potenzial besprechen
              </Button>
            </div>
          </div>

          {/* Canvas-Animation statt Foto: Parzelle, Grundriss, Gebäude
              (EG + Attika) und zuletzt ein Baum zeichnen sich selbst auf,
              als Endlosschleife — Code vom Kunden bereitgestellt. */}
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-mist">
            <ProjektentwicklungAnimation />
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

        {/* 4 schmale, hohe Kacheln (aspect-[3/4]) statt der quadratischen
            Standardkarten — gleiches Bildformat wie bei den Insights auf
            der Startseite. */}
        {beispiele.length > 0 && (
          <div className="mt-20 border-t border-mist pt-16 md:mt-28">
            <p className="mb-10 text-xs uppercase tracking-widest text-stone">Beispiele</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {beispiele.map((p, idx) => (
                <Link
                  key={p.slug}
                  href={`/referenzen/${p.slug}`}
                  className="group block min-w-0"
                  aria-label={`Zum Projekt ${p.title} in ${ortMitKanton(p)}`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                    <Image
                      src={p.thumbnail}
                      alt={`${p.title}, ${ortMitKanton(p)}`}
                      fill
                      priority={idx < 2}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="truncate text-lg font-medium leading-tight text-white">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.1em] text-white/70">
                        {ortMitKanton(p)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Trennstrich ausserhalb des Container, randvoll über die ganze
          Fensterbreite, wie auf der Startseite. Animiert zum Anruf statt
          FAQ (steht jetzt auf /haeufige-fragen). */}
      <div className="mt-20 border-t border-mist pt-16 pb-4 md:mt-28">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
            <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
              Haben Sie ein <span className="font-semibold">Grundstück</span> im Blick?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Rufen Sie uns an und schildern Sie uns Ihr Vorhaben — wir sagen Ihnen
              offen, ob und wie sich eine Entwicklung lohnt.
            </p>
            <Button href={`tel:${firma.telefonHref}`} variant="primary">
              {firma.telefon} anrufen
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
