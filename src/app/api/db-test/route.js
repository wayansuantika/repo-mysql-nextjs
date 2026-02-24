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
    const errorDetails = {
      code: error?.code ?? null,
      errno: error?.errno ?? null,
      sqlState: error?.sqlState ?? null,
    };

    return NextResponse.json(
      {
        ok: false,
        message: "MySQL connection failed",
        error: error.message,
        details: errorDetails,
      },
      { status: 500 },
    );
  }
}
