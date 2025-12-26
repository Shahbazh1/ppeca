"use client";

import Image from "next/image";
import ministry_of_petroleum from '../../../public/images/svg_images/ministry_of_petroleum.svg';
import central_board_of_revenue from '../../../public/images/svg_images/central_board_of_revenue.svg';
import board_of_investment from '../../../public/images/svg_images/board_of_investment.svg';
import engineering_Development_board from '../../../public/images/svg_images/engineering_Development_board.svg';
import lmk_resources from '../../../public/images/svg_images/lmk_resources.svg';
import pakistan_ministry_of_interior from '../../../public/images/svg_images/pakistan_ministry_of_interior.svg';
import environmental_protection_agency from '../../../public/images/svg_images/environmental_protection_agency.svg';
import export_promotion_bureau from '../../../public/images/svg_images/export_promotion_bureau.svg';
import pakistan_petroleum_information_service from '../../../public/images/svg_images/pakistan_petroleum_information_service.svg';

const cards = [
  { 
    name: "Ministry of Petroleum & NR", 
    img: ministry_of_petroleum, 
    url: "https://www.mpnr.gov.pk" 
  },
  { 
    name: "Central Board of Revenue", 
    img: central_board_of_revenue, 
    url: "https://www.cbr.gov.pk" 
  },
  { 
    name: "Board of Investment", 
    img: board_of_investment, 
    url: "https://www.pak.boi.gov.pk" 
  },
  { 
    name: "Engineering Development Board", 
    img: engineering_Development_board, 
    url: "https://www.engineeringindustry.info" 
  },
  { 
    name: "LMK Resources", 
    img: lmk_resources, 
    url: "https://www.lmkr.com" 
  },
  { 
    name: "Pakistan Ministry of Interior", 
    img: pakistan_ministry_of_interior, 
    url: "https://www.interior.gov.pk" 
  },
  { 
    name: "Environmental Protection Agency", 
    img: environmental_protection_agency, 
    url: "https://www.environment.gov.pk" 
  },
  { 
    name: "Export Promotion Bureau", 
    img: export_promotion_bureau, 
    url: "https://www.epb.gov.pk" 
  },
  { 
    name: "Pakistan Petroleum Information Service", 
    img: pakistan_petroleum_information_service, 
    url: "http://www.ppisonline.com" 
  },
];


export default function PakistanPetroleumCards() {
  return (
    <section className="w-full px-4 md:pb-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-[#0B2545] font-['Montserrat'] text-[18px] font-semibold leading-tight lg:text-2xl xl:text-3xl">
          Pakistan Petroleum Information<br />
          Service, Including:
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
                Visit
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
