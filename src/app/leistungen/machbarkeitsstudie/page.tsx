import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { studien } from '@/data/studien';
import { firma } from '@/data/firma';
import { breadcrumbSchema } from '@/lib/schema';
import { ortMitKanton } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Machbarkeitsstudie',
  description:
    'Machbarkeitsstudie von Atelier AA Architekten GmbH: Zonenkonformität, Ausnützung, Volumenstudie und Kostenrahmen — die Entscheidungsgrundlage, bevor Sie in ein Bauvorhaben investieren.',
  alternates: { canonical: '/leistungen/machbarkeitsstudie' },
};

const enthalten = [
  'Zonenkonformität und Bauordnung',
  'Ausnützungsziffer und Gebäudevolumen',
  'Grenz- und Gebäudeabstände',
  'Erschliessung und Parkierung',
  'Mögliche Wohn-/Nutzfläche',
  'Ein bis drei bauliche Varianten',
  'Grober Kostenrahmen je Variante',
  'Einschätzung zu Bewilligungsrisiken',
];

const schritte = [
  {
    nummer: '01',
    titel: 'Bau- und Zonenordnung prüfen',
    text: 'Wir klären Zone, Ausnützung, Gebäude- und Grenzabstände sowie allfällige Sonderbauvorschriften der Gemeinde.',
  },
  {
    nummer: '02',
    titel: 'Volumenstudie erarbeiten',
    text: 'Auf dieser Grundlage entwerfen wir ein bis drei mögliche Bauvolumen — vom Anbau über die Aufstockung bis zum Ersatzneubau.',
  },
  {
    nummer: '03',
    titel: 'Kostenrahmen berechnen',
    text: 'Zu jeder Variante liefern wir eine grobe Kostenschätzung, damit sich Aufwand und Nutzen vergleichen lassen.',
  },
  {
    nummer: '04',
    titel: 'Entscheidungsgrundlage übergeben',
    text: 'Sie erhalten einen kompakten Bericht mit Plänen, Kennzahlen und unserer Einschätzung — die Grundlage für den nächsten Schritt.',
  },
];

export default function MachbarkeitsstudiePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.atelier-aa.ch/leistungen/machbarkeitsstudie#service',
        name: 'Machbarkeitsstudie',
        provider: { '@id': 'https://www.atelier-aa.ch/#organisation' },
        areaServed: ['Zürich', 'Aargau', 'Zug'],
        description:
          'Zonenkonformität, Ausnützung, Volumenstudie und Kostenrahmen — die Entscheidungsgrundlage, bevor Sie in ein Bauvorhaben investieren.',
      },
      breadcrumbSchema([
        { name: 'Startseite', pfad: '/' },
        { name: 'Leistungen', pfad: '/leistungen' },
        { name: 'Machbarkeitsstudie', pfad: '/leistungen/machbarkeitsstudie' },
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_460px] lg:gap-16">
          <div>
            <Link
              href="/leistungen"
              className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
            >
              ← Leistungen
            </Link>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Machbarkeitsstudie
            </p>
            <h1 className="mb-8 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Was auf Ihrem <span className="font-semibold">Grundstück</span> möglich ist.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-graphite md:text-xl">
              Sie besitzen ein Grundstück oder eine Liegenschaft und möchten wissen, ob
              sich Aufstockung, Anbau oder Ersatzneubau lohnt? Die Machbarkeitsstudie
              liefert die Antwort — mit Volumenstudie und Kostenrahmen, bevor Sie
              investieren.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="primary">
                Machbarkeit klären
              </Button>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden bg-mist">
            <Image
              src="/images/leistungen/machbarkeitsstudie-hero.jpg"
              alt="Katasterplan eines Grundstücks als Grundlage der Machbarkeitsstudie"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1100px) 100vw, 460px"
            />
          </div>
        </div>

        <div className="mt-14 border-t border-mist pt-11 md:mt-20">
          <p className="mb-8 text-xs uppercase tracking-widest text-stone">
            Was die Studie enthält
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {enthalten.map((e) => (
              <li key={e} className="flex items-start gap-3 text-graphite">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 border-t border-mist pt-11 md:mt-20">
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Ablauf</p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {schritte.map((s) => (
              <div key={s.nummer}>
                <p className="mb-3 text-sm text-stone">{s.nummer}</p>
                <h2 className="mb-2 text-xl font-medium text-ink">{s.titel}</h2>
                <p className="text-graphite leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 schmale, hohe Kacheln (aspect-[3/4]), gleiches Format wie bei
            Projektentwicklung und den Insights auf der Startseite. Bewusst
            ohne Link zur Detailseite (wie StudieCard) — Studien sollen nicht
            von der Übersicht aus nebeneinander vergleichbar sein. */}
        <div className="mt-14 border-t border-mist pt-11 md:mt-20">
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Beispiele</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {studien
              .filter((s) =>
                ['obfelden', 'birmensdorf', 'muemliswil', 'schinznach-bad'].includes(s.slug)
              )
              .map((s, idx) => {
                const bild = s.luftbild ?? s.katasterplan ?? s.projektbild;
                const titel = s.strasse ? `${s.ort}, ${s.strasse}` : s.ort;
                return (
                  <div key={s.slug} className="group block min-w-0">
                    <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                      {bild && (
                        <Image
                          src={bild}
                          alt={`${s.kategorie} in ${ortMitKanton({ ort: s.ort, kanton: s.kanton })}`}
                          fill
                          priority={idx < 2}
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                          sizes="(max-width: 600px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="mb-1 text-xs uppercase tracking-[0.1em] text-white/80">
                          {s.kategorie}
                        </p>
                        <p className="truncate text-lg font-medium leading-tight text-white">
                          {titel}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>

      {/* Trennstrich ausserhalb des Container, randvoll über die ganze
          Fensterbreite, wie auf der Startseite. Animiert zum Anruf statt
          FAQ (steht jetzt auf /haeufige-fragen). */}
      <div className="mt-20 border-t border-mist pt-16 pb-4 md:mt-28">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
            <h2 className="mb-6 text-4xl font-normal leading-tight text-ink md:text-5xl">
              Fragen Sie sich, ob mehr <span className="font-semibold">möglich wäre?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Rufen Sie uns an und schildern Sie uns Ihr Grundstück — wir sagen Ihnen
              im Gespräch offen, was eine Machbarkeitsstudie zeigen könnte.
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
