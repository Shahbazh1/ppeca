
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import news_hero_BG from "../../../../public/images/news_hero_BG.png";

interface Props {
  newsItems: any[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function LatestNewsHeroClient({ newsItems }: Props) {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectionVersion, setSelectionVersion] = useState(0);
  const [loadingButton, setLoadingButton] = useState<"viewAll" | "readDetails" | null>(null);

  const selectedNews = newsItems[selectedIndex];

  useEffect(() => {
    if (!newsItems.length) return;

    const timer = setTimeout(() => {
      setSelectedIndex(0);
    }, 2 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [selectedIndex, selectionVersion, newsItems.length]);

  const handleNewsClick = (index: number) => {
    setSelectedIndex(index);
    setSelectionVersion((version) => version + 1);
  };

  const handleNavigation = (type: "viewAll" | "readDetails", href: string) => {
    if (loadingButton) return;

    setLoadingButton(type);
    router.push(href);
  };

  if (!newsItems.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${news_hero_BG.src})` }}>
      <div className="absolute inset-0 bg-[#00330A]/95" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-14 py-12 xl:py-[54px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_0.9fr] xl:grid-cols-[0.95fr_1.4fr_0.85fr] gap-8 lg:gap-7 xl:gap-9 xl:min-h-[325px]">

          {/* LEFT: LATEST NEWS */}
          <div className="flex flex-col text-white lg:border-r lg:border-white/40 lg:pr-7 xl:pr-9">

            <div className="mb-5 xl:mb-4">
              <span className="inline-flex items-center rounded-full border border-[#65B878]/80 px-3 py-1 text-xs xl:text-[13px] font-medium text-[#A4D8AE]">
                Latest News
              </span>
            </div>

            {/* News List */}
            <div className="flex flex-col flex-1 gap-1">
              {newsItems.map((item, index) => (
                <button key={item.id ?? index} onClick={() => handleNewsClick(index)} className={`w-full text-left rounded-md px-3 py-2.5 xl:px-3 xl:py-2.5 border-l-[3px] transition-all duration-300 cursor-pointer ${selectedIndex === index ? "bg-white/10 border-white" : "border-transparent hover:bg-white/5"}`}>
                  <p className="text-[13px] xl:text-sm leading-[1.55] text-white/95 line-clamp-3">
                    {item.publishedAt ? new Date(item.publishedAt).toLocaleDateString("en-US", { month: "short", day: "2-digit" }) + ": " : ""}
                    {item.NewsSummary || item.NewsDescription || item.text}
                  </p>
                </button>
              ))}
            </div>

            {/* View All Button */}
            <button type="button" onClick={() => handleNavigation("viewAll", "/news/latestNews")} disabled={loadingButton !== null} className="flex items-center justify-center gap-2 w-full min-h-[40px] bg-white text-[#111] rounded-lg py-2.5 xl:py-2 mt-6 text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 disabled:cursor-wait cursor-pointer">
              {loadingButton === "viewAll" ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-gray-400 border-t-transparent animate-spin" />
                  Loading...
                </>
              ) : (
                "View All"
              )}
            </button>
          </div>

          {/* CENTER: SELECTED NEWS IMAGE */}
          <div className="flex items-center justify-center lg:border-r lg:border-white/40 lg:pr-7 xl:pr-9">
            <div className="relative w-full aspect-[16/10] xl:aspect-[16/10] overflow-hidden rounded-lg bg-white/10 shadow-lg group">

              {selectedNews?.NewsImage?.url && (
                <Image src={`${API_BASE_URL}${selectedNews.NewsImage.url}`} alt={selectedNews.NewsImage.alternativeText || selectedNews.NewsTitle || "News"} fill priority unoptimized className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" onError={(e) => console.log("Image loading failed:", e)} />
              )}

              {!selectedNews?.NewsImage?.url && (
                <div className="w-full h-full flex items-center justify-center text-white text-sm">
                  News Image Not Available
                </div>
              )}

              {/* Image Indicators */}
              {newsItems.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {newsItems.map((item, index) => (
                    <span key={item.id ?? index} className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? "w-6 bg-white" : "w-1.5 bg-white/50"}`} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: NEWS SUMMARY */}
          <div className="flex flex-col justify-between text-white py-1 xl:py-0">

            <div>
              <h2 className="text-3xl sm:text-4xl xl:text-[34px] font-bold tracking-tight mb-5 xl:mb-4">
                Summary
              </h2>

              {/* Date Badge */}
              <span className="inline-flex items-center bg-white text-[#222] rounded-md px-3 py-1.5 text-xs font-medium mb-4">
                {selectedNews.publishedAt ? new Date(selectedNews.publishedAt).toLocaleDateString("en-US", { month: "long", day: "2-digit" }) : selectedNews.date}
              </span>

              {/* Summary Text */}
              <p className="text-sm leading-[1.6] text-white/90 line-clamp-7">
                {selectedNews.NewsSummary || selectedNews.NewsDescription || selectedNews.text}
              </p>
            </div>

            {/* Read Details Button */}
            <button type="button" onClick={() => handleNavigation("readDetails", `/news/${selectedNews.slug}`)} disabled={loadingButton !== null} className="inline-flex items-center justify-center gap-2 border border-white/80 rounded-lg px-5 py-2.5 mt-7 xl:mt-5 w-fit min-w-[130px] min-h-[42px] text-sm font-medium hover:bg-white hover:text-[#00330A] transition-colors duration-300 disabled:cursor-wait cursor-pointer">
              {loadingButton === "readDetails" ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Read Details
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
