"use client";

import { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import industry_views from "../../../public/images/svg_images/industry_views.svg";
import petroleum_form from "../../../public/images/svg_images/petroleum_form.svg";
import recommendations from "../../../public/images/svg_images/recommendations.svg";
import represent_petroleum_industry from "../../../public/images/svg_images/training.svg";
import research_and_innovation from "../../../public/images/svg_images/research_and_innovation.svg";
import training from "../../../public/images/svg_images/training.svg";
import info_and_dataSharing from "../../../public/images/svg_images/info_and_dataSharing.svg";
import tech_development from "../../../public/images/svg_images/tech_development.svg";

const cardData = [
  {
    img: petroleum_form,
    title: "Petroleum forum",
    desc: "To provide a forum for petroleum companies to discuss common issues and develop joint strategies.",
  },
  {
    img: industry_views,
    title: "Industry views",
    desc: "To convey members' collective views on petroleum industry issues like legislation, taxation, transport, trade, safety, and labor.",
  },
  {
    img: represent_petroleum_industry,
    title: "Represent petroleum industry",
    desc: "To represent the E&P sector at all government levels on upstream-related issues.",
  },
  {
    img: recommendations,
    title: "Recommendations",
    desc: "To review upstream operations and propose measures that promote national self-sufficiency and optimal resource use.",
  },
  {
    img: research_and_innovation,
    title: "Research & Innovation",
    desc: "To perform or sponsor research and development initiatives relevant to the petroleum exploration and production industry.",
  },
  {
    img: training,
    title: "Training",
    desc: "To arrange training programs, courses, and seminars to enhance technical skills and professional expertise within the industry.",
  },
  {
    img: info_and_dataSharing,
    title: "Information & Data Sharing",
    desc: "To compile, collect, and circulate accurate, reliable, and up-to-date information on petroleum exploration, development, and production in Pakistan.",
  },
  {
    img: tech_development,
    title: "Technology Development",
    desc: "To develop plans for transferring and advancing suitable upstream technology in consultation with PPEPCA members.",
  },
];

const ObjectivesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollability);
    checkScrollability();

    return () => container.removeEventListener("scroll", checkScrollability);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    // Calculate card width based on screen size
    const isSmallScreen = window.innerWidth < 640;
    const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
    let cardWidth;
    
    if (isSmallScreen) {
      cardWidth = 280 + 16; // width + gap for small screens
    } else if (isMediumScreen) {
      cardWidth = 240 + 24; // width + gap for medium screens
    } else {
      cardWidth = 260 + 32; // width + gap for large screens (original)
    }
    
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#f8fafc] px-4 sm:px-6 py-10 lg:py-14 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide font-['Montserrat'] text-[#0a2540]">OBJECTIVES</h2>
        <p className="mt-3 max-w-4xl text-sm text-[#0a2540] font-['Open_Sans']">
          The main objective of the Association is to coordinate efforts of those engaged in the upstream petroleum industry activities.
        </p>

        {/* Cards Container */}
        <div className="relative mt-8 sm:mt-10 lg:mt-14 flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 sm:-left-6 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all ${
              canScrollLeft ? "bg-[#16A831] hover:bg-green-700 cursor-pointer" : "bg-[#16A831] opacity-50 cursor-not-allowed"
            }`}
          >
            <HiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-2 sm:px-0"
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center w-[300px] sm:w-[280px] h-[280px] px-6 py-8 bg-white rounded-lg border border-[#94a3b8]/60 text-center shadow"
              >
                <Image src={card.img} alt={card.title} width={48} height={48} loading="lazy" />
                <h3 className="mt-6 text-base font-semibold text-[#0a2540] font-['Open_Sans']">{card.title}</h3>
                <p className="mt-3 text-sm text-[#334155] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] font-['Open_Sans']">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 sm:-right-6 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all ${
              canScrollRight ? "bg-[#16A831] hover:bg-green-700 cursor-pointer" : "bg-[#16A831] opacity-50 cursor-not-allowed"
            }`}
          >
            <HiChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;