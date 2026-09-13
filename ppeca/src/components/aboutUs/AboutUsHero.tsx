import Image from "next/image";
import aboutUsHero_BG from "../../../public/images/aboutUsHero_BG.jpg";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";

const ABOUT_HERO_DATA = {
  title: "About PPEPCA",
  description:
    "Serving Pakistan's upstream petroleum sector through collaboration, policy advocacy and community development.",
  cta: {
    label: "Let's Connect",
    href: "/contact",
  },
  backgroundImage: {
    src: aboutUsHero_BG,
    alt: "Industrial refinery background",
  },
};

export default function AboutPPEPCAHero() {
  const { title, description, cta, backgroundImage } = ABOUT_HERO_DATA;

  return (
    <section className="relative h-[350px] sm:h-[380px] md:h-[400px] w-full overflow-hidden">
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="max-w-4xl px-4 sm:px-6 text-center">
          <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.625rem] xl:text-[3rem] font-bold tracking-tight text-white/95">
            {title}
          </h1>

          <p className="mt-1 md:mt-1 font-['Open_Sans'] lg:mt-1 xl:mt-2 text-[0.8125rem] sm:text-[0.875rem] md:text-[0.875rem] lg:text-[0.9375rem] xl:text-[1rem] max-w-prose lg:max-w-lg xl:max-w-xl leading-relaxed text-[#E5E5E5]">
            {description}
          </p>

          <div className="mt-3 sm:mt-3 md:mt-3 lg:mt-3 xl:mt-4 flex justify-center">
            <Link
              href={cta.href}
              className="cursor-pointer font-['Open_Sans']  w-[170px] sm:w-[180px] h-[46px] rounded-[4px] p-[10px] bg-[#16A831] hover:bg-[#128a28] text-white font-medium transition flex items-center justify-center gap-2"
            >
              {cta.label} <IoMdArrowForward />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 xl:bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="h-7 w-5 rounded-full border-2 border-[#16A831]">
          <div className="mx-auto mt-1 h-[6px] w-[2px] rounded-full bg-[#16A831]" />
        </div>
      </div>
    </section>
  );
}
