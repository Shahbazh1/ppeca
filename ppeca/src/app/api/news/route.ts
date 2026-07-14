// src/app/api/news/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const limit = searchParams.get("limit");

    if (limit) {
    const news = await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
      take: Number(limit),
    });

    return NextResponse.json({ data: news });
  }

  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 8;

  try {
    const totalCount = await prisma.news.count();
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

    const news = await prisma.news.findMany({
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return NextResponse.json({
      data: news,
      meta: {
        page,
        pageSize,
        totalCount,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
