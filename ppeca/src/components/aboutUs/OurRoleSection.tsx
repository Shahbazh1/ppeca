"use client";

import Image from "next/image";
import { ABOUT_ROLE_DATA } from "@/src/constant/data";

export default function OurRoleSection() {
  const { title, paragraphs, image, imageAlt } = ABOUT_ROLE_DATA;
  return (
    <section className="bg-[#f8fafc] px-4 sm:px-6  pt-10 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-['Montserrat'] lg:text-3xl xl:text-4xl font-bold text-[#0a2540]">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch mt-6">
          <div
            className="flex-[55%] flex flex-col justify-between text-[#0a2540] 
            text-sm sm:text-[14px] lg:text-[14px] xl:text-[15px] 
           leading-[1.5] sm:leading-[1.6] md:leading-[1.7] font-['Open_Sans']"
          >
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index > 0 ? "mt-4 sm:mt-6" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex-[45%] flex-shrink-0 relative">
            <div
              className="
                relative overflow-hidden rounded-lg border-2 border-green-600
                h-[220px] sm:h-[280px] md:h-[340px] 
                lg:h-full
              "
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
