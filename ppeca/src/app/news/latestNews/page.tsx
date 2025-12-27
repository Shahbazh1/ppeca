// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import NewsCard from "../../../components/latestNews/NewsCard";

export default function Home() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/newses`;

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
      NewsTitle: "Pakistan’s Energy Sector Sees Growth",
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
    fetch(`${API_URL}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length) {
          setNews(data.data); // API returned valid data
        } else {
          setNews(fallbackNews); // Use fallback if API returns empty
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch error:", err);
        setNews(fallbackNews); // Use fallback on error
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-[#f8fafc] pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      {/* Breadcrumb */}
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        <Link href="/news" className="inline-block">
          {" "}
          News & Events{" "}
        </Link>{" "}
        / Lastest News
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
            title={item.NewsTitle || item.NewsTitle}
            description={item.NewsDescription || item.NewsDescription}
            publishedTime={item.publishedAt}
            url={item.NewsUrl}
          />
        ))}
      </div>
    </div>
  );
}
