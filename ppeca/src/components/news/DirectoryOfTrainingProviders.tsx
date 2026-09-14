"use client";

import React from "react";
import { NEWS_trainingDirectoryContent } from "@/src/constant/data";

// Set base URL dynamically
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export default function DirectoryOfTrainingProviders() {

  const {heading, downloadButtonLabel, items } = NEWS_trainingDirectoryContent

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
        {heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map((item, index) => (
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
              {downloadButtonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
