import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { studentName, grade, parentName, email, phone, message } = body;

    if (!studentName || !grade || !parentName || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,   // use SMTP_EMAIL not EMAIL_USER
        pass: process.env.SMTP_PASSWORD, // use SMTP_PASSWORD not EMAIL_PASS
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_EMAIL,
      subject: `New Contact Form Submission - ${studentName}`,
      html: `
        <h2> New Contact Form Submission</h2>

        <h3> Student Information</h3>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Grade/Class:</strong> ${grade}</p>

        <h3> Parent Information</h3>
        <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3> Message</h3>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Email failed to send" }),
      { status: 500 }
    );
  }
}
