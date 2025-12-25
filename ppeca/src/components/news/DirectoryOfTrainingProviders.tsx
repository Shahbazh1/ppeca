"use client";

import React from "react";

export type TrainingItem = {
  title: string;
};

const trainingData: TrainingItem[] = [
  { title: "IOR/EOR Applications in MOL’s Perspective – by MOL Group" },
  { title: "EOR related R&D – by MOL Group" },
  { title: "Fast Track EOR: Re-designing through Integration" },
  { title: "EOR Techniques Smart Screening for Candidate Reservoir" },
  { title: "IOR/EOR Monitoring & Control System – by Weatherford" },
  { title: "EOR Alliance – by Black Gold" },
  { title: "IOR/EOR Applications in MOL’s Perspective" },
];

export default function DirectoryOfTrainingProviders() {
  return (
    <section className="w-full bg-[#f8fafc]  py-12">
      {/* Title */}
      <h2 className="text-3xl lg:text-[34px] font-['Montserrat'] font-semibold text-[#0b3a66] mb-10">
        Directory of Training Providers
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {trainingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm  border-1 border-[#84929f]/60 px-6 py-4 flex flex-col items-center justify-between min-h-[160px]"
          >
            {/* Title */}
            <p className="text-center font-['Open_Sans'] text-[14px] font-normal text-[#334155] leading-relaxed px-2">
              {item.title}
            </p>

            {/* Button */}
            <button className="mt-6 cursor-pointer font-['Open_Sans'] bg-[#16A831] hover:bg-[#128a28] text-[#ffffff] text-sm font-medium px-6 py-2 rounded-sm transition">
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
