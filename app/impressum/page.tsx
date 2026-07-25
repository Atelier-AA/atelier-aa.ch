import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'Impressum – Elindo Immobilien',
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Impressum" breadcrumb="Rechtliches" />
        <section className="section-padding bg-white">
          <div className="container-x max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-light text-gray mb-4">Angaben gemäss Gesetz</h2>
              <p className="text-dark-gray mb-6">
                Elindo Immobilien<br />
                Zürich, Schweiz
              </p>

              <h3 className="text-xl font-medium text-gray mb-3 mt-8">Kontakt</h3>
              <p className="text-dark-gray mb-6">
                E-Mail: info@elindo-immobilien.ch<br />
                Telefon: +41 00 000 00 00
              </p>

              <h3 className="text-xl font-medium text-gray mb-3 mt-8">Haftungsausschluss</h3>
              <p className="text-dark-gray mb-6">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
