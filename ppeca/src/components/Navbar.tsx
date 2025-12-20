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
    <header className="w-full bg-white shadow-md">
      {/* Main Header Container */}
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto h-[80px] px-6 lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="PPEPCA" width={80} height={80} className="rounded-full" priority />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 items-center h-full">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`text-base lg:text-md px-auto font-sans font-normal leading-[150%] transition-colors ${
                active === item.name
                  ? "text-green-500"
                  : "text-[#0A2540] hover:text-green-500"
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: item.name.includes(" ")
                    ? item.name.replace(/ /g, "&nbsp;")
                    : item.name,
                }}
              />
            </Link>
          ))}
        </nav>

        {/* Search (Desktop) */}
        <div className="hidden lg:flex items-center w-[280px] h-[40px] border border-gray-300 rounded-lg px-3">
          <input
            type="text"
            placeholder="Search Members"
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-gray-400"
          />
          <FiSearch className="w-5 h-5 text-gray-600" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setOpen(false)}
          />

          {/* Mobile Panel */}
          <div className="fixed inset-0 bg-white z-40 flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Image src={logo} alt="PPEPCA" width={77} height={42} className="rounded-full" />
              <button
                className="text-2xl text-gray-900"
                onClick={() => setOpen(false)}
              >
                <FiX />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-6 py-6 space-y-4">
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
              <div className="flex items-center w-full h-[40px] border border-gray-300 rounded-lg px-3">
                <input
                  type="text"
                  placeholder="Search Members"
                  className="flex-1 text-sm outline-none bg-transparent placeholder:text-gray-400"
                />
                <FiSearch className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
