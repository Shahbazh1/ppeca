"use client";

import Image from "next/image";
import pakistanPetroleumInformation from '../../../public/images/pakistanPetroleumInformation.jpg';

export default function PakistanPetroleumInformation() {
  return (
    <section className="w-full rounded-lg border border-[#94a3b8] bg-[#f8fafc] px-5 pt-10 pb-6">
      <h2 className="mb-6 font-['Montserrat'] text-[#0B2545] text-[18px] font-semibold lg:text-3xl xl:text-4xl leading-tight">
        Pakistan Petroleum Information<br />
        Service, Including:
      </h2>

      <div className="mx-auto font-['Open_Sans'] flex flex-col lg:flex-row max-w-7xl items-start justify-between gap-10">
        {/* Left Content */}
        <div className="flex-[0.55]">
          <ol className="list-decimal pl-6 lg:pl-9 text-[#2E3A59] lg:text-[15px] xl:text-[17px] leading-6">
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

          <div className="mt-6">
            <p className="mb-1 text-[17px] font-semibold text-[#0B2545]">Available at:</p>
            <p className="text-[16px] text-[#16A831] hover:no-underline underline cursor-pointer">
               <a target="_blank" href="http://www.ppisonline.com/">http://www.ppisonline.com</a>
            </p>
            <p  className="text-[16px] hover:no-underline text-[#16A831] underline cursor-pointer">
              <a target="_blank" href="http://www.spe.org/" aria-label="Visit Society of Petroleum Engineers">Society of Petroleum Engineers </a>
            </p>
          </div>
        </div>

        {/* Right Image */}
        
        <div className="flex-[0.45] w-full lg:w-auto mt-8 lg:mt-0">
          <div className="overflow-hidden rounded-lg border border-[#16A831] h-full min-h-[300px] lg:min-h-[460px] relative">
            <Image
              src={pakistanPetroleumInformation}
              alt="Petroleum Information"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
