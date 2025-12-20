'use client'
import Image from "next/image";
import hero_BG from '../../../public/images/member_heroSec_BG.png'
import { useRouter } from "next/navigation";

export default function PPEPCAHero() {
  const router = useRouter();
  return (
    <section className="relative  w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero_BG}
        alt="PPEPCA Members Directory"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-[42px] font-extrabold mt-16 tracking-tight">
          PPEPCA Members Directory
        </h1>

        <p className="mt-3 text-gray-200 text-lg max-w-xl">
          A united network driving Pakistan’s
        </p>

        <button
          onClick={() => router.push('/members/membershipform')}
          className="cursor-pointer mt-8 inline-flex items-center mb-12 gap-2 rounded-md bg-green-600 px-6 py-3 text-white text-sm font-semibold transition hover:bg-green-700"
        >
          Become a member
          <span className="text-lg">→</span>
        </button>
      </div>
    </section>
  );
}
