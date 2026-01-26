"use client";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), {
  ssr: false,
});
import countryList from "react-select-country-list";
import { useMemo } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const CompanyForm = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    Member_Name: "",
    Name_of_company: "",
    Name_of_chief_executive: "",
    Head_of_address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    brief_profile_of_comapny: "",
    concession_in_pakistan: "",
    status_type: "Operator",
    address_in_pakistan: "",
    confirm_email: "",
    name_and_designation_of_ce_in_pakistan: "",
    other_key_contack: "",
    joint_venture_partner: "",
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  type CountryOption = {
    label: string;
    value: string;
  };

  const countryOptions: CountryOption[] = useMemo(
    () => countryList().getData(),
    [],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.country) {
      toast.error("Please select a valid country");
      return;
    }

    if (formData.email !== formData.confirm_email) {
      toast.error("Emails do not match");
      return;
    }

    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      toast.error("Please enter a valid phone number");
      setPhoneError("Please enter a valid phone number");
      return;
    }

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    } else {
      console.log("reCAPTCHA token:", recaptchaToken);
    }

    setLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort(); // cancel the request after 10 seconds
    }, 10000);

    try {
      console.log("Recaptcha Token:", recaptchaToken); // Debug log
      console.log("Submitting form data:", JSON.stringify(formData, null, 2)); // Debug log
      const res = await fetch(`${API_BASE_URL}/api/memership-forms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, recaptchaToken }),
        signal: controller.signal, // attach the abort controller signal
      });

      if (!res.ok) {
        const errorData = await res.json(); // <-- Get the actual error
        console.error("Strapi error:", errorData);
        throw new Error("Failed to submit");
      }

      toast.success("Form submitted successfully!");
      // reset the form
      setFormData({
        Member_Name: "",
        Name_of_company: "",
        Name_of_chief_executive: "",
        Head_of_address: "",
        city: "",
        country: "",
        phone: "",
        email: "",
        website: "",
        brief_profile_of_comapny: "",
        concession_in_pakistan: "",
        status_type: "Operator",
        address_in_pakistan: "",
        confirm_email: "",
        name_and_designation_of_ce_in_pakistan: "",
        other_key_contack: "",
        joint_venture_partner: "",
      });
    } catch (err: any) {
      if (err.name === "AbortError") {
        toast.error("Request timed out. Please try again.");
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error(err);
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

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
              <label
                htmlFor="Member_Name"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Member Name *
              </label>
              <input
                required
                type="text"
                name="Member_Name"
                value={formData.Member_Name}
                onChange={handleChange}
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="Name_of_company"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Name of Company *
              </label>
              <input
                required
                type="text"
                name="Name_of_company"
                value={formData.Name_of_company}
                onChange={handleChange}
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="brief_profile_of_comapny"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Brief Profile of the Company
              </label>
              <textarea
                name="brief_profile_of_comapny"
                value={formData.brief_profile_of_comapny}
                onChange={handleChange}
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="website"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
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
              <label
                htmlFor="Head_of_address"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Head Office Address *
              </label>
              <input
                required
                name="Head_of_address"
                value={formData.Head_of_address}
                onChange={handleChange}
                type="text"
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                City *
              </label>
              <input
                required
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Country *
              </label>

              <Select
                options={countryOptions}
                isSearchable
                placeholder="Select or type country"
                value={
                  formData.country
                    ? { label: formData.country, value: formData.country }
                    : null
                }
                onChange={(selected: any) =>
                  setFormData({
                    ...formData,
                    country: selected ? selected.label : "",
                  })
                }
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>

            <div>
              <label
                htmlFor="concession_in_pakistan"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
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
              <label
                htmlFor="joint_venture_partner"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
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
              <label
                htmlFor="Name_of_chief_executive"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Name of Chief Executive *
              </label>
              <input
                required
                name="Name_of_chief_executive"
                value={formData.Name_of_chief_executive}
                onChange={handleChange}
                type="text"
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="name_and_designation_of_ce_in_pakistan"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
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
              <label
                htmlFor="address_in_pakistan"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
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
              <label
                htmlFor="phone"
                className="block font-semibold mb-1 md:mt-11.25 text-sm sm:text-base"
              >
                Phone *
              </label>

              <PhoneInput
                international
                defaultCountry="PK"
                value={formData.phone}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    phone: value || "",
                  });

                  // Validate phone number in real-time
                  if (value && !isValidPhoneNumber(value)) {
                    setPhoneError("Please enter a valid phone number");
                  } else {
                    setPhoneError("");
                  }
                }}
                className={`w-full border ${phoneError ? "border-red-500" : "border-[#94a3b8]"} rounded px-3 py-2 focus:outline-none focus:ring-2 ${phoneError ? "focus:ring-red-500" : "focus:ring-blue-500"}`}
                numberInputProps={{
                  className: "w-full outline-none",
                  required: true,
                }}
              />

              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="other_key_contact"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
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

            <div>
              <label
                htmlFor="email"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                E-mail *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="confirm_email"
                className="block font-semibold mb-1 text-sm sm:text-base"
              >
                Confirm Email *
              </label>
              <input
                required
                name="confirm_email"
                value={formData.confirm_email}
                onChange={handleChange}
                type="email"
                className="w-full border border-[#94a3b8] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="status_type"
                className="block font-semibold mb-2 text-sm sm:text-base text-black"
              >
                Status *
              </label>

              <div className="flex items-center gap-6 py-1.5">
                {/* Operator */}
                <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base text-black">
                  <input
                    required
                    type="radio"
                    name="status_type"
                    value="Operator"
                    checked={formData.status_type === "Operator"}
                    onChange={handleChange}
                    className="w-5 h-5 accent-[#16A831]"
                  />
                  Operator
                </label>

                {/* Status */}
                <label className="flex items-center gap-2 cursor-pointer text-sm sm:text-base text-black">
                  <input
                    type="radio"
                    name="status_type"
                    className="w-5 h-5 accent-[#16A831]"
                    value="Non-Operator"
                    checked={formData.status_type === "Non-Operator"}
                    onChange={handleChange}
                  />
                  Status
                </label>
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="col-span-1 md:col-span-2 flex justify-center gap-6 mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer w-40  h-10 sm:h-12 rounded font-semibold flex items-center justify-center
  ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#16a831] hover:bg-[#128a28] text-white"
  }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <button
              onClick={() => {
                setFormData({
                  Member_Name: "",
                  Name_of_company: "",
                  Name_of_chief_executive: "",
                  Head_of_address: "",
                  city: "",
                  country: "",
                  phone: "",
                  email: "",
                  website: "",
                  brief_profile_of_comapny: "",
                  concession_in_pakistan: "",
                  status_type: "",
                  address_in_pakistan: "",
                  confirm_email: "",
                  name_and_designation_of_ce_in_pakistan: "",
                  other_key_contack: "",
                  joint_venture_partner: "",
                });
                setPhoneError(""); // Add this line
              }}
              type="reset"
              className="w-40 h-10 sm:h-12 cursor-pointer rounded border-[#94a3b8] border-2 text-gray-800 font-semibold flex items-center justify-center hover:bg-gray-200"
            >
              Reset
            </button>
          </div>
          <div className="mt-4 w-full overflow-hidden">
            <div className="flex justify-center sm:justify-start">
              <div
                className="
        transform 
        scale-[0.78] 
        sm:scale-100 
        origin-top-left
      "
              >
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token: string | null) => setRecaptchaToken(token)}
                />
              </div>
            </div>

            {!recaptchaToken && (
              <p className="text-red-500 text-xs sm:text-sm mt-2 text-center sm:text-left">
                Please complete the reCAPTCHA
              </p>
            )}
          </div>
        </form>
        {/* Submit & Reset Buttons */}
      </div>
    </>
  );
};

export default CompanyForm;
