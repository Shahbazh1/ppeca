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
  NewsImage: {
    url: string;
  } | null;
}

const newsPerPage = 8;

export default async function Home() {
  const currentPage = 1; // initial page
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  let news: NewsItem[] = [];
  let totalPages = 1;

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/newses?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${newsPerPage}`,
      { next: { revalidate: 60 } } // ISR: revalidate every 60s
    );

    if (!res.ok) throw new Error("Failed to fetch news");

    const data = await res.json();

    news = data.data.map((item: any) => {
      const imageUrl = item.NewsImage?.url
        ? item.NewsImage.url.startsWith("http")
          ? item.NewsImage.url
          : `${API_BASE_URL}${item.NewsImage.url}`
        : "/images/news1.png";
      return { ...item, NewsImage: { url: imageUrl } };
    });

    totalPages = data.meta?.pagination?.pageCount || 1;
  } catch (err) {
    console.error("News fetch failed:", err);
    news = [];
  }

  return (
    <div className="bg-[#f8fafc] pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      {/* Breadcrumb */}
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        <Link href="/news" className="inline-block">
          News & Events
        </Link>{" "}
        / Latest News
      </p>

      {/* Heading */}
      <h1
        className="font-['Montserrat'] leading-[1.1] text-[#333333] font-bold 
        xl:text-[54px] 
        lg:text-[50px] 
        md:text-[45px] 
        sm:text-[41px] 
        text-[37px] 
        text-center 
        mt-4 sm:mt-6 md:mt-8"
      >
        Latest News
      </h1>

      {/* News List */}
      <div className="bg-[#f8fafc] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-6">
        {news.length > 0 ? (
          news.map((item: any, index: any) => (
            <NewsCard
              key={index}
              image={item.NewsImage?.url || "/images/news1.png"}
              title={item.NewsTitle}
              description={item.NewsDescription}
              publishedTime={item.publishedAt}
              url={item.NewsUrl}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center py-20">
            <img
              src="/images/no-news.png"
              alt="No news available"
              className="w-32 h-32 mb-4 animate-bounce"
            />
            <h3 className="text-2xl font-semibold text-[#0A2540] font-['Montserrat'] mb-2">
              No News Available
            </h3>
            <p className="text-[#64748b] text-sm font-['Open_Sans'] text-center max-w-md">
              We couldn’t find any news at the moment. Please check back later for the latest updates.
            </p>
          </div>
        )}

        {/* Pagination */}
        {news.length > 0 && (
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              disabled={currentPage === 1}
              className={`px-4 py-2 cursor-pointer rounded-md font-['Open_Sans'] text-sm ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#16A831] text-white hover:bg-[#0d7a25] transition-colors"
              }`}
            >
              Previous
            </button>

            <span className="font-['Open_Sans'] text-sm text-[#0A2540]">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md cursor-pointer font-['Open_Sans'] text-sm ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-[#16A831] text-white hover:bg-[#0d7a25] transition-colors"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
