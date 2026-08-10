import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FragenAntworten from '@/components/insights/FragenAntworten';

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

const fragen = [
  {
    frage: 'Was kostet eine Machbarkeitsstudie?',
    antwort:
      'Der Aufwand liegt im vierstelligen Bereich und richtet sich nach Grundstück und Fragestellung.',
  },
  {
    frage: 'Wie lange dauert sie?',
    antwort: 'In der Regel wenige Wochen, abhängig von den Auskünften der Gemeinde.',
  },
  {
    frage: 'Muss ich danach mit Atelier AA weiterbauen?',
    antwort: 'Nein, die Studie ist ein eigenständiges, unverbindliches Ergebnis.',
  },
];

export default function MachbarkeitsstudieVorschauB() {
  return (
    <div className="pt-24 pb-20 md:pt-28 md:pb-28">
      <Container>
        <div className="mb-10 bg-ink px-6 py-3 text-center text-sm text-white">
          Vorschau B — kompaktes Faktenblatt mit Sidebar (nicht die Live-Seite)
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_2fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Machbarkeitsstudie
            </p>
            <h1 className="mb-8 text-4xl font-normal leading-[1.1] tracking-tight text-ink md:text-5xl">
              Bevor Sie investieren: <span className="font-semibold">wissen, was geht.</span>
            </h1>
            <p className="text-lg leading-relaxed text-graphite">
              Sie besitzen ein Grundstück oder eine Liegenschaft und möchten wissen, ob
              sich Aufstockung, Anbau oder Ersatzneubau lohnt? Wir prüfen Bauordnung,
              Ausnützung und Erschliessung und liefern eine belastbare Entscheidungsgrundlage
              — mit Volumenstudie und Kostenrahmen.
            </p>

            <div className="mt-14">
              <h2 className="mb-6 text-xs uppercase tracking-widest text-stone">
                Was die Studie enthält
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {enthalten.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-graphite">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <FragenAntworten fragen={fragen} titel="Häufige Fragen" />
          </div>

          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="border border-mist p-8">
              <p className="mb-6 text-xs uppercase tracking-widest text-stone">
                Auf einen Blick
              </p>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-stone">Dauer</dt>
                  <dd className="text-lg text-ink">wenige Wochen</dd>
                </div>
                <div>
                  <dt className="text-sm text-stone">Kosten</dt>
                  <dd className="text-lg text-ink">vierstelliger Bereich</dd>
                </div>
                <div>
                  <dt className="text-sm text-stone">Ergebnis</dt>
                  <dd className="text-lg text-ink">Volumenstudie + Kostenrahmen</dd>
                </div>
                <div>
                  <dt className="text-sm text-stone">Verbindlichkeit</dt>
                  <dd className="text-lg text-ink">keine Weiterbau-Pflicht</dd>
                </div>
              </dl>
              <div className="mt-8">
                <Button href="/kontakt" variant="primary" className="w-full">
                  Machbarkeit klären
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
