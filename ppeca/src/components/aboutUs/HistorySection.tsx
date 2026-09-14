import{ABOUT_HISTORY_SECTION_DATA} from "../../constant/data"

const HistorySection: React.FC = () => {
  const { heading, paragraphs } = ABOUT_HISTORY_SECTION_DATA;

  return (
    <section className="w-full bg-[#f8fafc] px-4 sm:px-5 md:px-6 lg:px-5 pt-10 lg:pt-14  box-border">
      <h2 className="mb-3 sm:mb-4 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#0a2540] font-sans">
        {heading}
      </h2>

      <div className="rounded-[2px] bg-[#caead4] px-4 sm:px-5 md:px-6 lg:px-[22px] py-4 sm:py-5 md:py-6 lg:py-[20px]">
        {paragraphs.map((text, index) => (
          <p
            key={index}
            className={`text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#334155] font-['Open_Sans'] ${index > 0 ? "mt-3 sm:mt-4 md:mt-5 lg:mt-0" : "" }`}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default HistorySection;
