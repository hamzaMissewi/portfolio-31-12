import { generateEmailContent, transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export type ContactRoutePayload = {
  response?: string;
  success?: boolean;
};

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const data = request.body;
    if (!data.email || !data.name || !data.subject) {
      return NextResponse.json(
        {
          response: "Bad data request",
          success: false,
        },
        { status: 400 },
      );
    }

    // const options = mailOptions(data);
    const sendMailResult = await transporter.sendMail({
      from: data.email,
      to: process.env.NODEMAILER_EMAIL,
      ...generateEmailContent(data),
      subject: data.subject,
    });

    console.log("response nodemailer ", sendMailResult);
    // It seems like the server is returning HTML instead of JSON. This is why you're getting the "Unexpected token '<'" error, because the HTML is not valid JSON.

    return NextResponse.json(
      {
        response: `Email sent successfully,response: ${sendMailResult.response}`,
        success: true,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        response: `Error sending email, message: ${error.message}`,
        success: false,
      },
      { status: 500 },
    );
  }
}
