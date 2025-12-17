import Image from 'next/image';
import Img1 from '../../../public/images/about_sec_img1.jpg'
import Img2 from '../../../public/images/about_sec_img2.jpg'

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-0">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <span className="text-green-500 font-medium">About us</span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-snug">
            Leadership in Pakistan’s <br />
            <span className="border-b-4 border-green-500">Petroleum Industry</span>
          </h2>
          <p className="text-gray-600 mt-4">
            In the eighties, with the rising curve of activities and the unprecedented surge in the petroleum exploration and production (E&P) activities, necessitated frequent coordination among those engaged in this sector and the need to exchange ideas on a variety of subjects of common interest. As a result of consultations betwee…
          </p>
          <button className="mt-6 w-fit bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            Read More &rarr;
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative flex justify-center items-start">
          <div className="absolute top-0 right-0 w-56 h-56 lg:w-72 lg:h-72 shadow-lg">
            <Image 
              src={Img1} 
              alt="Petroleum Industry" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 shadow-lg z-10">
            <Image 
              src={Img2} 
              alt="Worker" 
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="absolute top-4 left-0 text-green-500 text-sm font-medium">Started in</div>
          <div className="absolute top-6 left-0 text-5xl font-bold text-gray-900">1988</div>
        </div>
      </div>
    </section>
  );
}
