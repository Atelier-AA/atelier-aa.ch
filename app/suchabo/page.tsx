import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

export const metadata = {
  title: 'Suchabo – Elindo Immobilien',
  description: 'Erstellen Sie ein kostenloses Suchabonnement und verpassen Sie keine passende Immobilie.',
};

export default function SuchaboPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Suchabo"
          subtitle="Verpassen Sie keine passende Immobilie"
          breadcrumb="Suchabonnement"
        />

        <section className="section-padding bg-white">
          <div className="container-x max-w-3xl">
            <p className="text-dark-gray text-lg mb-10 leading-relaxed text-center">
              Erstellen Sie Ihr persönliches Suchprofil und wir informieren Sie automatisch,
              sobald eine passende Immobilie in unser Portfolio kommt.
            </p>

            <form className="bg-light-gray p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">
                    Objektart
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white">
                    <option>Alle Objekte</option>
                    <option>Wohnung</option>
                    <option>Einfamilienhaus</option>
                    <option>Villa</option>
                    <option>Geschäftsliegenschaft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">
                    Kanton
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white">
                    <option>Alle Kantone</option>
                    <option>Zürich</option>
                    <option>Zug</option>
                    <option>Schwyz</option>
                    <option>Aargau</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">
                    Preis von (CHF)
                  </label>
                  <input
                    type="number"
                    placeholder="500'000"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">
                    Preis bis (CHF)
                  </label>
                  <input
                    type="number"
                    placeholder="2'000'000"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray mb-2">
                  E-Mail für Benachrichtigungen *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-elindo focus:outline-none bg-white"
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                Suchabo erstellen
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
