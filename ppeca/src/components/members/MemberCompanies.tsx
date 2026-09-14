"use client";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MEMBERS_memberCompaniesContent } from "@/src/constant/data";

export default function MemberCompanies() {
  const {heading, subheading, searchPlaceholder, filters, companies } = MEMBERS_memberCompaniesContent
  const [search, setSearch] = useState("");

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-[#f8fafc] max-w-8xl pt-8 sm:pt-12  px-4 sm:px-6 md:px-[2.49rem] xl:px-[3rem] ">
      <div className="">
        <div className="text-center mb-[1.5rem] sm:mb-[2rem] md:mb-[2.025rem] lg:mb-[2.25rem] xl:mb-[2.5rem]">
          <h1 className="xl:text-[2.25rem] sm:text-[1.35rem] lg:text-[2.025rem] md:text-[1.8225rem] text-[1.35rem] font-bold text-[#0A2540]">
            {heading}
          </h1>
          <p className="text-[0.875rem] font-['Open_Sans'] sm:text-[1rem] md:text-[0.91125rem] lg:text-[1.0125rem] xl:text-[1.125rem] font-normal text-[#334155]">
            {subheading}
          </p>
        </div>

        <div className="w-full  bg-[#f8fafc]">
          <div className="mb-6 sm:mb-8 md:mb-8 lg:mb-9 xl:mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 w-full border border-[#94A3B8] rounded-lg px-4 py-3 sm:py-0 sm:h-12 lg:pr-16 md:pr-2 bg-[#f8fafc]">
              <div className="flex items-center flex-1 w-full">
                <FiSearch size={20} className="mr-3 shrink-0 text-[#334155]" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none flex-1 w-full text-sm sm:text-[0.81125rem] md:text-[0.81125rem] lg:text-[1.0125rem] xl:text-[1.125rem] text-[#0b2b4c] placeholder-[#94A3B8]"
                />
              </div>

              {/* <div className="flex flex-wrap gap-2 w-full sm:w-auto sm:ml-2">
                {filters.map((item, index) => (
                  <button
                    key={item}
                    className={`h-8 cursor-pointer px-3 sm:px-2 md:px-2 lg:px-4 text-xs font-normal rounded border whitespace-nowrap transition-colors ${
                      index === 0
                        ? "bg-[#16A831] text-white border-[#16A83180]"
                        : "text-[#0b2b4c] border-[#16A83180] bg-transparent hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 sm:gap-x-4 md:gap-x-[0.875rem] xl:gap-x-[16px] gap-y-4 sm:gap-y-5 md:gap-y-[1.35rem] lg:gap-y-[1.5rem] justify-items-center">
          {filteredCompanies.map((company) => {
            return (
              <CompanyCard
                key={company.id}
                logo={company.logo}
                name={company.name}
                id={company.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface Props {
  name: string;
  logo: StaticImageData;
  id: number;
}

function CompanyCard({ name, logo, id }: Props) {
  const router = useRouter();
  return (
    <div className="py-[0.5rem] sm:py-[0.5625rem] md:py-[0.625rem] lg:py-[0.625rem] px-[0.75rem] sm:px-[0.825rem] md:px-[0.925rem] lg:px-[1.325rem] gap-[0.5rem] sm:gap-[0.5625rem] md:gap-[0.5625rem] lg:gap-[0.625rem] h-full w-full bg-white rounded-sm border-[0.5px] border-[#84929f] flex items-center justify-between flex-col">
      <div className="relative text-center h-[3rem] sm:h-[3.5rem] md:h-[3.6rem] lg:h-[4rem] w-[4.5rem] sm:w-[5rem] md:w-[5.0625rem] lg:w-[5.625rem] xl:w-[6.1875rem] 2xl:w-[6.8075rem] xl:h-[4.4rem] 2xl:h-[4.8475rem] w-full">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      <p className="text-center font-['Open_Sans'] text-[0.75rem] sm:text-[0.8rem] md:text-[0.825rem] lg:text-[1.025rem] xl:text-[1.125rem] text-[#334155]">
        {name}
      </p>

      <button
        aria-label={`View profile of ${name}`}
        onClick={() => router.push(`/members/membersPage?id=${id}`)}
        className="cursor-pointer bg-[#16A831] hover:bg-[#128a28] font-['Open_Sans'] text-[#FFFFFF] text-[0.75rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] px-2 sm:px-3 md:px-2 lg:px-4 py-1 sm:py-1.5 md:py-1 lg:py-2 rounded-sm hover:bg-[#16A831] transition"
      >
        View Profile
      </button>
    </div>
  );
}
