"use client";

import React from "react";

export type TrainingItem = {
  id: string;
  title: string;
  fileKey: string;
};

// Set base URL dynamically
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const trainingDirectoryContent = {
  heading: "Directory of Training Providers",
  downloadButtonLabel: "Download",
  items: [
    {
      id: "ior-eor-mol-perspective",
      title: "IOR/EOR Applications in MOL’s Perspective – by MOL Group",
      fileKey:
        "IOR_EOR_Applications_in_MOL_s_Perspective_by_MOL_Group_c08af8cc5c.pdf",
    },
    {
      id: "eor-rd-mol-group",
      title: "EOR related R&D – by MOL Group",
      fileKey: "EOR_related_R_and_D_by_MOL_Group_8e2a075cf3.pdf",
    },
    {
      id: "fast-track-eor",
      title: "Fast Track EOR: Re-designing through Integration",
      fileKey:
        "Fast_Track_EOR_Re_designing_through_Integration_09cd7c5883.pdf",
    },
    {
      id: "eor-smart-screening",
      title: "EOR Techniques Smart Screening for Candidate Reservoir",
      fileKey:
        "EOR_Techniques_Smart_Screening_for_Candidate_Reservoir_49761c17c8.pdf",
    },
    {
      id: "ior-eor-weatherford",
      title: "IOR/EOR Monitoring & Control System – by Weatherford",
      fileKey:
        "IOR_EOR_Monitoring_and_Control_System_by_Weatherford_e66f279a6b.pdf",
    },
    {
      id: "eor-alliance-black-gold",
      title: "EOR Alliance – by Black Gold",
      fileKey: "EOR_Alliance_by_Black_Gold_4941955889.pdf",
    },
    {
      id: "ior-eor-mol-applications",
      title: "IOR/EOR Applications in MOL’s Perspective",
      fileKey: "IOR_EOR_Applications_in_MOL_s_Perspective_8031d3218c.pdf",
    },
  ] as TrainingItem[],
};

export default function DirectoryOfTrainingProviders() {

  const getFileUrl = (fileKey: string) => `${API_BASE_URL}/uploads/${fileKey}`;

  const downloadFile = (fileKey: string, title: string) => {
    const url = getFileUrl(fileKey);
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
      <h2 className="text-3xl lg:text-[34px] font-['Montserrat'] font-semibold text-[#0b3a66] mb-10">
        {trainingDirectoryContent.heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {trainingDirectoryContent.items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm border-1 border-[#84929f]/60 px-6 py-4 flex flex-col items-center justify-between min-h-[160px]"
          >
            <p className="text-center font-['Open_Sans'] text-[14px] font-normal text-[#334155] leading-relaxed px-2">
              {item.title}
            </p>

            <button
              aria-label={`Download ${item.title} file`}
              onClick={() => downloadFile(item.fileKey, item.title)}
              className="mt-6 cursor-pointer font-['Open_Sans'] bg-[#16A831] hover:bg-[#128a28] text-[#ffffff] text-sm font-medium px-6 py-2 rounded-sm transition"
            >
              {trainingDirectoryContent.downloadButtonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
