// src/app/api/admin/news/route.ts
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/src/auth"
import cloudinary from "@/src/lib/cloudinary"
import { prisma } from "@/src/lib/prisma"

async function uploadImageToCloudinary(file: File) {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  return new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ resource_type: "image", folder: "news-images" }, (err, result) => {
        if (err) reject(err)
        else resolve(result)
      })
      .end(buffer)
  })
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await req.formData()
  const newsTitle = formData.get("newsTitle") as string
  const newsDescription = formData.get("newsDescription") as string
  const category = formData.get("category") as string
  const newsUrl = formData.get("newsUrl") as string
  const imageFile = formData.get("image") as File | null

  const slug = newsTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    + "-" + Date.now()

  let imageUrl: string | null = null

  if (imageFile && imageFile.size > 0) {
    const result = await uploadImageToCloudinary(imageFile)
    imageUrl = result.secure_url
  }

  const news = await prisma.news.create({
    data: {
      newsTitle,
      newsDescription,
      newsUrl: newsUrl || null,
      category: category || null,
      slug,
      imageUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  return NextResponse.json(news)
}

export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { createdAt: "desc" } })
  return NextResponse.json(news)
}