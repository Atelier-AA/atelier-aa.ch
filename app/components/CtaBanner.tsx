import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="section-padding bg-white">
      <div className="container-x">
        <div className="bg-gradient-to-r from-elindo to-elindo-dark p-12 md:p-16 lg:p-20 text-white text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
            Ihr Immobilientraum – wir helfen Ihnen dabei.
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-100">
            Erstellen Sie ein kostenloses Suchabonnement oder vereinbaren Sie ein
            unverbindliches Beratungsgespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/suchabo"
              className="inline-block bg-white text-elindo px-8 py-4 rounded font-medium hover:bg-gray-100 transition"
            >
              Suchabo erstellen
            </Link>
            <Link
              href="/kontakt"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-elindo transition"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
