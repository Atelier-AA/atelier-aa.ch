import Image from 'next/image';

interface ProjektGalerieProps {
  bilder: string[];
  projektTitel: string;
}

export default function ProjektGalerie({ bilder, projektTitel }: ProjektGalerieProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12">
      {bilder.map((bild, idx) => (
        <div
          key={bild}
          className="relative aspect-[4/3] bg-mist overflow-hidden"
        >
          <Image
            src={bild}
            alt={`${projektTitel} – Bild ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}
