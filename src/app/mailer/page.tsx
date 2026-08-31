import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/mailer/session';
import MailerDashboard from '@/components/mailer/MailerDashboard';

export const dynamic = 'force-dynamic';

export default async function MailerPage() {
  if (!(await isAuthenticated())) redirect('/mailer/login');
  return <MailerDashboard />;
}
