// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { IoGlobeOutline } from "react-icons/io5";

// Helper to replace spaces with &nbsp;
const withNbsp = (text: string) => text.replace(/ /g, "&nbsp;");

export default function Footer() {
  return (
    <footer className="bg-white text-[#0A2540] max-w-[1536px] mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16 2xl:gap-24 px-6 md:px-10 lg:px-16 xl:px-20 mt-12 mb-24">
        {/* Left: Logo + Description + Social */}
        <div className="flex flex-col md:max-w-[28rem] justify-between">
          <Image
            src={logo}
            alt="PPEPCA"
            width={77}
            height={41}
            className="rounded-[52px] mb-5"
            priority={false}
          />

          <p className="font-['Kumbh_Sans'] text-[0.875rem] md:text-[0.95rem] lg:text-[1rem] leading-[1.6]">
            As the unified voice of Pakistan’s E&amp;P industry, PPEPCA promotes
            effective communication, industry alignment, and constructive
            engagement with regulatory bodies to support a secure and
            progressive energy future
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6 text-black text-[18px] md:text-[20px]">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Middle: Quick Links */}
        {/* Middle: Quick Links */}
        <div className="flex flex-col md:items-center md:self-center">
          <h3 className="mb-3 mr-5 font-inter font-bold text-black text-[1rem] md:text-[0.9rem] lg:text-[1rem]">
            Quick links
          </h3>

          <ul className="space-y-2 md:space-y-2.5 lg:space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Members", href: "/members" },
              { label: "News & Events", href: "/news" },
              { label: "About us", href: "/about" },
              { label: "Policies", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Contact us", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block hover:underline font-inter text-[#0A2540] text-[0.875rem] md:text-[0.95rem] lg:text-[1rem] font-normal"
                >
                  <span
                    className="font-['inter']"
                    dangerouslySetInnerHTML={{ __html: withNbsp(item.label) }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Box */}
        <div className="flex flex-col md:max-w-[23rem]">
<h4 className="text-[#0A2540] font-['Jost'] font-semibold text-[24px] leading-[28.8px] tracking-[-0.96px] align-middle mb-[9px]">
            Contact us
          </h4>

          <div className="bg-[#16A831] kumbh-sans text-[#F8FAFC] rounded-[5px] border p-6 space-y-4">
            <div className="flex gap-3">
              <FaLocationDot size={18} className="mt-1" />
              <span className="  text-[0.875rem] md:text-[0.95rem] lg:text-[1rem]">
                LG04, Block 02, Savoy Residences, <br />
                F-11/1, Islamabad
              </span>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt size={18} />
              <span className=" text-[0.875rem] md:text-[0.95rem] lg:text-[1rem]">
                92 51 2102135 &nbsp;/&nbsp; 92 51 2102136
              </span>
            </div>

           <a
  href="mailto:mail@ppepca.com?subject=Hello&body=Type your message here"
  className="flex items-center gap-3 underline text-[0.875rem] md:text-[0.95rem] lg:text-[1rem]"
>
  <TbMailFilled size={20} />
  mail@ppepca.com
</a>




            <div className="flex gap-3 hover:underline">
  <IoGlobeOutline size={20} />
  <a
    href="https://www.ppepca.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[0.875rem] md:text-[0.95rem] lg:text-[1rem]"
  >
    www.ppepca.com
  </a>
</div>

          </div>
        </div>
      </div>

      {/* Company Line */}
      <div className="border-b border-green-500 py-1 px-6 md:px-10 xl:px-20">
        <p className="max-w-7xl mx-auto kumbh-sans text-[#0A2540] text-[0.875rem] md:text-[0.95rem] lg:text-[1rem] font-kumbh leading-[1.75]">
          <span className="font-bold">Company:</span> Pakistan Petroleum
          Exploration and Production Companies Association
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="kumbh-sans py-8 px-6 md:px-10 xl:px-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-[#0A2540]">
        <p>© PPEPCA 2025 | All Rights Reserved</p>
        <Link href="/membership" className="mt-2 md:mt-0">
          Join as a member
        </Link>
      </div>
    </footer>
  );
}
