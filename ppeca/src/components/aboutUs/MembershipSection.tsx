"use client";

import React from "react";
import { useRouter } from "next/navigation";

const MembershipSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="px-4 sm:px-6 py-10 lg:py-14 text-[#0b3a63]">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="mb-4 sm:mb-6 font-['Montserrat'] text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#0a2540]">
          Membership
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 font-['Open_Sans'] sm:space-y-6 text-[13px] sm:text-[14px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#0a2540] max-w-5xl">
          <p>
            PPEPCA Membership shall be open to all the Petroleum Exploration and
            Production Companies operating in Pakistan.
          </p>

          <p>
            <span className="font-bold">Qualifications:</span> Membership
            shall be limited to Petroleum Exploration and Production Companies, and
            their subsidiaries, engaged in exploration and production of petroleum
            in Pakistan either as operator and/or working interest owner under a
            Petroleum Concession Agreement signed with the President of Pakistan.
            It shall be a requirement for membership that the intending Member must
            have a registered place of business, or at least a liaison office,
            within Pakistan.
          </p>

          <p>
            <span className="font-bold">Admission:</span> PPEPCA by majority
            vote of the Committee may admit any Exploration and Production Company
            not already a member, to become a Member, if it is in the interest of
            PPEPCA and provided such company meets the qualifications mentioned in
            these Articles. New members must be formally proposed and seconded by
            an existing member and elected by a majority vote of the Committee. The
            membership fee shall be prescribed by the Committee from time to time.
          </p>

          <p>
            <span className="font-bold">Contributions:</span> Every Member
            shall pay the annual contribution for each year in advance. The annual
            contribution calls shall be based on approved budget expenditure.
            Members shall make the contributions at the beginning of each year
            based on assessments made by the Committee any approved by the General
            Body.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 sm:mt-10">
          <button aria-label="Navigate to membership form" onClick={() => router.push("/members/membershipform")} className="rounded cursor-pointer bg-[#16A831] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-normal text-[#f8fafc] hover:bg-[#128a28] transition-colors">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;