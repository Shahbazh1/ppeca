const HistorySection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8fafc] px-4 sm:px-5 md:px-6 lg:px-5 box-border">
      {/* Heading */}
      <h2 className="mb-3 sm:mb-4 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#0a2540] font-sans">
        HISTORY
      </h2>

      {/* Green Content Box */}
      <div className="rounded-[2px] bg-[#caead4] px-4 sm:px-5 md:px-6 lg:px-[22px] py-4 sm:py-5 md:py-6 lg:py-[20px]">
        <p className="text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#334155] font-['Open_Sans']">
          In the eighties, with the rising curve of activities and the unprecedented surge in the
          petroleum exploration and production (E&amp;P) activities necessitated frequent
          coordination among those engaged in this sector and the need to exchange ideas on a
          variety of subjects of common interest. As a result of consultations between the concerned
          companies a need was felt to establish an organization which, while playing an advisory
          role, could safeguard the interests of member companies. In 1988 the few companies engaged
          in exploration and production of petroleum formed an umbrella organization originally
          conceived under the name and style of Petroleum Exploration and Production Companies
          Advisory Committee (PEPCAC), as a representative body of local and foreign companies
          operating in Pakistan at that time. In May 1995, the organization was registered as a
          company, limited by guarantee, without any share capital, under the new title of Pakistan
          Petroleum Exploration and Production Companies Association (PPEPCA).
        </p>
        <p className="text-[13px] sm:text-[14px] md:text-[14.5px] lg:text-[14px] xl:text-[15px] font-[Open_Sans]  leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-[#334155] mt-3 sm:mt-4 md:mt-5 lg:mt-0">
          PPEPCA has thus grown out of its member companies engaged in petroleum exploration and
          production activities. Its establishment was an important landmark in the history of
          petroleum industry of Pakistan. It was culmination of endeavors, spread over a long
          period, of five private sector companies namely Mari Gas, Oxy, POL, PPL, and a public
          sector company, OGDCL. PPEPCA now, comprises (14) members, (8) of which are foreign E&amp;P
          companies. PPEPCA has recognition and support of the Ministry of Energy (Petroleum
          Division).
        </p>
      </div>
    </section>
  );
};

export default HistorySection;