import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';

/**
 * Abschliessender Aufruf zur Kontaktaufnahme auf der Startseite.
 *
 * Bewusst dunkel (bg-ink) statt im hellen Ton der übrigen Startseiten-
 * Abschnitte — der einzige Kontrastwechsel auf der Seite, direkt vor dem
 * Footer, damit die Seite nicht durchgehend im selben hellen Grau endet.
 */
export default function KontaktSection() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-white/55">Kontakt</p>
            <h2 className="mb-5 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
              Der erste Schritt ist ein Gespräch.
            </h2>
            <p className="max-w-[30ch] text-lg leading-relaxed text-white/80">
              Wir stehen für einen offenen, direkten Austausch und freuen uns über
              neue Projekte, spannende Aufgaben und anspruchsvolle Fragestellungen.
            </p>
            <a
              href="/kontakt"
              className="mt-8 inline-block bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Kontaktieren Sie uns
            </a>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-white/50">Adresse</p>
              <address className="not-italic text-lg">
                {firma.strasse}, {firma.plz} {firma.ort}
              </address>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-white/50">Telefon</p>
              <a href={`tel:${firma.telefonHref}`} className="text-lg transition-colors hover:text-white/70">
                {firma.telefon}
              </a>
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-white/50">E-Mail</p>
              <a href={`mailto:${firma.email}`} className="text-lg transition-colors hover:text-white/70">
                {firma.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
