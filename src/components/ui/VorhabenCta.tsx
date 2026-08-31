import Container from './Container';
import Button from './Button';

/**
 * Abschluss-Aufruf am Seitenende, in Varianten je Seite.
 *
 * Vorher stand auf jeder Seite derselbe Wortlaut ("Sie haben ein
 * Bauvorhaben?") mit demselben Ziel — das wirkte nach der dritten Seite
 * monoton und wie ein angehängter Baustein statt wie ein Schluss.
 *
 * Jede Variante knüpft an das an, was auf der jeweiligen Seite gerade
 * gelesen wurde. Und nicht jede führt zum Kontaktformular: Wer gerade das
 * Büro kennengelernt hat, will eher das Team sehen als ein Formular
 * ausfüllen. Drei der fünf Varianten führen bewusst tiefer in die Website
 * statt heraus.
 *
 * Der Wortlaut bleibt zurückhaltend — kein Ausrufezeichen, keine
 * Dringlichkeit, kein "Jetzt": Für ein Architekturbüro ist Aufdringlichkeit
 * teurer als eine verpasste Anfrage.
 */
const VARIANTEN = {
  /** Nach der Projektübersicht: Der Besucher hat 21 Projekte gesehen. */
  projekte: {
    titel: ['Erkennen Sie Ihr', 'Vorhaben wieder?'],
    text: 'Jedes dieser Projekte begann mit einem Gespräch über ein Grundstück, einen Rahmen und eine Idee. Erzählen Sie uns von Ihrem.',
    href: '/kontakt',
    label: 'Vorhaben besprechen',
  },
  /** Nach den fünf Leistungen: Die häufigste Hürde ist nicht das Ob, sondern
   *  das Wo-anfangen. */
  leistungen: {
    titel: ['Noch unklar, was Sie', 'brauchen?'],
    text: 'Nicht jedes Vorhaben beginnt bei der ersten Phase. Sagen Sie uns, wo Sie stehen — wir sagen Ihnen offen, welcher Schritt als nächstes sinnvoll ist.',
    href: '/kontakt',
    label: 'Vorhaben besprechen',
  },
  /** Nach der Büro-Seite: Wer die Haltung gelesen hat, will die Menschen
   *  sehen — nicht ein Formular ausfüllen. */
  buero: {
    titel: ['Wer Ihr Projekt', 'begleitet.'],
    text: 'Von der ersten Skizze bis zur Übergabe arbeiten Sie mit denselben Personen. Ein kleines Team mit klaren Verantwortlichkeiten.',
    href: '/ueber-uns/team',
    label: 'Team kennenlernen',
  },
  /** Nach dem Journal: Die Beiträge entstehen aus echten Rückfragen. */
  journal: {
    titel: ['Eine Frage, die hier', 'fehlt?'],
    text: 'Viele dieser Beiträge sind aus Fragen entstanden, die uns Bauherrschaften gestellt haben. Die häufigsten haben wir gesammelt beantwortet.',
    href: '/haeufige-fragen',
    label: 'Häufige Fragen ansehen',
  },
  /** Auf einer einzelnen Projektseite: Der Besucher hat ein konkretes
   *  Projekt in allen Details gesehen und vergleicht es mit dem eigenen. */
  projektDetail: {
    titel: ['Planen Sie ein', 'ähnliches Projekt?'],
    text: 'Wir prüfen in einer Machbarkeitsstudie, was auf Ihrem Grundstück möglich ist, mit Volumenstudie und Kostenrahmen.',
    href: '/kontakt',
    label: 'Kontaktieren Sie uns',
  },
  /** Nach Design Build: Der Beitrag im Journal geht deutlich tiefer. */
  designBuild: {
    titel: ['Design Build in der', 'Praxis.'],
    text: 'Welche Prinzipien wir in einem laufenden Projekt bereits anwenden und wo die Grenzen liegen, beschreiben wir ausführlich im Journal.',
    href: '/insights/design-build-projektabwicklung',
    label: 'Beitrag lesen',
  },
} as const;

interface VorhabenCtaProps {
  variante?: keyof typeof VARIANTEN;
}

export default function VorhabenCta({ variante = 'projekte' }: VorhabenCtaProps) {
  const v = VARIANTEN[variante];

  return (
    <div className="bg-mist pt-16 pb-20 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-stone">Nächster Schritt</p>
          <h2 className="mb-6 max-w-[18ch] text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            {v.titel[0]} <span className="font-semibold">{v.titel[1]}</span>
          </h2>
          <p className="mb-8 max-w-lesbar text-lg leading-relaxed text-graphite">{v.text}</p>
          <Button href={v.href} variant="text">
            {v.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}
