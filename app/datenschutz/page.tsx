import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'Datenschutz – Elindo Immobilien',
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Datenschutz" breadcrumb="Rechtliches" />
        <section className="section-padding bg-white">
          <div className="container-x max-w-3xl">
            <div className="space-y-6 text-dark-gray leading-relaxed">
              <h2 className="text-2xl font-light text-gray">Datenschutzerklärung</h2>
              <p>
                Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre
                ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang
                mit Ihren Daten.
              </p>

              <h3 className="text-xl font-medium text-gray mt-8">Erhebung und Speicherung von Daten</h3>
              <p>
                Personenbezogene Daten werden nur dann erhoben, wenn Sie uns diese von sich aus
                mitteilen (z.B. über das Kontaktformular). Wir verwenden Ihre Daten ausschliesslich
                zur Bearbeitung Ihrer Anfrage.
              </p>

              <h3 className="text-xl font-medium text-gray mt-8">Weitergabe an Dritte</h3>
              <p>
                Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nicht, ausser dies
                ist zur Vertragserfüllung erforderlich oder wir sind gesetzlich dazu verpflichtet.
              </p>

              <h3 className="text-xl font-medium text-gray mt-8">Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung Ihrer Daten. Kontaktieren Sie uns dazu bitte per E-Mail.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
