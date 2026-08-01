// lib/send-email.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // Use `true` for 465, `false` for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function sendEmail({ to, subject, html }) {
    console.log('test');
    // try {
    //     const info = await transporter.sendMail({
    //         from: process.env.SMTP_USER,
    //         to,
    //         subject,
    //         html,
    //     });
    //     return { success: true, message: 'Email sent successfully', info };
    // } catch (error) {
    //     console.error(error);
    //     return { success: false, message: 'Failed to send email', error };
    // }
}