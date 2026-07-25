import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von Atelier AA Architekten GmbH.',
};

export default function DatenschutzPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-4">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-ink mb-16">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-graphite leading-relaxed">
            <section>
              <p>
                Wir freuen uns über Ihr Interesse an Atelier AA Architekten. Der
                Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Im
                Folgenden informieren wir Sie über den Umgang mit Ihren Daten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-ink mb-4">
                Verantwortliche Stelle
              </h2>
              <address className="not-italic">
                Atelier AA Architekten GmbH<br />
                Bachstrasse 29, 8912 Obfelden<br />
                info@atelier-aa.ch
              </address>
            </section>

            <section>
              <h2 className="text-xl font-light text-ink mb-4">
                Erhebung und Verarbeitung von Daten
              </h2>
              <p>
                Personenbezogene Daten werden ausschliesslich dann erhoben, wenn
                Sie uns diese im Rahmen einer Kontaktaufnahme freiwillig mitteilen.
                Die Verarbeitung erfolgt zweckgebunden zur Bearbeitung Ihrer Anfrage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-ink mb-4">
                Weitergabe an Dritte
              </h2>
              <p>
                Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, es sei denn,
                dies ist zur Erfüllung eines Vertrages erforderlich oder gesetzlich
                vorgeschrieben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-ink mb-4">Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
                oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                Bitte kontaktieren Sie uns dazu per E-Mail an info@atelier-aa.ch.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-light text-ink mb-4">Cookies</h2>
              <p>
                Diese Webseite verwendet ausschliesslich technisch notwendige Cookies.
                Es findet keine Verfolgung durch Drittanbieter statt.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
