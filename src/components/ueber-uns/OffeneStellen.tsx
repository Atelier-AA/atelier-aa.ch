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
          <h2 className="text-3xl md:text-4xl font-light text-ink mb-8 leading-tight">
            Wir suchen Verstärkung.
          </h2>
          <p className="text-lg text-graphite leading-relaxed mb-10">
            Wenn Sie unsere Leidenschaft für sorgfältige Architektur teilen und Ihre
            Erfahrung in einem inspirierenden Team einbringen möchten, freuen wir uns
            auf Ihre Bewerbung. Aktuelle Ausschreibungen und initiative Bewerbungen
            senden Sie bitte direkt an uns.
          </p>
          <Button href="/kontakt" variant="outline">
            Kontakt aufnehmen
          </Button>
        </div>
      </Container>
    </section>
  );
}
