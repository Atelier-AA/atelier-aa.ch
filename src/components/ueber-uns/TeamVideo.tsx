import Image from 'next/image';

interface TeamVideoProps {
  src?: string;
  poster?: string;
}

export default function TeamVideo({
  src,
  poster = '/images/projekte/mfh-sihlaurain/01.jpg',
}: TeamVideoProps) {
  if (!src) {
    return (
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-mist overflow-hidden">
        <Image
          src={poster}
          alt="Atelier AA Architekten"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-ink overflow-hidden">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
