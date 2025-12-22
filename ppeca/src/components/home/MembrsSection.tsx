"use client";
import Image from "next/image";
import { useState } from "react";
import members_sec_BG from "../../../public/images/members_sec_BG.jpg";

// Import logos
import PPL from "../../../public/images/PPL_logo.jpg";
import Prime from "../../../public/images/PRIME_logo.png";
import PGNiG from "../../../public/images/POLISH_OIL_logo.jpg";
import PAL from "../../../public/images/POL_logo.png";
import Saif from "../../../public/images/SEL_logo.jpg";
import UEP from "../../../public/images/UEP_logo.jpg";

// Import testimonial avatar
import member from "../../../public/images/font_view_smiley_bussinessman_img.jpg";

const logos = [PPL, Prime, PGNiG, PAL, Saif, UEP];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

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
          loading='lazy'
        />
      </div>

      {/* Members label */}
      <div className="absolute top-5 left-5 text-['Open_Sans'] sm:left-10 md:left-15 bg-[#ffffff] text-[#16a831] px-3 py-1 rounded text-xs sm:text-sm z-10">
        Members
      </div>

      {/* Testimonial */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 sm:px-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
          <Image src={member} alt={testimonial.name} loading='lazy' width={96} height={96} />
        </div>
        <p className="max-w-xl text-white font-['Open_Sans'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.25rem] mb-4">
          {testimonial.text}
        </p>
        <h3 className="text-yellow-500 font-extrabold text-sm sm:text-base md:text-base lg:text-lg xl:text-[1rem] font-['Plus_Jakarta_Sans']">
          {testimonial.name}
        </h3>
        <span className="text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-[0.8rem] font-['Plus_Jakarta_Sans']">{testimonial.role}</span>

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

      {/* Mobile navigation dots */}
      <div className="flex space-x-2 mt-6 sm:hidden z-10">
        {logos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === current ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Logos - adjusted for smaller screens */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-20 mt-8 sm:mt-12 md:mt-16 px-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform duration-300 ${
              index === current ? "scale-110" : "scale-100"
            }`}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden">
              <Image
                src={logo}
                alt={`Logo ${index}`}
                className="w-full h-full object-contain"
                loading='lazy'
                width={96}
                height={96}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <button className="mt-8 sm:mt-10 md:mt-12 px-4 py-2 sm:px-6 sm:py-3 border border-white rounded text-white hover:bg-white hover:text-black shadow-md transition z-10 relative text-sm sm:text-base">
        Learn More &#8594;
      </button>
    </section>
  );
}