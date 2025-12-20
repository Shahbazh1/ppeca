"use client";

import { useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiUsers, FiMessageSquare, FiFileText } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import industry_views from "../../../public/images/svg_images/industry_views.svg";
import petroleum_form from "../../../public/images/svg_images/petroleum_form.svg";
import recommendations from "../../../public/images/svg_images/recommendations.svg";
import represent_petroleum_industry from "../../../public/images/svg_images/represent_petroleum_industry.svg";
import Image from "next/image";

const ObjectivesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 260 + 32; // card width + gap
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <section className="relative bg-[#f8fafc] px-6  text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-3xl font-bold tracking-wide text-[#0a2540]">
          OBJECTIVES
        </h2>
        <p className="mt-3 max-w-4xl text-sm text-[#0a2540]">
          The main objective of the Association is to Coordinate efforts of
          those engaged in the up stream petroleum industry activities
        </p>

        {/* Cards Container */}
        <div className="relative mt-14">
          <div className="mx-auto flex items-center justify-center">
            <div className="relative flex items-center">
              {/* Left Arrow */}
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`absolute -left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                  canScrollLeft
                    ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                    : "bg-green-600 cursor-not-allowed opacity-50"
                }`}
              >
                <HiChevronLeft className="h-6 w-6 text-white" />
              </button>

              {/* Scrollable Cards Container */}
              <div
                ref={scrollContainerRef}
                onScroll={checkScrollability}
                className="flex lg:gap-5 xl:gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* Card 1 */}
                <div className="flex h-[280px] xl:w-[260px]  lg:w-[210px]  flex-shrink-0 flex-col items-center rounded-lg border-[#94a3b8]/60 border-1 bg-white px-6 py-8 text-center shadow">
                  <Image
                    src={petroleum_form}
                    alt="Petroleum forum"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-base font-semibold text-[#0a2540]">
                    Petroleum forum
                  </h3>
                  <p className="mt-3 text-sm text-[#334155]">
                    To provide a forum for petroleum companies to discuss common
                    issues and develop joint strategies.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="flex h-[280px] xl:w-[260px]  lg:w-[210px] flex-shrink-0 flex-col items-center rounded-lg border-[#94a3b8]/60 border-1 bg-white px-6 py-8 text-center shadow">
                  <Image
                    src={industry_views}
                    alt="Industry views"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-base font-semibold text-[#0a2540]">
                    Industry views
                  </h3>
                  <p className="mt-3 text-sm text-[#334155]">
                    To convey members' collective views on petroleum industry
                    issues like legislation, taxation, transport, trade, safety,
                    and labor
                  </p>
                </div>

                {/* Card 3 */}
                <div className="flex h-[280px] xl:w-[260px]  lg:w-[210px] flex-shrink-0 flex-col items-center rounded-lg border-[#94a3b8]/60 border-1 bg-white px-6 py-8 text-center shadow">
                  <Image
                    src={represent_petroleum_industry}
                    alt="Represent petroleum industry"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-base font-semibold text-[#0a2540]">
                    Represent petroleum industry
                  </h3>
                  <p className="mt-3 text-sm text-[#334155]">
                    To represent the E&amp;P sector at all government levels on
                    upstream-related issues.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="flex h-[280px] xl:w-[260px]  lg:w-[210px] flex-shrink-0 flex-col items-center rounded-lg border-[#94a3b8]/60 border-1 bg-white px-6 py-8 text-center shadow">
                  <Image
                    src={recommendations}
                    alt="Recommendations"
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-6 text-base font-semibold text-[#0a2540]">
                    Recommendations
                  </h3>
                  <p className="mt-3 text-sm text-[#334155]">
                    To review upstream operations and propose measures that
                    promote national self-sufficiency and optimal resource use
                  </p>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`absolute -right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                  canScrollRight
                    ? "bg-green-600 hover:bg-green-700 cursor-pointer"
                    : "bg-green-600 cursor-not-allowed opacity-50"
                }`}
              >
                <HiChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
