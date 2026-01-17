// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import NewsCard from "../../../components/latestNews/NewsCard";

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const newsPerPage = 10;

  const fallbackNews: NewsItem[] = [
    {
      id: 1,
      documentId: "fallback-1",
      NewsTitle: "OPEC Announces Temporary Pause in Oil Production",
      NewsDescription:
        "The Organization of the Petroleum Exporting Countries (OPEC) has announced a temporary pause in oil production to stabilize global markets.",
      NewsUrl: "#",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: "Published about 4 hours ago",
      NewsImage: {
        url: "/images/news1.png",
      },
    },
    {
      id: 2,
      documentId: "fallback-2",
      NewsTitle: "Pakistan's Energy Sector Sees Growth",
      NewsDescription:
        "New hydrocarbon discoveries contribute to increased local production and strengthen energy security.",
      NewsUrl: "#",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: "Published about 6 hours ago",
      NewsImage: {
        url: "/images/news1.png",
      },
    },
  ];

  useEffect(() => {
    let didTimeout = false;

    // 1️⃣ 5-second fallback timer
    const timeoutId = setTimeout(() => {
      didTimeout = true;
      setNews(fallbackNews);
      setLoading(false);
    }, 5000);

    // 2️⃣ Fetch API with pagination
    fetch(`${API_BASE_URL}/api/newses?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${newsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length) {
          // ✅ Fix image URLs
          const newsWithFullImages = data.data.map((item: any) => {
            const imageUrl = item.NewsImage?.url
              ? item.NewsImage.url.startsWith("http")
                ? item.NewsImage.url
                : `https://api.ppepca.com${item.NewsImage.url}`
              : "/images/news1.png"; // fallback
            return { ...item, NewsImage: { url: imageUrl } };
          });

          setNews(newsWithFullImages);

          // Set total pages from meta information
          if (data.meta?.pagination?.pageCount) {
            setTotalPages(data.meta.pagination.pageCount);
          }
        }
      })
      .catch((err) => {
        console.error("API fetch error:", err);
        if (!didTimeout) {
          setNews(fallbackNews);
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => clearTimeout(timeoutId);
  }, [currentPage]);

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#f8fafc]">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 bg-[#16A831] rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-[#16A831] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-4 h-4 bg-[#16A831] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-[#0A2540] mb-2 font-['Montserrat']">Fetching Latest News</h3>
          <p className="text-[#64748b] text-sm font-['Open_Sans']">Gathering the most recent updates for you...</p>
        </div>
        <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#16A831] to-[#0d7a25] rounded-full animate-pulse" style={{ width: '70%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      {/* Breadcrumb */}
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        <Link href="/news" className="inline-block"> News & Events </Link> / Lastest News
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
        {news.map((item, index) => (
          <NewsCard
            key={index}
            image={item.NewsImage?.url || "/images/news1.png"}
            title={item.NewsTitle}
            description={item.NewsDescription}
            publishedTime={item.publishedAt}
            url={item.NewsUrl}
          />
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 cursor-pointer rounded-md font-['Open_Sans'] text-sm ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#16A831] text-white hover:bg-[#0d7a25] transition-colors"}`}
          >
            Previous
          </button>

          <span className="font-['Open_Sans'] text-sm text-[#0A2540]">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md cursor-pointer font-['Open_Sans'] text-sm ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#16A831] text-white hover:bg-[#0d7a25] transition-colors"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
