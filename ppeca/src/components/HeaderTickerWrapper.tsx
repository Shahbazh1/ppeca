import React from "react";
import Link from "next/link";
import { getLatestNews } from "../lib/news";
import ClientPathGuard from ".//../components/ClientPathGuard";

interface NewsItem {
  id: number;
  NewsTitle: string;
  slug?: string;
  NewsUrl?: string;
}

export default async function HeaderTickerWrapper() {
  const news: NewsItem[] = await getLatestNews(3);
  const hasNews = news && news.length > 0;

  return (
    <ClientPathGuard>
      <div className="flex h-11 w-full items-center overflow-hidden border-b border-slate-200/80 bg-white shadow-xs">
        {/* Fixed Left Badge */}
        <div className="z-20 flex h-full shrink-0 items-center bg-[#16a831] px-4 font-['Montserrat'] text-xs font-bold tracking-wider uppercase text-white shadow-xs sm:px-6 sm:text-sm">
          Latest News
        </div>

        {/* Content Area */}
        <div className="relative flex w-full items-center overflow-x-hidden">
          {hasNews ? (
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap py-1">
              {[...news, ...news, ...news].map((item, index) => {
                const newsHref = item.slug
                  ? `/news/${item.slug}`
                  : item.NewsUrl || "/news";

                return (
                  <React.Fragment key={`${item.id}-${index}`}>
                    <Link
                      href={newsHref}
                      className="shrink-0 font-['Open_Sans'] text-xs font-medium text-[#0A2540] transition-colors duration-200 hover:text-[#16a831] sm:text-sm"
                    >
                      {item.NewsTitle}
                    </Link>
                    <span className="select-none text-xs font-bold text-slate-300 sm:text-sm">
                      /
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            <div className="px-4 font-['Open_Sans'] text-xs font-medium text-[#0A2540] sm:text-sm">
              No Latest News
            </div>
          )}
        </div>
      </div>
    </ClientPathGuard>
  );
}