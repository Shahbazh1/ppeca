import React from "react";
import news_hero_BG from "../../../public/images/news_hero_BG.png";

export default function LatestNewsHero() {
  return (
    <section
      className="relative w-full min-h-[520px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${news_hero_BG.src})`,
      }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-[#00330A]/95" />

      <div className="relative max-w-7xl mx-auto px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="text-white flex flex-col justify-start">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Latest
            <br />
            News
          </h1>
          <p className="text-sm text-[#C9C9C9] max-w-sm mb-6">
            Stay updated with the latest developments, announcements, and
            industry insights from PPEPCA and the petroleum sector.
          </p>
          <p className="text-sm text-[#C9C9C9] font-bold max-w-md mb-8">
            Get timely news, events, and important updates all in one place.
          </p>
          <button className="bg-white text-black text-sm font-medium px-10 py-3 rounded-md w-fit shadow">
            View All
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          {/* Card */}
          <div className="bg-white rounded-md p-6 shadow flex flex-row justify-between h-full">
            <div>
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-green-600 font-semibold uppercase">
                  Category
                </span>
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-gray-500">October 01</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                The Excom presently comprises of Nine members for the term
                October 01, 2024 upto September 30, 2026
              </p>
            </div>

            <img
              src="/images/svg_images/news_arrow.svg"
              alt="arrow"
              className="w-5 h-5 self-end mt-4"
            />
          </div>

          <div className="bg-white rounded-md p-6 shadow flex flex-row justify-between h-full">
            <div>
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-green-600 font-semibold uppercase">
                  Category
                </span>
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-gray-500">October 01</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                The Office bearers elected are i) Mr. Ali Taha Al Temimi, C.M,
                Kufpec as Chairman ii) Mr. Kamran Ajmal Mian, CEO, Prime
                Pakistan as Sr. V- Chairman & iii) Mr. Andrzej Kaczorowski - MD
                - PGNiG as Vice – Chairman
              </p>
            </div>

            <img
              src="/images/svg_images/news_arrow.svg"
              alt="arrow"
              className="w-5 h-5 self-end mt-4"
            />
          </div>

          <div className="bg-white rounded-md p-6 shadow flex flex-row justify-between h-full">
            <div>
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-green-600 font-semibold uppercase">
                  Category
                </span>
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-gray-500">October 01</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                The following have been nominated as Presidents of the four
                Expert Committees of PPEPCA: Mr. Zaheer Alam, President, United
                Energy Pakistan Ltd – (Policy & Rules Committee)...
              </p>
            </div>

            <img
              src="/images/svg_images/news_arrow.svg"
              alt="arrow"
              className="w-5 h-5 self-end mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
