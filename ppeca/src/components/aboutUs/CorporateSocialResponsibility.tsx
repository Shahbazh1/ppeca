"use client";

export default function CorporateSocialResponsibility() {
  return (
    <section className="bg-[#f8fafc] px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-gray-300 bg-white px-5 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-7 md:py-8">
          {/* Heading */}
          <h2 className="text-xl font-['Montserrat'] sm:text-2xl md:text-3xl font-bold tracking-wide text-[#0a2540]">
            CORPORATE SOCIAL RESPONSIBILITY
          </h2>

          {/* Content */}
          <div className="mt-4 font-['Open_Sans'] sm:mt-5 md:mt-6 max-w-3xl text-[#0a2540]">
            <h3 className="text-sm sm:text-base font-semibold">Member Community Work</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm">
              Whichever company works to add 2-3 paragraphs on the work done by
              each in their area.
            </p>
          </div>

          {/* Button */}
          <div className="mt-4 sm:mt-5 md:mt-6">
            <button className="rounded-sm font-['Open_Sans'] bg-[#16a831] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#f8fafc] hover:bg-green-700 transition">
              Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}