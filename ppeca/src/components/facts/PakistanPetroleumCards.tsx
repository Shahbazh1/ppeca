"use client";

import Image from "next/image";
import { FACTS_PAKISTAN_PETROLEUM_CARDS_DATA } from "@/src/constant/data";


export default function PakistanPetroleumCards() {

  const { heading, buttonText, cards } = FACTS_PAKISTAN_PETROLEUM_CARDS_DATA;

  return (
    <section className="w-full px-4 md:pb-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-[#0B2545] font-['Montserrat'] text-[18px] font-semibold leading-tight lg:text-2xl xl:text-3xl">
          {heading.line1}<br />
          {heading.line2}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 xl:gap-x-12">
          {cards.map((card, index) => (
            <article
              key={index}
              className="flex flex-col font-['Open_Sans'] items-center justify-center rounded-xl bg-[#e1f2e8] p-4 text-center transition hover:shadow-lg"
            >
              <Image
                src={card.img}
                alt={card.name}
                loading="lazy"
                className="mb-4 w-[40px] :h-[40px] "
              />

              <p className="mb-4 cursor-pointer text-[#0B2545] font-normal lg:text-sm xl:text-base leading-6">
                {card.name}
              </p>

              <a target="_blank" href={card.url} aria-label={`Visit ${card.name}`} className="rounded-md cursor-pointer border border-[#16a831]/30 px-4 py-1 text-sm font-medium text-[#0B2545] hover:bg-[#16a831]/10 transition">
                {buttonText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
