import { generateEmailContent, transporter } from "@/lib/nodemailer";
// import { NextResponse,NextRequest } from "next/server";
import { NextRequest, NextResponse } from "next/server";

export type ContactRoutePayload = {
  response?: string;
  success?: boolean;
};

// export async function POST(req: NextApiRequest, res: NextApiResponse<ContactRoutePayload>) {
export async function POST(req: NextRequest) {
  // if (req.method === "POST") {
    try {
      const request = await req.json();
      const data = request.body;
      if (!data.email || !data.name || !data.subject || !data.message) {
        return NextResponse.json({
          response: "Bad data request",
          success: false,
        });
        //     .status(400).send({
        //   response: "Bad data request",
        //   success: false,
        // });
      }
      // console.log("nodemailer POST data ", JSON.stringify(data));

      // const options = mailOptions(data);
      const sendMailResult = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      console.log("response nodemailer ", sendMailResult);
      // It seems like the server is returning HTML instead of JSON. This is why you're getting the "Unexpected token '<'" error, because the HTML is not valid JSON.

      // .status(200)
      return NextResponse.json({
        response: `Email sent successfully,response: ${sendMailResult.response}`,
        success: true,
      });
    } catch (error: any) {
      console.log(error);
      // return res.status(500).json({
      return NextResponse.json({
        response: `Error sending email, message: ${error.message}`,
        success: false,
      });

      // } else {
      // Handling non-POST requests
      //   NextResponse.setHeader("Allow", ["POST"]);
      //   NextResponse.status(405).end(`Method ${req.method} Not Allowed`);
      // }
    }
}

// export async function GET() {
//   try {
//     return NextResponse.json({ message: "Hello World from GET" });
//   } catch (error) {
//     return NextResponse.error();
//   }
// }
//
// export async function PUT(request: NextApiRequest) {
//   const data = await request.body;
//   return NextResponse.json({ message: "Hello World from PUT", data });
// }
