import { NextResponse } from 'next/server';
import { firma } from '@/data/firma';

/**
 * Versand des Kontaktformulars über die Resend-HTTP-API (kein SDK nötig).
 * `RESEND_API_KEY` muss als Umgebungsvariable in Vercel gesetzt sein, sonst
 * bricht die Anfrage kontrolliert mit einer Fehlermeldung ab.
 *
 * `RESEND_FROM` erfordert eine bei Resend verifizierte Domain (atelier-aa.ch).
 * Bis dahin greift der Resend-Sandbox-Absender.
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { vorname, nachname, email, telefon, unternehmen, betreff, nachricht } = body as Record<
    string,
    string
  >;

  if (!vorname || !nachname || !email || !nachricht) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Formularversand ist noch nicht eingerichtet.' },
      { status: 500 }
    );
  }

  const from = process.env.RESEND_FROM || 'Atelier AA Kontaktformular <onboarding@resend.dev>';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: firma.email,
      reply_to: email,
      subject: betreff ? `Kontaktformular: ${betreff}` : 'Neue Anfrage über das Kontaktformular',
      text: [
        `Name: ${vorname} ${nachname}`,
        `E-Mail: ${email}`,
        `Telefon: ${telefon || '–'}`,
        `Unternehmen: ${unternehmen || '–'}`,
        '',
        nachricht,
      ].join('\n'),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Versand fehlgeschlagen.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
