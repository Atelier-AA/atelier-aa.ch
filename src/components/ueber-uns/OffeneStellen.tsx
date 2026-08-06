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
            Sind Sie <span className="font-semibold">kreativ</span> und wollen{' '}
            <span className="font-semibold">mitgestalten</span>? Dann melden Sie sich bei uns.
          </h2>
          <p className="text-lg text-graphite leading-relaxed mb-10">
            Architektur entsteht bei uns im Team. Wenn Sie Leidenschaft für klare,
            reduzierte Räume, Nachhaltigkeit und präzises Arbeiten teilen, freuen wir
            uns auf Ihre Bewerbung.
          </p>
          <Button href="/ueber-uns/karriere" variant="text">
            offene Position ansehen
          </Button>
        </div>
      </Container>
    </section>
  );
}
