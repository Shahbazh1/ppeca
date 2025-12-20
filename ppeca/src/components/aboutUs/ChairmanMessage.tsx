import Image from "next/image";
import chairman_img from "../../../public/images/chairman_img.png";

const ChairmanMessage: React.FC = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-8 py-20">
      <div className="mx-auto flex max-w-[1400px] items-stretch justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 w-[60%]">
          {/* Heading */}
          <h1 className="xl:text-[36px] lg:text-[30px] font-bold tracking-[2px] text-[#0a2540]">
            CHAIRMAN&apos;S MESSAGE
          </h1>

          {/* Subheading */}
          <h2 className="lg:text-[20px] xl:text-[24px] font-normal text-[#0a2540]">
            Mr. Ali Taha Al-Temimi
          </h2>

          {/* Message Text */}
          <div className="mt-6 lg:max-w-lg xl:max-w-xl lg:text-[14px] leading-[1.7] text-[#0b3a63]">
            <p className="font-bold">Dear Esteemed Members,</p>

            <p>
              I am deeply honoured to take on the role of Chairman of the
              Pakistan Petroleum Exploration and Production Companies
              Association (PPEPCA). I would like to express my sincere gratitude
              to the Executive Committee members for putting their trust and
              confidence in me.
            </p>

            <p>
              Indeed, PPEPCA draws its strength from the expertise and
              experience available from its member companies. Since its
              inception in May 1995, it has matured into a highly professional
              and effective advisory and representative body of the E&amp;P
              industry. At this pivotal moment, we are faced with significant
              challenges and opportunities that will shape the future of our
              industry and nation.
            </p>
            <br />

            <p>
              Oil &amp; Gas is one of the most pressing issues of present era in
              Pakistan and it demands our immediate attention and action. We
              must embrace sustainable practices and invest in technologies to
              enhance our footprints while continuing to meet the energy needs
              of country&apos;s growing economy.
            </p>

            <p>
              As we navigate these complexities, collaboration and innovation
              will be far more essential. Together, we can strengthen our
              industry&apos;s resilience and contribute to national energy
              security through a robust framework.
            </p>
            <br />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[40%] flex flex-col justify-end">
          <Image
            src={chairman_img}
            alt="Chairman PPEPCA"
            width={420}
            className="object-contain"
            priority
          />
        </div>
      </div>
          <div className="mt-6 lg:text-[14px] leading-[1.7] text-[#0b3a63]">
        <p>
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
        <br />

        <p>Thank you for your trust and support.</p>
        <br />

        <p>Let&apos;s make this journey a big success together!</p>

        <p className="text-[#0b3a63] font-bold">Best regards,</p>

        <p className="mt-4 text-[#0b3a63] font-bold">
          Ali Taha Al-Temimi
          <br />
          Chairman PPEPCA
        </p>
      </div>
    </section>
  );
};

export default ChairmanMessage;