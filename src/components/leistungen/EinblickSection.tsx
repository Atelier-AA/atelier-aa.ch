import Container from '@/components/ui/Container';

/**
 * Zeigt den Entwurfsprozess statt eines fertigen Projekts — bewusst nicht auf
 * /projekte, weil dort ausschliesslich gebaute Referenzen stehen. Video
 * autoplay/muted/loop wie ein bewegtes Foto, ohne Bedienelemente.
 */
export default function EinblickSection() {
  return (
    <section className="border-t border-mist py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-stone">Einblick</p>
            <h2 className="max-w-[18ch] text-3xl font-normal leading-[1.15] tracking-tight text-ink md:text-4xl">
              Vom ersten Strich zum{' '}
              <span className="font-semibold">fertigen Plan.</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-graphite">
              Jedes Projekt beginnt auf Papier — mit einer Handskizze und einem
              ersten Modell, lange bevor ein Programm eine Linie zeichnet. Was
              daraus entsteht, sehen Sie in unseren Referenzen.
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden bg-mist">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/einblick-skizze.mp4"
              poster="/images/leistungen/einblick-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
