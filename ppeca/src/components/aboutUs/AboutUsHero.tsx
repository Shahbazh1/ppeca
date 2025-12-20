"use client";

import Image from "next/image";
import aboutUsHero_BG from "../../../public/images/aboutUsHero_BG.jpg";
import { IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function AboutPPEPCAHero() {
  const router = useRouter();
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={aboutUsHero_BG}
        alt="Industrial refinery background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="max-w-4xl px-4 text-center">
          <h1 className="xl:text-[48px] lg:text-[40px] font-bold tracking-tight text-white/95">
            About PPEPCA
          </h1>

          <p className="lg:mt-1 xl:mt-2 lg:text-[16px] xl:text-[18px] lg:max-w-lg xl:max-w-xl leading-relaxed text-gray-200/90">
            Serving Pakistan’s upstream petroleum sector through collaboration,
            policy advocacy and community development.
          </p>

          <div className="xl:mt-4 lg:mt-3  flex justify-center">
            <button
              onClick={() => router.push("/contact")}
              className="cursor-pointer w-[196px] h-[50px] xl:w-[180px] xl:h-[46px] rounded-[4px] p-[10px] bg-[#16A831]/95 hover:bg-[#128a28] text-white font-medium transition"
            >
              <p
                className="text-[16px] font-normal leading-[150%] tracking-normal flex items-center justify-center gap-2"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  color: "#F8FAFC",
                }}
              >
                Let's Connect <IoMdArrowForward />
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute lg:bottom-12 xl:bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="h-7 w-5 rounded-full border-2 border-[#1FB34A]">
          <div className="mx-auto mt-1 h-[6px] w-[2px] rounded-full bg-[#1FB34A]" />
        </div>
      </div>
    </section>
  );
}
