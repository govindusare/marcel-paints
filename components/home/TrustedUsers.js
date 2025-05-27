import React from "react";

export default function TrustedUsers() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-[2.625rem] md:text-3xl font-semibold text-purple-600 mb-3 mt-[3rem] ">
        Trusted by Leading Users
      </h2>
      <p className="text-gray-700 mb-10  text-[1.5rem] ">
        Our premium paints have been chosen by top architects, designers, and construction companies around the world.
      </p>

      <div className="flex justify-center items-center space-x-30 mb-10 ">
        {/* Replace src with your real images under public/assets */}
        <img
          src="/assets/ourclients/image 25.svg"
          alt="Logo 1"
          className="h-20 w-auto object-contain"
        />
        <img
          src="/assets/ourclients/image 26.svg"
          alt="Logo 2"
          className="h-20 w-auto object-contain"
        />
        <img
          src="/assets/ourclients/image 27.svg"
          alt="Logo 3"
          className="h-20 w-auto object-contain"
        />
      </div>

      <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-8 py-3
       text-sm md:text-base hover:from-purple-700 hover:to-blue-700 transition duration-300 mt-[2rem]">
        Join over 500+ businesses that trust our products for their projects
      </button>
    </div>
  );
}
