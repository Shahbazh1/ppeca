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
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783712259/kufpec_wtpve8.pdf",
  },
  {
    name: "Orient Petroleum Inc.",
    logo: "/images/companies_logo/OP_LOGO.jpg",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783712254/orient_petroleum_inc_zgrfbl.pdf",
  },
  {
    name: "Polish Oil and Gas Company",
    logo: "/images/POLISH_OIL_logo.jpg",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/raw/upload/v1783712233/polish_oil_and_gas_company_g0pxdm.docx",
  },
  {
    name: "Pakistan Petroleum Ltd",
    logo: "/images/PPL_logo.jpg",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/raw/upload/v1783712176/pakistan_petroleum_limited_ibkgwz.xlsx",
  },
  {
    name: "Eni Pakistan",
    logo: "/images/POL_logo.png",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/raw/upload/v1783712166/Eni_Pakistan_nmlmjb.xlsx",
  },
  {
    name: "Propane Condenser POGC",
    logo: "/images/companies_logo/PRIME_LOGO.png",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/raw/upload/v1783712100/Propane_Condenser_POGC_nxpucl.xlsx",
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
    <section className="w-full bg-[#f8fafc]  pt-10">

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
