import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Kontakt – Elindo Immobilien',
  description: 'Kontaktieren Sie Elindo Immobilien für eine persönliche Beratung.',
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Kontakt"
          subtitle="Wir freuen uns auf Ihre Nachricht"
          breadcrumb="Kontaktieren Sie uns"
        />

        <section className="section-padding bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray mb-6">
                  Persönlich für Sie da
                </h2>
                <p className="text-dark-gray text-lg mb-10 leading-relaxed">
                  Ob eine kurze Frage oder ein ausführliches Beratungsgespräch – wir sind
                  gerne für Sie erreichbar. Nutzen Sie das Formular oder kontaktieren Sie
                  uns direkt.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-elindo/10 flex items-center justify-center flex-shrink-0 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-elindo">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray mb-1">Adresse</h4>
                      <p className="text-dark-gray">Elindo Immobilien<br />Zürich, Schweiz</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-elindo/10 flex items-center justify-center flex-shrink-0 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-elindo">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray mb-1">E-Mail</h4>
                      <a href="mailto:info@elindo-immobilien.ch" className="text-elindo hover:text-elindo-dark">
                        info@elindo-immobilien.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-elindo/10 flex items-center justify-center flex-shrink-0 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-elindo">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray mb-1">Telefon</h4>
                      <a href="tel:+41000000000" className="text-elindo hover:text-elindo-dark">
                        +41 00 000 00 00
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
