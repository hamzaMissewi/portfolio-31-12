import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export type ContactMePostPayload = {
  response?: string;
  success: boolean;
};

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse<ContactMePostPayload>,
) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      if (!data.email || !data.name || !data.subject || !data.message) {
        return res
          .status(400)
          .send({ response: "Bad data request", success: false });
      }
      console.log("nodemailer POST data ", JSON.stringify(data));

      const options = mailOptions(data);

      await transporter.sendMail(options);
      return res
        .status(200)
        .json({ response: "Email sent successfully", success: true });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        response: `Error sending email ${error.message}`,
        success: false,
      });
    }
  } else {
    // Handling non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export async function GET() {
  try {
    return NextResponse.json({ message: "Hello World from GET" });
  } catch (error) {
    return NextResponse.error();
  }
}

// Handle PUT requests
export async function PUT(request: NextApiRequest) {
  const data = await request.body;
  return NextResponse.json({ message: "Hello World from PUT", data });
}
