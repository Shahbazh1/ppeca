"use client";

import React from "react";

type InventoryItem = {
  name: string;
  logo: string;
  fileUrl: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const inventoryData: InventoryItem[] = [
  {
    name: "KUFPEC",
    logo: "/images/companies_logo/KUFPEC_LOGO.png",
    fileUrl: `${BASE_URL}/uploads/List_of_Surplus_Branch_Inventory_KUFPEC_1bd9a891c5.pdf`,
  },
  {
    name: "Orient Petroleum Inc.",
    logo: "/images/companies_logo/OP_LOGO.jpg",
    fileUrl: `${BASE_URL}/uploads/Orient_Petroleum_Surplus_Inventory_dbf70468c1.pdf`,
  },
  {
    name: "Polish Oil and Gas Company",
    logo: "/images/POLISH_OIL_logo.jpg",
    fileUrl: `${BASE_URL}/uploads/POL_RIG_SCR_42027add18.docx`,
  },
  {
    name: "Pakistan Petroleum Ltd",
    logo: "/images/PPL_logo.jpg",
    fileUrl: `${BASE_URL}/uploads/Drilling_and_Completion_materials_PPL_3741512e3a.xlsx`,
  },
  {
    name: "Eni Pakistan",
    logo: "/images/POL_logo.png",
    fileUrl: `${BASE_URL}/uploads/Eni_Pakistan_Surplus_Inventory_List_PIOGCL_52b00a13fb.xlsx`,
  },
  {
    name: "Propane Condenser POGC",
    logo: "/images/POL_logo.png",
    fileUrl: `${BASE_URL}/uploads/Surplus_Items_Propane_Condenser_POGC_1567ae8429.xlsx`,
  },
];



export default function SurplusInventorySection() {
  const downloadPdf = (url: string, filename: string) => {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename; // specify filename
      link.click();
    })
    .catch((err) => console.error("Download failed:", err));
};
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
            <button onClick={() => downloadPdf(item.fileUrl, `${item.name}.pdf`)} className="mt-6 cursor-pointer font-['Open_Sans'] bg-[#16a831] hover:bg-[#128a28] text-white text-sm font-medium px-6 py-2 rounded-sm transition">
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
