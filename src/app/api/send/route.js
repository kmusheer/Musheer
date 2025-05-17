import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, subject, message } = await request.json();

    // Configure email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    try {
        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_USER,
            subject: `${subject} mail from ${name}`, // <-- use the subject from the form directly
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
    }
}