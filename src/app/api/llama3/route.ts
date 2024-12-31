import { NextRequest, NextResponse } from "next/server";

// const VERSIONS = {
//   "yorickvp/llava-13b":
//     "e272157381e2a3bf12df3a8edd1f38d1dbd736bbb7437277c8b34175f8fce358",
//   "nateraw/salmonn":
//     "ad1d3f9d2bd683628242b68d890bef7f7bd97f738a7c2ccbf1743a594c723d83",
// };

const getLamaAIResponse = async (prompt: string): Promise<{ data: any }> => {
  try {
    const response = await fetch("https://api.example.com/completion", {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: {
        Authorization: `Bearer ${process.env.LLAMA_3_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw error;
  }
};

export async function POST(req: NextRequest) {
  const request = await req.json();
  const prompt = request.prompt;
  if (!prompt)
    NextResponse.json({ error: "Prompt not found" }, { status: 404 });

  try {
    const result = await getLamaAIResponse(prompt);
    console.log("Fb AI Response:", result);
    NextResponse.json({ data: JSON.stringify(result.data) }, { status: 200 });
  } catch (error) {
    console.error("Failed to get AI response:", error);
    NextResponse.json({ error: "Error getting AI response" }, { status: 400 });
  }
}

// export async function POST2(req: NextRequest, res: NextResponse<{ data?: string, error?: string }>) {
//     const params = await req.params;
//     const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for");
// }
