import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, title: "Gas Policy Update" },
    { id: 2, title: "Energy Summit 2025" },
  ]);
}
