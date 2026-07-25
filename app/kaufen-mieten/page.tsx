import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import CtaBanner from '../components/CtaBanner';

export const metadata = {
  title: 'Kaufen & Mieten – Elindo Immobilien',
  description: 'Aktuelle Immobilienangebote in der Schweiz. Wohnungen, Häuser und Geschäftsliegenschaften.',
};

const properties = [
  {
    title: 'Wohnhaus Ernst',
    location: 'Zürich',
    type: 'Einfamilienhaus',
    rooms: '6.5 Zimmer',
    size: '220 m²',
    price: 'CHF 2.4 Mio.',
    image: '/images/DSC_8316.jpg',
  },
  {
    title: 'Bank Zimmerberg',
    location: 'Horgen',
    type: 'Geschäftsliegenschaft',
    rooms: 'Verhandelbar',
    size: '850 m²',
    price: 'Auf Anfrage',
    image: '/images/DSC_8391.jpg',
  },
  {
    title: 'Exklusive Wohnung',
    location: 'Zug',
    type: 'Eigentumswohnung',
    rooms: '4.5 Zimmer',
    size: '145 m²',
    price: 'CHF 1.8 Mio.',
    image: '/images/DSC_8155.jpg',
  },
  {
    title: 'Villa am See',
    location: 'Küsnacht',
    type: 'Villa',
    rooms: '8.5 Zimmer',
    size: '380 m²',
    price: 'Auf Anfrage',
    image: '/images/DSC_8147.jpg',
  },
];

export default function KaufenMietenPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Kaufen & Mieten"
          subtitle="Entdecken Sie unsere aktuellen Immobilienangebote"
          breadcrumb="Portfolio"
        />

        <section className="section-padding bg-light-gray">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((property) => (
                <div
                  key={property.title}
                  className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-elindo text-white px-4 py-1.5 text-sm uppercase tracking-wide">
                      {property.type}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-light text-gray mb-2">{property.title}</h3>
                    <p className="text-elindo mb-4">{property.location}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Zimmer</span>
                        <span className="font-medium">{property.rooms}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Fläche</span>
                        <span className="font-medium">{property.size}</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-light-gray flex justify-between items-center">
                      <span className="text-elindo font-medium text-lg">{property.price}</span>
                      <button className="text-elindo hover:text-elindo-dark font-medium text-sm uppercase tracking-wide">
                        Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
