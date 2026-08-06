import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Direkte Frage an die Bauherrschaft statt einer abstrakten Zwischenüberschrift
 * — spricht eine konkrete, wahrscheinliche Ausgangslage an, bevor die Lösung
 * (Machbarkeitsstudie) genannt wird.
 */
export default function MachbarkeitsFrageSection() {
  return (
    <section className="py-20 md:py-28 border-t border-mist">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">
              Machbarkeit
            </p>
            <h2 className="max-w-[20ch] text-3xl md:text-4xl font-medium leading-tight text-ink">
              Fragen Sie sich, ob auf Ihrem Grundstück heute schon mehr möglich
              wäre, als darauf steht?
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-lg leading-relaxed text-graphite">
              Viele Parzellen aus den Sechziger- und Siebzigerjahren nutzen ihre
              zulässige Ausnutzung nur zur Hälfte. Eine Machbarkeitsstudie zeigt in
              wenigen Wochen, ob sich Aufstockung, Anbau oder Ersatzneubau lohnt — mit
              Volumenstudie und Kostenrahmen im vierstelligen Bereich.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="text">
                Machbarkeit klären
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
