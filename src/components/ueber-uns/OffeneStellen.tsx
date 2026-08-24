import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function OffeneStellen() {
  return (
    <section className="border-t border-mist bg-mist py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-6">
            Karriere
          </p>
          <h2 className="text-3xl md:text-4xl font-normal text-ink mb-8 leading-tight">
            Sie denken gerne mit, <span className="font-semibold">hinterfragen</span>{' '}
            und <span className="font-semibold">entwickeln weiter?</span>
          </h2>
          <p className="text-lg text-graphite leading-relaxed mb-10">
            Architektur entsteht bei uns im Team. Wenn Sie Freude an klaren,
            reduzierten Räumen, an Nachhaltigkeit und an präzisem Arbeiten haben,
            freuen wir uns auf Ihre Bewerbung.
          </p>
          <Button href="/ueber-uns/karriere" variant="text">
            offene Position ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
