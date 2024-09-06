const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      service: process.env.SMTP_SERVICE,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: subject,
      html: html,
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.log(error.message);
  }
};
