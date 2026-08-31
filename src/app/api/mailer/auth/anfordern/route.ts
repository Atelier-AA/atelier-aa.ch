import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { anfrageCookie, istErlaubt, neueAnmeldung } from '@/lib/mailer/magic';

/**
 * Einmal-Link anfordern.
 *
 * Die Antwort ist absichtlich immer dieselbe, egal ob die Adresse zugelassen
 * ist oder nicht. Sonst liesse sich über diese Route herausfinden, welche
 * Adresse Zugang hat.
 */
export async function POST(request: Request) {
  let email = '';
  try {
    const daten = await request.json();
    email = String(daten?.email || '');
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const immerGleich = NextResponse.json({
    ok: true,
    hinweis: 'Wenn die Adresse zugelassen ist, wurde ein Link verschickt.',
  });

  if (!istErlaubt(email)) return immerGleich;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY fehlt — Mailer-Anmeldung kann nicht versenden.');
    return NextResponse.json(
      { error: 'Der Versand des Anmeldelinks ist nicht eingerichtet.' },
      { status: 500 }
    );
  }

  const { token, nonce } = neueAnmeldung(email);
  const basis = process.env.MAILER_BASE_URL || 'https://www.atelier-aa.ch';
  const link = `${basis}/api/mailer/auth/eintreten?token=${encodeURIComponent(token)}`;
  // Versandadresse des Mailings, gleiche Adresse wie fuer den Newsletter:
  // news@atelier-aa.ch. Faellt auf die Kontaktformular-Adresse zurueck, damit
  // die Anmeldung auch funktioniert, solange news@ noch nicht eingerichtet ist.
  const absender =
    process.env.MAILER_FROM_EMAIL ||
    'Atelier AA Architekten <news@atelier-aa.ch>';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: absender,
      to: email,
      subject: 'Anmeldelink Mailing',
      text: [
        'Anmeldung am Mailing-Bereich von atelier-aa.ch.',
        '',
        link,
        '',
        'Der Link ist 15 Minuten gültig und funktioniert nur in dem Browser,',
        'in dem er angefordert wurde.',
        '',
        'Wurde diese Anmeldung nicht von Ihnen angefordert, ignorieren Sie',
        'diese Nachricht. Ohne den Link passiert nichts.',
      ].join('\n'),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">
          <p>Anmeldung am Mailing-Bereich von atelier-aa.ch.</p>
          <p style="margin:24px 0">
            <a href="${link}" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:12px 22px;font-size:13px;letter-spacing:1px;text-transform:uppercase">Anmelden</a>
          </p>
          <p style="color:#6b6b6b;font-size:13px">
            Der Link ist 15 Minuten gültig und funktioniert nur in dem Browser,
            in dem er angefordert wurde.
          </p>
          <p style="color:#6b6b6b;font-size:13px">
            Wurde diese Anmeldung nicht von Ihnen angefordert, ignorieren Sie
            diese Nachricht. Ohne den Link passiert nichts.
          </p>
        </div>
      `,
    });
    if (error) {
      console.error('Anmeldelink konnte nicht versendet werden:', error);
      return NextResponse.json(
        { error: 'Der Anmeldelink konnte nicht versendet werden.' },
        { status: 502 }
      );
    }
  } catch (fehler) {
    console.error('Anmeldelink konnte nicht versendet werden:', fehler);
    return NextResponse.json(
      { error: 'Der Anmeldelink konnte nicht versendet werden.' },
      { status: 502 }
    );
  }

  const antwort = NextResponse.json({
    ok: true,
    hinweis: 'Wenn die Adresse zugelassen ist, wurde ein Link verschickt.',
  });
  antwort.cookies.set(anfrageCookie(nonce));
  return antwort;
}

/**
 * Andere Methoden bekommen 404 statt des voreingestellten 405. Ein 405
 * bestaetigt, dass die Route existiert; das braucht ein interner Bereich nicht
 * zu verraten.
 */
export async function GET() {
  return new NextResponse(null, { status: 404 });
}
