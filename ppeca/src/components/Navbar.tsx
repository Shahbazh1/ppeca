"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/images/logo.svg";

const Navbar = () => {
  const menuItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Members", href: "/members" },
    { id: 3, name: "News & Events", href: "/news" },
    { id: 4, name: "About Us", href: "/about" },
    { id: 5, name: "Fact & Links", href: "/facts" },
    { id: 6, name: "Contact Us", href: "/contact" },
  ];

  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrollOpen, setScrollOpen] = useState(false);
  const [scrollOpenMenu, setScrollOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollOpen(true);
      } else {
        setScrollOpen(false);
        setScrollOpenMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="w-full bg-white border-b relative">
        <div
          className="flex items-center justify-between w-full
          lg:py-[0.625rem] lg:px-[2rem] xl:px-[4rem]
          md:px-[2rem] md:py-[0.5rem]
          px-4 py-3"
        >
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src={logo}
              alt="PPEPCA"
              width={80}
              height={80}
              className="rounded-[52px]"
              loading="lazy"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-[1.125rem] items-center">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`text-[1.125rem] font-['Open_Sans'] font-normal ${
                  active === item.name ? "text-[#16A831]" : "text-[#0A2540]"
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.name.replace(/ /g, "&nbsp;"),
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center p-[0.625rem] border border-[#0A2540] rounded-[8px]">
            <input
              type="text"
              placeholder="Search Members"
              className="text-[1rem] outline-none bg-transparent placeholder:text-[#747474]"
            />
            <FiSearch className="w-[24px] h-[24px] text-[#0A2540]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0A2540] cursor-pointer"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Now with absolute positioning */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4">
            <nav className="flex flex-col gap-4 mt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  className={`text-[1rem] ${
                    active === item.name ? "text-[#16A831]" : "text-[#0A2540]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Search */}
            <div className="flex items-center mt-4 p-2 border border-[#0A2540] rounded-[8px]">
              <input
                type="text"
                placeholder="Search Members"
                className="w-full text-[0.95rem] outline-none bg-transparent placeholder:text-[#747474]"
              />
              <FiSearch className="w-[22px] h-[22px] text-[#0A2540]" />
            </div> 
          </div>
        </div>
      </header>

      {/* Scroll Navbar - Fixed to top when scrolling */}
      <header
        className={`fixed top-0 left-0 w-full bg-white border-b z-40 transition-all duration-300 ${
          scrollOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 py-2 md:px-[2rem]">
          {/* Logo - Smaller version */}
          <div className="shrink-0">
            <Image
              src={logo}
              alt="PPEPCA"
              width={50}
              height={50}
              className="rounded-[32px]"
              loading="lazy"
            />
          </div>

          {/* Desktop Menu - Compact version */}
          <nav className="hidden lg:flex gap-[0.875rem] items-center">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`text-[0.95rem] font-normal ${
                  active === item.name ? "text-[#16A831]" : "text-[#0A2540]"
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.name.replace(/ /g, "&nbsp;"),
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Search - Compact version */}
          <div className="font-['Open_Sans'] hidden lg:flex items-center p-[0.425rem] border border-[#0A2540] rounded-[6px]">
            <input
              type="text"
              placeholder="Search"
              className="text-[0.875rem] outline-none bg-transparent placeholder:text-[#747474]"
            />
            <FiSearch className="w-[20px] h-[20px] text-[#0A2540]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setScrollOpenMenu(!scrollOpenMenu)}
            className="lg:hidden text-[#0A2540] cursor-pointer"
          >
            {scrollOpenMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu for Scroll Navbar */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            scrollOpenMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4">
            <nav className="flex flex-col gap-3 mt-3">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setScrollOpenMenu(false);
                  }}
                  className={`text-[0.95rem] ${
                    active === item.name ? "text-[#16A831]" : "text-[#0A2540]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Search */}
            <div className="flex items-center mt-3 p-2 border border-[#0A2540] rounded-[6px]">
              <input
                type="text"
                placeholder="Search Members"
                className="w-full text-[0.875rem] outline-none bg-transparent placeholder:text-[#747474]"
              />
              <FiSearch className="w-[20px] h-[20px] text-[#0A2540]" />
            </div> 
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;