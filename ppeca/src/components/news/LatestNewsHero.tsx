import React from "react";
import news_hero_BG from "../../../public/images/news_hero_BG.png";
import Image from "next/image";
import Link from "next/link";
import NewsArrow from "../../../public/images/svg_images/news_arrow.svg";
import { getLatestNews } from "@/src/lib/news";

const newsHeroContent = {
  titleLine1: "Latest",
  titleLine2: "News",
  descriptionPrimary:
    "Stay updated with the latest developments, announcements, and industry insights from PPEPCA and the petroleum sector.",
  descriptionSecondary:
    "Get timely news, events, and important updates all in one place.",
  viewAllButton: {
    label: "View All",
    href: "news/latestNews",
  },
  emptyState: {
    title: "No News Available",
    description:
      "Currently there are no news updates. Please check back later for the latest announcements.",
  },
};

export default async function LatestNewsHero() {
  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  // const API_URL = `${API_BASE_URL}/api/newses?pagination[limit]=3&sort=publishedAt:desc`;

  // let newsItems = [];
  // let loading = true;
  // let error = null;

  // try {
  //   const res = await fetch(API_URL, { next: { revalidate: 300 } });

  //   if (!res.ok) {
  //     throw new Error('Failed to fetch news');
  //   }

  //   const data = await res.json();

  //   // If data exists, use it; otherwise, keep newsItems as an empty array
  //   if (data?.data?.length > 0) {
  //     newsItems = data.data;
  //   } else {
  //     newsItems = []; // This ensures the "No News Available" UI triggers
  //   }
  //   loading = false;
  // } catch (err) {
  //   console.error("News fetch error:", err);
  //   error = err;

  //   // CHANGE THIS: Instead of newsItems = fallbackNews,
  //   // keep it as an empty array to show your "No News Available" UI
  //   newsItems = [];
  //   loading = false;
  // }

  const newsItems = await getLatestNews(3);

  return (
    <section
      className="relative w-full min-h-[520px] overflow-hidden bg-contain bg-center"
      style={{ backgroundImage: `url(${news_hero_BG.src})` }}
    >
      <div className="absolute inset-0 bg-[#00330A]/96" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_55%] gap-8 lg:gap-12">
          <div className="text-white flex flex-col justify-center pr-16 lg:justify-start">
            <div className="text-4xl font-['Montserrat'] sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              {newsHeroContent.titleLine1}
              <br />
              {newsHeroContent.titleLine2}
            </div>
            <p className=" font-['Open_Sans'] text-sm sm:text-base text-[#C9C9C9] max-w-sm mb-4 sm:mb-6">
              {newsHeroContent.descriptionPrimary}
            </p>
            <p className="text-sm font-['Open_Sans'] sm:text-base text-[#C9C9C9] font-bold max-w-md mb-6 sm:mb-8">
              {newsHeroContent.descriptionSecondary}
            </p>
            <Link
              href={newsHeroContent.viewAllButton.href}
              className="bg-white cursor-pointer text-black text-sm font-medium px-10 py-3 rounded-md w-fit shadow hover:shadow-lg transition-shadow duration-300"
            >
              {newsHeroContent.viewAllButton.label}
            </Link>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {newsItems.length === 0 && (
              <div className="flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  {newsHeroContent.emptyState.title}
                </h3>
                <p className="text-[#C9C9C9] text-sm max-w-xs">
                  {newsHeroContent.emptyState.description}
                </p>
              </div>
            )}

            {newsItems.length > 0 &&
              newsItems.map((item: any, index: any) => (
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
                              },
                            )
                          : item.date}
                      </span>
                    </div>
                    <p className="text-sm line-clamp-3 font-['Montserrat'] font-bold text-gray-900 leading-snug">
                      {item.NewsDescription || item.text}
                    </p>
                  </div>

                  <Link href={`/news/${item.slug}`}>
                    <Image
                      src={NewsArrow}
                      alt="arrow"
                      width={33}
                      height={33}
                      className="self-center cursor-pointer flex-shrink-0"
                      loading="lazy"
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
