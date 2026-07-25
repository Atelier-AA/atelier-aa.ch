import Image from 'next/image';

interface ProjektHeroProps {
  image: string;
  alt: string;
}

export default function ProjektHero({ image, alt }: ProjektHeroProps) {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-mist">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
