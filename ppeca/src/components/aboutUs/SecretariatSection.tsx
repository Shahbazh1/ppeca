import Image from "next/image";
import { ABOUT_SECRETARIAT_SECTION_DATA } from "@/src/constant/data";

const SecretariatSection = () => {
  const { heading, paragraphs, responsibilities, closingParagraph, imageData } = ABOUT_SECRETARIAT_SECTION_DATA;
  return (
    <section className="w-full bg-[#f8fafc] px-4 sm:px-6 md:px-8 pt-10 lg:pt-14">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start justify-between gap-8 sm:gap-10 lg:gap-12">
        <div className="flex-1 w-full">
          <h2 className="mb-3 sm:mb-4 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[30px] xl:text-[36px] font-bold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#0A2540]">
            {heading}
          </h2>

          <div className="space-y-4 font-['Open_Sans'] sm:space-y-5 text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px]  text-[#0A2540]">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <ul className="list-disc font-['Open_Sans'] text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-[#0A2540]">
              {responsibilities.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>

            <p>{closingParagraph}</p>
          </div>
        </div>

        <div className="flex-1 w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[330px] shrink-0 flex items-end overflow-hidden rounded-lg border-2 border-[#14a637]">
          <Image
            src={imageData.src}
            alt={imageData.alt}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SecretariatSection;
