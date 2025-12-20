"use client";

import Image from "next/image";
import ministry_of_petroleum from '../../../public/images/svg_images/ministry_of_petroleum.svg'
import central_board_of_revenue from '../../../public/images/svg_images/central_board_of_revenue.svg'
import board_of_investment from '../../../public/images/svg_images/board_of_investment.svg'
import engineering_Development_board from '../../../public/images/svg_images/engineering_Development_board.svg'
import lmk_resources from '../../../public/images/svg_images/lmk_resources.svg'
import pakistan_ministry_of_interior from '../../../public/images/svg_images/pakistan_ministry_of_interior.svg'
import environmental_protection_agency from '../../../public/images/svg_images/environmental_protection_agency.svg'
import export_promotion_bureau from '../../../public/images/svg_images/export_promotion_bureau.svg'
import pakistan_petroleum_information_service from '../../../public/images/svg_images/pakistan_petroleum_information_service.svg'

const cards = [
  { name: "Ministry of Petroleum & NR", img: ministry_of_petroleum },
  { name: "Central Board of Revenue", img: central_board_of_revenue },
  { name: "Board of Investment", img: board_of_investment },
  { name: "Engineering Development Board", img: engineering_Development_board },
  { name: "LMK Resources", img: lmk_resources },
  { name: "Pakistan Ministry of Interior", img: pakistan_ministry_of_interior },
  { name: "Environmental Protection Agency", img: environmental_protection_agency },
  { name: "Export Promotion Bureau", img: export_promotion_bureau },
  { name: "Pakistan Petroleum Information Service", img: pakistan_petroleum_information_service },
];

export default function PakistanPetroleumCards() {
  return (
    <section className="w-full pb-12 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 xl:text-[36px] lg:text-[30px] font-semibold leading-tight text-[#0B2545]">
          Pakistan Petroleum Information<br />
          Service, Including:
        </h2>

        <div className="grid grid-cols-5 xl:gap-x-18 lg:gap-x-12 gap-y-8 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex xl:h-[180px] xl:w-[180px] lg:h-[200px] lg:w-[150px] flex-col items-center justify-center rounded-xl bg-[#e1f2e8] p-4"
            >
              {/* Image instead of FaBuilding */}
              <Image
                src={card.img}
                alt={card.name}
            
                className="mb-4 "
              />

              <p className="mb-4 text-center xl:text-[16px] lg:text-[14px] font-normal leading-6 text-[#0B2545]">
                {card.name}
              </p>

              <button className="rounded-md border border-[#16a831]/30 px-6 py-1 xl:text-[14px] lg:text-[12px] font-medium text-[#0B2545]">
                Visit
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
