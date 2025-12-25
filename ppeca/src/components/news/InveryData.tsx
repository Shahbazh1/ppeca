"use client";

import React from "react";

export type InventoryItem = {
  name: string;
  logo: string;
};

const inventoryData: InventoryItem[] = [
  { name: "Prime Global Energies Limited", logo: "/images/POL_logo.png" },
  { name: "Pakistan Petroleum Ltd", logo: "/images/PPL_logo.jpg" },
  { name: "Orient Petroleum Inc.", logo: "/images/companies_logo/OP_LOGO.jpg" },
  { name: "KUFPEC", logo: "/images/companies_logo/KUFPEC_LOGO.png" },
  { name: "Polish Oil and Gas Company", logo: "/images/POLISH_OIL_logo.jpg" },
  { name: "Pakistan Oilfields Ltd", logo: "/images/POL_logo.png" },
];

export default function SurplusInventorySection() {
  return (
    <section className="w-full bg-[#f8fafc]  py-12">
      {/* Title */}
      <h2 className="text-3xl lg:text-[34px] font-['Montserrat'] font-semibold text-[#0b3a66] mb-10">
        Surplus Inventory Data
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
        {inventoryData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm border-1 border-[#84929f] p-6 flex flex-col items-center justify-between min-h-[220px]"
          >
            {/* Logo */}
            <div className="h-[80px] flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-[70px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Name */}
            <p className="text-center font-['Open_Sans'] text-[15px] font-medium text-[#334155] leading-snug px-2 mt-4">
              {item.name}
            </p>

            {/* Button */}
            <button className="mt-6 cursor-pointer font-['Open_Sans'] bg-[#16a831] hover:bg-[#128a28] text-white text-sm font-medium px-6 py-2 rounded-sm transition">
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
