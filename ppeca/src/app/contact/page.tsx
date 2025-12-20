"use client";
import ic_sharp from "../../../public/images/svg_images/ic_sharp.svg";
import carbon_location from "../../../public/images/svg_images/carbon_location.svg";
import bxs_phone from "../../../public/images/svg_images/bxs_phone.svg";
import vactor1 from "../../../public/images/svg_images/Group 1000001749.svg";
import vactor2 from "../../../public/images/svg_images/Group 1000001750.svg";
import vactor3 from "../../../public/images/svg_images/Group 1000001751.svg";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center  pt-16 pb-8">
      <div>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-slate-800">Contact Us</h1>
          <p className="text-slate-500 mt-3">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* LEFT INFO PANEL */}
          <div className="relative flex-[45%] bg-white border border-[#94a3b8]/70 rounded-xl m-3 p-8 overflow-hidden flex flex-col">
            {/* Title & Description (TOP) */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0a2540]">
                Contact Information
              </h2>
              <p className="text-[#334155] mt-2">
                Say something to start a live chat!
              </p>
            </div>

            {/* Contact Details (CENTER) */}
            <div className="flex-1 flex items-center">
              <div className="space-y-6 text-[#334155]">
                <div className="flex items-center gap-4">
                  <img src={ic_sharp} alt="phone" className="w-5 h-5" />
                  <span>92 51 2102135 / 92 51 2102136</span>
                </div>

                <div className="flex items-center gap-4">
                  <img src={carbon_location} alt="email" className="w-5 h-5" />
                  <span>mail@ppepca.com</span>
                </div>

                <div className="flex items-start gap-4">
                  <img
                    src={bxs_phone}
                    alt="location"
                    className="w-5 h-5 mt-1"
                  />
                  <span>
                    LG04, Block 02, Savoy Residences,
                    <br />
                    F-11/1, Islamabad
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons (BOTTOM) */}
            <div className="flex gap-4 relative z-10">
              <div className="w-10 h-10  rounded-full flex items-center justify-center">
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
              <div className="absolute bottom-12 -right-5 w-64 h-64 bg-[#e3f5e6] rounded-full opacity-60 translate-x-1/3 translate-y-1/3"></div>
              <div className="absolute bottom-24 right-18 w-40 h-40 bg-[#e3f5e6] rounded-full opacity-60"></div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="flex-[55%] p-10 bg-white">
            <form className="space-y-8">
              {/* Name */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-sm text-slate-600">First Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm text-slate-600">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-sm text-slate-600">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm text-slate-600">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 012 3456 789"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">
                  Select Subject?
                </p>
                <div className="flex  gap-8 text-sm text-slate-600">
                  {Array(4)
                    .fill("General Inquiry")
                    .map((item, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          defaultChecked={index === 0}
                          className="accent-green-600"
                        />
                        {"General\u00A0Inquiry"}
                      </label>
                    ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea
                  rows={1}
                  placeholder="Write your message.."
                  className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-3 resize-none"
                />
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg shadow-md transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
