"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

import ic_sharp from "../../../public/images/svg_images/ic_sharp.svg";
import carbon_location from "../../../public/images/svg_images/carbon_location.svg";
import bxs_phone from "../../../public/images/svg_images/bxs_phone.svg";
import vactor1 from "../../../public/images/svg_images/Group 1000001749.svg";
import vactor2 from "../../../public/images/svg_images/Group 1000001750.svg";
import vactor3 from "../../../public/images/svg_images/Group 1000001751.svg";
import Head from "next/head";

const contactDetails = [
  {
    icon: "/images/svg_images/bxs_phone-call.svg",
    alt: "phone",
    text: "92 51 2102135 / 92 51 2102136",
  },
  {
    icon: "/images/svg_images/ic_sharp-email.svg",
    alt: "email",
    text: "mail@ppepca.com",
  },
  {
    icon: "/images/svg_images/carbon_location-filled.svg",
    alt: "location",
    text: "3rd Floor, SNC Center, Plot No. 12-D (East),\nFazal-e-Haq Road,\nBlue Area, Islamabad, Pakistan.",
  },
];

const socialIcons = [vactor1, vactor2, vactor3];

const subjectOptions = [
  { label: "General Inquiry", value: "general" },
  { label: "Membership Information", value: "membership" },
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNo: "",
  subject: "general",
  msg: "",
};

export default function ContactUs() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
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
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    if (loading) return;
    setLoading(true);
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      console.log("Recaptcha Token:", recaptchaToken);
      console.log("Submitting form data:", JSON.stringify(formData, null, 2));

      const response = await fetch(`${API_BASE_URL}/api/contact-forms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, recaptchaToken }),
        signal: controller.signal,
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
      setRecaptchaToken(null);
    } catch (error: any) {
      if (error.name === "AbortError") {
        toast.error(
          "Request timed out. Please check your connection and try again.",
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
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base font-['Open_Sans'] text-slate-500 mt-3 max-w-md mx-auto">
              Any question or remarks? Just write us a message!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
            <div className="relative w-auto font-['Poppins'] lg:flex-[45%] bg-white border border-[#94a3b8]/70 rounded-xl m-3 p-6 sm:p-8 overflow-hidden flex flex-col">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0a2540]">
                  Contact Information
                </h2>
                <p className="text-[#334155] mt-2 text-sm sm:text-base">
                  Say something to start a live chat!
                </p>
              </div>

              <div className="flex-1 z-10 flex items-center py-4 sm:py-6">
                <div className="space-y-4 sm:space-y-6 text-[#334155] w-full">
                  {contactDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <img
                        src={detail.icon}
                        alt={detail.alt}
                        className="w-5 h-5 mt-1 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base whitespace-pre-line">
                        {detail.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex gap-4 relative z-10">
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <img
                      src={icon.src}
                      alt={`social-${index + 1}`}
                      className="w-10 h-10"
                    />
                  </div>
                ))}
              </div> */}

              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute bottom-6 md:bottom-12 -right-5 lg:-right-5 w-40 h-40 sm:w-64 sm:h-64 bg-[#e3f5e6] rounded-full opacity-60 translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute bottom-16 md:bottom-24 right-10 lg:right-18 w-24 h-24 sm:w-40 sm:h-40 bg-[#e3f5e6] rounded-full opacity-60"></div>
              </div>
            </div>

            <div className="w-full lg:flex-[55%] font-['Open_Sans'] p-6 sm:p-8 lg:p-10 bg-white">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 text-slate-800 sm:space-y-8"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-1">
                    <label className="text-sm text-slate-600">
                      First Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-2"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-sm text-slate-600">
                      Last Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 focus:border-[#16A831] outline-none py-2"
                    />
                  </div>
                </div>
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
                    {subjectOptions.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={opt.value}
                          checked={formData.subject === opt.value}
                          onChange={handleChange}
                          className="w-4 h-4 accent-slate-800 cursor-pointer"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-600">Message *</label>
                  <textarea
                    required
                    name="msg"
                    value={formData.msg}
                    onChange={handleChange}
                    rows={1}
                    placeholder="Write your message.."
                    className="w-full border-b placeholder:text-[#8a8a8a] border-gray-300 focus:border-[#16A831] outline-none py-3 resize-none"
                  />
                </div>
                <div className="mt-4">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token: string | null) =>
                      setRecaptchaToken(token)
                    }
                  />
                  {!recaptchaToken && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2">
                      Please complete the reCAPTCHA
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    aria-label="Send your message"
                    className={`cursor-pointer px-8 py-3  rounded-lg shadow-md transition text-sm sm:text-base sm:px-10 flex items-center justify-center
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
