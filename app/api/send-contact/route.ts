import { NextRequest, NextResponse } from "next/server";

const ADMIN_API_URL = process.env.ADMIN_API_URL;
const EMAIL_API_KEY = process.env.EMAIL_API_KEY;

export async function POST(request: NextRequest) {
  if (!ADMIN_API_URL || !EMAIL_API_KEY) {
    return NextResponse.json(
      { success: false, message: "Server configuration error" },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${ADMIN_API_URL}/api/send-contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": EMAIL_API_KEY,
        "x-forwarded-for":
          request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip") ??
          "unknown",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to reach server" },
      { status: 502 }
    );
  }
}
