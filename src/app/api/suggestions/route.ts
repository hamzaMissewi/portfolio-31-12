// Movie suggestions with azure ai
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  const res = await fetch(
    `https://disney2clone.azurewebsites.net/api/getaisuggestion?term=${term}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  );
  const message = await res.text();
  return Response.json({ message });
}
