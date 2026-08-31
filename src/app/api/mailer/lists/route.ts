import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { brevo, type BrevoList } from '@/lib/mailer/brevo';

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });
  try {
    const data = await brevo<{ lists?: BrevoList[] }>('/contacts/lists?limit=50&offset=0&sort=desc');
    return NextResponse.json({ lists: data.lists || [] });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Listen konnten nicht geladen werden.' }, { status: 502 });
  }
}
