"use client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

import Link from "next/link";
const CompanyForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    Member_Name: "",
    Password: "",
    Name_of_company: "",
    Name_of_chief_executive: "",
    Head_of_address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    phone: "",
    fax: "",
    email: "",
    website: "",
    brief_profile_of_comapny: "",
    concession_in_pakistan: "",
    status_type: "",
    address_in_pakistan: "",
    city_in_pakistan: "",
    postal_code_in_pakistan: "",
    phone_in_pakistan: "",
    fax_in_pakistan: "",
    email_in_pakistan: "",
    confirm_email: "",
    website_in_pakistan: "",
    name_and_designation_of_ce_in_pakistan: "",
    other_key_contack: "",
    joint_venture_partner: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/memership-forms`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        }
      );

      if (!res.ok) throw new Error("Failed to submit");

      toast.success("Form submitted successfully!");
      // reset the form
      setFormData({
        Member_Name: "",
        Password: "",
        Name_of_company: "",
        Name_of_chief_executive: "",
        Head_of_address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        phone: "",
        fax: "",
        email: "",
        website: "",
        brief_profile_of_comapny: "",
        concession_in_pakistan: "",
        status_type: "",
        address_in_pakistan: "",
        city_in_pakistan: "",
        postal_code_in_pakistan: "",
        phone_in_pakistan: "",
        fax_in_pakistan: "",
        email_in_pakistan: "",
        confirm_email: "",
        website_in_pakistan: "",
        name_and_designation_of_ce_in_pakistan: "",
        other_key_contack: "",
        joint_venture_partner: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="bg-[#f8fafc] pb-4 md:pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <p className="font-['Open_Sans'] font-light text-xs sm:text-sm md:text-base text-[#0A2540] pt-4 sm:pt-6 md:pt-8">
        <Link href="/members" className="inline-block">
          {" "}
          Members{" "}
        </Link>{" "}
        / Membership Form
      </p>
      <h1 className="text-[#0A2540] pt-4 sm:pt-6 md:pt-8 text-center font-['Montserrat'] text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">
        PPEPCA Membership Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-[#0a2540] py-8 lg:pt-12 xl:pt-20"
      >
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Member Name
            </label>
            <input
              type="text"
              name="Member_Name"
              value={formData.Member_Name}
              onChange={handleChange}
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Name of Company
            </label>
            <div className="relative">
              <select
                name="Name_of_company"
                value={formData.Name_of_company}
                onChange={handleChange}
                className="w-full cursor-pointer border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
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
              name="Head_of_address"
              value={formData.Head_of_address}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              State
            </label>
            <div className="relative">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border cursor-pointer border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
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
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border cursor-pointer border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
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
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Website
            </label>
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Concession in Pakistan
            </label>
            <input
              name="concession_in_pakistan"
              value={formData.concession_in_pakistan}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Address in Pakistan
            </label>
            <input
              name="address_in_pakistan"
              value={formData.address_in_pakistan}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Postal Code
            </label>
            <input
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Fax
            </label>
            <input
              name="fax_in_pakistan"
              value={formData.fax_in_pakistan}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Confirm Email
            </label>
            <input
              name="confirm_email"
              value={formData.confirm_email}
              onChange={handleChange}
              type="email"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Name & Designation of the CE in Pakistan
            </label>
            <input
              name="name_and_designation_of_ce_in_pakistan"
              value={formData.name_and_designation_of_ce_in_pakistan}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Joint Venture Partner
            </label>
            <input
              name="joint_venture_partner"
              value={formData.joint_venture_partner}
              onChange={handleChange}
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
                name="Password"
                value={formData.Password}
                onChange={handleChange}
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
              name="Name_of_chief_executive"
              value={formData.Name_of_chief_executive}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              City
            </label>
            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full cursor-pointer border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
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
              name="postal_code_in_pakistan"
              value={formData.postal_code_in_pakistan}
              onChange={handleChange}
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
                name="phone_in_pakistan"
                value={formData.phone_in_pakistan}
                onChange={handleChange}
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
              name="email_in_pakistan"
              value={formData.email_in_pakistan}
              onChange={handleChange}
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Brief Profile of the Company
            </label>
            <input
              type="text"
              name="brief_profile_of_comapny"
              value={formData.brief_profile_of_comapny}
              onChange={handleChange}
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
              <select
                name="city_in_pakistan"
                value={formData.city_in_pakistan}
                onChange={handleChange}
                className="w-full cursor-pointer border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
              name="email_in_pakistan"
              value={formData.email_in_pakistan}
              onChange={handleChange}
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Website
            </label>
            <input
              name="website_in_pakistan"
              value={formData.website_in_pakistan}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Other Key Contact
            </label>
            <input
              name="other_key_contack"
              value={formData.other_key_contack}
              onChange={handleChange}
              type="text"
              className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="col-span-2 space-y-4">
          <button
            type="submit"
            className="w-full h-10 cursor-pointer sm:h-12 rounded bg-[#16a831] text-white font-semibold flex items-center justify-center hover:bg-[#128a28]"
          >
            Submit
          </button>

          <button
            onClick={() =>
              setFormData({
                Member_Name: "",
                Password: "",
                Name_of_company: "",
                Name_of_chief_executive: "",
                Head_of_address: "",
                city: "",
                state: "",
                postal_code: "",
                country: "",
                phone: "",
                fax: "",
                email: "",
                website: "",
                brief_profile_of_comapny: "",
                concession_in_pakistan: "",
                status_type: "",
                address_in_pakistan: "",
                city_in_pakistan: "",
                postal_code_in_pakistan: "",
                phone_in_pakistan: "",
                fax_in_pakistan: "",
                email_in_pakistan: "",
                confirm_email: "",
                website_in_pakistan: "",
                name_and_designation_of_ce_in_pakistan: "",
                other_key_contack: "",
                joint_venture_partner: "",
              })
            }
            type="reset"
            className="w-full h-10 sm:h-12 cursor-pointer rounded border-[#94a3b8] border-[2px] text-gray-800 font-semibold flex items-center justify-center hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </form>
      {/* Submit & Reset Buttons */}
    </div>
  );
};

export default CompanyForm;
