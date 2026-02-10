import React from "react";
import Link from "next/link";
import NewsCard from "../../../components/latestNews/NewsCard";

interface NewsItem {
  id: number;
  documentId: string;
  NewsTitle: string;
  NewsDescription: string;
  NewsUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  NewsImage: {
    url: string;
  } | null;
}

// In Next.js 15+, searchParams is a Promise.
// For Next.js 13/14, you can use it directly.
interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  // 1. Destructure and await the searchParams
  const params = await searchParams;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 2. Determine current page from URL params
  const currentPage = Number(params.page) || 1;
  const pageSize = 8;

  let news: NewsItem[] = [];
  let totalPages = 1;

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/newses?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) throw new Error("Failed to fetch news");

    const data = await res.json();
    totalPages = data.meta.pagination.pageCount;

    news = data.data.map((item: any) => {
      const imageUrl = item.NewsImage?.url
        ? item.NewsImage.url.startsWith("http")
          ? item.NewsImage.url
          : `${API_BASE_URL}${item.NewsImage.url}`
        : "/images/news1.png";

      const publishedTime = new Date(item.publishedAt).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      return {
        ...item,
        NewsImage: { url: imageUrl },
        publishedAt: publishedTime,
      };
    });
  } catch (err) {
    console.error("News fetch failed:", err);
    news = [];
  }

  return (
    <div className="bg-[#f8fafc] pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        <Link href="/news">News & Events</Link> / Latest News
      </p>

      <h1 className="font-['Montserrat'] text-[#333333] font-bold text-center mt-6 text-[40px]">
        Latest News
      </h1>

      <div className="bg-[#f8fafc] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-6">
        {news.length > 0 ? (
          news.map((item, index) => (
            <NewsCard
              key={item.id || index}
              image={item.NewsImage?.url || "/images/news1.png"}
              title={item.NewsTitle}
              description={item.NewsDescription}
              publishedTime={item.publishedAt}
              url={item.NewsUrl}
              slug={item.slug}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center py-20 px-4">
            {/* SVG Icon */}
            <svg
              className="w-24 h-24 mb-4 text-gray-300 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>

            {/* Main Heading with your original color */}
            <h3 className="text-3xl font-medium" style={{ color: "#0A2540" }}>
              No News Available
            </h3>

            {/* Subheading */}
            <p className="mt-2 text-gray-500 text-center">
              Check back later for the latest updates.
            </p>
          </div>
        )}

        {/* Pagination - Links work natively with Server Components */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage - 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              Previous
            </Link>
          )}

          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>

          {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
