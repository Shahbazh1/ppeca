"use client";

import React from "react";

export type TrainingItem = {
  title: string;
  fileUrl: string;
};

// Set base URL dynamically
const API_BASE_URL = "https://api.ppepca.com.pk";

const trainingData: TrainingItem[] = [
  {
    title: "IOR/EOR Applications in MOL’s Perspective – by MOL Group",
    fileUrl: `${API_BASE_URL}/uploads/MOL_1_2_eb5d12cd37.pdf`,
  },
  {
    title: "EOR related R&D – by MOL Group",
    fileUrl: `${API_BASE_URL}/uploads/MOL_2_e8123b2c87.pdf`,
  },
  {
    title: "Fast Track EOR: Re-designing through Integration",
    fileUrl: `${API_BASE_URL}/uploads/Schlumberger_1_b54e2cb987.pdf`,
  },
  {
    title: "EOR Techniques Smart Screening for Candidate Reservoir",
    fileUrl: `${API_BASE_URL}/uploads/Schlumberger_2_137144acfd.pdf`,
  },
  {
    title: "IOR/EOR Monitoring & Control System – by Weatherford",
    fileUrl: `${API_BASE_URL}/uploads/Weatherford_1_b121e3a3cc.pdf`,
  },
  {
    title: "EOR Alliance – by Black Gold",
    fileUrl: `${API_BASE_URL}/uploads/Black_Gold_Beicip_Franlab_b24a3a1c06.pdf`,
  },
  {
    title: "IOR/EOR Applications in MOL’s Perspective",
    fileUrl: `${API_BASE_URL}/uploads/Weatherford_2_7ebbbe7a77.pdf`,
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
    <section className="w-full bg-[#f8fafc] py-12">
      {/* Title */}
      <h2 className="text-3xl lg:text-[34px] font-['Montserrat'] font-semibold text-[#0b3a66] mb-10">
        Directory of Training Providers
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {trainingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm border-1 border-[#84929f]/60 px-6 py-4 flex flex-col items-center justify-between min-h-[160px]"
          >
            {/* Title */}
            <p className="text-center font-['Open_Sans'] text-[14px] font-normal text-[#334155] leading-relaxed px-2">
              {item.title}
            </p>

            {/* Button */}
            <button
              aria-label={`Download ${item.title} file`}
              onClick={() => downloadFile(item.fileUrl, item.title)}
              className="mt-6 cursor-pointer font-['Open_Sans'] bg-[#16A831] hover:bg-[#128a28] text-[#ffffff] text-sm font-medium px-6 py-2 rounded-sm transition"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
