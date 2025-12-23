import Image from "next/image";
import chairman_img from "../../../public/images/chairman_img.png";

const ChairmanMessage = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-4 sm:px-5 md:px-6 lg:px-[22px] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] items-stretch justify-between gap-8 sm:gap-10 lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 lg:w-[60%]">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[30px] xl:text-[36px] font-bold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#0a2540] m-0 leading-[1]">
  CHAIRMAN&apos;S MESSAGE
</h1>

<h2 className="text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] font-['Montserrat']  font-normal text-[#0a2540] m-0 leading-[1.1]">
  Mr. Ali Taha Al-Temimi
</h2>



          {/* Message Text */}
          <div className="font-['Open_Sans'] mt-4 sm:mt-5 md:mt-6 lg:max-w-lg xl:max-w-xl text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#0A2540] space-y-3 sm:space-y-4">
            <p className="font-bold mb-0">Dear Esteemed Members,</p>

            <p>
              I am deeply honoured to take on the role of Chairman of the
              Pakistan Petroleum Exploration and Production Companies
              Association (PPEPCA). I would like to express my sincere gratitude
              to the Executive Committee members for putting their trust and
              confidence in me.
              Indeed, PPEPCA draws its strength from the expertise and
              experience available from its member companies. Since its
              inception in May 1995, it has matured into a highly professional
              and effective advisory and representative body of the E&amp;P
              industry. At this pivotal moment, we are faced with significant
              challenges and opportunities that will shape the future of our
              industry and nation.
            </p>

            <p>
              Oil &amp; Gas is one of the most pressing issues of present era in
              Pakistan and it demands our immediate attention and action. We
              must embrace sustainable practices and invest in technologies to
              enhance our footprints while continuing to meet the energy needs
              As we navigate these complexities, collaboration and innovation
              will be far more essential. Together, we can strengthen our
              industry&apos;s resilience and contribute to national energy
              security through a robust framework.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-[40%] flex justify-center items-end lg:justify-center mt-6 sm:mt-8 lg:mt-0">
          <Image
            src={chairman_img}
            alt="Chairman PPEPCA"
            width={350}
            height={450}
            className="object-contain max-w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-[1400px] mx-auto mt-6 sm:mt-8 lg:mt-6 font-['Open_Sans'] text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#0A2540] space-y-3 sm:space-y-4">
        <p className="mb-0">
          Looking ahead, my vision for our association is one of unity and
          proactive leadership. We must foster an environment where new ideas
          flourish, and where we can advocate for policies that balance economic
          growth with energy stewardship.
        </p>

        <p>
          I am eager to engage with each of you, hear your insights, and work
          collectively towards a sustainable and secure future for the E&amp;P
          sector in Pakistan.
        </p>

        <p>Thank you for your trust and support.</p>

        <p className="mb-0">Let&apos;s make this journey a big success together!</p>

        <p className="font-bold">Best regards,</p>

        <p className="mt-4 font-bold">
          Ali Taha Al-Temimi
          <br />
          Chairman PPEPCA
        </p>
      </div>
    </section>
  );
};

export default ChairmanMessage;