import React from "react";
import AEPL_LOGO from '../../../public/images/companies_logo/AEPL_LOGO.jpg'

export type InventoryItem = {
  name: string;
  logo: string;
};

const inventoryData: InventoryItem[] = [
  {
    name: "Prime Global Energies Limited",
    logo: "/inventory/pgel.png",
  },
  {
    name: "Pakistan Petroleum Ltd",
    logo: "/inventory/ppl.png",
  },
  {
    name: "Orient Petroleum Inc.",
    logo: "/inventory/orient.png",
  },
  {
    name: "Kirthar Pakistan Holdings B.V",
    logo: "/inventory/kirthar.png",
  },
  {
    name: "Polish Oil and Gas Company",
    logo: "/inventory/pgnig.png",
  },
  {
    name: "Pakistan Oilfields Ltd",
    logo: "/inventory/pol.png",
  },
];

export default function SurplusInventorySection() {
  return (
    <section className="w-full bg-gray-200 px-8 py-12">
      {/* Title */}
      <h2 className="text-[34px] font-semibold text-[#0b3a66] mb-10">
        Surplus Inventory Data
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {inventoryData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md px-6 py-8 flex flex-col items-center justify-between min-h-[220px]"
          >
            {/* Logo */}
            <div className="h-[80px] flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-[70px] object-contain"
              />
            </div>

            {/* Name */}
            <p className="text-center text-[15px] font-medium text-[#334155] leading-snug px-2">
              {item.name}
            </p>

            {/* Button */}
            <button className="mt-4 bg-[#16a34a] text-white text-sm font-medium px-6 py-2 rounded-md">
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
