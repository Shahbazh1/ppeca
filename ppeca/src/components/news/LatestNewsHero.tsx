"use client";

import React, { useState, useEffect } from "react";
import news_hero_BG from "../../../public/images/news_hero_BG.png";
import Image from "next/image";
import Link from "next/link";
import NewsArrow from "../../../public/images/svg_images/news_arrow.svg";

const fallbackNews = [
  {
    category: "Category",
    date: "October 01",
    text: "The Excom presently comprises of Nine members for the term October 01, 2024 upto September 30, 2026",
    link: "https://www.rigzone.com/news/opec_reaffirms_decision_to_pause_production_hikes-1-dec-2025-182420-article/?utm_campaign=WEEKLY_2025_12_05&utm_source=GLOBAL_ENG&utm_medium=EM_NW_F1",
  },
  {
    category: "Category",
    date: "October 01",
    text: "The Office bearers elected are i) Mr. Ali Taha Al Temimi, C.M, Kufpec as Chairman ii) Mr. Kamran Ajmal Mian, CEO, Prime Pakistan as Sr. V- Chairman & iii) Mr. Andrzej Kaczorowski - MD - PGNiG as Vice – Chairman",
    link: "https://www.rigzone.com/news/opec_reaffirms_decision_to_pause_production_hikes-1-dec-2025-182420-article/?utm_campaign=WEEKLY_2025_12_05&utm_source=GLOBAL_ENG&utm_medium=EM_NW_F1",
  },
  {
    category: "Category",
    date: "October 01",
    text: "The following have been nominated as Presidents of the four Expert Committees of PPEPCA: Mr. Zaheer Alam, President, United Energy Pakistan Ltd – (Policy & Rules Committee)...",
    link: "https://www.rigzone.com/news/opec_reaffirms_decision_to_pause_production_hikes-1-dec-2025-182420-article/?utm_campaign=WEEKLY_2025_12_05&utm_source=GLOBAL_ENG&utm_medium=EM_NW_F1",
  },
];

export default function LatestNewsHero() {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL = `${API_BASE_URL}/api/newses`;
  useEffect(() => {
    let fallbackTimer: NodeJS.Timeout;

    // ⏳ 5-second fallback
    fallbackTimer = setTimeout(() => {
      if (newsItems.length === 0) {
        setNewsItems(fallbackNews);
        setLoading(false);
      }
    }, 5000);

    // 🔵 API call
    fetch(`${API_URL}?pagination[limit]=3&sort=publishedAt:desc`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length) {
          setNewsItems(data.data);
        }
        setLoading(false);
        clearTimeout(fallbackTimer); // ✅ stop fallback
      })
      .catch((err) => {
        console.error("News fetch error:", err);
        setLoading(false);
      });

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <section
      className="relative w-full min-h-[520px] overflow-hidden bg-contain bg-center"
      style={{ backgroundImage: `url(${news_hero_BG.src})` }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#00330A]/96" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="text-white flex flex-col justify-center pr-16 lg:justify-start">
            <div className="text-4xl font-['Montserrat'] sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Latest
              <br />
              News
            </div>
            <p className=" font-['Open_Sans'] text-sm sm:text-base text-[#C9C9C9] max-w-sm mb-4 sm:mb-6">
              Stay updated with the latest developments, announcements, and
              industry insights from PPEPCA and the petroleum sector.
            </p>
            <p className="text-sm font-['Open_Sans'] sm:text-base text-[#C9C9C9] font-bold max-w-md mb-6 sm:mb-8">
              Get timely news, events, and important updates all in one place.
            </p>
            <Link
              href="news/latestNews"
              className="bg-white cursor-pointer text-black text-sm font-medium px-10 py-3 rounded-md w-fit shadow hover:shadow-lg transition-shadow duration-300"
            >
              View All
            </Link>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
{loading && (
  <div className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
    <div className="mb-6">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 bg-[#16A831] rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-[#16A831] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-4 h-4 bg-[#16A831] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="text-xl font-semibold text-white mb-2">Fetching Latest News</h3>
      <p className="text-[#C9C9C9] text-sm">Gathering the most recent updates for you...</p>
    </div>
    
    <div className="mt-6 w-full bg-white/10 rounded-full h-2 overflow-hidden">
      <div className="bg-gradient-to-r from-[#16A831] to-[#0d7a25] h-full rounded-full animate-pulse" style={{ width: '70%' }}></div>
    </div>
  </div>
)}          {!loading && newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-4 sm:p-6 shadow flex flex-row items-center justify-between  hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 text-xs mb-2">
                    <span className="text-[#16A831] font-['Open_Sans'] font-semibold uppercase">
                      {item.Category || item.category}
                    </span>
                    <span className="w-2 h-2  rounded-full bg-gray-300" />
                    <span className="text-gray-500 font-['Open_Sans']">
                      {item.publishedAt
                        ? new Date(item.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "2-digit",
                            }
                          )
                        : item.date}
                    </span>
                  </div>
                  <p className="text-sm line-clamp-3 font-['Montserrat'] font-bold text-gray-900 leading-snug">
                    {item.NewsDescription || item.text}
                  </p>
                </div>

                <a href={item.NewsUrl || item.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={NewsArrow}
                    alt="arrow"
                    width={33}
                    height={33}
                    className="self-center cursor-pointer flex-shrink-0"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
