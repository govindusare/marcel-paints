"use client";

import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="py-4 flex items-center justify-between mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Marcel Paints Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex gap-10 items-center">
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-9 items-center text-sm font-medium text-gray-700">
          <Link
            href="/"
            className="text-purple-700 border-b-2 border-purple-700 pb-3"
            style={{ marginBottom: "-13px" }}
          >
            HOME
          </Link>
          <Link href="/products" className="hover:text-purple-700">
            PRODUCTS
          </Link>
          <Link href="/about" className="hover:text-purple-700">
            ABOUT US
          </Link>
          <Link href="/clients" className="hover:text-purple-700">
            CLIENTS
          </Link>
          <Link href="/contact" className="hover:text-purple-700">
            CONTACT US
          </Link>
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
          className="md:hidden text-gray-700 focus:outline-none"
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
        <nav className="md:hidden bg-white px-6 pb-4 space-y-2 text-gray-700 font-medium">
          <Link
            href="/"
            className="block text-purple-700 border-b-2 border-purple-700 pb-1"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link href="/products" className="block hover:text-purple-700" onClick={() => setIsOpen(false)}>
            PRODUCTS
          </Link>
          <Link href="/about" className="block hover:text-purple-700" onClick={() => setIsOpen(false)}>
            ABOUT US
          </Link>
          <Link href="/clients" className="block hover:text-purple-700" onClick={() => setIsOpen(false)}>
            CLIENTS
          </Link>
          <Link href="/contact" className="block hover:text-purple-700" onClick={() => setIsOpen(false)}>
            CONTACT US
          </Link>
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
