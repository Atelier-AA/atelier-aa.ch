import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { brevo } from '@/lib/mailer/brevo';
import { verifyTestToken } from '@/lib/mailer/token';

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });
  const { id } = await context.params;
  const campaignId = Number(id);
  if (!Number.isInteger(campaignId) || campaignId <= 0) return NextResponse.json({ error: 'Ungültige Kampagnen-ID.' }, { status: 400 });

  try {
    const body = await request.json() as { confirm?: string; testToken?: string };
    if (body.confirm !== 'SENDEN') {
      return NextResponse.json({ error: 'Zur Freigabe muss exakt SENDEN eingegeben werden.' }, { status: 400 });
    }
    if (!body.testToken || !verifyTestToken(body.testToken, campaignId)) {
      return NextResponse.json({ error: 'Für diese Kampagne ist zuerst ein erfolgreicher Testversand erforderlich.' }, { status: 400 });
    }

    await brevo(`/emailCampaigns/${campaignId}/sendNow`, { method: 'POST', body: '{}' });
    return NextResponse.json({ ok: true, campaignId, status: 'scheduled' });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Kampagne konnte nicht versendet werden.' }, { status: 502 });
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
