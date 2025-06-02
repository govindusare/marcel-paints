import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100 rounded-[2rem] overflow-hidden shadow-md max-w-7xl mx-auto mt-10 w-full">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[746px]">
        <Image
          src="/assets/aboutus/info.svg"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 py-10 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-[2.625rem] font-bold text-purple-700 mb-4">
          About us
        </h2>
        <p className="text-sm sm:text-base md:text-[1.25rem] text-gray-700 mb-6 leading-relaxed text-start">
          We are a team of seasoned professionals with over two decades of senior
          management experience across diverse domains, including infrastructure design
          and construction, as well as supply chain strategy and operations. Our
          collective expertise brings a unique blend of technical excellence, strategic
          insight, and executional depth to every aspect of our business.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-2 border border-purple-700 text-purple-700 rounded-full text-sm hover:bg-purple-700 hover:text-white transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
