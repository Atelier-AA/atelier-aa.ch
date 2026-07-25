import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { firma } from '@/data/firma';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum von Atelier AA Architekten GmbH, Bachstrasse 39, 8912 Obfelden. UID CHE-237.040.294.',
};

export default function ImpressumPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-ink mb-16">
            Impressum
          </h1>

          <div className="space-y-10 text-graphite leading-relaxed">
            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Firma
              </h2>
              <address className="not-italic text-ink text-lg">
                {firma.name}
                <br />
                {firma.strasse}
                <br />
                {firma.plz} {firma.ort}
                <br />
                {firma.land}
              </address>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Kontakt
              </h2>
              <p className="text-ink text-lg">
                <a href={`tel:${firma.telefonHref}`} className="hover:text-graphite">
                  {firma.telefon}
                </a>
                <br />
                <a href={`mailto:${firma.email}`} className="hover:text-graphite">
                  {firma.email}
                </a>
                <br />
                www.atelier-aa.ch
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Unternehmensdaten
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-2 text-ink">
                <dt className="text-stone">Rechtsform:</dt>
                <dd>Gesellschaft mit beschränkter Haftung</dd>
                <dt className="text-stone">UID:</dt>
                <dd>{firma.uid}</dd>
                <dt className="text-stone">Handelsregister:</dt>
                <dd>Kanton Zürich, eingetragen seit {firma.gruendung}</dd>
                <dt className="text-stone">Vertretungsberechtigt:</dt>
                <dd>{firma.vertretungsberechtigt}</dd>
              </dl>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Haftungsausschluss
              </h2>
              <p>
                Die Inhalte dieser Webseite werden mit grösstmöglicher Sorgfalt
                erstellt. Der Autor übernimmt jedoch keine Gewähr für die Richtigkeit,
                Vollständigkeit und Aktualität der bereitgestellten Inhalte.
              </p>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-widest text-stone mb-3">
                Urheberrecht
              </h2>
              <p>
                Alle Bilder, Texte und weiteren Inhalte auf dieser Webseite sind
                urheberrechtlich geschützt. Eine Verwendung bedarf der schriftlichen
                Zustimmung der Atelier AA Architekten GmbH.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
