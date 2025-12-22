"use client";
import { useState } from "react";
import { FiEye, FiEyeOff,  } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const CompanyForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f8fafc] pb-4 md:pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        Members / Membership Form
      </p>
      <h1 className="text-[#0A2540] pt-4 sm:pt-6 md:pt-8 text-center font-['Montserrat'] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
        PPEPCA Membership Form
      </h1>

      <form className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-[#0a2540] py-8 lg:pt-12 xl:pt-20">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Member Name
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Name of Company
            </label>
            <div className="relative">
              <select className="w-full cursor-pointer border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                <option>Select Company</option>
              </select>
              <div className="absolute  inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Head Office Address
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              State
            </label>
            <div className="relative">
              <select className="w-full border cursor-pointer border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                <option>Select State</option>
              </select>
              <div className="absolute  inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-400 w-6 h-6 " />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Country
            </label>
            <div className="relative">
              <select className="w-full border cursor-pointer border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                <option>Select Country</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Fax
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Website
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Concession in Pakistan
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Address in Pakistan
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Postal Code
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Fax
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Confirm Email
            </label>
            <input
              type="email"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Name & Designation of the CE in Pakistan
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Joint Venture Partner
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-[#94a3b8] rounded px-3 py-2 pr-10
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2
                 text-gray-600 text-sm sm:text-base cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Name of Chief Executive
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              City
            </label>
            <div className="relative">
              <select className="w-full cursor-pointer border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                <option>Select City</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Postal Code
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Phone
            </label>
            <div className="flex gap-2">
              <div className="relative">
                <select className="border cursor-pointer border-[#94a3b8] rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8">
                  <option>+00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <IoMdArrowDropdown className="text-gray-400  w-6 h-6" />
                </div>
              </div>
              <input
                type="text"
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              E-mail
            </label>
            <input
              type="email"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Brief Profile of the Company
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-sm sm:text-base text-black">
              Status
            </label>

            <div className="flex items-center gap-6 py-[6px]">
  {/* Operator */}
  <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base text-black">
    <input
      type="radio"
      name="status"
      defaultChecked
      className="w-5 h-5 accent-[#16A831]"
    />
    Operator
  </label>

  {/* Status */}
  <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base text-gray-500">
    <input
      type="radio"
      name="status"
      className="w-5 h-5 accent-[#16A831]"
    />
    Status
  </label>
</div>

          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              City
            </label>
            <div className="relative">
              <select className="w-full cursor-pointer border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                <option>Select City</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoMdArrowDropdown className="text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Phone
            </label>
            <div className="flex gap-2">
              <div className="relative">
                <select className="border cursor-pointer border-[#94a3b8] rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8">
                  <option>+00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <IoMdArrowDropdown className="text-gray-400 w-6 h-6" />
                </div>
              </div>
              <input
                type="text"
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              E-mail
            </label>
            <input
              type="email"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Website
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Other Key Contact
            </label>
            <input
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
      {/* Submit & Reset Buttons */}
      <div className="space-y-4">
        <button
          type="submit"
          className="w-full h-10 cursor-pointer sm:h-12 rounded bg-[#16a831] text-white font-semibold flex items-center justify-center hover:bg-green-700"
        >
          Submit
        </button>

        <button
          type="reset"
          className="w-full h-10 sm:h-12 cursor-pointer rounded border-[#94a3b8] border-[2px] text-gray-800 font-semibold flex items-center justify-center hover:bg-gray-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CompanyForm;
