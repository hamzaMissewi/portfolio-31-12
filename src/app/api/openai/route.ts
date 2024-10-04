import axios, { AxiosResponse } from "axios";
import { NextApiResponse } from "next";
import OpenAI from "openai";
import { NextRequest } from "next/server";
import ChatCompletion = OpenAI.ChatCompletion;

// export const openAI = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const request = await req.json();
  const { prompt } = request.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
    // return NextResponse.json({ error: "Prompt is required" });
  }
  try {
    // const response = await openAI.chat.completions.create({
    const response: AxiosResponse<ChatCompletion> = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        // model: 'gpt-4o',
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt,
            //     type: 'image_url',
            //     image_url: {
            //         url: imageB64,
            //         detail: 'low'
            //     }
          },
          { role: "system", content: "You are a helpful assistant." },
        ],
        max_tokens: 1000,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          // 'Content-Type': 'application/json',
        },
        responseType: "json",
      },
    );

    console.log("message open ai ", response.data.choices[0].message);
    const message = response.data.choices[0].message?.content; //|| 'Sorry, I did not get that.';

    if (!message || message === "") {
      res.status(404).json({
        reply: null,
        error: "No reply found for that question",
      });
      return;
    }

    const usage = response.data.usage;
    // let price: number | undefined = undefined;
    // if (usage) {
    //     // model gpt-4o limites: 30 000 tokens par minutes, 500 requests per minute
    //     const promptPrice = usage.prompt_tokens * (5 / 1000000);
    //     const completionPrice = usage.completion_tokens * (15 / 1000000); // output tokens
    //     price = promptPrice + completionPrice;
    // }

    let remainingRequests: undefined | number = undefined;
    const remaining = response.headers["x-ratelimit-remaining-request"];
    if (remaining) {
      remainingRequests = parseInt(remaining, 10);
    }

    console.debug(
      {
        response: message,
        totalTokens: usage?.total_tokens,
        remainingRequests,
      },
      `OpenAI response for image with prompt: ${prompt}`,
    );

    return res.status(200).json({ chatReply: message });

    // return await response.data.object.blob()
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error getting response" });
  }
}
