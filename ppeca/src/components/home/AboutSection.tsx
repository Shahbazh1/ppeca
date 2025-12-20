import Image from 'next/image';
import Img1 from '../../../public/images/about_sec_img1.jpg'
import Img2 from '../../../public/images/about_sec_img2.jpg'
import { IoMdArrowForward } from "react-icons/io";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 pb-12 lg:pt-16 xl:pt-28 relative lg:px-16 xl:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 p-6 lg:px-0">
        
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-2">
          <span className="text-[#16a831]  font-semibold">About us</span>
          <h2 className="text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.1]">
  Leadership in Pakistan’s <br />
  <span className="border-b-8 border-[#16a831] font-normal">
    Petroleum Industry
  </span>
</h2>

          <p className="text-gray-600 mt-4">
            In the eighties, with the rising curve of activities and the unprecedented surge in the petroleum exploration and production (E&P) activities, necessitated frequent coordination among those engaged in this sector and the need to exchange ideas on a variety of subjects of common interest. As a result of consultations betwee…
          </p>
          <button className="mt-6 w-fit flex items-center gap-2 bg-[#16a831] text-white xl:px-6 xl:py-3 lg:py-2 lg:px-3 rounded-md hover:bg-green-600 transition">
  Read More <IoMdArrowForward />
</button>

        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative flex justify-center items-start">
          <div className="absolute lg:-top-10 lg:-right-3 lg:w-[280px] lg:h-[350px] xl:-top-20 xl:-right-3 xl:w-[376px] xl:h-[454px] ">
            <Image 
              src={Img1} 
              alt="Petroleum Industry" 
              className="object-cover w-full h-full rounded-sm"
            />
          </div>
          <div className="relative xl:w-[336px] xl:h-[336px] xl:-bottom-[60px] xl:-left-28 lg:w-[280px] lg:h-[280px] lg:-bottom-[60px]  lg:-left-20 z-10">
            <Image 
              src={Img2} 
              alt="Worker" 
              className="object-cover w-full h-full rounded-sm"
            />
          </div>
          <div className="absolute lg:-top-4 xl:-top-3 lg:left-10 xl:left-18 text-[#16a831] text-sm font-light">Started in</div>
          <div className="absolute lg:-top-1 xl:top-0 lg:left-8 xl:left-16 text-6xl font-bold text-gray-900">1988</div>
        </div>
      </div>
    </section>
  );
}
