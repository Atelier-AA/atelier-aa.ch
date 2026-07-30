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
          <h2 className="text-3xl md:text-4xl font-normal text-ink mb-8 leading-tight">
            Bist du <span className="font-semibold">kreativ</span> und willst etwas{' '}
            <span className="font-semibold">bewegen</span>? Dann komm zu uns.
          </h2>
          <p className="text-lg text-graphite leading-relaxed mb-10">
            Architektur entsteht bei uns im Team. Wenn du Leidenschaft für klare,
            reduzierte Räume, Nachhaltigkeit und präzises Arbeiten teilst, freuen wir
            uns auf deine Bewerbung.
          </p>
          <Button href="/ueber-uns/karriere" variant="text">
            offene Position ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
