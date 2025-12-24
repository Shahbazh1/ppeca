// pages/index.tsx
import Link from "next/link";
import NewsCard from "../../../components/latestNews/NewsCard";

export default function Home() {
  const news = [
    {
      image: "/images/news1.png",
      title:
        "OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well",
      description:
        "Oil and Gas Development Company Limited (OGDC) has successfully brought the Baragzai X-01 exploratory well into production. The well is currently producing approximately 2,280 barrels of oil per day along with 5.6 million standard cubic feet of gas per day through a 32/64-inch choke, marking a major boost to Pakistan’s domestic energy supply.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "OPEC Announces Temporary Pause in Oil Production to Stabilize Global Markets",
      description:
        "The Organization of the Petroleum Exporting Countries (OPEC) has announced a temporary pause in oil production following a high-level meeting held on Sunday. According to an official statement, the decision aims to balance global oil demand, stabilize prices, and address growing economic uncertainties affecting energy markets worldwide.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "Pakistan’s Energy Sector Sees Growth with New Hydrocarbon Discoveries",
      description:
        "Pakistan’s oil and gas sector continues to show positive momentum as new hydrocarbon discoveries contribute to increased local production. Industry experts believe these developments will help reduce reliance on imports and strengthen the country’s long-term energy security.",
      publishedTime: "Published about 6 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well",
      description:
        "Oil and Gas Development Company Limited (OGDC) has successfully brought the Baragzai X-01 exploratory well into production. The well is currently producing approximately 2,280 barrels of oil per day along with 5.6 million standard cubic feet of gas per day through a 32/64-inch choke, marking a major boost to Pakistan’s domestic energy supply.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "OPEC Announces Temporary Pause in Oil Production to Stabilize Global Markets",
      description:
        "The Organization of the Petroleum Exporting Countries (OPEC) has announced a temporary pause in oil production following a high-level meeting held on Sunday. According to an official statement, the decision aims to balance global oil demand, stabilize prices, and address growing economic uncertainties affecting energy markets worldwide.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "Pakistan’s Energy Sector Sees Growth with New Hydrocarbon Discoveries",
      description:
        "Pakistan’s oil and gas sector continues to show positive momentum as new hydrocarbon discoveries contribute to increased local production. Industry experts believe these developments will help reduce reliance on imports and strengthen the country’s long-term energy security.",
      publishedTime: "Published about 6 hours ago",
    },{
      image: "/images/news1.png",
      title:
        "OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well",
      description:
        "Oil and Gas Development Company Limited (OGDC) has successfully brought the Baragzai X-01 exploratory well into production. The well is currently producing approximately 2,280 barrels of oil per day along with 5.6 million standard cubic feet of gas per day through a 32/64-inch choke, marking a major boost to Pakistan’s domestic energy supply.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "OPEC Announces Temporary Pause in Oil Production to Stabilize Global Markets",
      description:
        "The Organization of the Petroleum Exporting Countries (OPEC) has announced a temporary pause in oil production following a high-level meeting held on Sunday. According to an official statement, the decision aims to balance global oil demand, stabilize prices, and address growing economic uncertainties affecting energy markets worldwide.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "Pakistan’s Energy Sector Sees Growth with New Hydrocarbon Discoveries",
      description:
        "Pakistan’s oil and gas sector continues to show positive momentum as new hydrocarbon discoveries contribute to increased local production. Industry experts believe these developments will help reduce reliance on imports and strengthen the country’s long-term energy security.",
      publishedTime: "Published about 6 hours ago",
    },{
      image: "/images/news1.png",
      title:
        "OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well OGDC Reports Significant Oil and Gas Production from Baragzai X-01 Well",
      description:
        "Oil and Gas Development Company Limited (OGDC) has successfully brought the Baragzai X-01 exploratory well into production. The well is currently producing approximately 2,280 barrels of oil per day along with 5.6 million standard cubic feet of gas per day through a 32/64-inch choke, marking a major boost to Pakistan’s domestic energy supply.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "OPEC Announces Temporary Pause in Oil Production to Stabilize Global Markets",
      description:
        "The Organization of the Petroleum Exporting Countries (OPEC) has announced a temporary pause in oil production following a high-level meeting held on Sunday. According to an official statement, the decision aims to balance global oil demand, stabilize prices, and address growing economic uncertainties affecting energy markets worldwide.",
      publishedTime: "Published about 4 hours ago",
    },
    {
      image: "/images/news1.png",
      title:
        "Pakistan’s Energy Sector Sees Growth with New Hydrocarbon Discoveries",
      description:
        "Pakistan’s oil and gas sector continues to show positive momentum as new hydrocarbon discoveries contribute to increased local production. Industry experts believe these developments will help reduce reliance on imports and strengthen the country’s long-term energy security.",
      publishedTime: "Published about 6 hours ago",
    },
  ];

  return (
    <div className="bg-[#f8fafc] pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      {/* Breadcrumb */}
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        <Link href='/news' className="inline-block"> News & Events </Link> / Lastest News
      </p>

      {/* Heading */}
      <h1 className="font-['Montserrat'] leading-[1.1] text-[#333333] font-bold 
        xl:text-[54px] 
        lg:text-[50px] 
        md:text-[45px] 
        sm:text-[41px] 
        text-[37px] 
        text-center 
        mt-4 sm:mt-6 md:mt-8"
      >
        Latest News
      </h1>

      {/* News List */}
      <div className="bg-[#f8fafc] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col gap-6">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            publishedTime={item.publishedTime}
          />
        ))}
      </div>
    </div>
  );
}
