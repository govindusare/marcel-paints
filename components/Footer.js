'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Tenor_Sans } from 'next/font/google';

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 px-6 py-12 mw-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-[12.875rem]">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8 lg:mb-0">
          <Image src="/assets/Logofooter.svg" alt="Marcel Logo" width={126} height={89} />
          <div className={tenorSans.className}>
            <p className="text-lg tracking-widest">MARCEL</p>
            <p className="text-xs text-gray-300">PAINTS</p>
          </div>
        </div>

        {/* Link Sections + Socials in one row on lg */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-8 text-sm w-full justify-between text-start">
          {/* Home */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2 text-white">Home</h4>
            <Link href="#" className="hover:text-white">Products</Link>
            <Link href="#" className="hover:text-white">About Us</Link>
            <Link href="#" className="hover:text-white">Clients</Link>
            <Link href="#" className="hover:text-white">Testimonials</Link>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2 text-white">Products</h4>
            <Link href="#" className="hover:text-white">Marcel Super Cool Paint</Link>
            <Link href="#" className="hover:text-white">Marcel Allguard Paint</Link>
            <Link href="#" className="hover:text-white">Marcel Weatherlock Paint</Link>
            <Link href="#" className="hover:text-white">Marcel Biopure Paint</Link>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2 text-white">Help</h4>
            <Link href="#" className="hover:text-white">FAQ</Link>
            <Link href="#" className="hover:text-white">Help Center</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-2 text-white">Follow us on</h4>
            <div className="flex gap-4 text-lg">
              <Link href="#"><FaFacebookF className="hover:text-white" /></Link>
              <Link href="#"><FaInstagram className="hover:text-white" /></Link>
              <Link href="#"><FaTwitter className="hover:text-white" /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        Copyright © Marcel Paints 2025 – All Rights Reserved
      </div>
    </footer>
  );
}
