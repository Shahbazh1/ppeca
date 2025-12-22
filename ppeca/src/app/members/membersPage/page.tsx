// components/CompanyCard.tsx
import React from 'react';
import POL_logo from '../../../../public/images/POL_logo.png'
import Image from 'next/image';

const MembersPage: React.FC = () => {
  return (
    <div className='bg-gray-100 p-20'>

      <div className="flex flex-col items-center mb-6">
      <Image 
        src={POL_logo} 
        alt="Company Logo" 
        className="w-20 h-20 object-contain" 
        loading='lazy'
      />
      <h1 className="text-2xl font-bold mt-4 text-gray-800">Al-Haj Enterprises (Private) Limited</h1>
    </div>

      <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-md relative overflow-hidden">
      <div className="space-y-4">
        {/* Company Address */}
        <div>
          <h2 className="text-gray-700 font-semibold text-sm">Companies' Name & Postal Address:</h2>
          <p className="text-gray-500 text-sm mt-1">
            Street No. 29, Plot No. 145, Etihad Plaza, I & T Centre, Sector G-9/1, Islamabad
          </p>
        </div>

        {/* Name & Designation */}
        <div>
          <h2 className="text-gray-700 font-semibold text-sm">Name & Designation:</h2>
          <p className="text-gray-500 text-sm mt-1">
            Mr. Taj Mohammad Afridi <span className="font-medium">Chief Executive Officer</span>
          </p>
        </div>

        {/* Description */}
        <div className="text-gray-500 text-sm space-y-2">
          <p>
            Al-Haj Enterprises (Private) Limited (AEPL) is a recently incorporated Pakistani Exploration and Production Company. AEPL is a part of the AL-Haj Group of Companies involved in Logistics, Oil and Goods Transportation, Textiles, Metals and manufactures of light and heavy vehicles.
          </p>
          <p>
            Al-Haj Group through its subsidy, AL-Haj FAW Motors has a Joint Venture with China for manufacturing of light and heavy transport vehicles.
          </p>
          <p>
            Al-Haj Enterprises (Private) Limited (AEPL) was awarded two (2) Blocks i.e. Block No. 3271-6 Potwar South and Block No. 3169-4 Baska North, during the bid round held in 2013. To-date AEPL has completed acquisition of 135kms of new2-D Seismic in Potwar South Block. The data is now being processed with the acquisition contractors, M/s Geofizyka Krakow of Poland. Preparations are in hand to start 2-D Seismic Acquisition in Block No. 3169-4 Baska North shortly.
          </p>
          <p>
            AEPL’s major shareholder is Senator Taj Muhammad Afridi. AEPL has a strong Technical and Management team comprising of senior personnel from the industry. AEPL’s vision and mission is to become a leading Exploration and Production Company, expanding its operations both locally and abroad.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-gray-700 font-semibold text-sm">Telephone(PABX):</h2>
          <p className="text-gray-500 text-sm mt-1">92 (51) 2264460-63</p>
        </div>
        <div>
          <h2 className="text-gray-700 font-semibold text-sm">Fax:</h2>
          <p className="text-gray-500 text-sm mt-1">92 (51) 2264465</p>
        </div>

        {/* Visit Website Button */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Visit Website
          </a>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute bottom-0 right-0 w-42 h-42 bg-green-100 rounded-full opacity-50 -mb-6 -mr-12"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-100 rounded-full opacity-50 mb-20 mr-12"></div>
    </div>
    </div>
  );
};

export default MembersPage;
