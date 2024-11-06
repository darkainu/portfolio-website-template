import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export const runtime = 'edge';

export async function POST(request: Request) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const { name, email, message } = await request.json();

  const msg = {
    to: 'muratorhan@pm.me',
    from: 'muratorhansmail@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>From:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}