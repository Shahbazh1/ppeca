"use client";
import { useState } from "react";

const CompanyForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-gray-100 ">
      <p className="pl-30 pt-10">About / Membership Form</p>
      <h1 className="text-center text-5xl font-bold pt-15 pb-15">
        PPEPCA Membership Form
      </h1>

      <form className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Member Name</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Name of Company</label>
            <select className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Company</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Head Office Address
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">State</label>
            <select className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select State</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Country</label>
            <select className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Country</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Fax</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Website</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Concession in Pakistan
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Address in Pakistan
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Postal Code</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Fax</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Confirm Email</label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Name & Designation of the CE in Pakistan
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Joint Venture Partner
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Name of Chief Executive
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">City</label>
            <select className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select City</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Postal Code</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <div className="flex gap-2">
              <select className="border border-gray-400 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>+00</option>
              </select>
              <input
                type="text"
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Brief Profile of the Company
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Status</label>
            <div className="flex items-center gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" className="accent-green-500" />
                Operator
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" className="accent-green-500" />
                Status
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">City</label>
            <select className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select City</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <div className="flex gap-2">
              <select className="border border-gray-400 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>+00</option>
              </select>
              <input
                type="text"
                className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Website</label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Other Key Contact
            </label>
            <input
              type="text"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit & Reset Buttons */}
        <div className="md:col-span-2 space-y-4 ">
          <button
            type="submit"
            className="w-full h-[42px] rounded bg-green-600 text-white font-semibold flex items-center justify-center hover:bg-blue-700"
          >
            Submit
          </button>

          <button
            type="reset"
            className="w-full h-[42px] rounded bg-gray-300 text-gray-800 font-semibold flex items-center justify-center hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
