// File: /api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  // Setup the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Gmail SSL
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'panditdeepak197@gmail.com', // ✅ Your destination inbox
      subject: `New message from ${name}`,
      html: `
        <h3>Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Success
    res.status(200).json({ success: true });
  } catch (error) {
    // Error occurred
    console.error('Email send error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}

