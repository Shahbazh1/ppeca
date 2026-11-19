
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import news_hero_BG from "../../../../public/images/news_hero_BG.png";

interface Props {
  newsItems: any[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function LatestNewsHeroClient({ newsItems }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectionVersion, setSelectionVersion] = useState(0);

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

  if (!newsItems.length) return null;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundImage: `url(${news_hero_BG.src})` }}
    >
      <div className="absolute inset-0 bg-[#00330A]/96" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-10 lg:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr_0.9fr] gap-6 lg:gap-9">

          {/* LEFT: NEWS LIST */}
          <div className="flex flex-col text-white lg:border-r lg:border-white/40 lg:pr-8">

            <span className="text-sm text-white/80 mb-5">
              Latest News
            </span>

            <div className="flex flex-col gap-2 flex-1">

              {newsItems.map((item, index) => (
                <button
                  key={item.id ?? index}
                  onClick={() => handleNewsClick(index)}
                  className={`text-left p-3 rounded-md transition-all duration-300 cursor-pointer
                    ${
                      selectedIndex === index
                        ? "bg-white/10 border-l-4 border-white"
                        : "border-l-4 border-transparent "
                    }`}
                >
                  <p className="text-sm leading-relaxed line-clamp-3">
                    {item.publishedAt
                      ? new Date(item.publishedAt).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "2-digit" }
                        ) + ": "
                      : ""}
                    {item.NewsSummary ||
                  item.NewsDescription ||
                  item.text}
                  </p>
                </button>
              ))}

            </div>

            <Link
              href="news/latestNews"
              className="bg-white text-black text-center rounded-md py-3 mt-6 font-medium"
            >
              View All
            </Link>
          </div>

          {/* CENTER: SELECTED NEWS IMAGE */}
          <div className="flex items-center lg:border-r lg:border-white/40 lg:pr-8">

            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-white/10">

              {/* Replace this with your actual API image field */}
              {selectedNews.NewsImage?.url ? (
                <Image
                  src={`${API_BASE_URL}${selectedNews.NewsImage.url}`}
                  alt={selectedNews.NewsTitle || "News"}
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  News Image
                </div>
              )}

            </div>
          </div>

          {/* RIGHT: NEWS SUMMARY */}
          <div className="flex flex-col text-white justify-between py-2">

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Summary
              </h2>

              <span className="inline-block bg-white text-gray-900 text-xs rounded-md px-3 py-2 mb-4">
                {selectedNews.publishedAt
                  ? new Date(selectedNews.publishedAt).toLocaleDateString(
                      "en-US",
                      { month: "long", day: "2-digit" }
                    )
                  : selectedNews.date}
              </span>

              {/* <h3 className="font-semibold text-base mb-3">
                {selectedNews.NewsTitle || selectedNews.title}
              </h3> */}

              <p className="text-sm leading-relaxed text-white/90 line-clamp-7">
                {selectedNews.NewsSummary ||
                  selectedNews.NewsDescription ||
                  selectedNews.text}
              </p>
            </div>

            <Link
              href={`/news/${selectedNews.slug}`}
              className="border border-white rounded-md px-5 py-3 mt-8 w-fit hover:bg-white hover:text-black transition-all"
            >
              Read Details →
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
