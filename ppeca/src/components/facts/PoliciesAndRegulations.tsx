"use client";

import Image from "next/image";
import policyAndRegulatio from '../../../public/images/policyAndRegulatio.jpg';

export default function PoliciesAndRegulations() {
  return (
    <section className="w-full rounded-lg border border-[#94a3b8] bg-white px-5 pt-10">
      <h2 className="mb-6 font-['Montserrat'] text-[#0a2540] text-[18px] font-semibold lg:text-3xl xl:text-4xl">
        Policies &amp; Regulations, Including
      </h2>

      <div className="mx-auto font-['Open_Sans'] flex flex-col lg:flex-row max-w-7xl items-start lg:items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <ul className="list-disc pl-4 text-[#0a2540] lg:text-[15px] xl:text-[17px] leading-6">
            <li className="text-[#16A831] underline cursor-pointer"><a target="_blank" href="http://www.mpnr.gov.pk/">Petroleum Policies</a></li>
            <li>Environment Policy / Guide</li>
            <li>Mines Act 1948</li>
            <li>Petroleum Exploration &amp; Production Rules 2001</li>
            <li>Natural Gas Rules</li>
            <li>Model PCA</li>
            <li>Model PSA</li>
          </ul>

          <div className="mt-8">
            <p className="mb-2 text-[17px] font-semibold text-[#0B2545]">Visit:</p>
            <ul className="list-disc pl-6 lg:pl-12 text-[16px]">
              <li className="text-[#16A831] underline cursor-pointer">
                <a target="_blank" href="http://www.mpnr.gov.pk/">Ministry of Petroleum &amp; Natural Resources</a>
              </li>
              <li className="text-[#16A831] underline cursor-pointer">
                <a target="_blank" href="http://www.mpnr.gov.pk/">Directorate General of Petroleum Concessions</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full lg:w-auto">
          <div className="overflow-hidden rounded-xl border border-[#16A831] h-64 lg:h-80">
            <Image
              src={policyAndRegulatio}
              alt="Policies"
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
