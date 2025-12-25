'use client'
import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import Img1 from "../../../public/images/about_sec_img1.jpg";
import Img2 from "../../../public/images/about_sec_img2.jpg";
import { useRouter } from "next/navigation";

export default function AboutSection() {
    const router = useRouter();

  return (
    <section className="w-full bg-gray-50 pb-12 pt-8 sm:pt-12 md:pt-14 lg:pt-16 xl:pt-12 2xl:pt-32 relative px-4 sm:px-6 md:px-10 lg:px-16 xl:px-15 2xl:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-3 sm:gap-5 md:gap-6  p-0">

        {/* Left Content */}
        <div className="lg:flex-[0.6] w-full lg:w-1/2 flex flex-col gap-3 xl:gap-5 lg:pr-8 xl:pr-10 2xl:pr-12">
          <span className=" text-[#16a831] font-['Open_Sans'] font-semibold text-sm sm:text-base">About us</span>

          <h2 className="text-3xl sm:text-4xl md:text-[2.4rem] lg:text-[2.7rem] xl:text-[3rem] 2xl:text-[4rem] font-bold leading-[1.1] font-['Montserrat']">
            Leadership in Pakistan's <br />
            <span className="border-b-4 sm:border-b-6 md:border-b-8 lg:border-b-8 xl:border-b-10 2xl:border-b-12 border-[#16a831] font-['Plus_Jakarta_Sans'] font-normal">
              Petroleum Industry
            </span>
          </h2>

          <p className="text-[#334155]  pr-2 mt-3 sm:mt-4 md:mt-3 lg:mt-4 font-['Open_Sans'] text-sm sm:text-[0.938rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] 2xl:text-[1.25rem] leading-relaxed">
            In the eighties, with the rising curve of activities and the
            unprecedented surge in the petroleum exploration and production
            (E&P) activities, necessitated frequent coordination among those
            engaged in this sector and the need to exchange ideas on a variety
            of subjects of common interest.
          </p>

          <button onClick={() => router.push("/about")} className="cursor-pointer  mt-4 sm:mt-5 md:mt-6 w-fit flex items-center gap-2 bg-[#16a831] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 rounded-md hover:bg-[#128a28] transition text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-lg">
            Read More <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:flex-[0.4] w-full lg:w-1/2 relative flex justify-center items-center min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[600px] mt-8 sm:mt-10 md:mt-12 lg:mt-0">

          {/* Background Image */}
          <div className="absolute top-0 right-4 sm:right-8 md:right-12 lg:top-30 lg:right-0 xl:top-10 xl:right-[-5px] 2xl:-top-10 2xl:right-10 w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] md:w-[260px] md:h-[320px] lg:w-[250px] lg:h-[300px] xl:w-[330px] xl:h-[430px] 2xl:w-[450px] 2xl:h-[570px]">
            <img
              src={Img1.src}
              alt="Petroleum Industry"
              className="object-cover w-full h-full rounded-sm shadow-lg"
            />
          </div>

          {/* Foreground Image */}
          <div className="relative w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[230px] lg:h-[230px] xl:w-[300px] xl:h-[300px] 2xl:w-[420px] 2xl:h-[420px] bottom-[-30px] sm:bottom-[-35px] md:bottom-[-40px] lg:-bottom-27 xl:-bottom-24 2xl:-bottom-28 left-[-20px] sm:left-[-30px] md:left-[-40px] lg:left-[-120px] xl:left-[-130px] 2xl:left-[-60px] z-10 shadow-xl">
            <img
              src={Img2.src}
              alt="Worker"
              className="object-cover w-full h-full rounded-sm"
            />
          </div>

          {/* Year Badge */}
          <div className="absolute top-[25px] sm:top-[-10px] md:top-[22px] lg:top-35 lg:left-15 xl:top-28 xl:left-15 2xl:top-20 2xl:left-36 transform -translate-x-1/2 lg:transform-none">
            <div className="text-[#16a831] font-['Open_Sans'] text-xs sm:text-sm font-light lg:text-sm xl:text-base 2xl:text-lg">
              Started in
            </div>
            <div className="text-4xl font-['Montserrat'] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 -mt-1">
              1988
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}