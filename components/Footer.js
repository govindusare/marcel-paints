'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Tenor_Sans } from 'next/font/google';

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Footer() {
  return (
   <footer className="bg-[#1A1A1A] text-gray-300 px-6 py-12 h-full ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-[12.875rem] ">
        {/* Logo Section with Name in One Line */}
        <div className="flex flex-col gap-6 lg:pl-[72px]">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logofooter.svg"
              alt="Marcel Logo"
              width={126}
              height={89}
              className="object-contain w-20 h-20 sm:w-34"
            />
            <div className={`${tenorSans.className} leading-tight`}>
              <p className="text-[37.87px] tracking-[0.2em] text-white">MARCEL</p>
            </div>
          </div>
       {/* Social Icons (Desktop only) */}
          <div className=" hidden sm:flex flex-col-2 gap-4 py-[60px]">
            <h4 className="font-semibold text-white">Follow us on</h4>
            <div className="flex gap-3">
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full text-white hover:bg-white hover:text-black transition">
                <FaLinkedinIn size={14} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full text-white hover:bg-white hover:text-black transition">
                <FaFacebookF size={14} />
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full text-white hover:bg-white hover:text-black transition">
                <FaTwitter size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Link Columns */}
       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:pl-[180px] gap-[30px] sm:gap-[40px] lg:gap-[100px] mt-6 lg:mt-0 text-sm text-start">

          {/* Home */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-semibold text-white">Home</h4>
            <Link href="#" className="hover:text-white">Products</Link>
            <Link href="#" className="hover:text-white">About Us</Link>
            <Link href="#" className="hover:text-white">Clients</Link>
            <Link href="#" className="hover:text-white">Testimonials</Link>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-semibold text-white">Products</h4>
            <Link href="#" className="hover:text-white">Marcel Super Cool Paint</Link>
            <Link href="#" className="hover:text-white">Marcel Allguard Paint</Link>
            <Link href="#" className="hover:text-white">Marcel Weatherlock Paint</Link>
            <Link href="#" className="hover:text-white">Marcel Biopure Paint</Link>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-semibold text-white">Help</h4>
            <Link href="#" className="hover:text-white">FAQ</Link>
            <Link href="#" className="hover:text-white">Help Center</Link>
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Social Icons (Mobile only) */}
      <div className="sm:hidden flex flex-col-2 gap-4 mt-8 mb-[36px]">
        <h4 className="font-semibold mb-2 text-white">Follow us on</h4>
        <div className="flex gap-3">
          <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full text-white hover:bg-white hover:text-black transition">
            <FaLinkedinIn size={14} />
          </Link>
          <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full text-white hover:bg-white hover:text-black transition">
            <FaFacebookF size={14} />
          </Link>
          <Link href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full text-white hover:bg-white hover:text-black transition">
            <FaTwitter size={14} />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className=" border-t border-gray-700 py-[50px] text-center text-xs text-gray-400">
        Copyright © Marcel Paints 2025 – All Rights Reserved
      </div>
    </footer>
  );
}
