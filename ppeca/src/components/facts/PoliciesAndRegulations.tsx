"use client";

import Image from "next/image";
import policyAndRegulatio from '../../../public/images/policyAndRegulatio.jpg'

export default function PoliciesAndRegulations() {
  return (
    <section className="w-full border-1 border-[#94a3b8] rounded-lg px-5 pt-10 bg-white ">
      <h2 className="mb-6 lg:text-3xl xl:text-4xl font-semibold text-[#0a2540]">
            Policies &amp; Regulations, Including
          </h2>
      <div className="mx-auto  flex max-w-7xl items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 ">
          

          <ul className="list-disc pl-4 xl:text-[17px] lg:text-[15px] leading-6">
            <li className="text-[#16a831] underline cursor-pointer">Petroleum Policies</li>
            <li className="text-[#0a2540]">Environment Policy / Guide</li>
            <li className="text-[#0a2540]">Mines Act 1948</li>
            <li className="text-[#0a2540]">Petroleum Exploration &amp; Production Rules 2001</li>
            <li className="text-[#0a2540]">Natural Gas Rules</li>
            <li className="text-[#0a2540]">Model PCA</li>
            <li className="text-[#0a2540]">Model PSA</li>
          </ul>

          <div className="mt-8">
            <p className="mb-2 text-[17px] font-semibold text-[#0B2545]">
              Visit:
            </p>
            <ul className="list-disc pl-12 pb-2 text-[16px]">
              <li className="text-[#16a831] underline cursor-pointer">
                Ministry of Petroleum &amp; Natural Resources
              </li>
              <li className="text-[#16a831] underline cursor-pointer">
                Directorate General of Petroleum Concessions
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative xl:pb-3">
          <div className="overflow-hidden rounded-xl border border-[#1FA44A]">
            <Image
              src={policyAndRegulatio}
              alt="Policies"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
