import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function OffeneStellen() {
  return (
    <section className="py-20 md:py-28 bg-mist">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-6">
            Karriere
          </p>
          {/* Titel und Text wörtlich von der alten Seite (Post 2, Abschnitt
              "offene Stellen"). */}
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-8 leading-tight">
            offene Stellen
          </h2>
          <p className="text-lg text-graphite leading-relaxed mb-10">
            Architektur entsteht bei uns im Team. Wenn Sie Leidenschaft für klare,
            reduzierte Räume, Nachhaltigkeit und präzises Arbeiten teilen, freuen wir
            uns auf Ihre Bewerbung. Werden Sie Teil von Atelier AA und gestalten Sie
            mit uns Räume, die Bestand haben.
          </p>
          <Button href="/kontakt" variant="text">
            Kontaktieren Sie uns
          </Button>
        </div>
      </Container>
    </section>
  );
}
