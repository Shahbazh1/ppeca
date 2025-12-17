'use client';

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800">Contact Us</h1>
          <p className="text-slate-500 mt-2">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          
          {/* Left Info Panel */}
          <div className="relative bg-white border rounded-xl m-6 p-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Contact Information
            </h2>
            <p className="text-slate-500 mt-2">
              Say something to start a live chat!
            </p>

            <div className="mt-10 space-y-6 text-slate-600">
              <div className="flex items-center gap-4">
                <span className="text-lg">📞</span>
                <span>92 51 2102135 / 92 51 2102136</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-lg">✉️</span>
                <span>mail@ppepca.com</span>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-lg">📍</span>
                <span>
                  LG04, Block 02, Savoy Residences,
                  <br />
                  F-11/1, Islamabad
                </span>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0">
              <div className="w-64 h-64 bg-green-100 rounded-full opacity-60 translate-x-1/3 translate-y-1/3"></div>
              <div className="w-40 h-40 bg-green-200 rounded-full opacity-60 -translate-x-10 -translate-y-24"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-12 relative z-10">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                🐦
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                📷
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                💬
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="p-10">
            <form className="space-y-8">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-slate-600">First Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-600">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-600">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 012 3456 789"
                    className="w-full border-b border-green-600 outline-none py-2"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">
                  Select Subject?
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                  {Array(4).fill('General Inquiry').map((item, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="subject"
                        defaultChecked={index === 0}
                        className="accent-green-600"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea
                  rows={3}
                  placeholder="Write your message.."
                  className="w-full border-b border-gray-300 focus:border-green-500 outline-none py-2 resize-none"
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
