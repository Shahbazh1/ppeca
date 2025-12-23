// components/CompanyCard.tsx
import React from "react";
import POL_logo from "../../../../public/images/POL_logo.png";
import Image from "next/image";

const MembersPage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 font-['Open_Sans']">
      {/* Logo & Title */}
      <div className="flex flex-col items-center mb-6 text-center">
        <Image
          src={POL_logo}
          alt="Company Logo"
          className="xl:w-[144px] xl:h-[144px] lg:w-[129.6px] lg:h-[129.6px] md:w-[116.64px] md:h-[116.64px] sm:w-[105px] sm:h-[105px] h-[94.5px] w-[94.5px] rounded-full bg-white object-cover"
          loading="lazy"
        />
        <h1 className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-semibold mt-4 text-[#334155] font-['Open_Sans']">
          Al-Haj Enterprises (Private) Limited
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-7xl mx-auto p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md relative overflow-hidden">
        <div className="space-y-4">
          {/* Company Address */}
          <div>
            <h2 className="text-[#334155] font-semibold text-sm">
              Companies' Name & Postal Address:
            </h2>
            <p className="text-[#334155] text-sm mt-1">
              Street No. 29, Plot No. 145, Etihad Plaza, I & T Centre, Sector
              G-9/1, Islamabad
            </p>
          </div>

          {/* Name & Designation */}
          <div>
            <h2 className="text-[#334155] font-semibold text-sm">
              Name & Designation:
            </h2>
            <p className="text-[#334155] text-sm mt-1">
              Mr. Taj Mohammad Afridi{" "}
              <span className="font-medium">Chief Executive Officer</span>
            </p>
          </div>

          {/* Description */}
          <div className="text-[#334155] text-sm space-y-2 leading-relaxed">
            <p>
              Al-Haj Enterprises (Private) Limited (AEPL) is a recently
              incorporated Pakistani Exploration and Production Company. AEPL is
              a part of the AL-Haj Group of Companies involved in Logistics, Oil
              and Goods Transportation, Textiles, Metals and manufactures of
              light and heavy vehicles.
            </p>
            <p>
              Al-Haj Group through its subsidy, AL-Haj FAW Motors has a Joint
              Venture with China for manufacturing of light and heavy transport
              vehicles.
            </p>
            <p>
              Al-Haj Enterprises (Private) Limited (AEPL) was awarded two (2)
              Blocks i.e. Block No. 3271-6 Potwar South and Block No. 3169-4
              Baska North, during the bid round held in 2013. To-date AEPL has
              completed acquisition of 135kms of new2-D Seismic in Potwar South
              Block.
            </p>
            <p>
              AEPL’s major shareholder is Senator Taj Muhammad Afridi. AEPL has
              a strong Technical and Management team comprising of senior
              personnel from the industry.
            </p>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h2 className="text-[#334155] font-semibold text-sm">
                Telephone (PABX):
              </h2>
              <p className="text-[#334155] text-sm mt-1">92 (51) 2264460-63</p>
            </div>

            <div>
              <h2 className="text-[#334155] font-semibold text-sm">Fax:</h2>
              <p className="text-[#334155] text-sm mt-1">92 (51) 2264465</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-4">
            <a
              href="#"
              className="inline-block bg-[#16A831] text-[#F8FAFC] font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Decorative Circles (hidden on very small screens) */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#16A8311F] rounded-full opacity-50 -mb-3 -mr-5 hidden sm:block"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#16A8311F] rounded-full opacity-50 mb-20 mr-12 hidden sm:block"></div>
      </div>
    </div>
  );
};

export default MembersPage;
