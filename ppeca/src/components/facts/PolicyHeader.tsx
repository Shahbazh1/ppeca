"use client";

import React from "react";

const PolicyHeader: React.FC = () => {

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


  let pdfUrl=`${API_BASE_URL}/Petroleum_Policy_2012_Gazzette_24ad22ef78.pdf`

  const downloadPdf = async () => {
  if (!pdfUrl) return;

  try {
    const res = await fetch(pdfUrl);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "Petroleum_Policy_2012_Gazzette.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(link.href);
  } catch (err) {
    console.error("Download failed:", err);
  }
};

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h1 className="text-[#0b2f4a] font-semibold leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[42px]">
          Gazetted Petroleum Exploration & Production
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Policy 2012
        </h1>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
          <a
          aria-label="Visit Petroleum Policy 2012 document"
            href={`${API_BASE_URL}/Petroleum_Policy_2012_Gazzette_24ad22ef78.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16A831] hover:bg-[#128a28] font-['Open_Sans'] cursor-pointer px-6 sm:px-8 md:px-10 py-2 text-xs sm:text-sm font-medium text-white rounded-xs hover:opacity-90 transition"
          >
            {" "}
            Visit
          </a>

          <button
            onClick={downloadPdf}
            className="border cursor-pointer border-[#16A831] border-[0.5px] px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-[#0b2f4a] rounded-xs hover:bg-[#0b2f4a] hover:text-white transition inline-block"
          >
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default PolicyHeader;
