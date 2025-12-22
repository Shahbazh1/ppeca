import ic_sharp from "../../../public/images/svg_images/ic_sharp.svg";
import carbon_location from "../../../public/images/svg_images/carbon_location.svg";
import bxs_phone from "../../../public/images/svg_images/bxs_phone.svg";
import vactor1 from "../../../public/images/svg_images/Group 1000001749.svg";
import vactor2 from "../../../public/images/svg_images/Group 1000001750.svg";
import vactor3 from "../../../public/images/svg_images/Group 1000001751.svg";

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800">Contact Us</h1>
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
                  <span className="text-sm sm:text-base">92 51 2102135 / 92 51 2102136</span>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src="/images/svg_images/ic_sharp-email.svg"
                    alt="email"
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base">mail@ppepca.com</span>
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
            <form className="space-y-6 sm:space-y-8">
              {/* Name */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">
                  Select Subject?
                </p>
                <div className="grid grid-cols-2 sm:flex sm:justify-between text-sm text-slate-600 w-full gap-2 sm:gap-0">
                  {["General Inquiry", "General Inquiry", "General Inquiry", "General Inquiry"].map((item, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <input
                        type="radio"
                        name="subject"
                        defaultChecked={index === 0}
                        className="w-4 h-4 accent-slate-800 cursor-pointer"
                      />
                      <span>{item}</span>
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
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg shadow-md transition text-sm sm:text-base sm:px-10"
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