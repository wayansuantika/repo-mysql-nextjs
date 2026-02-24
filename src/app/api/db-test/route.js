import { NextResponse } from "next/server";
import { testConnection } from "@/lib/db";

export async function GET() {
  try {
    const result = await testConnection();

    return NextResponse.json({
      ok: true,
      message: "MySQL connection successful",
      serverTime: result.now,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "MySQL connection failed",
        error: error.message,
      },
      { status: 500 },
    );
  }
}
