import Image from 'next/image';
import Link from 'next/link';

const properties = [
  {
    title: 'Wohnhaus Ernst',
    location: 'Zürich',
    type: 'Einfamilienhaus',
    price: 'Auf Anfrage',
    image: '/images/DSC_8316.jpg',
    href: '/kaufen-mieten',
  },
  {
    title: 'Bank Zimmerberg',
    location: 'Horgen',
    type: 'Geschäftsliegenschaft',
    price: 'Auf Anfrage',
    image: '/images/DSC_8391.jpg',
    href: '/kaufen-mieten',
  },
  {
    title: 'Exklusive Wohnung',
    location: 'Zug',
    type: 'Eigentumswohnung',
    price: 'Auf Anfrage',
    image: '/images/DSC_8155.jpg',
    href: '/kaufen-mieten',
  },
];

export default function Properties() {
  return (
    <section id="immobilien" className="section-padding bg-cream">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-elindo uppercase tracking-widest text-sm mb-3 font-medium">
            Aktuelle Angebote
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray mb-6">
            Ausgewählte Immobilien
          </h2>
          <p className="text-dark-gray text-lg">
            Ein Auszug aus unserem exklusiven Portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link
              key={property.title}
              href={property.href}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-elindo text-sm uppercase tracking-wide mb-2">
                  {property.type}
                </p>
                <h3 className="text-xl font-medium text-gray mb-2 group-hover:text-elindo transition">
                  {property.title}
                </h3>
                <p className="text-dark-gray mb-4">{property.location}</p>
                <p className="text-elindo font-medium">{property.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/kaufen-mieten" className="btn-primary">
            Alle Immobilien ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
