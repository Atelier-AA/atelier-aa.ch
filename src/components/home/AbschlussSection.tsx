import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

/**
 * Abschliessender Kontakt-Aufruf der Startseite: konkrete Machbarkeits-Frage
 * statt abstraktem Statement-Satz. Zweispaltig statt einer schmalen, linken
 * Spalte — nutzt die volle Breite, damit rechts kein toter Raum entsteht.
 */
export default function AbschlussSection() {
  return (
    <section className="border-t border-mist py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Machbarkeit</p>
            <h2 className="max-w-[20ch] text-[2rem] font-normal leading-[1.15] tracking-tight text-ink sm:text-[2.5rem]">
              Fragen Sie sich, ob auf Ihrem Grundstück heute schon{' '}
              <span className="font-semibold">mehr möglich wäre,</span> als darauf steht?
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="max-w-[46ch] text-lg leading-relaxed text-graphite">
              Viele Parzellen aus den Sechziger- und Siebzigerjahren nutzen ihre
              zulässige Ausnutzung nur zur Hälfte. Eine Machbarkeitsstudie zeigt in
              wenigen Wochen, ob sich Aufstockung, Anbau oder Ersatzneubau lohnt —
              mit Volumenstudie und Kostenrahmen im vierstelligen Bereich.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="primary">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
