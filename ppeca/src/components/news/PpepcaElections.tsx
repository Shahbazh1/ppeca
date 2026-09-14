"use client";

import React from "react";
import { NEWS_electionsContent } from "@/src/constant/data";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function DirectoryOfTrainingProviders() {
  const {title, downloadButtonLabel, trainingData} = NEWS_electionsContent
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
    <section className="w-full bg-[#f8fafc] pt-12">
  <div className="mb-10 flex flex-col items-start gap-2">
    <h2 className="font-['Montserrat'] text-3xl font-bold tracking-tight text-[#0b3a66] lg:text-[34px]">
      {title}
    </h2>
  </div>

  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {trainingData.map((item, index) => (
      <div
        key={index}
        className="group flex min-h-[180px] flex-col items-center justify-between rounded-md border border-[#84929f]/40 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#16A831]/50 hover:shadow-md"
      >
        <p className="line-clamp-3 text-center font-['Open_Sans'] text-[14px] font-medium leading-snug text-[#334155]">
          {item.title}
        </p>

        <button
          aria-label={`Download ${item.title} file`}
          onClick={() => downloadFile(item.fileKey, item.title)}
          className=" cursor-pointer mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#16A831] px-4 py-2 font-['Open_Sans'] text-sm font-semibold text-white transition-all duration-150 hover:bg-[#128a28] active:scale-[0.98]"
        >
          {downloadButtonLabel}
        </button>
      </div>
    ))}
  </div>
</section>
  );
}
