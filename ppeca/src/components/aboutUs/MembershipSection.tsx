"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {ABOUT_MEMBERSHIP_SECTION_DATA} from "../../constant/data"

const MembershipSection: React.FC = () => {
  const router = useRouter();
  const { heading, paragraphs, cta } = ABOUT_MEMBERSHIP_SECTION_DATA;
  return (
    <section className="px-4 sm:px-6 py-10 lg:py-14 text-[#0b3a63]">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 sm:mb-6 font-['Montserrat'] text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#0a2540]">
          {heading}
        </h2>

        <div className="space-y-4 font-['Open_Sans'] sm:space-y-6 text-[13px] sm:text-[14px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#0a2540] max-w-5xl">
          {paragraphs.map((item) => (
            <p key={item.id}>
              {item.label && <span className="font-bold">{item.label} </span>}
              {item.text}
            </p>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <button aria-label={cta.ariaLabel} onClick={() => router.push(cta.path)} className="rounded cursor-pointer bg-[#16A831] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-normal text-[#f8fafc] hover:bg-[#128a28] transition-colors">
            {cta.label}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;