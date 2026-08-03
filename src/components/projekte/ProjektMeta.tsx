interface ProjektMetaProps {
  /** Bauherrschaft; `null` blendet den ganzen Block aus, da Ort und Jahr
      bereits in der Titelzeile darüber stehen. */
  kunde: string | null;
}

export default function ProjektMeta({ kunde }: ProjektMetaProps) {
  if (!kunde) return null;

  return (
    <dl className="border-y border-mist py-8 my-10">
      <dt className="text-xs uppercase tracking-widest text-stone mb-2">Bauherrschaft</dt>
      <dd className="text-base md:text-lg text-ink">{kunde}</dd>
    </dl>
  );
}
