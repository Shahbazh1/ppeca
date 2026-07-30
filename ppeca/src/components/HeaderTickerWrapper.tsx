"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NewsItem {
  id: number;
  NewsTitle: string;
  slug?: string;
  NewsUrl?: string;
}

export default function HeaderTickerWrapper() {
  const pathname = usePathname();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Only show on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const fetchLatestNews = async () => {
      try {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
        const res = await fetch(
          `${API_BASE_URL}/api/newses?pagination[pageSize]=3&sort=publishedAt:desc`
        );
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();
        setNews(data.data || []);
      } catch (err) {
        console.error("Header ticker fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, [isHomePage]);

  if (!isHomePage) return null;

  const hasNews = news && news.length > 0;

  return (
    <div className="w-full bg-white flex items-center h-11 border-b border-slate-200/80 shadow-xs overflow-hidden">
      {/* Fixed Left Badge - Stopped/Static */}
      <div className="shrink-0 bg-[#16a831] text-white px-4 sm:px-6 h-full flex items-center font-bold text-xs sm:text-sm z-20 font-[var(--font-montserrat)] tracking-wider uppercase shadow-xs">
        Latest News
      </div>

      {/* Content Area */}
      <div className="relative flex overflow-x-hidden w-full items-center">
        {loading ? (
          // Static Loading State (No Scroll)
          <div className="px-4 text-slate-400 text-xs sm:text-sm font-[var(--font-open-sans)] italic">
            Loading updates...
          </div>
        ) : hasNews ? (
          // Scrollable Marquee Track (Only when news exists)
          <div className="animate-marquee whitespace-nowrap flex items-center gap-6 py-1">
            {[...news, ...news, ...news].map((item, index) => {
              const newsHref = item.slug ? `/news/${item.slug}` : item.NewsUrl || "/news";

              return (
                <React.Fragment key={`${item.id}-${index}`}>
                  <Link
                    href={newsHref}
                    className="text-[#0A2540] hover:text-[#16a831] font-[var(--font-open-sans)] font-medium text-xs sm:text-sm transition-colors duration-200 shrink-0"
                  >
                    {item.NewsTitle}
                  </Link>
                  <span className="text-slate-300 font-bold select-none text-xs sm:text-sm">
                    /
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        ) : (
          // Static "No Latest News" State (No Scroll)
          <div className="px-4 text-[#0A2540] font-medium text-xs sm:text-sm font-[var(--font-open-sans)]">
            No Latest News
          </div>
        )}
      </div>
    </div>
  );
}