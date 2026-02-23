import Image from "next/image";
import Secretariat_img from '../../../public/images/Secretariat_img.png';

const SecretariatSection = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-16 lg:pt-20">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-start justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-full">
          {/* Heading */}
          <h2 className="mb-3 sm:mb-4 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[30px] xl:text-[36px] font-bold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#0A2540]">
            SECRETARIAT
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 font-['Open_Sans'] sm:space-y-5 text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px]  text-[#0A2540]">
            <p>
              The Secretariat is located in Islamabad and has dedicated staff to
              look after the day-to-day running of the affairs of PPEPCA.
            </p>

            <p>
              In accordance with the Trade Organization Rules, the Secretariat is
              headed by a Secretary General who has overall responsibility of
              PPEPCA and has specific responsibilities, which include:
            </p>

            {/* Bullet List */}
            <ul className="list-disc font-['Open_Sans'] text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-[#0A2540]">
              <li>
                Defining, setting out, and meeting assigned yearly targets of PPEPCA.
              </li>
              <li>
                Interacting with senior Govt. functionaries on behalf of the Chairman PPEPCA Excom.
              </li>
            </ul>

            <p>
              The PPEPCA budget for the year is approved by the Excom and funded
              through yearly membership fee invoiced to companies based on their
              production numbers with a cap.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[330px] shrink-0 flex items-end overflow-hidden rounded-lg border-2 border-[#14a637]">
          <Image
            src={Secretariat_img}
             alt="Secretariat staff meeting at PPEPCA office in Islamabad"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SecretariatSection;