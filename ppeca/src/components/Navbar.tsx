"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import logo from "../../public/images/logo.svg";
import { IoMdArrowForward } from "react-icons/io";

interface MenuItem {
  id: number;
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Members", href: "/members" },
    { id: 3, name: "News & Events", href: "/news" },
    { id: 4, name: "About Us", href: "/about" },
    { id: 5, name: "Fact & Links", href: "/facts" },
    { id: 6, name: "Contact Us", href: "/contact" },
  ];

  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [scrollOpen, setScrollOpen] = useState<boolean>(false);
  const [scrollOpenMenu, setScrollOpenMenu] = useState<boolean>(false);
  // Refs for mobile menus
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const scrollMenuRef = useRef<HTMLDivElement>(null);

  // Disable scroll when menu is open
  useEffect(() => {
    if (open || scrollOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open, scrollOpenMenu]);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // For main mobile menu
      if (
        open &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }

      // For scroll mobile menu
      if (
        scrollOpenMenu &&
        scrollMenuRef.current &&
        !scrollMenuRef.current.contains(event.target as Node)
      ) {
        setScrollOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, scrollOpenMenu]);

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Header */}
      <header className="w-full bg-white relative">
        <div className="flex items-center shadow-ds justify-between w-full lg:py-[0.625rem] lg:px-[2.2rem] xl:px-[4rem] md:px-[2rem] md:py-[0.5rem] px-4 py-3">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src={logo as StaticImageData}
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
                className={`text-[1.125rem] font-['Open_Sans'] font-normal ${
                  isActive(item.href) ? "text-[#16A831]" : "text-[#0A2540]"
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

          <Link
          href='/news/latestNews'
            className="hidden lg:flex border rounded-sm  items-center justify-center gap-2 cursor-pointer border-[#16A831] border-[0.5px] px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-[#0a2540] hover:bg-[#16A831] hover:text-white transition"
          >
            Latest News <IoMdArrowForward />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0A2540] cursor-pointer"
          >
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {open && (
            <div
              ref={mobileMenuRef}
              className="relative"
              onClick={(e) => e.stopPropagation()} // prevent closing on menu click
            >
              <div className="px-4 pb-4">
                <nav className="flex flex-col gap-4 mt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-[1rem] ${
                        isActive(item.href) ? "text-[#16A831]" : "text-[#0A2540]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Scroll Navbar */}
      <header
        className={`fixed top-0 left-0 w-full bg-white border-b z-40 transition-all duration-300 ${
          scrollOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 py-2 md:px-[2rem]">
          <div className="shrink-0">
            <Image
              src={logo as StaticImageData}
              alt="PPEPCA"
              width={50}
              height={50}
              className="rounded-[32px]"
              loading="lazy"
            />
          </div>

          <nav className="hidden lg:flex gap-[0.875rem] items-center">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-[0.95rem] font-normal ${
                  isActive(item.href) ? "text-[#16A831]" : "text-[#0A2540]"
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

          <div className="font-['Open_Sans'] hidden lg:flex items-center p-[0.425rem] border border-[#0A2540] rounded-[6px]">
            <input
              type="text"
              placeholder="Search"
              className="text-[0.875rem] outline-none bg-transparent placeholder:text-[#747474]"
            />
            <FiSearch className="w-[20px] h-[20px] text-[#0A2540]" />
          </div>

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
          {scrollOpenMenu && (
            <div
              ref={scrollMenuRef}
              className="relative"
              onClick={(e) => e.stopPropagation()} // prevent closing on menu click
            >
              <div className="px-4 pb-4">
                <nav className="flex flex-col gap-3 mt-3">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setScrollOpenMenu(false)}
                      className={`text-[0.95rem] ${
                        isActive(item.href) ? "text-[#16A831]" : "text-[#0A2540]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

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
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
