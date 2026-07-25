interface ProjektMetaProps {
  kunde: string;
  ort: string;
  jahr: string;
}

export default function ProjektMeta({ kunde, ort, jahr }: ProjektMetaProps) {
  const items = [
    { label: 'Kunde', value: kunde },
    { label: 'Ort', value: ort },
    { label: 'Jahr', value: jahr },
  ];

  return (
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 border-y border-mist py-8 my-10">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs uppercase tracking-widest text-stone mb-2">
            {item.label}
          </dt>
          <dd className="text-base md:text-lg text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
