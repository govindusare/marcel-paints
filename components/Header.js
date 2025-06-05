"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", path: "" },
  { href: "/products", label: "Products", path: "products" },
  { href: "/about-us", label: "About Us", path: "about-us" },
  { href: "/clients", label: "Clients", path: "clients" },
  { href: "/contact-us", label: "Contact Us", path: "contact-us" },
];

function Header() {
  const router = useRouter();
  const path = usePathname();

  // To extract only the first segment after the /
  const pathname = path.split("/")[1] || "";
  // console.log("pathname", pathname);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white px-[2.625rem]">
      <div className="py-4 flex items-center justify-between mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Marcel Paints Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex gap-10 items-center">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-9 items-center text-sm font-medium text-[#232323] ">
            {navLinks.map((link, index) => {
              return (
                <span
                  key={index}
                  onClick={() => router.push(link.href)}
                  className={`${pathname === link.path ? "text-purple-700 border-b-2 border-purple-700" : ""} pb-2 cursor-pointer uppercase`}
                >
                  {link.label}
                </span>)
            })}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 space-y-2 text-[#232323] font-medium ">

          {navLinks.map((link, index) => {
            return (
              <div key={index}>
                <span
                  className={`${pathname === link.path ? "text-purple-700 border-b-2 border-purple-700" : ""} inline-block pb-1 cursor-pointer uppercase`}
                  onClick={() => {
                    router.push(link.href);
                    setIsOpen(false)
                  }}
                >
                  {link.label}
                </span>
              </div>
            )
          })}

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
