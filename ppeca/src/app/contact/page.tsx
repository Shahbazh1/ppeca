"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import ic_sharp from "../../../public/images/svg_images/ic_sharp.svg";
import carbon_location from "../../../public/images/svg_images/carbon_location.svg";
import bxs_phone from "../../../public/images/svg_images/bxs_phone.svg";
import vactor1 from "../../../public/images/svg_images/Group 1000001749.svg";
import vactor2 from "../../../public/images/svg_images/Group 1000001750.svg";
import vactor3 from "../../../public/images/svg_images/Group 1000001751.svg";
import Head from "next/head";

export default function ContactUs() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    subject: "general",
    msg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return; // prevent double submit
    setLoading(true);
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort(); // actually cancel the fetch
      // optional: reject promise, but fetch will throw AbortError
    }, 5000);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact-forms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
        signal: controller.signal, // attach the signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Strapi error:", errorData);
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        subject: "general",
        msg: "",
      });
    } catch (error: any) {
      if (error.name === "AbortError") {
        toast.error(
          "Request timed out. Please check your connection and try again."
        );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact PPEPCA – Pakistan Petroleum Exploration Companies</title>

        <meta
          name="description"
          content="Get in touch with PPEPCA for inquiries, support, or collaboration regarding petroleum exploration in Pakistan."
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact PPEPCA – Pakistan Petroleum Exploration Companies"
        />
        <meta
          property="og:description"
          content="Get in touch with PPEPCA for inquiries, support, or collaboration regarding petroleum exploration in Pakistan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ppepca.com/contact" />
        <meta property="og:image" content="https://www.ppepca.com/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact PPEPCA – Pakistan Petroleum Exploration Companies"
        />
        <meta
          name="twitter:description"
          content="Get in touch with PPEPCA for inquiries, support, or collaboration regarding petroleum exploration in Pakistan."
        />
        <meta name="twitter:image" content="https://www.ppepca.com/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.ppepca.com/contact" />
      </Head>

      <Toaster position="top-center" reverseOrder={false} />
      <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base font-['Open_Sans'] text-slate-500 mt-3 max-w-md mx-auto">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
            {/* LEFT INFO PANEL */}
            <div className="relative w-full font-['Poppins'] lg:flex-[45%] bg-white border border-[#94a3b8]/70 rounded-xl m-3 p-6 sm:p-8 overflow-hidden flex flex-col">
              {/* Title & Description (TOP) */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0a2540]">
                  Contact Information
                </h2>
                <p className="text-[#334155] mt-2 text-sm sm:text-base">
                  Say something to start a live chat!
                </p>
              </div>

              {/* Contact Details (CENTER) */}
              <div className="flex-1 flex items-center py-4 sm:py-6">
                <div className="space-y-4 sm:space-y-6 text-[#334155] w-full">
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/svg_images/bxs_phone-call.svg"
                      alt="phone"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base">
                      92 51 2102135 / 92 51 2102136
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src="/images/svg_images/ic_sharp-email.svg"
                      alt="email"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base">
                      mail@ppepca.com
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src="/images/svg_images/carbon_location-filled.svg"
                      alt="location"
                      className="w-5 h-5 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base">
                      LG04, Block 02, Savoy Residences,
                      <br />
                      F-11/1, Islamabad
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Icons (BOTTOM) */}
              <div className="flex gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={vactor1.src} alt="social" className="w-10 h-10" />
                </div>

                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={vactor2.src} alt="social" className="w-10 h-10" />
                </div>

                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <img src={vactor3.src} alt="social" className="w-10 h-10" />
                </div>
              </div>

              {/* Decorative circles (unchanged & clipped) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-12 -right-5 w-40 h-40 sm:w-64 sm:h-64 bg-[#e3f5e6] rounded-full opacity-60 translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute bottom-24 right-18 w-24 h-24 sm:w-40 sm:h-40 bg-[#e3f5e6] rounded-full opacity-60"></div>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="w-full lg:flex-[55%] font-['Open_Sans'] p-6 sm:p-8 lg:p-10 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1">
                    <label className="text-sm text-slate-600">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-2"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-sm text-slate-600">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-2"
                    />
                  </div>
                </div>
                {/* email & Phone */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1">
                    <label className="text-sm text-slate-600">Email *</label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-2"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-sm text-slate-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-2"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-3">
                    Select Subject?
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 text-sm text-slate-600 w-full">
                    {["General Inquiry", "Membership Information"].map(
                      (item, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
                        >
                          <input
                            type="radio"
                            name="subject"
                            value="general"
                            checked={formData.subject === "general"}
                            onChange={handleChange}
                            className="w-4 h-4 accent-slate-800 cursor-pointer"
                          />
                          <span>{item}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-slate-600">Message</label>
                  <textarea
                    name="msg"
                    value={formData.msg}
                    onChange={handleChange}
                    rows={1}
                    placeholder="Write your message.."
                    className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-3 resize-none"
                  />
                </div>
                {/* Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Send your message"
                    className={`cursor-pointer px-8 py-3 rounded-lg shadow-md transition text-sm sm:text-base sm:px-10 flex items-center justify-center
    ${
      loading
        ? "bg-gray-400 cursor-not-allowed "
        : "bg-[#16A831] hover:bg-[#128a28] text-white"
    }`}
                  >
                    {loading ? "Submitting..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
