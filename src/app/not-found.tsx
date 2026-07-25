import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="pt-40 pb-32 min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-stone mb-6">
            404
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-ink mb-8 leading-tight">
            Seite nicht gefunden
          </h1>
          <p className="text-lg text-graphite mb-10 leading-relaxed">
            Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise wurde
            sie verschoben oder existiert nicht mehr.
          </p>
          <Link
            href="/"
            className="text-sm uppercase tracking-widest text-ink border-b border-ink pb-1 hover:text-graphite hover:border-graphite transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </Container>
    </div>
  );
}
