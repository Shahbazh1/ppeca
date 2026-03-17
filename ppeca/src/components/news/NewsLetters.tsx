"use client";
import Image from "next/image";
import React, { useState } from "react";

export type NewsletterItem = {
  title: string;
  image: string;
  pdfUrl: string;
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const newsletters: NewsletterItem[] = [
  {
    title: "PPEPCA 16th issue",
    image: "/images/ppepca_16_issue.png",
    pdfUrl:
      `${API_BASE_URL}/uploads/PPEPCA_16th_issue_d0f204f841.pdf`,
  },
  {
    title: "PPEPCA 17th issue",
    image: "/images/ppepca_17_issue.png",
    pdfUrl:
      `${API_BASE_URL}/uploads/PPEPCA_17th_issue_36f6a20cb4.pdf`,
  },
  {
    title: "PPEPCA 18th issue",
    image: "/images/ppepca_18_issue.png",
    pdfUrl:
      `${API_BASE_URL}/uploads/PPEPCA_18th_issue_11ac0586c6.pdf`,
  },
  {
    title: "PPEPCA 19th issue",
    image: "/images/ppepca_19_issue.png",
    pdfUrl:
      `${API_BASE_URL}/uploads/PPEPCA_19th_issue_35a9a7a2df.pdf`,
  },
  {
    title: "PPEPCA 20th issue",
    image: "/images/ppepca_20_issue.png",
    pdfUrl:
      `${API_BASE_URL}/uploads/PPEPCA_20th_issue_b198c91381.pdf`,
  },
  {
    title: "PPEPCA 21st issue",
    image: "/images/ppepca_21_issue.png",
    pdfUrl:
      `${API_BASE_URL}/uploads/PPEPCA_Newsletter_21st_Issue_c391d79725.pdf`,
  },
];

export default function NewsletterSection() {

  const downloadPdf = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);

    } catch (error) {
      console.error("Download failed:", error);

      // Fallback: open in new tab
      window.open(url, "_blank");
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Filter newsletters based on search term
  const filteredNewsletters = newsletters.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="w-full bg-[#f8fafc] pt-10  ">

      {/* Heading */}
      <h2 className="xl:text-[2.25rem] font-['Montserrat'] lg:text-[2rem] md:text-[1.75rem] font-bold text-[#0a2540] md:mb-4 mb-6">
        Newsletter
      </h2>

      {/* Search */}
      <div className="mb-10">
        <div className="flex items-center gap-3 border border-[#94a3b8] rounded-lg px-4 py-3 text-gray-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M21 21L15.803 15.803M10.5 18C6.358 18 3 14.642 3 10.5C3 6.358 6.358 3 10.5 3C14.642 3 18 6.358 18 10.5C18 14.642 14.642 18 10.5 18Z"
              stroke="#334155"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm placeholder-[#94a3b8]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mx-auto">
        {filteredNewsletters.length > 0 ? (
          filteredNewsletters.map((item, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-md border border-[#84929f] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-[170px] w-full bg-gray-200 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-center px-4 py-5 gap-3">
                <p className="text-sm font-medium text-[#1e3a8a] text-center">
                  {item.title}
                </p>

                {/* Buttons */}
                <div className="flex flex-col text-center gap-2 w-full max-w-[180px]">
                  <a
                    href={item.pdfUrl}
                    aria-label={`View ${item.title} PDF`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cursor-pointer bg-[#16a831] text-white text-sm font-medium py-2 rounded-sm hover:bg-[#128a28] transition-colors duration-200"
                  >
                    View
                  </a>

                  <button
                    aria-label={`Download ${item.title} PDF`}
                    onClick={() =>
                      downloadPdf(item.pdfUrl, `${item.title}.pdf`)
                    }
                    className="w-full border cursor-pointer border-[#16A831] text-[#0a2540] text-sm font-medium py-2 rounded-sm hover:bg-[#16a831] hover:text-white transition-colors duration-200"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-4">
            No newsletters found.
          </p>
        )}
      </div>
    </section>
  );
}
