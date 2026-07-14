import { PrismaClient } from "@prisma/client"
import fs from "fs"
import path from "path"

const prisma = new PrismaClient()

const filePath = path.join(process.cwd(), "data", "strapi-export.json")
const raw = fs.readFileSync(filePath, "utf-8")
const parsed = JSON.parse(raw)

async function main() {
  let count = 0
  for (const item of parsed.data) {
    await prisma.news.upsert({
      where: { slug: item.slug },
      update: {},
      create: {
        newsTitle: item.NewsTitle,
        newsDescription: item.NewsDescription,
        newsUrl: item.NewsUrl,
        category: item.Category,
        slug: item.slug,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
      },
    })
    count++
  }
  console.log(`Imported ${count} news items`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())