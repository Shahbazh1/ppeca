"use client";
import Image from "next/image";
import third from "../../../public/images/news1.png";
import second from "../../../public/images/news2.png";
import first from "../../../public/images/news3.png";
import { useRouter } from "next/navigation";

// Example data
const newsData = [
  {
    id: 1,
    date: "20/11/2025",
    category: "PPEPCA",
    title:
      "Reporting social investments made by exploration and production companies in Pakistan",
    description:
      "Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association’s (PPEPCA’s) Corporate Social Responsibility (CSR) Magazine for 2022. As an important means to share information and engage a wide audience, both nationally and internationally, this magazine also serves as a means to promote CSR within Pakistan...",
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
      "Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association’s (PPEPCA’s) Corporate Social Responsibility (CSR) Magazine...",
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
      "Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association’s (PPEPCA’s) Corporate Social Responsibility (CSR) Magazine...",
    image: third,
    link: "#",
  },
];

export default function LatestNews() {
  const router = useRouter();
  return (
    <section className="w-full mx-auto lg:px-12 xl:px-16 bg-[#f8fafc] py-10">
      <h2 className="text-[#16a831] text-lg font-medium mb-4">
        Latest News & Event
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Large Card */}
        <div className="bg-[#ffffff] rounded-lg border-1 border-[#afafaf]/50 flex flex-col lg:h-[500px] xl:h-[550px]">
          {/* Image Section - 40% */}
          <div className="h-[45%] w-full">
            <Image
              src={newsData[0].image}
              alt={newsData[0].title}
              width={500}
              height={300}
              className="rounded-t-lg object-fit object-top w-full h-full"
            />
          </div>

          {/* Content Section - 60% */}
          <div className="h-[55%] p-4 flex flex-col ">
            <div>
              <p className="text-sm text-[#000000] mb-1">
                <span className="text-[#16a831]">{newsData[0].date}</span> |{" "}
                {newsData[0].category}
              </p>

              <h3 className="xl:text-lg lg:text-normal font-semibold mb-2">
                {newsData[0].title}
              </h3>

              <p className="text-gray-600 mb-3 lg:line-clamp-5 xl:line-clamp-6">
                {newsData[0].description}
              </p>
            </div>

            <button
              onClick={() => router.push("/news")}
              className="text-[#eba000] text-start cursor-pointer font-medium hover:underline"
            >
              Read More →
            </button>
          </div>
        </div>

        {/* Right Two Small Cards */}
        <div className="grid grid-cols-1 gap-4">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="bg-[#ffffff] border-1 border-[#afafaf]/50 rounded-lg flex">
              <div className="w-[45%] rounded-lg">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={200}
                  height={100}
                  className="rounded-l-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-[65%] p-4 ">
                <p className="text-sm text-[#000000] mb-2 xl:mb-3">
                  <span className="text-[#16a831]">{news.date}</span> |{" "}
                  {news.category}
                </p>
                <h3 className="xl:text-md lg:text-sm  font-semibold xl:mb-3 mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm xl:mb-3 lg:mb-2 line-clamp-4">
                  {news.description}
                </p>
                <button
                  onClick={() => router.push("/news")}
                  className="text-[#eba000] cursor-pointer font-medium hover:underline"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
