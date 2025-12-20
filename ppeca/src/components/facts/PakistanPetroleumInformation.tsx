"use client";

import Image from "next/image";
import pakistanPetroleumInformation from '../../../public/images/pakistanPetroleumInformation.jpg'

export default function PakistanPetroleumInformation() {
  return (
    <section className="w-full border-1 border-[#94a3b8] rounded-lg px-5 pt-10 pb-2 bg-white ">
      <h2 className="mb-4 xl:text-[38px] lg:text-[32px] font-semibold leading-tight text-[#0B2545]">
            Pakistan Petroleum Information<br />
            Service, Including:
          </h2>
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          

          <ol className="list-decimal pl-9 xl:text-[17px] lg:text-[15px] leading-6 text-[#2E3A59]">
            <li>Upstream Activity Maps</li>
            <li>Prospectivity Zone Map</li>
            <li>Energy Infrastructure Map</li>
            <li>Joint Venture Maps</li>
            <li>E&amp;P Upstream Operations</li>
            <li>Monthly reports</li>
            <li>Daily Upstream News</li>
            <li>Concessions</li>
            <li>Mining Leases</li>
            <li>Seismic Surveys</li>
            <li>Drilling Operations</li>
            <li>Discoveries</li>
            <li>Production and statistical data</li>
            <li>Annual Reports</li>
            <li>Pakistan Oil &amp; Gas Directory</li>
          </ol>

          <div className="">
            <p className="mb-1 text-[17px] font-semibold text-[#0B2545]">
              Available at:
            </p>
            <p className="text-[16px] text-[#14982c] underline cursor-pointer">
              http://www.ppisonline.com
            </p>
            <p className="text-[16px] text-[#14982c] underline cursor-pointer">
              Society of Petroleum Engineers
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 xl:mt-14 lg:mt-35 h-50">
  <div className="overflow-hidden rounded-sm border border-[#1FA44A]">
    <Image
      src={pakistanPetroleumInformation}
      alt="Petroleum Information"
      width={650}
      className="h-full w-full object-cover"
      priority
    />
  </div>
</div>

      </div>
    </section>
  );
}
