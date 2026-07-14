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
    title: "IOR/EOR Applications in MOL’s Perspective – by MOL Group",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783714593/IOR_EOR_Applications_in_MOL_s_Perspective_by_MOL_Group_lgafhy.pdf",
  },
  {
    title: "EOR related R&D – by MOL Group",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783713258/EOR_related_R_D_by_MOL_Group_z24p4q.pdf",
  },
  {
    title: "Fast Track EOR: Re-designing through Integration",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783713303/Fast_Track_EOR__Re-designing_through_Integration_pamu3z.pdf",
  },
  {
    title: "EOR Techniques Smart Screening for Candidate Reservoir",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783713221/EOR_Techniques_Smart_Screening_for_Candidate_Reservoir_pjwnhk.pdf",
  },
  {
    title: "IOR/EOR Monitoring & Control System – by Weatherford",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783713151/IOR_EOR_Monitoring_Control_System_by_Weatherford_dik4wt.pdf",
  },
  {
    title: "EOR Alliance – by Black Gold",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783713070/EOR_Alliance_by_Black_Gold_upyvor.pdf",
  },
  {
    title: "IOR/EOR Applications in MOL’s Perspective",
    fileUrl: "https://res.cloudinary.com/dhmc66lbq/image/upload/v1783713045/IOR_EOR_Applications_in_MOL_s_Perspective_dj24nh.pdf",
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
