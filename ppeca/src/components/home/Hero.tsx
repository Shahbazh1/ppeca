import Image from 'next/image';
import heroBg from '../../../public/images/heroBg.png';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[536px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Petroleum Industry"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        {/* Tagline */}
        <div className="inline-block mb-4 px-4 py-1 border border-green-500 rounded-full text-green-500 text-sm font-medium">
          PPEPCA — Pakistan Petroleum Exploration and Production Companies Association
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Powering Pakistan’s <br /> Petroleum Future
        </h1>

        {/* Subtext */}
        <p className="text-white text-base md:text-lg max-w-2xl mb-8">
          Uniting industry leaders to drive collaboration, innovation, and sustainable growth across Pakistan’s upstream petroleum sector.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded transition">
            Let's Connect →
          </button>
          <button className="border border-white text-white hover:bg-white hover:text-black font-medium py-3 px-6 rounded transition">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-white text-2xl animate-bounce">
          ⬇
        </div>
      </div>
    </section>
  );
}
