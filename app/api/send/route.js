// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail= process.env.FROM_EMAIL;

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [""],
            subject: 'Hello world',
            react: (
                <>
                    <p>Email body</p></>
            )
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

// import { Resend } from 'resend';

// const resend = new Resend('re_Aexzr4tB_2KzEdKZsisDsbuaPaNQBKX2V');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'shivamsharma1212dec@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });