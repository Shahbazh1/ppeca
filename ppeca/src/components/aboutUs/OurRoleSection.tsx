"use client";

import Image from "next/image";
import roleSec_side_img from "../../../public/images/roleSec_side_img.png";

export default function OurRoleSection() {
  return (
    <section className="bg-[#f8fafc] px-4 sm:px-6 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#0a2540]">
          Our Role
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch mt-6">
          {/* LEFT CONTENT */}
          <div className="flex-[55%] flex flex-col justify-between text-[#0a2540] 
            text-sm sm:text-[14px] lg:text-[14px] xl:text-[15px] 
            leading-6 lg:leading-5 xl:leading-6">
            
            <p>
              In the eighties, with the rising curve of activities and the unprecedented surge in petroleum exploration and production (E&P) activities, necessitated frequent coordination among those engaged in this sector and the need to exchange ideas on a variety of subjects of common interest. As a result of consultations between the concerned companies a need was felt to establish an organization which, while playing an advisory role, could safeguard the interest of its member companies. In 1988 the few companies engaged in exploration and production of petroleum formed an umbrella organization originally conceived under the name and style of Petroleum Exploration and Production Companies Advisory Committee (PEPCAC), as a representative body of local and foreign companies operating in Pakistan at that time. In May 1995, the organization was registered as a company, limited by guarantee, without any share capital, under the new title of ‘Pakistan Petroleum Exploration and Production Companies Association’ (PPEPCA).
            </p>

            <p className="mt-4 sm:mt-6">
              PPEPCA has thus grown out of its member companies engaged in petroleum exploration and production activities. Its establishment was an important landmark in the history of petroleum industry of Pakistan. It was culmination of endeavors, spread over a long period, of five private sector companies namely; Mari Gas, Oxy, POL, PPL, UTP and a public sector company- OGDCL. PPEPCA now, comprises (14) members, (8) of which are foreign E&P companies.
            </p>

            <p className="mt-4 sm:mt-6">
              PPEPCA has recognition and support of the Ministry of Energy (Petroleum Division).
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-[45%] flex-shrink-0 relative">
            <div
              className="
                relative overflow-hidden rounded-lg border-2 border-green-600
                h-[220px] sm:h-[280px] md:h-[340px] 
                lg:h-full
              "
            >
              <Image
                src={roleSec_side_img}
                alt="Petroleum Industry Role"
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
