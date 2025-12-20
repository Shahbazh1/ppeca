import React from "react";

const MembershipSection: React.FC = () => {
  return (
    <section className=" px-10 py-12 pt-6 text-[#0b3a63]">
      <div className="max-w-6xl">
        <h1 className="mb-6 lg:text-3xl xl:text-4xl font-bold tracking-tight text-[#0a2540]">
          Membership
        </h1>

        <p className="mb-6 max-w-5xl lg:text-[14px] xl:text-[15px] leading-relaxed text-[#0a2540]">
          PPEPCA Membership shall be open to all the Petroleum Exploration and
          Production Companies operating in Pakistan.
        </p>

        <p className="mb-6 max-w-5xl lg:text-[14px] xl:text-[15px] leading-relaxed text-[#0a2540]">
          <span className="font-bold">Qualifications:</span> Membership
          shall be limited to Petroleum Exploration and Production Companies, and
          their subsidiaries, engaged in exploration and production of petroleum
          in Pakistan either as operator and/or working interest owner under a
          Petroleum Concession Agreement signed with the President of Pakistan.
          It shall be a requirement for membership that the intending Member must
          have a registered place of business, or at least a liaison office,
          within Pakistan.
        </p>

        <p className="mb-6 max-w-5xl lg:text-[14px] xl:text-[15px] leading-relaxed text-[#0a2540]">
          <span className="font-bold">Admission:</span> PPEPCA by majority
          vote of the Committee may admit any Exploration and Production Company
          not already a member, to become a Member, if it is in the interest of
          PPEPCA and provided such company meets the qualifications mentioned in
          these Articles. New members must be formally proposed and seconded by
          an existing member and elected by a majority vote of the Committee. The
          membership fee shall be prescribed by the Committee from time to time.
        </p>

        <p className="mb-10 max-w-5xl lg:text-[14px] xl:text-[15px] leading-relaxed text-[#0a2540]">
          <span className="font-bold">Contributions:</span> Every Member
          shall pay the annual contribution for each year in advance. The annual
          contribution calls shall be based on approved budget expenditure.
          Members shall make the contributions at the beginning of each year
          based on assessments made by the Committee any approved by the General
          Body.
        </p>

        <button className="rounded bg-[#16a831] px-6 py-3 text-sm font-normal text-[#f8fafc] hover:bg-[#17912f] transition-colors">
          Become a Membership
        </button>
      </div>
    </section>
  );
};

export default MembershipSection;
