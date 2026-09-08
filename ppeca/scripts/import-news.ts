import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const filePath = path.join(process.cwd(), "data", "news.json");

const raw = fs.readFileSync(filePath, "utf-8");

const parsed = JSON.parse(raw);

async function main() {
  let count = 0;

  for (const item of parsed.data) {
    await prisma.news.upsert({
      where: {
        slug: item.slug,
      },

      update: {
        newsTitle: item.NewsTitle,
        newsDescription: item.NewsDescription,
        newsUrl: item.NewsUrl || null,
        category: item.Category || null,
        updatedAt: new Date(item.updatedAt),
      },

      create: {
        newsTitle: item.NewsTitle,
        newsDescription: item.NewsDescription,
        newsUrl: item.NewsUrl || null,
        category: item.Category || null,
        slug: item.slug,
        imageUrl: null,
        createdAt: new Date(item.createdAt),
        updatedAt: new Date(item.updatedAt),
      },
    });

    count++;

    console.log(`Imported: ${item.NewsTitle}`);
  }

  console.log(`\nSuccessfully imported ${count} news items.`);
}

main()
  .catch((error) => {
    console.error("Import failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });