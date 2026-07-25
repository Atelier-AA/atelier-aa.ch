import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="ueber-uns" className="section-padding bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <Image
              src="/images/DSC_8165.jpg"
              alt="Elindo Immobilien Team"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-elindo uppercase tracking-widest text-sm mb-3 font-medium">
              Wer wir sind
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray mb-6 leading-tight">
              Immobilien mit Persönlichkeit
            </h2>
            <p className="text-dark-gray text-lg mb-6 leading-relaxed">
              Elindo Immobilien steht für exklusive Vermittlung, kompetente Beratung
              und langjährige Erfahrung im Schweizer Immobilienmarkt.
            </p>
            <p className="text-dark-gray mb-8 leading-relaxed">
              Unser Team begleitet Sie mit Herzblut, Kompetenz und höchster Diskretion –
              ob beim Kauf Ihrer Traumimmobilie, dem Verkauf einer bestehenden Liegenschaft
              oder bei der strategischen Projektentwicklung.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl md:text-4xl font-light text-elindo mb-1">15+</div>
                <div className="text-sm text-gray uppercase tracking-wide">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-elindo mb-1">200+</div>
                <div className="text-sm text-gray uppercase tracking-wide">Vermittlungen</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-elindo mb-1">100%</div>
                <div className="text-sm text-gray uppercase tracking-wide">Diskretion</div>
              </div>
            </div>
            <Link href="/ueber-uns" className="btn-outline">
              Mehr über uns
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
