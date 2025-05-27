import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <section className="flex flex-col md:flex-row bg-gray-100 rounded-4xl overflow-hidden shadow-md p-4 md:p-0 max-w-7xl mx-auto mt-10 min-h-[746px] w-full">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[800px]">
  <Image
    src="/assets/aboutus/info.svg"
    alt="About Us"
    fill
    className="object-cover"
  />
</div>
      {/* Right Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-15 py-20">
        <h2 className="text-[2.625rem] font-bold text-purple-700 mb-4">About us</h2>
        <p className="text-gray-700 text-[1.5rem] mb-6">
          We are a team of seasoned professionals with over two decades of
          senior management experience across diverse domains, including
          infrastructure design and construction, as well as supply chain
          strategy and operations. Our collective expertise brings a unique
          blend of technical excellence, strategic insight, and executional
          depth to every aspect of our business.
        </p>
        <button className="self-start px-6 py-2 border border-purple-700 text-purple-700 rounded-full text-sm hover:bg-purple-700 hover:text-white transition">
          Learn more
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
