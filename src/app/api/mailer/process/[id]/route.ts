import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { brevo } from '@/lib/mailer/brevo';

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });
  const { id } = await context.params;
  if (!/^\d+$/.test(id)) return NextResponse.json({ error: 'Ungültige Prozess-ID.' }, { status: 400 });
  try {
    const process = await brevo<{ id: number; name: string; status: string; info?: unknown }>(`/processes/${id}`);
    return NextResponse.json(process);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Importstatus konnte nicht geladen werden.' }, { status: 502 });
  }
}
