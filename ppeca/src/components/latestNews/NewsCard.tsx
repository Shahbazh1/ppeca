// components/NewsCard.tsx
import Image from "next/image";
import React from "react";

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  publishedTime: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  publishedTime,
  url
}) => {
  return (
    <div className="w-full  bg-[#f8fafc] px-4 py-5 border-[#818f9e] border-b-[0.35px] rounded-b-[5.53px]">
      
      {/* TITLE */}
      <a target="_blank" href={url}
        className="mb-2 cursor-pointer text-[#000000] leading-[1.3] font-['Montserrat'] font-bold underline hover:no-underline
        xl:text-[26px]
        lg:text-[24px]
        md:text-[22px]
        sm:text-[20px]
        text-[18px]
        line-clamp-2"
      >
        {title}
      </a>

      {/* CONTENT */}
      <div className="flex gap-4 items-start sm:flex-row flex-col">
        
        {/* IMAGE */}
        <div className="flex justify-center items-center relative w-full sm:w-[130px] h-[180px] sm:h-[110px] flex-shrink-0">
          <Image
            src={image}
            alt={title ? title : "News image"}
            fill
            className="object-cover object-center"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-2 w-full">
          
          {/* DESCRIPTION */}
          <p className="leading-[1.3] font-medium font-['Montserrat'] text-[#3F3F3F]
            xl:text-[17px]
            lg:text-[16.6px]
            md:text-[15px]
            sm:text-[13.5px]
            text-[12px]
            line-clamp-4"
          >
            {description}
          </p>

          {/* META */}
          <span className="leading-[1.3] text-[#717171]
            lg:text-[12px]
            md:text-[11px]
            sm:text-[10px]
            text-[9px]"
          >
            {publishedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
