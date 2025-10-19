import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    // Strong server-side validation mirroring client-side
    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }
    if (name.length < 2 || name.length > 80 || !/^[A-Za-z][A-Za-z .'-]*$/.test(name)) {
      return Response.json({ error: "Name is invalid." }, { status: 400 });
    }
    if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email is invalid." }, { status: 400 });
    }
    if (message.length < 10 || message.length > 1000) {
      return Response.json({ error: "Message is invalid length." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    if (!RESEND_API_KEY || !to || !from) {
      return Response.json({ error: "Email is not configured on the server." }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);
    const subject = `New message from ${name}`;

    const result = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (result.error) {
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: "Server error." }, { status: 500 });
  }
}


