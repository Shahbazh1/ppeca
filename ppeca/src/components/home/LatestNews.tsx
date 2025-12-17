'use client';
import Image from 'next/image';
import first from '../../../public/images/news1.png';
import second from '../../../public/images/news2.png';
import third from '../../../public/images/news3.png';

// Example data
const newsData = [
  {
    id: 1,
    date: '20/11/2025',
    category: 'PPEPCA',
    title: 'Reporting social investments made by exploration and production companies in Pakistan',
    description:
      'Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association’s (PPEPCA’s) Corporate Social Responsibility (CSR) Magazine for 2022. As an important means to share information and engage a wide audience, both nationally and internationally, this magazine also serves as a means to promote CSR within Pakistan...',
    image: first,
    link: '#',
  },
  {
    id: 2,
    date: '20/11/2025',
    category: 'PPEPCA',
    title: 'Reporting social investments made by exploration and production companies in Pakistan',
    description:
      'Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association’s (PPEPCA’s) Corporate Social Responsibility (CSR) Magazine...',
    image: second,
    link: '#',
  },
  {
    id: 3,
    date: '20/11/2025',
    category: 'PPEPCA',
    title: 'Reporting social investments made by exploration and production companies in Pakistan',
    description:
      'Welcome to the 19th Issue of Pakistan Petroleum Exploration and Production Companies Association’s (PPEPCA’s) Corporate Social Responsibility (CSR) Magazine...',
    image: third,
    link: '#',
  },
];


export default function LatestNews() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <h2 className="text-green-500 text-lg font-medium mb-6">Latest News & Event</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Large Card */}
        <div className="bg-white rounded-lg shadow  flex flex-col ">
          <div >
            <Image
              src={newsData[0].image}
              alt={newsData[0].title}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className=" lg:pl-4 mt-4 lg:mt-0">
            <p className="text-sm text-gray-500 mb-1">
              <span className="text-green-500">{newsData[0].date}</span> | {newsData[0].category}
            </p>
            <h3 className="text-lg font-semibold mb-2">{newsData[0].title}</h3>
            <p className="text-gray-600 mb-3">{newsData[0].description}</p>
            <a href={newsData[0].link} className="text-orange-500 font-medium hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* Right Two Small Cards */}
        <div className="grid grid-cols-1 gap-4">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow p-4 flex">
              <div className="w-1/2">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={200}
                  height={150}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="w-1/2 pl-4">
                <p className="text-sm text-gray-500 mb-1">
                  <span className="text-green-500">{news.date}</span> | {news.category}
                </p>
                <h3 className="text-md font-semibold mb-1">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">{news.description}</p>
                <a href={news.link} className="text-orange-500 font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
