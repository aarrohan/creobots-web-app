import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/tools/thumbnail-generator/generate`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": `Bearer ${process.env.API_KEY}`,
        "x-user-id": body.userId,
      },
      body: JSON.stringify(body.opts),
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
