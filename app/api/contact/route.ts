import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Name is required and must be at least 2 characters" }, { status: 400 });
    }

    if (!phone && !email) {
      return NextResponse.json({ error: "Phone or email is required" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #741cff;">New Contact Form Submission</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : "<p><em>No message provided</em></p>"}
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This message was sent from your portfolio website.
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
