"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home", path: "" },
  {
    href: "/products",
    label: "Products",
    path: "products",
    dropdown: [
      { label: "Paints", href: "/paints/products" },
      { label: "Construction Chemicals – Tiles", href: "/construction-chemicals/products" },
      { label: "Special Applications Coatings", href: "/coatings/products" },
      { label: "Raw Materials Sourcing", href: "/raw-materials/products" },
    ],
  },
  { href: "/about-us", label: "About Us", path: "about-us" },
  { href: "/clients", label: "Clients", path: "clients" },
  { href: "/contact-us", label: "Contact Us", path: "contact-us" },
];

function Header() {
  const router = useRouter();
  const path = usePathname();
  const pathname = path.split("/")[1] || "";

  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="w-full bg-white px-[2.625rem]">
      <div className="py-4 flex items-center justify-between mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Marcel Paints Logo" className="h-10 w-auto" />
        </Link>

        <div className="flex gap-10 items-center">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-9 items-center text-sm font-medium text-[#232323]">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <span
                  onClick={() => {
                    if (link.dropdown) {
                      setDesktopDropdown(desktopDropdown === link.label ? null : link.label);
                    } else {
                      router.push(link.href);
                      setDesktopDropdown(null);
                    }
                  }}
                  className={`pb-2 cursor-pointer uppercase flex items-center gap-1 ${pathname === link.path ? "text-purple-700 border-b-2 border-purple-700" : ""
                    }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <FaChevronDown
                      className={`text-xs mt-[1px] transition-transform duration-300 ${desktopDropdown === link.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </span>

                {/* Dropdown on click */}
                {link.dropdown && desktopDropdown === link.label && (
                  <div className="absolute bg-white shadow-lg rounded-md mt-2 z-10 min-w-[240px]">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* GET A QUOTE Button */}
          <div className="hidden md:block">
            <Link
              href="/get-a-quote"
              className="get-a-quote-btn text-white px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#232323] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 space-y-2 text-[#232323] font-medium">
          {navLinks.map((link, index) => (
            <div key={index}>
              <div
                className={` pb-1 cursor-pointer uppercase flex items-center justify-between ${pathname === link.path ? "text-purple-700 border-b-2 border-purple-700" : ""
                  }`}
                onClick={() => {
                  if (link.dropdown) {
                    setMobileDropdown(mobileDropdown === link.label ? null : link.label);
                  } else {
                    router.push(link.href);
                    setIsOpen(false);
                  }
                }}
              >
                {link.label}
                {link.dropdown && (
                  <FaChevronDown
                    className={`text-xs ml-2 transition-transform duration-300 ${mobileDropdown === link.label ? "rotate-180" : ""
                      }`}
                  />
                )}
              </div>

              {/* Mobile Dropdown */}
              {link.dropdown && mobileDropdown === link.label && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.dropdown.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        router.push(item.href);
                        setIsOpen(false);
                        setMobileDropdown(null);
                      }}
                      className="cursor-pointer text-sm text-gray-600 hover:text-purple-700"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/get-a-quote"
            className="get-a-quote-btn block text-white text-center py-2 rounded-full mt-2 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            GET A QUOTE
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
