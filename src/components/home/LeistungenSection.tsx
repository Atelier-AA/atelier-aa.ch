import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Leistungsübersicht auf der Startseite.
 *
 * Bewusst knapp gehalten — ein Absatz, ein Link zur Leistungen-Seite —, damit
 * die Startseite nicht überladen wirkt. Die ausführliche Fassung mit allen
 * Leistungsbereichen und Bauaufgaben steht auf /leistungen.
 */
export default function LeistungenSection() {
  return (
    <section className="py-16 md:py-20 border-t border-mist">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">Leistungen</p>
          <h2 className="text-2xl md:text-3xl font-medium text-ink leading-tight mb-4">
            Von der Idee bis zum fertigen Bau.
          </h2>
          <p className="text-lg text-graphite leading-relaxed mb-8">
            Das Atelier AA begleitet Bauvorhaben über den gesamten Planungsprozess – von
            der ersten Machbarkeitsstudie bis zur schlüsselfertigen Ausführung, auf Wunsch
            auch im Generalplaner-Mandat. Ob Neubau oder Sanierung, Wohnbau oder
            öffentliche Institution: Wir bringen Gestaltung, Funktion und
            Wirtschaftlichkeit in Einklang.
          </p>
          <Button href="/leistungen" variant="text">
            Alle Leistungen im Überblick
          </Button>
        </div>
      </Container>
    </section>
  );
}
