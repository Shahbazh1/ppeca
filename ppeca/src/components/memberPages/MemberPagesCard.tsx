// components/CompanyCard.tsx
import React from "react";
import Image from "next/image";
import { CompaniesData } from "./companiesData";

interface CompanyCardProps {
  company: CompaniesData;
}

const MemberPagesCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="max-w-7xl mx-auto p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md relative overflow-hidden">
      <div className="space-y-4">
        {/* Company Address */}
        <div>
          <h2 className="text-[#334155] font-semibold text-sm">
            Companies' Name & Postal Address:
          </h2>
          <p className="text-[#334155] text-sm mt-1">{company.address}</p>
        </div>

        {/* Name & Designation */}
        <div>
          <h2 className="text-[#334155] font-semibold text-sm">
            Name & Designation:
          </h2>
          <p className="text-[#334155] text-sm mt-1">
            {company.ceo}{" "}
            <span className="font-medium">{company.ceoDesignation}</span>
          </p>
        </div>

        {/* Description */}
        <div className="text-[#334155] text-sm space-y-2 leading-relaxed">
          {company.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h2 className="text-[#334155] font-semibold text-sm">
              Telephone (PABX):
            </h2>
            <p className="text-[#334155] text-sm mt-1">{company.telephone}</p>
          </div>
          <div>
            <h2 className="text-[#334155] font-semibold text-sm">Fax:</h2>
            <p className="text-[#334155] text-sm mt-1">{company.fax}</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <a
            href={company.website}
            className="inline-block bg-[#16A831] text-[#F8FAFC] font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#16A8311F] rounded-full opacity-50 -mb-3 -mr-5 hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#16A8311F] rounded-full opacity-50 mb-20 mr-12 hidden sm:block"></div>
    </div>
  );
};

export default MemberPagesCard;
