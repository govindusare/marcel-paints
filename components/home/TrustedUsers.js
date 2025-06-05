import React from "react";

export default function TrustedUsers() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
      <h2 className="text-xl sm:text-2xl md:text-[2.625rem] font-semibold text-purple-600 mb-4">
        Trusted by Leading Users
      </h2>
      <p className="text-sm sm:text-base md:text-[1.25rem] text-gray-700 mb-8">
        Our premium paints have been chosen by top architects, designers, and construction companies around the world.
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 mb-10">
        <img
          src="/assets/ourclients/MSRDC.svg"
          alt="MSRDC"
          className="h-10 sm:h-14 md:h-20 w-auto object-contain"
        />
        <img
          src="/assets/ourclients/J-Kumar.svg"
          alt="J-Kumar"
          className="h-10 sm:h-14 md:h-20 w-auto object-contain"
        />
        <img
          src="/assets/ourclients/NHAI.svg"
          alt="NHAI"
          className="h-10 sm:h-14 md:h-20 w-auto object-contain"
        />
      </div>

      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:from-purple-700 hover:to-blue-700 transition duration-300">
        Join over 500+ businesses that trust our products for their projects
      </button>
    </div>
  );
}
