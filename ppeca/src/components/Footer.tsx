import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { IoGlobeOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Section */}
      <div
        className="mx-auto flex flex-col md:flex-row gap-30"
        style={{
          height: "256px",
          justifyContent: "space-between",
          transform: "rotate(0deg)",
          opacity: 1,
          marginTop: "66px",
          marginBottom: "80px",
          paddingRight: "80px",
          paddingLeft: "80px",
        }}
      >
        {/* Left: Logo + Description */}
        <div
          className="flex-1"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "465px",
            height: "238px",
            justifyContent: "space-between",
            transform: "rotate(0deg)",
            opacity: 1,
          }}
        >
          {" "}
          <Image
            src={logo}
            alt="PPEPCA"
            width={77}
            height={41}
            className="mb-5"
            style={{
              transform: "rotate(0deg)",
              opacity: 1,
              borderRadius: "52px",
            }}
          />
          <p
            style={{
              fontFamily: "'Kumbh Sans', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0%",
              verticalAlign: "middle",
            }}
            className="max-w-md text-[#0A2540]"
          >
            As the unified voice of Pakistan’s E&amp;P industry, PPEPCA promotes
            effective communication, industry alignment, and constructive
            engagement with regulatory bodies to support a secure and
            progressive energy future
          </p>
          {/* Social Icons */}
          <div
            className="flex mt-6 text-gray-800"
            style={{
              width: "451px",
              height: "40px",
              gap: "13px",
              transform: "rotate(0deg)",
              opacity: 1,
            }}
          >
            <Link
              href="#"
              style={{
                fontFamily: "'Font Awesome 5 Brands'",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "20px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <FaFacebookF className="text-[#000000]"/>
            </Link>

            <Link href="#">
              <FaXTwitter size={18} className="text-[#000000]"/>
            </Link>
            <Link href="#">
              <FaLinkedinIn size={18} className="text-[#000000]"/>
            </Link>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div >
          <h3
            style={{
              opacity: 1,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "16px",
              lineHeight: "100%",
              verticalAlign: "middle",
              
            }}
            className="mb-3 text-[#000000]"
          >
            Quick links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/members"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Members
              </Link>
            </li>
            <li>
              <Link
                href="/news-events"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                News & Events
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/policies"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Policies
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  color: "#0A2540",
                  display: "inline-block",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Box */}
        <div className="flex-1">
          <h3
            style={{
              width: "368px",
              height: "19px",
              transform: "rotate(0deg)",
              opacity: 1,
              fontFamily: "'Jost', sans-serif",
              fontWeight: 600,
              fontStyle: "normal", // semi-bold is handled by fontWeight 600
              fontSize: "24px",
              lineHeight: "28.8px",
              letterSpacing: "-0.96px",
              verticalAlign: "middle",
              color: "#0A2540",
            }}
            className="mb-5"
          >
            Contact us
          </h3>

          <div className="w-[368px] h-[228px] bg-[#16A831] text-white rounded-[5px] border p-6 space-y-4 text-sm">
            <div className="flex gap-3">
              <FaLocationDot size={18} className="mt-1" />
              <span
                style={{
                  fontFamily: "'Kumbh Sans', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal", // 'Regular' → normal
                  fontSize: "16px",
                  lineHeight: "26px",
                  letterSpacing: 0,
                  verticalAlign: "middle",
                }}
              >
                LG04, Block 02, Savoy Residences, <br />
                F-11/1, Islamabad
              </span>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt size={18} />
              <span
                style={{
                  fontFamily: "'Kumbh Sans', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal", // 'Regular' → normal
                  fontSize: "16px",
                  lineHeight: "26px",
                  letterSpacing: 0,
                  verticalAlign: "middle",
                }}
              >
                92 51 2102135 &nbsp; / &nbsp; 92 51 2102136
              </span>
            </div>

            <div className="flex gap-3">
              <TbMailFilled size={20} />
              <span
                style={{
                  fontFamily: "'Kumbh Sans', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal", // 'Regular' → normal
                  fontSize: "16px",
                  lineHeight: "26px",
                  letterSpacing: 0,
                  verticalAlign: "middle",
                }}
              >
                mail@ppepca.com
              </span>
            </div>

            <div className="flex gap-3">
              <IoGlobeOutline size={20} />
              <span
                style={{
                  fontFamily: "'Kumbh Sans', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal", // 'Regular' → normal
                  fontSize: "16px",
                  lineHeight: "26px",
                  letterSpacing: 0,
                  verticalAlign: "middle",
                }}
              >
                www.ppepca.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Company Line */}
      <div className="border-b border-green-500 py-1 px-20">
        <p className="text-sm text-[#0A2540] max-w-7xl mx-auto">
          <span
            style={{
              fontFamily: "'Kumbh Sans', sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: 0,
              verticalAlign: "middle",
            }}
          >
            Company:
          </span>
          Pakistan Petroleum Exploration and Production Companies Association
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-[#0A2540]">
        <p>© PPEPCA 2025 | All Rights Reserved</p>
        <Link href="/membership" className="mt-2 md:mt-0 text-[#0A2540]">
          Join as a member
        </Link>
      </div>
    </footer>
  );
}
