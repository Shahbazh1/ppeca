"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

import members_sec_BG from "../../../public/images/members_sec_BG.jpg";
import chairman1 from "../../../public/images/chairman_ppepca.png";

// Logos
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
import KUFPEC_LOGO from "../../../public/images/companies_logo/KUFPEC_LOGO.png";

const logos = [
  OGX_LOGO,
  PPL_LOGO,
  MARI_LOGO,
  GHPL_LOGO,
  UEP_LOGO,
  POL_LOGO,
  PGNIG_LOGO,
  PRIME_LOGO,
  MOL_LOGO,
  OP_LOGO,
  AEPL_LOGO,
  KUFPEC_LOGO,
  SAIF_LOGO,
  KPOGCL_LOGO,
];

export default function TestimonialSection() {
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

  const testimonial = {
    text: "",
    name: "Mr. Masood Nabi",
    role: "Chairman, PPEPCA",
  };

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? logos.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === logos.length - 1 ? 0 : prev + 1));

  const logoIndices = Array.from({ length: logosToShow }, (_, i) => (current + i) % logos.length);

  return (
    <section className="relative w-full pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 flex flex-col items-center text-white bg-[#121C22]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={members_sec_BG}
          alt="Oil Industry Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          quality={100}
          loading="lazy"
        />
      </div>

      {/* Members label */}
      {/* <h3 className="absolute top-5 left-5 sm:left-10 md:left-15 bg-white text-[#16a831] px-3 py-1 rounded text-xs sm:text-sm z-10 font-['Open_Sans']">
        Members
      </h3> */}

      {/* Testimonial */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 sm:px-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 relative">
          <Image
            src={chairman1}
            alt={testimonial.name}
            fill
            className="object-cover bg-white"
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
      </div>

      {/* Logos Container with Navigation */}
      <div className="relative z-10 flex items-center justify-center mt-8 sm:mt-12 md:mt-16 px-4 max-w-4xl">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute -left-8 sm:-left-16 lg:-left-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition z-20"
          aria-label="Previous logo"
        >
          &#8592;
        </button>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-12 lg:gap-16">
          {logoIndices.map((logoIndex, index) => (
            <div
              key={index}
              className="w-14 h-14 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <div className="p-1 sm:p-2 w-full h-full rounded-full overflow-hidden">
                <Image
                  src={logos[logoIndex]}
                  alt={`Logo ${logoIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={96}
                  height={96}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute -right-8 sm:-right-16 lg:-right-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition z-20"
          aria-label="Next logo"
        >
          &#8594;
        </button>
      </div>

      {/* Learn More Button */}
      <button
        onClick={() => router.push("/members")}
        className="flex cursor-pointer items-center gap-2 mt-8 sm:mt-10 md:mt-12 px-4 py-2 sm:px-6 sm:py-3 border border-white rounded text-white hover:bg-white hover:text-black shadow-md transition z-10 relative text-sm sm:text-base"
      >
        Learn More <IoMdArrowForward />
      </button>
    </section>
  );
}
