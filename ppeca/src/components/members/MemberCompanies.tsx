'use client'
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation';

import AEPL_LOGO from "../../../public/images/companies_logo/AEPL_LOGO.jpg";
import GHPL_LOGO from "../../../public/images/companies_logo/GHPL_LOGO.png";
import KPOGCL_LOGO from "../../../public/images/companies_logo/KPOGCL_LOGO.png";
import KUFPEC_LOGO from "../../../public/images/companies_logo/KUFPEC_LOGO.png";
import MARI_LOGO from "../../../public/images/companies_logo/MARI_LOGO.png";
import MOL_LOGO from "../../../public/images/companies_logo/MOL_LOGO.jpg";
import OGX_LOGO from "../../../public/images/companies_logo/OGX_LOGO.png";
import OP_LOGO from "../../../public/images/companies_logo/OP_LOGO.jpg";
import PGNIG_LOGO from "../../../public/images/companies_logo/PGNIG_LOGO.jpg";
import POL_LOGO from "../../../public/images/companies_logo/POL_LOGO.png";
import PPL_LOGO from "../../../public/images/companies_logo/PPL_LOGO.jpg";
import PRIME_LOGO from "../../../public/images/companies_logo/PRIME_LOGO.png";
import SAIF_LOGO from "../../../public/images/companies_logo/SAIF_LOGO.jpg";
import UEP_LOGO from "../../../public/images/companies_logo/UEP_LOGO.jpg";

export default function MemberCompanies() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-extrabold text-[#0b2b4c]">
            Our Member Companies
          </h2>
          <p className="mt-3 text-[18px] text-gray-500">
            Representing member companies and guiding PPEPCA’s mission.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-12">
          <div className="flex items-center h-[48px] w-full border border-gray-600 rounded-lg px-4 text-gray-400">
            {/* Search icon */}
            <FiSearch size={18} className="mr-3 shrink-0" />

            {/* Search input */}
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none flex-1 text-sm text-[#0b2b4c] placeholder-gray-400"
            />

            {/* Filters */}
            <div className="flex gap-2 ml-4">
              {[
                "All",
                "Local",
                "International",
                "Operator",
                "Associate",
                "Observer",
              ].map((item, index) => (
                <button
                  key={item}
                  className={`h-[32px] px-4 text-sm rounded-md border whitespace-nowrap ${
                    index === 0
                      ? "bg-green-600 text-white border-green-600"
                      : "text-[#0b2b4c] border-green-600 bg-transparent"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-x-8 gap-y-10 justify-items-center">
          <CompanyCard
            name="Al-Haj Enterprises (Private) Limited"
            logo={AEPL_LOGO}
          />
          <CompanyCard
            name="Government Holdings (Private) Limited"
            logo={GHPL_LOGO}
          />
          <CompanyCard
            name="Kirthar Pakistan Holdings B.V"
            logo={KPOGCL_LOGO}
          />
          <CompanyCard
            name="Khyber Pakhtunkhwa Oil and Gas Company Limited"
            logo={KUFPEC_LOGO}
          />
          <CompanyCard
            name="Mari Energies Limited"
            logo={MARI_LOGO}
          />

          <CompanyCard
            name="MOL Pakistan Oil and Gas Co. B.V."
            logo={MOL_LOGO}
          />
          <CompanyCard
            name="Oil and Gas Development Company Limited"
            logo={OGX_LOGO}
          />
          <CompanyCard
            name="Orient Petroleum Inc"
            logo={OP_LOGO}
          />
          <CompanyCard
            name="Polish Oil and Gas Company"
            logo={PGNIG_LOGO}
          />
          <CompanyCard
            name="Pakistan Oilfields Ltd"
            logo={POL_LOGO}
          />

          <CompanyCard
            name="Pakistan Petroleum Ltd"
            logo={PPL_LOGO}
          />
          <CompanyCard
            name="Prime Global Energies Limited"
            logo={PRIME_LOGO}
          />
          <CompanyCard name="Saif Energy Limited" logo={SAIF_LOGO} />
          <CompanyCard
            name="United Energy Pakistan Limited (UEPL)"
            logo={UEP_LOGO}
          />
        </div>
      </div>
    </section>
  );
}

interface Props {
  name: string;
  logo: StaticImageData;
}

function CompanyCard({ name, logo }: Props) {
  const router = useRouter();
  return (
    <div className="w-[230px] h-[220px] bg-white rounded-xl shadow-md flex flex-col items-center justify-between px-4 py-6">
      <div className="relative h-[70px] w-full">
        <Image src={logo} alt={name} fill className="object-contain" />
      </div>

      <p className="text-center text-[15px] text-[#0b2b4c] leading-snug mt-4">
        {name}
      </p>

      <button onClick={() => router.push('/members/membersPage')}className="cursor-pointer mt-4 bg-green-600 text-white text-sm px-4 py-2 rounded-md hover:bg-green-700 transition">
        View Profile
      </button>
    </div>
  );
}
