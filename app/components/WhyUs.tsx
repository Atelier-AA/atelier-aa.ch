const features = [
  {
    title: 'Persönliche und qualifizierte Beratung',
    description:
      'Individuelle Betreuung mit tiefem Marktverständnis und branchenspezifischem Know-how.',
  },
  {
    title: 'Fundierte Immobilienbewertung',
    description:
      'Realistische Marktwertermittlung basierend auf aktuellen Verkaufsdaten und Erfahrung.',
  },
  {
    title: 'Massgeschneiderte Vermarktung',
    description:
      'Professionelle Präsentation Ihrer Immobilie mit passgenauer Zielgruppenansprache.',
  },
  {
    title: 'Effizient und transparent begleitet',
    description:
      'Klare Prozesse, offene Kommunikation und volle Transparenz vom Erstkontakt bis zum Abschluss.',
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-elindo text-white">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-elindo-light uppercase tracking-widest text-sm mb-3 font-medium">
            Warum Elindo Immobilien
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Ihre Vorteile mit uns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div key={feature.title} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-elindo-light font-light text-xl">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
