import Image, { StaticImageData } from "next/image";

import uep_president from "../../../public/images/uep_president.png";
import sel_ceo from "../../../public/images/sel_ceo.png";
import ppl_ceo from "../../../public/images/ppl_ceo.png";
import pogc_md from "../../../public/images/pogc_md.png";
import orient_petroleum_ceo from "../../../public/images/orient_petroleum_ceo.png";
import mol_ceo from "../../../public/images/mol_ceo.png";
import mari_ceo from "../../../public/images/mari_ceo.png";
import kufpec_manager from "../../../public/images/kufpec_manager.png";
import kpogc_ceo from "../../../public/images/kpogc_ceo.png";

/* =======================
   DATA (single source)
======================= */
const leaders = [
  {
    name: "Mr. Ali Taha Al Temimi",
    title: "Country Manager",
    company: "KUFPEC",
    image: kufpec_manager,
  },
  {
    name: "Mr. Kamran Ajmal Mian",
    title: "Chief Executive Officer",
    company: "PPL",
    image: ppl_ceo,
  },
  {
    name: "Mr. Andrzej Kaczorowski",
    title: "Managing Director",
    company: "POGC",
    image: pogc_md,
  },
  {
    name: "Mr. Nasir Khan",
    title: "Chief Executive Officer",
    company: "KPOGCL",
    image: kpogc_ceo,
  },
  {
    name: "Mr. Faheem Haider",
    title: "Managing Director / CEO",
    company: "MARI",
    image: mari_ceo,
  },
  {
    name: "Laszlo Zsolt Adam",
    title: "Managing Director / CEO",
    company: "MOL",
    image: mol_ceo,
  },
  {
    name: "Kamran Ahmed",
    title: "Chief Executive Officer",
    company: "Orient Petroleum",
    image: orient_petroleum_ceo,
  },
  {
    name: "Jehangir Saifullah Khan",
    title: "Chief Executive Officer",
    company: "SEL",
    image: sel_ceo,
  },
  {
    name: "Zaheer Alam",
    title: "President",
    company: "UEP",
    image: uep_president,
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-[#f8fafc] max-w-8xl xl:px-[3rem]  md:px-[2.49rem] sm:p-[2.1rem] p-[1.8rem]  xl:py-[3rem] md:py-[2.49rem]">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="text-center md:mb-16 mb-8">
          <h1 className="xl:text-[2.25rem] sm:text-[1.35rem] lg:text-[2.025rem] md:text-[1.8225rem] text-[1.35rem] font-bold text-[#0A2540]">
            Leadership & Executive Committee
          </h1>
          <p className="mt-2 xl:text-[1.125rem] font-['Open_Sans'] lg:text-[1.0125rem] sm:text-[0.7875rem] md:text-[0.91125rem] text-[0.675rem] text-[#475569]">
            Representing member companies and guiding PPEPCA’s mission.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid 
            justify-center
            gap-x-8 
            gap-y-12
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4 xl:grid-cols-5          "
        >
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Props {
  name: string;
  title: string;
  company: string;
  image: StaticImageData;
}

function LeaderCard({ name, title, company, image }: Props) {
  return (
    <div
      className="
        w-full
        h-full
        rounded-[10px]
        bg-[#f8f8f8]
        border border-[#d1d5db]
        overflow-hidden
        shadow-sm
      "
    >
      {/* Image */}
      <div className="relative w-full rounded-md aspect-[4/4] bg-[#f3f1f2]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md  "
          loading="lazy"
        />
        <div className="absolute w-full px-[6%] font-['Open_Sans']  bg-white/70  bottom-0 text-center">
          <p className="lg:text-[0.9rem] md:text-[0.7rem] text-[0.63rem]  font-semibold text-[#0A2540] leading-snug">
            {name}
          </p>

          <p className="mt-[2%] lg:text-[0.9rem] md:text-[0.7rem] text-[0.63rem]  text-[#0A2540]">
            {title}
          </p>

          <p className="mt-[2%] lg:text-[0.9rem] md:text-[0.7rem] text-[o.43rem]  font-medium text-[#22c55e]">
            {company}
          </p>
        </div>
      </div>

      {/* Content */}
    </div>
  );
}