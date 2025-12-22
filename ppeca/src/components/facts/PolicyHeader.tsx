"use client";

import React from "react";

const PolicyHeader: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h1 className="text-[#0b2f4a] font-semibold leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[42px]">
          Gazetted Petroleum Exploration & Production
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Policy 2012
        </h1>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
          <button className="bg-[#16a831] px-6 sm:px-8 md:px-10 py-2 text-xs sm:text-sm font-medium text-white rounded-xs hover:opacity-90 transition">
            Visit
          </button>

          <button className="border border-[#16A831]/50 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-[#0b2f4a] rounded-xs hover:bg-[#0b2f4a] hover:text-white transition">
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default PolicyHeader;