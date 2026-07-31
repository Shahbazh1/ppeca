import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-white/60 px-8 py-6 shadow-lg backdrop-blur-md">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#16A831]/20 border-t-[#16A831]" />

        {/* Text */}
        <div className="text-center">
          <h2 className="font-['Montserrat'] text-lg font-semibold text-[#0A2540]">
            Loading...
          </h2>
          <p className="mt-1 font-['Open_Sans'] text-sm text-gray-600">
            Please wait while we fetch the latest news.
          </p>
        </div>
      </div>
    </div>
  );
}