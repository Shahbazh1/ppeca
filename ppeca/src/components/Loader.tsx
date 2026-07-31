import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 backdrop-blur-md transition-all duration-300">
      {/* Background glow behind card */}
      <div className="relative flex flex-col items-center justify-center gap-6 rounded-3xl bg-white/70 px-10 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-white/50 backdrop-blur-xl dark:bg-slate-900/70 dark:ring-slate-800/50">
        
        {/* Glow backdrop behind spinner */}
        <div className="absolute -top-10 h-24 w-24 rounded-full bg-[#16A831]/20 blur-2xl" />

        {/* Animated Double-Ring Spinner */}
        <div className="relative flex items-center justify-center">
          {/* Outer glowing pulsing ring */}
          <div className="absolute h-14 w-14 animate-ping rounded-full border border-[#16A831]/30" />
          
          {/* Subtle background track ring */}
          <div className="h-12 w-12 rounded-full border-4 border-[#16A831]/15" />
          
          {/* Main spinning gradient ring */}
          <div className="absolute h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-[#16A831] border-r-[#16A831]/80" />
          
          {/* Inner pulsing dot */}
          <div className="absolute h-3 w-3 animate-pulse rounded-full bg-[#16A831] shadow-[0_0_12px_#16A831]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="flex items-center gap-1 font-['Montserrat'] text-xl font-bold tracking-tight text-[#0A2540] dark:text-slate-100">
            <span>Loading</span>
            {/* Animated Loading Dots */}
            <span className="inline-flex">
              <span className="animate-[bounce_1s_infinite_100ms]">.</span>
              <span className="animate-[bounce_1s_infinite_200ms]">.</span>
              <span className="animate-[bounce_1s_infinite_300ms]">.</span>
            </span>
          </h2>
          
          <p className="mt-1.5 max-w-[220px] font-['Open_Sans'] text-xs font-medium text-slate-500 dark:text-slate-400">
            Fetching the latest news stories for you
          </p>
        </div>

        {/* Subtle animated bottom bar */}
        <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-800">
          <div className="h-full w-full origin-left-right animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[#16A831] to-transparent" />
        </div>

      </div>
    </div>
  );
}