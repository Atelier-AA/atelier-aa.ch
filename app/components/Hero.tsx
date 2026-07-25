import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/DSC_8147.jpg"
          alt="Elindo Immobilien"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="container-x relative z-10 py-24 text-white">
        <div className="max-w-3xl">
          <p className="text-elindo-light uppercase tracking-widest text-sm mb-4 font-medium">
            Elindo Immobilien
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-white">
            Exklusive Immobilien.<br />
            <span className="italic">Persönlich vermittelt.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl leading-relaxed">
            Ihr Partner für hochwertige Immobilien und Projektentwicklungen in der Schweiz.
            Mit über 15 Jahren Erfahrung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kaufen-mieten" className="btn-primary text-center">
              Immobilien entdecken
            </Link>
            <Link
              href="/kontakt"
              className="inline-block bg-white/10 backdrop-blur border-2 border-white text-white px-7 py-3.5 rounded font-medium hover:bg-white hover:text-elindo transition-all text-center"
            >
              Kostenlose Beratung
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
