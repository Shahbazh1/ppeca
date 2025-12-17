import React from "react";

export default function LatestNewsHero() {
  return (
    <section className="relative w-full min-h-[520px] bg-[#0b3d1e] overflow-hidden">
      {/* Background overlay image hint */}
      <div className="absolute inset-0 opacity-20 bg-[url('/hero-bg.png')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-5xl font-bold leading-tight mb-6">Latest<br />News</h1>
          <p className="text-sm text-gray-200 max-w-md mb-6">
            Stay updated with the latest developments, announcements, and industry insights from PPEPCA and the petroleum sector.
          </p>
          <p className="text-sm text-gray-200 max-w-md mb-8">
            Get timely news, events, and important updates all in one place.
          </p>
          <button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-md w-fit shadow">
            View All
          </button>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          {/* Card */}
          <div className="bg-white rounded-xl p-6 shadow flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-green-600 font-semibold uppercase">Category</span>
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-gray-500">October 01</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                The Excom presently comprises of Nine members for the term October 01, 2024 upto September 30, 2026
              </p>
            </div>
            <span className="text-gray-400 text-xl">↗</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-green-600 font-semibold uppercase">Category</span>
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-gray-500">June 2025</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                The Office bearers elected are i) Mr. Ali Taha Al Temimi, C.M, Kufpec as Chairman ii) Mr. Kamran Ajmal Mian, CEO, Prime Pakistan as Sr. V- Chairman & iii) Mr. Andrzej Kaczorowski - MD - PGNiG as Vice – Chairman
              </p>
            </div>
            <span className="text-gray-400 text-xl">↗</span>
          </div>

          <div className="bg-white rounded-xl p-6 shadow flex justify-between items-start">
            <div>
              <div className="flex items-center gap-3 text-xs mb-2">
                <span className="text-green-600 font-semibold uppercase">Category</span>
                <span className="w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-gray-500">June 2025</span>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-snug">
                The following have been nominated as Presidents of the four Expert Committees of PPEPCA: Mr. Zaheer Alam, President, United Energy Pakistan Ltd – (Policy & Rules Committee)...
              </p>
            </div>
            <span className="text-gray-400 text-xl">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
