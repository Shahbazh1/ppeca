"use client";

import React from "react";

export type TrainingItem = {
  title: string;
  fileUrl: string;
};

// Set base URL dynamically
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const trainingData: TrainingItem[] = [
  {
    title: "Notice of Election for Members Excom 2026-28",
    fileUrl: `${API_BASE_URL}/uploads/Notice_of_Election_for_Members_Excom_2026_28_04ebc00ed0.pdf`,
  },
  {
    title: "Election Schedule Annex 'A' 2026-28",
    fileUrl: `${API_BASE_URL}/uploads/Election_Schedule_Annex_A_2026_28_7287806627.pdf`,
  },
  {
    title: "Voter List Annex 'B' 2026-28 Final",
    fileUrl: `${API_BASE_URL}/uploads/Voter_List_Annex_B_2026_28_Final_8fdf0ec5ff.pdf`,
  },
  {
    title: "Nomination Form Annex 'C' 2026-28",
    fileUrl: `${API_BASE_URL}/uploads/Nomination_Form_Annex_C_2026_28_1641a701c1.xlsx`,
  },
  {
    title: "Authority letter Annex 'D' 2026-28",
    fileUrl: `${API_BASE_URL}/uploads/Authority_letter_Annex_D_2026_28_19f1307ade.docx`,
  },
  
];

export default function DirectoryOfTrainingProviders() {
  // Download file programmatically using fetch + blob
  const downloadFile = (url: string, title: string) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const filename = title + url.substring(url.lastIndexOf("."));
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
    <section className="w-full bg-[#f8fafc] pt-12">
  {/* Title with a subtle accent bar */}
  <div className="mb-10 flex flex-col items-start gap-2">
    <h2 className="font-['Montserrat'] text-3xl font-bold tracking-tight text-[#0b3a66] lg:text-[34px]">
      PPEPCA Elections 2026
    </h2>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {trainingData.map((item, index) => (
      <div
        key={index}
        className="group flex min-h-[180px] flex-col items-center justify-between rounded-md border border-[#84929f]/40 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#16A831]/50 hover:shadow-md"
      >
        {/* Title */}
        <p className="line-clamp-3 text-center font-['Open_Sans'] text-[14px] font-medium leading-snug text-[#334155]">
          {item.title}
        </p>

        {/* Button */}
        <button
          aria-label={`Download ${item.title} file`}
          onClick={() => downloadFile(item.fileUrl, item.title)}
          className=" cursor-pointer mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#16A831] px-4 py-2 font-['Open_Sans'] text-sm font-semibold text-white transition-all duration-150 hover:bg-[#128a28] active:scale-[0.98]"
        >
          {/* <svg
            className="h-4 w-4 fill-current transition-transform duration-150 group-hover:translate-y-0.5"
            viewBox="0 0 20 20"
          >
            <path d="M10 13l-5-5h3V3h4v5h3l-5 5zm-7 4h14v2H3v-2z" />
          </svg> */}
          Download
        </button>
      </div>
    ))}
  </div>
</section>
  );
}
