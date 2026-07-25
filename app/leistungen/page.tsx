import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import WhyUs from '../components/WhyUs';
import CtaBanner from '../components/CtaBanner';

export const metadata = {
  title: 'Leistungen – Elindo Immobilien',
  description: 'Umfassende Dienstleistungen rund um Ihre Immobilie: Verkauf, Kauf, Bewertung und Beratung.',
};

const services = [
  {
    title: 'Immobilienverkauf',
    description:
      'Wir vermarkten Ihre Immobilie professionell und erzielen dank unserer Erfahrung und unseres Netzwerks den bestmöglichen Preis. Von der ersten Bewertung bis zur notariellen Beurkundung – wir übernehmen alles.',
    features: ['Marktwertermittlung', 'Professionelle Vermarktung', 'Verhandlungsführung', 'Vertragsabwicklung'],
  },
  {
    title: 'Immobilienkauf',
    description:
      'Sie suchen die passende Immobilie? Wir finden für Sie das perfekte Objekt – ob Eigenheim, Anlageobjekt oder Ferienwohnung. Diskret, effizient und mit Marktverständnis.',
    features: ['Bedarfsanalyse', 'Objektsuche', 'Besichtigungsorganisation', 'Kaufabwicklung'],
  },
  {
    title: 'Immobilienbewertung',
    description:
      'Was ist Ihre Immobilie wert? Wir erstellen fundierte Marktwertgutachten basierend auf aktuellen Verkaufsdaten, Objekteigenschaften und Standortanalysen.',
    features: ['Verkehrswertermittlung', 'Ertragswertanalyse', 'Vergleichswertverfahren', 'Schriftliches Gutachten'],
  },
  {
    title: 'Projektentwicklung',
    description:
      'Von der Vision zur Realität: Wir begleiten Bauprojekte von der Idee über die Planung bis zur Vermarktung. Mit strategischem Blick und operativer Umsetzungsstärke.',
    features: ['Machbarkeitsstudien', 'Konzeptentwicklung', 'Vermarktungsstrategie', 'Vertriebsbegleitung'],
  },
];

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Unsere Leistungen"
          subtitle="Umfassende Betreuung rund um Ihre Immobilie"
          breadcrumb="Services"
        />

        <section className="section-padding bg-white">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="border border-light-gray p-8 md:p-10 hover:border-elindo transition-colors"
                >
                  <h3 className="text-2xl md:text-3xl font-light text-gray mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-gray mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-dark-gray">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-elindo flex-shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
