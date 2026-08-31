import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { brevo, ensureUnsubscribe, senderConfig } from '@/lib/mailer/brevo';

export async function POST(request: Request) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });

  try {
    const body = await request.json() as {
      name?: string;
      subject?: string;
      previewText?: string;
      html?: string;
      listId?: number;
    };
    const name = String(body.name || '').trim().slice(0, 120);
    const subject = String(body.subject || '').trim().slice(0, 255);
    const html = String(body.html || '');
    const listId = Number(body.listId);
    if (!name || !subject || !html || !Number.isInteger(listId) || listId <= 0) {
      return NextResponse.json({ error: 'Name, Betreff, HTML und Empfängerliste sind erforderlich.' }, { status: 400 });
    }
    if (Buffer.byteLength(html, 'utf8') > 900_000) {
      return NextResponse.json({ error: 'Das HTML ist zu groß. Bitte Bilder extern hosten und den HTML-Code unter ca. 900 KB halten.' }, { status: 413 });
    }

    const sender = senderConfig();
    const campaign = await brevo<{ id: number }>('/emailCampaigns', {
      method: 'POST',
      body: JSON.stringify({
        name,
        sender: { name: sender.name, email: sender.email },
        replyTo: sender.replyTo,
        recipients: { listIds: [listId] },
        subject,
        previewText: String(body.previewText || '').trim().slice(0, 255),
        htmlContent: ensureUnsubscribe(html),
        mirrorActive: false,
      }),
    });

    return NextResponse.json({ ok: true, campaignId: campaign.id });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Kampagne konnte nicht erstellt werden.' }, { status: 502 });
  }
}

/**
 * Andere Methoden bekommen 404 statt des voreingestellten 405. Ein 405
 * bestaetigt, dass die Route existiert; das braucht ein interner Bereich nicht
 * zu verraten.
 */
export async function GET() {
  return new NextResponse(null, { status: 404 });
}
