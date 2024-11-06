import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export const runtime = 'nodejs';

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
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}