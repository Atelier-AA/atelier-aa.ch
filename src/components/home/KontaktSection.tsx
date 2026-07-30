import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';

/**
 * Abschliessender Aufruf zur Kontaktaufnahme auf der Startseite.
 *
 * Bewusst dunkel (bg-ink) statt im hellen Ton der übrigen Startseiten-
 * Abschnitte — der einzige Kontrastwechsel auf der Seite, direkt vor dem
 * Footer, damit die Seite nicht durchgehend im selben hellen Grau endet.
 * Die Telefonnummer selbst ist jetzt das grösste Element im Abschnitt statt
 * eines separaten Buttons — ein Klick/Tap genügt.
 */
export default function KontaktSection() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <Container>
        <p className="mb-3 text-xs uppercase tracking-widest text-white/50">Kontakt</p>
        <h2 className="mb-10 max-w-[20ch] text-3xl font-medium leading-tight md:mb-14 md:text-4xl lg:text-5xl">
          Der erste Schritt ist ein Gespräch.
        </h2>

        <a
          href={`tel:${firma.telefonHref}`}
          className="block text-[2.75rem] font-semibold leading-none tracking-tight text-white transition-opacity hover:opacity-70 sm:text-[4rem] lg:text-[6rem]"
        >
          {firma.telefon}
        </a>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 md:mt-14">
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-white/45">E-Mail</p>
            <a href={`mailto:${firma.email}`} className="text-lg transition-colors hover:text-white/70">
              {firma.email}
            </a>
          </div>
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-white/45">Adresse</p>
            <address className="not-italic text-lg">
              {firma.strasse}, {firma.plz} {firma.ort}
            </address>
          </div>
        </div>
      </Container>
    </section>
  );
}
