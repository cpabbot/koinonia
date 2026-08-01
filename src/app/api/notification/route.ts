import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '@/lib/send-email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body as { name: string; email: string; message: string };

        try {
            const result = await sendEmail({
                to: process.env.SMTP_USER || '',
                subject: `Website Contact Form Submission from ${name}`,
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
            });

            if (result.success) {
                res.status(200).json({ message: 'Email sent successfully' });
            } else {
                res.status(500).json({ message: 'Failed to send email', error: result.error });
            }
        } catch (error) {
            res.status(500).json({ message: 'An unexpected error occurred', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}