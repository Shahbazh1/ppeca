"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import heroBg from "../../../public/images/heroBg.png";
import { IoMdArrowForward } from "react-icons/io";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative w-full h-[500px] sm:h-[450px] md:h-[480px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Petroleum Industry"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading='lazy'
        />
        <div className="absolute inset-0 bg-[#000000CC]" /> Overlay
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start text-center h-[500px] sm:h-[450px] md:h-[480px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px] pt-[50px] sm:pt-[60px] md:pt-[65px] lg:pt-[70px] xl:pt-[70px] 2xl:pt-[80px] px-4">
        {/* <div className="absolute inset-0 bg-black/5" /> Overlay */}
        {/* Tagline */}
        <div className="inline-flex items-center justify-center mb-4 px-2 sm:px-3 md:px-4 py-1 h-[40px] border border-green-500 rounded-full bg-[#16A83112] text-green-500 text-sm font-medium">
          <p
            className="text-[12px] font-['Open_Sans'] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.5] text-[#16A831] font-normal"
          >
            <span className="hidden sm:inline">PPEPCA — Pakistan Petroleum Exploration and Production Companies</span>
            <span className="sm:hidden">PPEPCA — Pakistan Petroleum</span>
          </p>
        </div>
        {/* Main Heading */}
        <h1
          className="text-[28px] sm:text-[35px] md:text-[42px] lg:text-[47px] xl:text-[47px] 2xl:text-[55px] font-bold mt-4 sm:mt-5 md:mt-6 leading-[110%] tracking-normal text-center text-white mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Powering Pakistan's <br /> Petroleum Future
        </h1>
        {/* Subtext */}
        <p
          className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[150%] tracking-normal text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[600px] mb-6 sm:mb-7 md:mb-8"
          style={{ fontFamily: "'Open Sans', sans-serif", color: "#F8FAFC" }}
        >
          Uniting industry leaders to drive collaboration, innovation, and
          sustainable growth across Pakistan's upstream petroleum sector.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none">
          <button
            onClick={() => router.push("/contact")}
            className=" cursor-pointer w-full sm:w-[196px] h-[50px] rounded-[4px] p-[10px] bg-[#16A831] hover:bg-[#128a28] text-white font-medium transition"
          >
            <p
              className=" text-[16px] font-normal leading-[150%] tracking-normal flex items-center justify-center gap-2"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                color: "#F8FAFC",
              }}
            >
              Let's Connect <IoMdArrowForward />
            </p>
          </button>

          <button className="w-full cursor-pointer sm:w-auto border border-white text-white hover:bg-white hover:text-black font-medium py-3 px-6 rounded transition">
            Learn More
          </button>
        </div>
        {/* Bottom Indicator */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-3 xl:bottom-3 2xl:bottom-5 left-1/2 z-10 -translate-x-1/2">
          <div className="h-8 w-5 rounded-full border-2 border-[#1FB34A]">
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-[#1FB34A]" />
          </div>
        </div>{" "}
      </div>
    </section>
  );
}