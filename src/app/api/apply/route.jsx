import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Basic Validation
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 📧 Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "smtp"
      auth: {
        user: process.env.SMTP_EMAIL, // your email
        pass: process.env.SMTP_PASSWORD, // your app password
      },
    });

    // 📩 Build Email with ALL fields
    const mailHtml = `
      <h2>🎓 New Admission Application Received</h2>
      <h3>Admission Information</h3>
      <p><b>Admission Number:</b> ${body.admissionNumber}</p>
      <p><b>Admission Date:</b> ${body.admissionDate}</p>
      <p><b>Admission Fees:</b> ${body.admissionFees}</p>

      <h3>Student Information</h3>
      <p><b>First Name:</b> ${body.firstName}</p>
      <p><b>Middle Name:</b> ${body.middleName || "-"}</p>
      <p><b>Last Name:</b> ${body.lastName}</p>
      <p><b>Date of Birth:</b> ${body.dob}</p>
      <p><b>Gender:</b> ${body.gender}</p>

      <h3>Contact Information</h3>
      <p><b>Address:</b> ${body.address}</p>
      <p><b>State:</b> ${body.state || "-"}</p>
      <p><b>City:</b> ${body.city}</p>
      <p><b>Zip:</b> ${body.zip}</p>
      <p><b>Mobile:</b> ${body.code} ${body.mobile}</p>
      <p><b>Email:</b> ${body.email}</p>

      <h3>Additional Information</h3>
      <p><b>Previous School:</b> ${body.previousSchool || "-"}</p>
      <p><b>Siblings:</b> ${body.siblings || "-"}</p>
      <p><b>Family Info:</b> ${body.familyInfo || "-"}</p>

      <br/>
      <p>✅ This admission form has been submitted successfully.</p>
    `;

    // 📩 Send confirmation to applicant
    const applicantMail = {
      from: process.env.SMTP_EMAIL,
      to: body.email,
      subject: `Admission Confirmation - ${body.admissionNumber}`,
      html: mailHtml,
    };

    // 📩 Send copy to School Admin
    const adminMail = {
      from: process.env.SMTP_EMAIL,
      to: process.env.RECEIVER_EMAIL, // set in .env
      subject: `📥 New Admission Form - ${body.firstName} ${body.lastName}`,
      html: mailHtml,
    };

    // await transporter.sendMail(applicantMail);
    await transporter.sendMail(adminMail);

    return NextResponse.json({
      success: true,
      message: "Admission form submitted and emails sent successfully.",
    });
  } catch (error) {
    console.error("Error submitting admission form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit admission form." },
      { status: 500 }
    );
  }
}
