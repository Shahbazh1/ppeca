"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";

type InventoryItem = {
  name: string;
  logo: string;
  fileUrl: string;
};

const BASE_URL = "https://automatic-happiness-5c495f4f8d.strapiapp.com";

const inventoryData: InventoryItem[] = [
  {
    name: "KUFPEC",
    logo: "/images/companies_logo/KUFPEC_LOGO.png",
    fileUrl: `https://automatic-happiness-5c495f4f8d.media.strapiapp.com/List_of_Surplus_Branch_Inventory_KUFPEC_19db8ed312.pdf`,
  },
  {
    name: "Orient Petroleum Inc.",
    logo: "/images/companies_logo/OP_LOGO.jpg",
    fileUrl: `https://automatic-happiness-5c495f4f8d.media.strapiapp.com/Orient_Petroleum_Surplus_Inventory_OPI_a010a86dc8.pdf`,
  },
  {
    name: "Polish Oil and Gas Company",
    logo: "/images/POLISH_OIL_logo.jpg",
    fileUrl: `https://automatic-happiness-5c495f4f8d.media.strapiapp.com/Surplus_Items_Propane_Condenser_POGC_bf15e4747f.xlsx`,
  },
  {
    name: "Pakistan Petroleum Ltd",
    logo: "/images/PPL_logo.jpg",
    fileUrl: `https://automatic-happiness-5c495f4f8d.media.strapiapp.com/Drilling_and_Completion_materials_PPL_599f3696bc.xlsx`,
  },
  {
    name: "Eni Pakistan",
    logo: "/images/POL_logo.png",
    fileUrl: `https://automatic-happiness-5c495f4f8d.media.strapiapp.com/POL_SCR_RIG_1_Wells_drilled_xlsx_POL_04c5c64cc6.xlsx`,
  },
  {
    name: "Propane Condenser POGC",
    logo: "/images/companies_logo/PRIME_LOGO.png",
    fileUrl: `https://automatic-happiness-5c495f4f8d.media.strapiapp.com/Eni_Pakistan_Surplus_Inventory_List_PIOGCL_43562acb80.xlsx`,
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
        toast.success(`File is downloading...`);
      })
      .catch((err) => {
        console.error("Download failed:", err);
        toast.error(`Download failed `);
      });
  };

  return (
    <section className="w-full bg-[#f8fafc]  py-12">
      <Toaster position="top-center" reverseOrder={false} />

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
              onClick={() => downloadPdf(item.fileUrl, `${item.name}.pdf`)}
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
