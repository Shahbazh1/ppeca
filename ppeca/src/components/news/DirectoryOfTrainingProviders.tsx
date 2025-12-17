import React from "react";

// Pixel-perfect Directory of Training Providers section
// Stack: Next.js + TSX + TailwindCSS

export type TrainingItem = {
  title: string;
};

const trainingData: TrainingItem[] = [
  {
    title: "IOR/EOR Applications in MOL’s Perspective – by MOL Group",
  },
  {
    title: "EOR related R&D – by MOL Group",
  },
  {
    title: "Fast Track EOR: Re-designing through Integration",
  },
  {
    title: "EOR Techniques Smart Screening for Candidate Reservoir",
  },
  {
    title: "IOR/EOR Monitoring & Control System – by Weatherford",
  },
  {
    title: "EOR Alliance – by Black Gold",
  },
  {
    title: "IOR/EOR Applications in MOL’s Perspective",
  },
];

export default function DirectoryOfTrainingProviders() {
  return (
    <section className="w-full bg-gray-300 px-8 py-12">
      {/* Title */}
      <h2 className="text-[34px] font-semibold text-[#0b3a66] mb-10">
        Directory of Training Providers
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {trainingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md px-6 py-10 flex flex-col items-center justify-between min-h-[200px]"
          >
            {/* Title */}
            <p className="text-center text-[15px] font-medium text-[#334155] leading-relaxed px-2">
              {item.title}
            </p>

            {/* Button */}
            <button className="mt-6 bg-[#16a34a] text-white text-sm font-medium px-6 py-2 rounded-md">
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
