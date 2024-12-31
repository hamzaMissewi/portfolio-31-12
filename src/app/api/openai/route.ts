import axios, { AxiosResponse } from "axios";
import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import ChatCompletion = OpenAI.ChatCompletion;

export async function POST(req: NextRequest) {
  const request = await req.json();
  const { prompt } = request.body;

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 404 });
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
          },
          {
            role: "system",
            content:
              "Your role is to help the user to search for user about movies or about" +
              " website data.",
          },
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
      throw new Error("No reply found for that question");
      // return NextResponse.json(
      //   {
      //     reply: null,
      //     error: "No reply found for that question",
      //   },
      //   { status: 500 },
      // );
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

    return NextResponse.json({ chatReply: message }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error getting response" },
      { status: 500 },
    );
  }
}
