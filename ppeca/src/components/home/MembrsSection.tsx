"use client";
import Image from "next/image";
import { useState } from "react";
import members_sec_BG from "../../../public/images/members_sec_BG.jpg";
import { IoMdArrowForward } from "react-icons/io";

// Import logos
import PPL_LOGO from "../../../public/images/companies_logo/PPL_LOGO.jpg";
import PRIME_LOGO from "../../../public/images/companies_logo/PRIME_LOGO.png";
import PGNIG_LOGO from "../../../public/images/companies_logo/PGNIG_LOGO.jpg";
import POL_LOGO from "../../../public/images/companies_logo/POL_LOGO.png";
import SAIF_LOGO from "../../../public/images/companies_logo/SAIF_LOGO.jpg";
import UEP_LOGO from "../../../public/images/companies_logo/UEP_LOGO.jpg";
import AEPL_LOGO from "../../../public/images/companies_logo/AEPL_LOGO.jpg";
import GHPL_LOGO from "../../../public/images/companies_logo/GHPL_LOGO.png";
import KPOGCL_LOGO from "../../../public/images/companies_logo/KPOGCL_LOGO.png";
import MARI_LOGO from "../../../public/images/companies_logo/MARI_LOGO.png";
import MOL_LOGO from "../../../public/images/companies_logo/MOL_LOGO.jpg";
import OGX_LOGO from "../../../public/images/companies_logo/OGX_LOGO.png";
import OP_LOGO from "../../../public/images/companies_logo/OP_LOGO.jpg";

// Import testimonial avatar
import member from "../../../public/images/font_view_smiley_bussinessman_img.jpg";
import { useRouter } from "next/navigation";

const logos = [
  PPL_LOGO,
  PRIME_LOGO,
  PGNIG_LOGO,
  POL_LOGO,
  SAIF_LOGO,
  UEP_LOGO,
  AEPL_LOGO,
  GHPL_LOGO,
  KPOGCL_LOGO,
  MARI_LOGO,
  MOL_LOGO,
  OGX_LOGO,
  OP_LOGO,
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const testimonial = {
    text: "If you want to take your business to the next level, use oil-industry and don't look any further. I love anything that i purchase from oil-industry!",
    name: "KAMRAN KHAN",
    role: "MANAGER",
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === logos.length - 1 ? 0 : prev + 1));
  };

  // For mobile screens, show only 3 logos at a time
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const logosToShow = isMobile ? 3 : 6;
  const logoIndices = Array.from(
    { length: logosToShow },
    (_, i) => (current + i) % logos.length
  );

  return (
    <section className="relative w-full pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 flex flex-col items-center text-white bg-[#121C22]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={members_sec_BG}
          alt="Oil Industry"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
          loading="lazy"
        />
      </div>

      {/* Members label */}
      <h3 className="absolute top-5 left-5 font-['Open_Sans'] sm:left-10 md:left-15 bg-[#ffffff] text-[#16a831] px-3 py-1 rounded text-xs sm:text-sm z-10">
        Members
      </h3>

      {/* Testimonial */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 sm:px-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 relative">
          <Image
            src={member}
            alt={testimonial.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <p className="max-w-md text-white font-['Open_Sans'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.25rem] mb-4">
          {testimonial.text}
        </p>
        <h4 className="text-yellow-500 font-extrabold text-sm sm:text-base md:text-base lg:text-lg xl:text-[1rem] font-['Plus_Jakarta_Sans']">
          {testimonial.name}
        </h4>
        <span className="text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-[0.8rem] font-['Plus_Jakarta_Sans']">
          {testimonial.role}
        </span>

        {/* Navigation arrows - hidden on small screens, positioned absolutely on larger screens */}
        <button
          className="hidden sm:block absolute -left-8 sm:-left-10 md:-left-12 lg:-left-16 top-1/2 transform -translate-y-1/2 border border-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-white hover:text-black transition z-20"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        <button
          className="hidden sm:block absolute -right-8 sm:-right-10 md:-right-12 lg:-right-16 top-1/2 transform -translate-y-1/2 border border-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-white hover:text-black transition z-20"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>

      {/* Current Logos Display - Responsive based on screen size */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-10 sm:gap-12  lg:gap-16 mt-8 sm:mt-12 md:mt-16 px-4 max-w-4xl">
        {logoIndices.map((logoIndex, index) => (
          <div
            key={index}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
          >
            <div className="p-1 sm:p-2 w-full h-full rounded-full overflow-hidden">
              <Image
                src={logos[logoIndex]}
                alt={`Logo ${logoIndex}`}
                className="w-full h-full object-contain"
                loading="lazy"
                width={96}
                height={96}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile slider controls */}
      <div className="flex items-center gap-4 mt-6 md:hidden z-10">
        <button
          onClick={handlePrev}
          className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition"
          aria-label="Previous logo"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition"
          aria-label="Next logo"
        >
          &#8594;
        </button>
      </div>

      {/* Learn More Button */}
      <button
        onClick={() => router.push("/members")}
        className="flex items-center gap-2 cursor-pointer mt-8 sm:mt-10 md:mt-12 px-4 py-2 sm:px-6 sm:py-3 border border-white rounded text-white hover:bg-white hover:text-black shadow-md transition z-10 relative text-sm sm:text-base"
      >
        Learn More <IoMdArrowForward />
      </button>
    </section>
  );
}
