'use client';
import Image from "next/image";
import { useState } from "react";
import members_sec_BG from '../../../public/images/members_sec_BG.jpg'

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
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={members_sec_BG}
          alt="Oil Industry"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-80"
        />
      </div>

      {/* Members label */}
      <div className="absolute top-10 left-10 bg-white text-green-500 px-3 py-1 rounded text-sm z-10">
        Members
      </div>

      {/* Testimonial */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image src={member} alt={testimonial.name} />
        </div>
        <p className="text-white text-lg md:text-xl mb-4">{testimonial.text}</p>
        <h3 className="text-yellow-500 font-bold text-lg">{testimonial.name}</h3>
        <span className="text-white text-sm">{testimonial.role}</span>

        {/* Navigation arrows */}
        <div className="flex justify-between w-20 mt-4">
          <button
            className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <button
            className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-black transition"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className="relative z-10 flex space-x-6 mt-16">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform duration-300 ${
              index === current ? "scale-110" : "scale-100"
            }`}
          >
            <Image src={logo} alt={`Logo ${index}`} className="p-4" />
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <button className="mt-12 px-6 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition">
        Learn More &#8594;
      </button>
    </section>
  );
}
