const services = [
  {
    title: 'Immobilienkauf & Investition',
    description:
      'Wir finden für Sie die passende Immobilie – ob für den Eigenbedarf oder als Kapitalanlage. Diskret, effizient und mit tiefem Marktverständnis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Immobilienverkauf mit Strategie',
    description:
      'Von der Bewertung bis zur Übergabe: Wir vermarkten Ihre Immobilie professionell und erzielen den bestmöglichen Preis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'Persönliche Immobilienberatung',
    description:
      'Über 15 Jahre Erfahrung im Schweizer Immobilienmarkt. Wir hören zu, verstehen Ihre Ziele und finden massgeschneiderte Lösungen.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-light-gray">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-elindo uppercase tracking-widest text-sm mb-3 font-medium">
            Unsere Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray mb-6">
            Was wir für Sie tun
          </h2>
          <p className="text-dark-gray text-lg">
            Umfassende Betreuung rund um Ihre Immobilie – vom ersten Gespräch bis zum Vertragsabschluss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-elindo mb-6">{service.icon}</div>
              <h3 className="text-xl font-medium text-gray mb-4">{service.title}</h3>
              <p className="text-dark-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
