"use client";
import Image from "next/image";
import third from "../../../public/images/news1.png";
import second from "../../../public/images/news2.png";
import first from "../../../public/images/news3.png";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";

// Example data
const newsData = [
  {
    id: 1,
    date: "20/11/2025",
    category: "PPEPCA",
    title:
      "Reporting social investments made by exploration and production companies in Pakistan",
    description:
      "Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association's (PPEPCA's) Corporate Social Responsibility (CSR) Magazine for 2022. As an important means to share information and engage a wide audience, both nationally and internationally, this magazine also serves as a means to promote CSR within Pakistan...",
    image: first,
    link: "#",
  },
  {
    id: 2,
    date: "20/11/2025",
    category: "PPEPCA",
    title:
      "Reporting social investments made by exploration and production companies in Pakistan",
    description:
      "Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association's (PPEPCA's) Corporate Social Responsibility (CSR) Magazine...",
    image: second,
    link: "#",
  },
  {
    id: 3,
    date: "20/11/2025",
    category: "PPEPCA",
    title:
      "Reporting social investments made by exploration and production companies in Pakistan",
    description:
      "Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association's (PPEPCA's) Corporate Social Responsibility (CSR) Magazine...",
    image: third,
    link: "#",
  },
];

export default function LatestNews() {
  const router = useRouter();
  return (
    <section  aria-labelledby="latest-news-heading" className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-[#f8fafc] py-10">
      <h2 className="text-[#16a831] font-['Open_Sans'] text-base sm:text-lg md:text-lg lg:text-lg font-medium mb-4">
        Latest News & Event
      </h2>
      <div className="font-['Open_Sans'] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
        {/* Left Large Card */}
        <div className="bg-[#ffffff] rounded-lg border-1 border-[#afafaf]/50 flex flex-col h-[400px] sm:h-[450px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
          {/* Image Section - 40% */}
          <div className="h-[45%] w-full">
            <Image
            loading='lazy'
              src={newsData[0].image}
              alt={newsData[0].title}
              width={500}
              height={300}
              className="rounded-t-lg object-fit object-top w-full h-full"
            />
          </div>

          {/* Content Section - 60% */}
          <div className="h-[55%] p-4  flex flex-col">
            <div>
              <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-[#000000] mb-1">
                <span className="text-[#16a831]">{newsData[0].date}</span> |{" "}
                {newsData[0].category}
              </p>

              <h3 className=" md:text-base lg:text-normal xl:text-lg 2xl:text-xl font-semibold mb-2">
                {newsData[0].title}
              </h3>

              <p className="text-gray-600 md:mb-3 line-clamp-3 sm:line-clamp-4 md:line-clamp-4 lg:line-clamp-5 xl:line-clamp-6 2xl:line-clamp-6">
                {newsData[0].description}
              </p>
            </div>

            <button
              onClick={() => router.push("/news")}
              className="flex items-center gap-2 text-[#eba000] text-start cursor-pointer font-medium hover:underline"
            >
              Read More <IoMdArrowForward/>
            </button>
          </div>
        </div>

        {/* Right Two Small Cards */}
        <div className="grid grid-cols-1 gap-4">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="bg-[#ffffff] border-1 border-[#afafaf]/50 rounded-lg flex">
              <div className="w-[40%] sm:w-[45%] md:w-[45%] lg:w-[45%] rounded-lg">
                <Image
                  src={news.image}
                  loading='lazy'
                  alt={news.title}
                  width={200}
                  height={100}
                  className="rounded-l-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-[60%] sm:w-[55%] md:w-[55%] lg:w-[65%] p-4">
                <p className="text-xs sm:text-sm md:text-sm lg:text-sm text-[#000000] mb-2 xl:mb-3">
                  <span className="text-[#16a831]">{news.date}</span> |{" "}
                  {news.category}
                </p>
                <h4 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-md 2xl:text-lg font-semibold mb-2 xl:mb-3">
                  {news.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-sm xl:mb-3 lg:mb-2 line-clamp-3 sm:line-clamp-4 md:line-clamp-4 lg:line-clamp-4">
                  {news.description}
                </p>
                <button
                  onClick={() => router.push("/news")}
                  className="flex items-center gap-2 text-[#eba000] cursor-pointer font-medium hover:underline"
                >
                  Read More <IoMdArrowForward/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}