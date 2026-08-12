import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FragenAntworten from '@/components/insights/FragenAntworten';
import StudienGrid from '@/components/studien/StudienGrid';
import { studien } from '@/data/studien';

export const metadata: Metadata = { robots: { index: false, follow: false } };

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

const fragen = [
  {
    frage: 'Was kostet eine Machbarkeitsstudie?',
    antwort:
      'Der Aufwand liegt im vierstelligen Bereich und richtet sich nach Grundstück und Fragestellung. Ein genaues Angebot erhalten Sie nach einem kurzen Erstgespräch.',
  },
  {
    frage: 'Wie lange dauert eine Machbarkeitsstudie?',
    antwort:
      'In der Regel wenige Wochen, abhängig davon, wie schnell die Gemeinde Grundlagenpläne und Auskünfte liefert.',
  },
  {
    frage: 'Muss ich danach mit Atelier AA Architekten weiterbauen?',
    antwort:
      'Nein. Die Studie ist ein eigenständiges Ergebnis. Viele Bauherrschaften entscheiden sich danach für die Zusammenarbeit, verpflichtet sind Sie dazu nicht.',
  },
  {
    frage: 'Was, wenn sich herausstellt, dass nichts möglich ist?',
    antwort:
      'Auch das ist ein Ergebnis — und günstiger, als es ohne Prüfung erst in der Bauplanung zu erfahren.',
  },
];

/**
 * Vorschau, Variante "Banner": Bild (Architekturmodell) als volle Bildbreite
 * ZWISCHEN Titel und Fliesstext statt seitlich daneben — bewusst anderes
 * Muster als der Standard-2-Spalten-Hero, damit die Kompetenz-Unterseiten
 * nicht alle gleich aussehen.
 */
export default function MachbarkeitsstudieHeroVorschau() {
  return (
    <div className="pt-32 pb-20 md:pb-28 md:pt-40">
      <div className="border-b border-mist bg-[#fffbe6] py-3 text-center text-sm text-ink">
        Entwurf — nicht live. Nur zum Vergleich, nicht verlinkt.
      </div>

      <Container className="mt-16">
        <div className="max-w-2xl">
          <Link
            href="/leistungen"
            className="mb-4 inline-block text-xs uppercase tracking-widest text-stone hover:text-ink"
          >
            ← Kompetenzen
          </Link>
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">
            Machbarkeitsstudie
          </p>
          <h1 className="text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
            Was auf Ihrem <span className="font-semibold">Grundstück</span> möglich ist.
          </h1>
        </div>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-mist md:aspect-[21/8]">
          <Image
            src="/images/hero/slide-modell-1.jpg"
            alt="Architekturmodell zur Prüfung eines Bauvolumens"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="text-lg leading-relaxed text-graphite md:text-xl">
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

        <div className="mt-20 border-t border-mist pt-16 md:mt-28">
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

        <div className="mt-20 border-t border-mist pt-16 md:mt-28">
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

        <div className="mt-20 border-t border-mist pt-16 md:mt-28">
          <p className="mb-10 text-xs uppercase tracking-widest text-stone">Beispiele</p>
          <StudienGrid studien={studien.slice(0, 3)} />
        </div>

        <FragenAntworten fragen={fragen} titel="Häufige Fragen zur Machbarkeitsstudie" />
      </Container>
    </div>
  );
}
