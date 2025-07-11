'use client';

import React, { useState } from 'react';

export default function TouchWithUs() {
  const [charCount, setCharCount] = useState(0);

  return (
    <section
      className="w-full bg-cover bg-center py-16 px-6 sm:px-8 md:px-12 lg:px-[2.625rem] flex justify-center items-center rounded-3xl mt-16 mb-24"
      style={{ backgroundImage: "url('/Getintouch_img.svg')" }}
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-[1.5rem] sm:gap-[5.625rem]">
        {/* Left Side Text */}
        <div className="text-[#232323] lg:ms-[3.75rem] text-start lg:text-left w-full sm:w-[16.125rem]">
          <h2 className="text-[1.5rem] sm:text-[2.625rem] font-medium sm:font-semibold leading-snug mb-3">
            Get in touch with us
          </h2>
          <p className="text-[0.875rem] sm:text-[1.125rem] text-[#293036]">
            You can reach us anytime
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl w-full sm:w-[48rem]">
          <form className="space-y-4">
            {/* Name Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 border border-gray-300 rounded-[1rem] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-[1rem] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Email/Mobile Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-[1rem] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full px-4 py-3 border border-gray-300 rounded-[1rem] focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Textarea */}
            <div className="relative">
              <textarea
                rows="4"
                maxLength={120}
                placeholder="How can we help?"
                className="w-full px-4 py-3 border border-gray-300 rounded-[1rem] focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                onChange={(e) => setCharCount(e.target.value.length)}
              ></textarea>
              <p className="absolute text-sm text-gray-400 bottom-2 right-2">{charCount}/120</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-[1.25rem] bg-gradient-to-r from-purple-700 to-indigo-500 hover:from-purple-800 hover:to-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
