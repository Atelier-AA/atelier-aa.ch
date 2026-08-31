import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/mailer/session';
import { brevo } from '@/lib/mailer/brevo';
import { createTestToken } from '@/lib/mailer/token';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Nicht gefunden.' }, { status: 404 });
  const { id } = await context.params;
  const campaignId = Number(id);
  if (!Number.isInteger(campaignId) || campaignId <= 0) return NextResponse.json({ error: 'Ungültige Kampagnen-ID.' }, { status: 400 });

  try {
    const body = await request.json() as { emailTo?: string[] };
    const emailTo = (body.emailTo || []).map((x) => String(x).trim().toLowerCase()).filter((x) => EMAIL.test(x));
    if (!emailTo.length || emailTo.length > 5) {
      return NextResponse.json({ error: 'Bitte 1 bis 5 gültige Testadressen angeben.' }, { status: 400 });
    }

    await brevo(`/emailCampaigns/${campaignId}/sendTest`, {
      method: 'POST',
      body: JSON.stringify({ emailTo }),
    });

    return NextResponse.json({ ok: true, testToken: createTestToken(campaignId), emailTo });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Testmail konnte nicht versendet werden.' }, { status: 502 });
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
