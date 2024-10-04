import { generateEmailContent, transporter } from "@/lib/nodemailer";
// import { NextResponse,NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export type ContactRoutePayload = {
  response?: string;
  success?: boolean;
};

// export async function POST(req: NextRequest, res: NextResponse<any>) {
export async function POST(req: NextApiRequest, res: NextApiResponse<ContactRoutePayload>) {
  if (req.method === "POST") {
    try {
      // const request = await req.json();
      const data = req.body;
      if (!data.email || !data.name || !data.subject || !data.message) {
        return res
          .status(400)
          .send({ response: "Bad data request", success: false });
      }
      // console.log("nodemailer POST data ", JSON.stringify(data));

      // const options = mailOptions(data);
      const edfefe = await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        ...generateEmailContent(data),
        subject: data.subject,
      });

      console.log("response nodemailer ", edfefe);
      // It seems like the server is returning HTML instead of JSON. This is why you're getting the "Unexpected token '<'" error, because the HTML is not valid JSON.

      return res
        .status(200)
        .json({ response: "Email sent successfully", success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        response: `Error sending email, message: ${error.message}`,
        success: false,
      });
    }
  } else {
    // Handling non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
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
