import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import CtaBanner from '../components/CtaBanner';

export const metadata = {
  title: 'Über uns – Elindo Immobilien',
  description: 'Lernen Sie das Team von Elindo Immobilien kennen. Über 15 Jahre Erfahrung im Schweizer Immobilienmarkt.',
};

const team = [
  {
    name: 'Alisami',
    role: 'Geschäftsführer',
    image: '/images/Profilbild-Alisami.png',
    bio: 'Über 15 Jahre Erfahrung in der Immobilienvermittlung und -entwicklung in der Schweiz.',
  },
  {
    name: 'Lulzime',
    role: 'Immobilienberatung',
    image: '/images/Profilbild-Lulzime.png',
    bio: 'Spezialistin für exklusive Wohnimmobilien und persönliche Kundenbetreuung.',
  },
  {
    name: 'Artur',
    role: 'Projektentwicklung',
    image: '/images/Profilbild-Artur_800x800_1.png',
    bio: 'Experte für Projektentwicklung, Investitionsobjekte und strategische Beratung.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Über uns"
          subtitle="Persönlich. Kompetent. Diskret."
          breadcrumb="Wer wir sind"
        />

        <section className="section-padding bg-white">
          <div className="container-x">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-elindo uppercase tracking-widest text-sm mb-3 font-medium">
                Unsere Geschichte
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray mb-6">
                Immobilien mit Persönlichkeit
              </h2>
              <p className="text-dark-gray text-lg leading-relaxed mb-6">
                Elindo Immobilien wurde mit der Vision gegründet, den Immobilienmarkt persönlicher,
                transparenter und kundenorientierter zu gestalten. Was 2010 als Ein-Mann-Betrieb begann,
                ist heute eine etablierte Vermittlungsagentur mit einem eingespielten Team.
              </p>
              <p className="text-dark-gray text-lg leading-relaxed">
                Unser Anspruch: Jede Immobilie ist einzigartig – jeder Kunde auch. Deshalb bieten wir
                keine Standardlösungen, sondern individuelle Betreuung auf höchstem Niveau.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-light-gray">
          <div className="container-x">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-elindo uppercase tracking-widest text-sm mb-3 font-medium">
                Unser Team
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray mb-6">
                Die Menschen hinter Elindo
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white text-center p-8">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-light text-gray mb-1">{member.name}</h3>
                  <p className="text-elindo text-sm uppercase tracking-wide mb-4">{member.role}</p>
                  <p className="text-dark-gray text-sm leading-relaxed">{member.bio}</p>
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
