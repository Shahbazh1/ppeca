import Image, { StaticImageData } from "next/image";
import { MEMBERS_leadershipContent } from "@/src/constant/data";

export default function LeadershipSection() {
  const {heading, subheading, expertCommitteesTitle,expertCommittees, leaders } = MEMBERS_leadershipContent;
  return (
    <section className="bg-[#f8fafc] max-w-8xl xl:px-[3rem]  md:px-[2.49rem] sm:p-[2.1rem] p-[1.8rem]  md:py-[3.2rem]">
      <div className=" mx-auto">
        <div className="text-center md:mb-12 mb-8">
          <h1 className="xl:text-[2.25rem] sm:text-[1.35rem] lg:text-[2.025rem] md:text-[1.8225rem] text-[1.35rem] font-bold text-[#0A2540]">
            {heading}
          </h1>
          <p className="mt-2 xl:text-[1.125rem] font-['Open_Sans'] lg:text-[1.0125rem] sm:text-[0.7875rem] md:text-[0.91125rem] text-[0.675rem] text-[#475569]">
            {subheading}
          </p>
        </div>

        <div className=" grid justify-center gap-x-8 gap-y-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {leaders.map((leader, index) => (
            <LeaderCard key={index} {...leader} />
          ))}
        </div>

        <div className="font-medium py-6 w-fit">
          <h2 className="text-[#0A2540] font-['Open_Sans'] text-[1.25rem] sm:text-[1.375rem] md:text-[1.4275rem] lg:text-[1.75rem] mb-3">
            {expertCommitteesTitle}
          </h2>

          <ul className="list-disc pl-5 space-y-[6px]">
            {expertCommittees.map((committee, index) => (
              <li
                key={index}
                className="text-[#0A2540] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[1.4]"
              >
                {committee}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

interface Props {
  name: string;
  title?: string;
  company?: string;
  image: StaticImageData;
  role?: string;
}

function LeaderCard({ name, title, company, image, role }: Props) {
  return (
    <div className="w-full rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full aspect-square bg-[#f8f8f8]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="px-3 py-3 text-center font-['Open_Sans']">
        <p className="text-[0.75rem] sm:text-[0.85rem] lg:text-[0.95rem] font-semibold text-[#0A2540] leading-snug">
          {name}
        </p>

        {role && (
          <p className="mt-1 text-[0.65rem] sm:text-[0.7rem] lg:text-[0.75rem] font-medium text-[#0A2540]">
            {role}
          </p>
        )}

        {company && <div className="my-2 mx-auto h-[1px] w-8 bg-slate-200" />}

        {company && (
          <p className="text-[0.6rem] sm:text-[0.65rem] lg:text-[0.75rem] font-medium text-[#16A831]">
            {company}
          </p>
        )}

        {title && (
          <p className="mt-[2px] text-[0.6rem] sm:text-[0.65rem] lg:text-[0.7rem] text-slate-600">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
