import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { studien } from '@/data/studien';
import StudienGrid from '@/components/studien/StudienGrid';
import { firma } from '@/data/firma';
import { breadcrumbSchema } from '@/lib/schema';
import { ortMitKanton } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Machbarkeitsstudie',
  description:
    'Machbarkeitsstudie von Atelier AA Architekten: Zonenkonformität, Volumenstudie und Kostenrahmen, die Entscheidungsgrundlage vor Ihrer Investition.',
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
    text: 'Auf dieser Grundlage entwerfen wir ein bis drei mögliche Bauvolumen: vom Anbau über die Aufstockung bis zum Ersatzneubau.',
  },
  {
    nummer: '03',
    titel: 'Kostenrahmen berechnen',
    text: 'Zu jeder Variante liefern wir eine grobe Kostenschätzung, damit sich Aufwand und Nutzen vergleichen lassen.',
  },
  {
    nummer: '04',
    titel: 'Entscheidungsgrundlage übergeben',
    text: 'Sie erhalten einen kompakten Bericht mit Plänen, Kennzahlen und unserer Einschätzung: die Grundlage für den nächsten Schritt.',
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
          'Zonenkonformität, Ausnützung, Volumenstudie und Kostenrahmen, die Entscheidungsgrundlage, bevor Sie in ein Bauvorhaben investieren.',
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
            <h1 className="mb-8 text-h2 font-normal leading-[1.1] tracking-tight text-ink md:text-h1">
              Was auf Ihrem <span className="font-semibold">Grundstück</span> möglich ist.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-graphite md:text-xl">
              Sie besitzen ein Grundstück oder eine Liegenschaft und möchten wissen, ob
              sich Aufstockung, Anbau oder Ersatzneubau lohnt? Die Machbarkeitsstudie
              liefert die Antwort, mit Volumenstudie und Kostenrahmen, bevor Sie
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
              src="/images/leistungen/atelier-aa-leistungen-machbarkeitsstudie-hero.jpg"
              alt="Katasterplan eines Grundstücks als Grundlage der Machbarkeitsstudie, Atelier AA Architekten, Zürich, Aargau und Zug"
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
          {/* Kacheln auf grauem Grund statt freistehendem Text — dasselbe
              Grau wie überall sonst. Eine Überschrift über den Schritten gibt
              es bewusst nicht: Das Label "Ablauf" sagt bereits alles, und
              eine grosse Zeile über kleinem Text war genau das, was die Seite
              überladen wirken liess. */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {schritte.map((s) => (
              <div key={s.nummer} className="border border-stone/30 bg-mist p-8">
                <p className="mb-3 text-xs uppercase tracking-widest text-stone">{s.nummer}</p>
                <h3 className="mb-2 text-h3 text-ink">{s.titel}</h3>
                <p className="max-w-lesbar leading-relaxed text-graphite">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zusammengeführt mit der früheren Seite /studien: Oben steht das
            Angebot, hier unten die tatsächlich durchgeführten Auftragsstudien
            als Beleg. Getrennt waren beide schwer auseinanderzuhalten — von
            69 Studien sind 65 wörtlich Machbarkeitsstudien. Wer wissen will,
            ob sich eine lohnt, sieht direkt darunter echte Beispiele.

            Die Kacheln verlinken bewusst NICHT auf die Detailseiten (siehe
            StudieCard) — Studien sollen nicht nebeneinander vergleichbar
            sein. Über Google bleiben sie einzeln auffindbar. */}
        <div className="mt-14 border-t border-mist pt-11 md:mt-20">
          <p className="mb-3 text-xs uppercase tracking-widest text-stone">Auftragsstudien</p>
          <p className="mb-10 max-w-lesbar text-graphite leading-relaxed">
            Diese Abklärungen haben wir für Bauherrschaften und
            Grundeigentümerinnen durchgeführt — mit Zone, Parzelle und
            Kennzahlen aus dem amtlichen Kataster. Ohne Finanzzahlen und ohne
            Namen der Bauherrschaft.
          </p>
          <StudienGrid studien={studien} />
        </div>
      </Container>

      {/* Trennstrich ausserhalb des Container, randvoll über die ganze
          Fensterbreite, wie auf der Startseite. Animiert zum Anruf statt
          FAQ (steht jetzt auf /haeufige-fragen). */}
      <div className="mt-20 border-t border-mist pt-16 pb-4 md:mt-28">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
            <h2 className="mb-6 text-h2 font-normal leading-tight text-ink md:text-h1">
              Fragen Sie sich, ob mehr <span className="font-semibold">möglich wäre?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-graphite">
              Rufen Sie uns an und schildern Sie uns Ihr Grundstück: wir sagen Ihnen
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
