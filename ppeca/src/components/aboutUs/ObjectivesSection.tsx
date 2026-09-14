"use client";

import { useState, useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import { ABOUT_cardData } from "@/src/constant/data";


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
    const isSmallScreen = window.innerWidth < 640;
    const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 1024;
    let cardWidth;
    
    if (isSmallScreen) {
      cardWidth = 280 + 16;
    } else if (isMediumScreen) {
      cardWidth = 240 + 24;
    } else {
      cardWidth = 260 + 32;
    }
    
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#f8fafc] px-4 sm:px-6 pt-10 lg:pt-14 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide font-['Montserrat'] text-[#0a2540]">OBJECTIVES</h2>
        <p className="mt-3 max-w-4xl text-sm text-[#0a2540] font-['Open_Sans']">
          The main objective of the Association is to coordinate efforts of those engaged in the upstream petroleum industry activities.
        </p>

        <div className="relative mt-8 sm:mt-10 lg:mt-14 flex items-center justify-center">
          <button
          aria-label="Scroll objectives left"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 sm:-left-6 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all ${
              canScrollLeft ? "bg-[#16A831] hover:bg-[#128a28] cursor-pointer" : "bg-[#16A831] opacity-50 cursor-not-allowed"
            }`}
          >
            <HiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-2 sm:px-0"
          >
            {ABOUT_cardData.map((card, index) => (
              <article
                key={index}
                className="flex-shrink-0 flex flex-col items-center w-[300px] sm:w-[280px] h-[280px] px-6 py-8 bg-white rounded-lg border border-[#94a3b8]/60 text-center shadow"
              >
                <Image src={card.img} alt={card.title} width={48} height={48} loading="lazy" />
                <h3 className="mt-6 text-base font-semibold text-[#0a2540] font-['Open_Sans']">{card.title}</h3>
                <p className="mt-3 text-sm text-[#334155] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] font-['Open_Sans']">{card.desc}</p>
              </article>
            ))}
          </div>

          <button
          aria-label="Scroll objectives right"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 sm:-right-6 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all ${
              canScrollRight ? "bg-[#16A831] hover:bg-[#128a28] cursor-pointer" : "bg-[#16A831] opacity-50 cursor-not-allowed"
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