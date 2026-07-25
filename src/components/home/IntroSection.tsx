import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-8">
            Atelier AA Architekten
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-tight mb-10">
            Wir glauben an Architektur mit bleibendem Wert.
          </h2>
          <p className="text-lg md:text-xl text-graphite leading-relaxed mb-6">
            Als Atelier für Architektur und Städtebau realisieren wir Bauten, die durch
            klare Formensprache, sorgfältige Materialisierung und einen respektvollen
            Umgang mit dem Kontext überzeugen.
          </p>
          <p className="text-base text-graphite leading-relaxed mb-12">
            Jedes Projekt entsteht aus dem Dialog mit unseren Bauherrschaften. Wir hören
            zu, denken mit und begleiten Sie von der ersten Idee bis zur schlüsselfertigen
            Übergabe – mit dem Anspruch, Räume zu schaffen, die inspirieren und lange
            Bestand haben.
          </p>
          <Button href="/projekte" variant="outline">
            alle Projekte ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
