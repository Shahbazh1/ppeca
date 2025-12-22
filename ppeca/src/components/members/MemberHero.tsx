'use client'
import Image from "next/image";
import hero_BG from '../../../public/images/member_heroSec_BG.png'
import ArrowRight from "../../../public/images/svg_images/Arrow right.svg";
import { useRouter } from "next/navigation";

export default function PPEPCAHero() {
  const router = useRouter();
  return (
    <section className="relative w-full  overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero_BG}
        alt="PPEPCA Members Directory"
        fill
        className="object-cover"
        loading="lazy"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 sm:px-6">
        <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[2.625rem] lg:text-[3rem] xl:text-[3.375rem] font-extrabold mt-[2rem] sm:mt-[3rem] md:mt-[4.86rem] lg:mt-[5.4rem] xl:mt-[6rem] tracking-tight">
          PPEPCA Members Directory
        </h1>

        <h2 className="font-normal text-[#C5C5C5] text-[1.125rem] sm:text-[1.25rem] md:text-[1.4375rem] xl:text-[1.5rem] mt-4">
          A united network driving Pakistan's
        </h2>

        <button
          onClick={() => router.push('/members/membershipform')}
          className="cursor-pointer mt-[1rem] sm:mt-[1.5rem] md:mt-[1.62rem] lg:mt-[2.16rem] xl:mt-[2.5rem] mb-[2rem] sm:mb-[3rem] md:mb-[3.6rem] lg:mb-[4.0rem] xl:mb-[4.50rem] inline-flex items-center gap-2 rounded-sm bg-green-600 px-3 sm:px-4 py-2.5 sm:py-3 text-[#F8FAFC] text-xs sm:text-sm font-semibold transition"
        >
          Become a member
          <Image
            src={ArrowRight}
            alt="arrow"
            width={16}
            height={16}
          />
        </button>
      </div>
    </section>
  );
}