import React from "react";

// Pixel‑perfect Newsletter / Latest News grid section (TSX)
// TailwindCSS required

export type NewsletterItem = {
  title: string;
  image: string;
};

const newsletters: NewsletterItem[] = [
  { title: "PPEPCA 20th issue", image: "/newsletter/20th.png" },
  { title: "PPEPCA 19th issue", image: "/newsletter/19th.png" },
  { title: "PPEPCA 18th issue", image: "/newsletter/18th.png" },
  { title: "PPEPCA 17th issue", image: "/newsletter/17th.png" },
  { title: "PPEPCA 16th issue", image: "/newsletter/16th.png" }
];

export default function NewsletterSection() {
  return (
    <section className="w-full bg-white px-8 py-10">
      {/* Heading */}
      <h2 className="text-[32px] font-semibold text-[#1e4b87] mb-6">
        Newsletter
      </h2>

      {/* Search */}
      <div className="mb-10">
        <div className="flex items-center gap-3 border border-[#9ca3af] rounded-lg px-4 py-3 text-gray-400">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L15.803 15.803M10.5 18C6.358 18 3 14.642 3 10.5C3 6.358 6.358 3 10.5 3C14.642 3 18 6.358 18 10.5C18 14.642 14.642 18 10.5 18Z"
              stroke="#9ca3af"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {newsletters.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-[170px] w-full bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col items-center justify-center px-4 py-5 gap-3">
              <p className="text-sm font-medium text-[#1e3a8a]">
                {item.title}
              </p>

              <button className="w-full bg-[#16a34a] text-white text-sm font-medium py-2 rounded-md">
                View
              </button>

              <button className="w-full border border-[#16a34a] text-[#16a34a] text-sm font-medium py-2 rounded-md">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
