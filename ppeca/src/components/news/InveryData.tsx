"use client";

import React from "react";

type InventoryItem = {
  name: string;
  logo: string;
  fileUrl: string;
};

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const inventoryData: InventoryItem[] = [
  {
    name: "KUFPEC",
    logo: "/images/companies_logo/KUFPEC_LOGO.png",
    fileUrl: `${API_BASE_URL}/uploads/List_of_Surplus_Branch_Inventory_8837373727_588fffb5f6.pdf`,
  },
  {
    name: "Orient Petroleum Inc.",
    logo: "/images/companies_logo/OP_LOGO.jpg",
    fileUrl: `${API_BASE_URL}/uploads/Orient_Petroleum_Surplus_Inventory_ac010249db_7979bcfe50.pdf`,
  },
  {
    name: "Polish Oil and Gas Company",
    logo: "/images/POLISH_OIL_logo.jpg",
    fileUrl: `${API_BASE_URL}/uploads/POL_RIG_SCR_d2bc9fdc55_379d323fe7.docx`,
  },
  {
    name: "Pakistan Petroleum Ltd",
    logo: "/images/PPL_logo.jpg",
    fileUrl: `${API_BASE_URL}/uploads/Drilling_and_Completion_materials_2a59a2e007_f7ca0c084a.xlsx`,
  },
  {
    name: "Eni Pakistan",
    logo: "/images/POL_logo.png",
    fileUrl: `${API_BASE_URL}/uploads/Eni_Pakistan_Surplus_Inventory_List_c6fda86254_20f7f583cb.xlsx`,
  },
  {
    name: "Propane Condenser POGC",
    logo: "/images/companies_logo/PRIME_LOGO.png",
    fileUrl: `${API_BASE_URL}/uploads/Surplus_Items_Propane_Condenser_37c8b7d3de_1790edbdfc.xlsx`,
  },
];

export default function SurplusInventorySection() {

  const downloadFile = (url: string) => {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const filename = url.split("/").pop() || "file";
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    })
    .catch((err) => {
      console.error("Download failed:", err);
    });
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
            <button
              aria-label={`Download ${item.name} inventory`}
              onClick={() => downloadFile(item.fileUrl)}
              className="mt-6 cursor-pointer font-['Open_Sans'] bg-[#16a831] hover:bg-[#128a28] text-white text-sm font-medium px-6 py-2 rounded-sm transition"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
