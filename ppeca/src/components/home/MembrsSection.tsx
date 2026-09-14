"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";
import { HOME_testimonialContent } from "@/src/constant/data";

export default function TestimonialSection() {
  const {backgroundImage, leader, cta, memberLogos} = HOME_testimonialContent
  const [current, setCurrent] = useState(0);
  const [logosToShow, setLogosToShow] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const updateLogosToShow = () => {
      setLogosToShow(window.innerWidth < 1024 ? 3 : 5);
    };
    updateLogosToShow();
    window.addEventListener("resize", updateLogosToShow);
    return () => window.removeEventListener("resize", updateLogosToShow);
  }, []);

  const totalLogos = memberLogos.length;

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? totalLogos - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === totalLogos - 1 ? 0 : prev + 1));

  const logoIndices = Array.from(
    { length: logosToShow },
    (_, i) => (current + i) % totalLogos,
  );

  return (
    <section className="relative w-full pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 flex flex-col items-center text-white bg-[#121C22]">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          quality={100}
          loading="lazy"
        />
      </div>

      {/* <h3 className="absolute top-5 left-5 sm:left-10 md:left-15 bg-white text-[#16a831] px-3 py-1 rounded text-xs sm:text-sm z-10 font-['Open_Sans']">
        Members
      </h3> */}

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 sm:px-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 relative">
          <Image
            src={leader.avatar}
            alt={leader.name}
            fill
            className="object-cover bg-white"
            loading="lazy"
          />
        </div>

        <p className="max-w-md text-white font-['Open_Sans'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.25rem] mb-4">
          {leader.quote}
        </p>
        <h4 className="text-yellow-500 font-extrabold text-sm sm:text-base md:text-base lg:text-lg xl:text-[1rem] font-['Plus_Jakarta_Sans']">
          {leader.name}
        </h4>
        <span className="text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-[0.8rem] font-['Plus_Jakarta_Sans']">
          {leader.role}
        </span>
      </div>

      <div className="relative z-10 flex items-center justify-center mt-8 sm:mt-12 md:mt-16 px-4 max-w-4xl">
        <button
          onClick={handlePrev}
          className="absolute -left-8 sm:-left-16 lg:-left-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition z-20"
          aria-label="Previous logo"
        >
          &#8592;
        </button>

        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-12 lg:gap-16">
          {logoIndices.map((logoIndex, index) => {
            const logo = memberLogos[logoIndex];
            return (
              <div
                key={index}
                className="w-14 h-14 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
              >
                <div className="p-1 sm:p-2 w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width={96}
                    height={96}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-8 sm:-right-16 lg:-right-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition z-20"
          aria-label="Next logo"
        >
          &#8594;
        </button>
      </div>

      <button
        onClick={() => router.push("/members")}
        className="flex cursor-pointer items-center gap-2 mt-8 sm:mt-10 md:mt-12 px-4 py-2 sm:px-6 sm:py-3 border border-white rounded text-white hover:bg-white hover:text-black shadow-md transition z-10 relative text-sm sm:text-base"
      >
        {cta.label} <IoMdArrowForward />
      </button>
    </section>
  );
}
