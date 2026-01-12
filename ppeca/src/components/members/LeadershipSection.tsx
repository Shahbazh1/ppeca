import Image, { StaticImageData } from "next/image";

import uep_president from "../../../public/images/uep_president.png";
import sel_ceo from "../../../public/images/sel_ceo.png";
import ppl_ceo from "../../../public/images/ppl_ceo.png";
import pogc_md from "../../../public/images/pogc_md.png";
import orient_petroleum_ceo from "../../../public/images/orient_petroleum_ceo.png";
import mol_ceo from "../../../public/images/mol_ceo.png";
import mari_ceo from "../../../public/images/mari_ceo.png";
import kufpec_manager from "../../../public/images/chairman1.png";
import kpogc_ceo from "../../../public/images/kpogc_ceo.png";
import  Secretary_General_PPEPCA  from "../../../public/images/Secretary_General_PPEPCA.png";
/* =======================
   DATA (single source)
======================= */
const leaders = [
  {
    role: "Chairman PPEPCA",
    name: "Mr. Ali Taha Al Temimi",
    title: "Country Manager",
    company: "Kufpec Pakistan B.V",
    image: kufpec_manager,
  },
  {
    role: "Senior Vice Chairman PPEPCA",
    name: "Mr. Kamran Ajmal Mian",
    title: "Chief Executive Officer",
    company: "Prime Global Energies Ltd.",
    image: ppl_ceo,
  },
  {
    role: "Vice Chairman PPEPCA",
    name: "Mr. Andrzej Kaczorowski",
    title: "Managing Director",
    company: "Polish Oil & Gas Company",
    image: pogc_md,
  },
  {
    role: "Member Executive Committee",
    name: "Mr. Nasir Khan",
    title: "Chief Executive Officer",
    company: "Khyber Pakhtunkhwa Oil & Gas Company Ltd.",
    image: kpogc_ceo,
  },
  {
    role: "Member Executive Committee",
    name: "Mr. Faheem Haider",
    title: "Managing Director / CEO",
    company: "Mari Energies Ltd.",
    image: mari_ceo,
  },
  {
    role: "Member Executive Committee",
    name: "Mr. Laszlo Zsolt Adam",
    title: "Managing Director / CEO",
    company: "MOL Pakistan Oil & Gas Company B.V.",
    image: mol_ceo,
  },
  {
    role: "Member Executive Committee",
    name: "Mr. Kamran Ahmed",
    title: "Chief Executive Officer",
    company: "Orient Petroleum Inc.",
    image: orient_petroleum_ceo,
  },
  {
    role: "Member Executive Committee",
    name: "Mr. Jehangir Saifullah Khan",
    title: "Chief Executive Officer",
    company: "Saif Energy Limited",
    image: sel_ceo,
  },
  {
    role: "Member Executive Committee",
    name: "Mr. Muhammad Zaheer Alam",
    title: "President",
    company: "United Energy Pakistan",
    image: uep_president,
  },
  {
    role: " Secretary General PPEPCA",
    name: "Mr. Ibrar Khan",
    title: "Vice President",
    company: "Jazz",
    image: Secretary_General_PPEPCA,
  },
];


export default function LeadershipSection() {
  return (
    <section className="bg-[#f8fafc] max-w-8xl xl:px-[3rem]  md:px-[2.49rem] sm:p-[2.1rem] p-[1.8rem]  md:py-[3.2rem]">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="text-center md:mb-12 mb-8">
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

        {/* <div className="font-medium py-6 w-fit">
                  <h2 className="text-[#0A2540] font-['Open_Sans'] text-[1.25rem] sm:text-[1.375rem] md:text-[1.4275rem] lg:text-[1.75rem] mb-3">
                    Executive Committees
                  </h2>
        
                  <ul className="list-disc pl-5 space-y-[6px]">
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      General Body
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Executive Committee
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Policy &amp; Rules Committee
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Fiscal Affairs Committee
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Corporate Affairs Committee
                    </li>
                  </ul>
                </div> */}

                <div className="font-medium py-6 w-fit">
                  <h2 className="text-[#0A2540] font-['Open_Sans'] text-[1.25rem] sm:text-[1.375rem] md:text-[1.4275rem] lg:text-[1.75rem] mb-3">
                    Expert Committees
                  </h2>
        
                  <ul className="list-disc pl-5 space-y-[6px]">
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Policy & Rules Committee
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Fiscal Affairs Committee
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      Corporate Affairs Committee
                    </li>
                    <li className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]">
                      HSE & Security Affairs
                    </li>
                  </ul>
                </div>
      </div>
    </section>
  );
}

interface Props {
  name: string;
  title ?: string;
  company ?: string;
  image: StaticImageData;
  role?: string;
}

// function LeaderCard({ name, title, company, image, role }: Props) {
//   return (
//     <div
//       className="
//         w-full
//         h-full
//         rounded-[10px]
//         bg-[#f8f8f8]
//         border border-[#d1d5db]
//         overflow-hidden
//         shadow-sm
//       "
//     >
//       {/* Image */}
//       <div className="relative w-full rounded-md aspect-[4/4] bg-[#f3f1f2]">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover rounded-md  "
//           loading="lazy"
//         />
//         <div className="absolute w-full px-[6%] font-['Open_Sans']  bg-white/70  bottom-0 text-center">
//           <p className="lg:text-[0.9rem] md:text-[0.7rem] text-[0.63rem]  font-semibold text-[#0A2540] leading-snug">
//             {name}
//           </p>

//           <p className="mt-[2%] lg:text-[0.9rem] md:text-[0.7rem] text-[0.63rem]  text-[#0A2540]">
//             {role}
//           </p>

//           {/* <p className="mt-[2%] lg:text-[0.9rem] md:text-[0.7rem] text-[0.63rem]  text-[#0A2540]">
//             {title}
//           </p> */}

//           <p className="mt-[2%] lg:text-[0.9rem] md:text-[0.7rem] text-[o.43rem]  font-medium text-[#16A831]">
//             {company}
//           </p>
//         </div>
//       </div>

//       {/* Content */}
//     </div>
//   );
// }

function LeaderCard({ name, title, company, image, role }: Props) {
  return (
    <div className="w-full rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Image */}
      <div className="relative w-full aspect-square bg-[#f8f8f8]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-3 py-3 text-center font-['Open_Sans']">

        {/* Name */}
        <p className="text-[0.75rem] sm:text-[0.85rem] lg:text-[0.95rem] font-semibold text-[#0A2540] leading-snug">
          {name}
        </p>

        {/* Role */}
        {role && (
          <p className="mt-1 text-[0.65rem] sm:text-[0.7rem] lg:text-[0.75rem] font-medium text-[#0A2540]">
            {role}
          </p>
        )}


        {/* Divider */}
        {company && (
          <div className="my-2 mx-auto h-[1px] w-8 bg-slate-200" />
        )}

        {/* Company */}
        {company && (
          <p className="text-[0.6rem] sm:text-[0.65rem] lg:text-[0.75rem] font-medium text-[#16A831]">
            {company}
          </p>
        )}

        
        {/* Title */}
        {title && (
          <p className="mt-[2px] text-[0.6rem] sm:text-[0.65rem] lg:text-[0.7rem] text-slate-600">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
