'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function TouchWithUs() {
  const [charCount, setCharCount] = useState(0);

  return (
    <section
      className="w-full bg-cover bg-center py-16 px-4 sm:px-8 md:px-12 lg:px-[42px] flex justify-center items-center rounded-3xl mt-16 mb-24"
      style={{ backgroundImage: "url('assets/Rectangle 98.svg')" }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side Text */}
        <div className="text-black mb-6 lg:mb-0 lg:ms-[60px] text-start lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-3">
            Get in touch<br />with us
          </h2>
          <p className="text-base sm:text-lg text-gray-800">
            You can reach us anytime
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl w-full max-w-xl">
          <form className="space-y-4">
            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Email/Mobile Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                rows="4"
                maxLength={120}
                placeholder="How can we help?"
                className="w-full px-4 py-3 border border-gray-300 rounded-[16px] focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                onChange={(e) => setCharCount(e.target.value.length)}
              ></textarea>
              <p className="absolute text-sm text-gray-400 bottom-2 right-2">{charCount}/120</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-[21px] bg-gradient-to-r from-purple-700 to-indigo-500 hover:from-purple-800 hover:to-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
