"use client";

import Image from "next/image";
import { useState } from "react";
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

  return (
    <header className="w-full flex justify-center">
      {/* Main Header Container */}
      <div
        className="
          flex items-center justify-between
          max-w-[1440px] w-full
          h-[80px]
          px-[80px] py-[10px]
        "
      >
        {/* Logo (Figma accurate) */}
        <Image
          src={logo}
          alt="PPEPCA"
          width={77}
          height={42}
          className="rounded-[52px]"
          priority
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex  h-[48px] gap-[18px] items-center">
          {menuItems.map((item) => (
  <Link
    key={item.id}
    href={item.href}
    onClick={() => setActive(item.name)}
    className={`inline-flex items-center justify-center
      h-[27px]
      text-[18px] leading-[150%] font-sans font-normal transition-colors
      ${
        active === item.name
          ? "text-green-500"
          : "text-[#0A2540] hover:text-green-500"
      }`}
  >
    {item.name}
  </Link>
))}

        </nav>

        {/* Search (Desktop – Figma accurate) */}
        <div className="hidden lg:flex items-center justify-between w-[269px] h-[40px] border border-gray-900 rounded-[8px] p-[10px]">
          <input
            type="text"
            placeholder="Search Members"
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-gray-400"
          />
          <FiSearch className="w-5 h-5 text-gray-900" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setOpen(false)}
          />

          {/* Mobile Panel */}
          <div className="lg:hidden fixed inset-0 bg-white z-40">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Image
                src={logo}
                alt="PPEPCA"
                width={77}
                height={42}
                className="rounded-[52px]"
              />
              <button
                className="text-2xl"
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
              >
                <FiX />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  className={`block text-base ${
                    active === item.name ? "text-green-500" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Search */}
              <div className="flex items-center justify-between w-full h-[40px] border border-gray-900 rounded-[8px] p-[10px]">
                <input
                  type="text"
                  placeholder="Search Members"
                  className="flex-1 text-sm outline-none bg-transparent placeholder:text-gray-400"
                />
                <FiSearch className="w-5 h-5 text-gray-900" />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
