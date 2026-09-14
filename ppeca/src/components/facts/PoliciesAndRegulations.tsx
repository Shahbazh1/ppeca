"use client";

import Image from "next/image";
import { FACTS_POLICIES_SECTION_DATA } from "@/src/constant/data";

export default function PoliciesAndRegulations() {
  const { heading, policiesList, externalLinksHeading, externalLinks, imageData } = FACTS_POLICIES_SECTION_DATA;
  return (
    <section className="w-full rounded-lg border border-[#94a3b8] bg-white px-5 pt-10">
      <h2 className="mb-2 font-['Montserrat'] text-[#0a2540] text-[18px] font-semibold lg:text-3xl xl:text-4xl">
        {heading}
      </h2>

      <div className="mx-auto font-['Open_Sans'] flex flex-col lg:flex-row max-w-7xl items-start lg:items-center justify-between gap-10">
        <div className="flex-[0.55] mb-3">
          <ul className="list-disc pl-4 text-[#0a2540] lg:text-[15px] xl:text-[17px] leading-6">
            {policiesList.map((item) => (
              <li
                key={item.id}
                className={
                  item.isLink
                    ? "text-[#16A831] underline cursor-pointer hover:no-underline"
                    : ""
                }
                aria-label={item.ariaLabel}
              >
                {item.isLink && item.href ? (
                  <a target="_blank" rel="noopener noreferrer" href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-2 text-[17px] font-semibold text-[#0B2545]">{externalLinksHeading}</p>
            <ul className="list-disc pl-6 lg:pl-12 text-[16px]">
              {externalLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-[#16A831] hover:no-underline underline cursor-pointer"
                >
                  <a target="_blank" rel="noopener noreferrer" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-[0.45] relative w-full lg:w-auto">
          <div className=" p-5 overflow-hidden rounded-xl border border-[#16A831] h-64 ">
            <Image
              src={imageData.src}
              alt={imageData.alt}
              fill
              className="object-cover rounded-[8px] "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
