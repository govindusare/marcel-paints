"use client";
import React, { useState } from "react";
import Image from "next/image";

const firsGridData = [
  {
    id: 1,
    title: "High-Performance, Specialized Paint Solutions",
    description:
      "We offer a complete range of interior, exterior, elastomeric, antimicrobial, heat-reflective, and distemper paints—engineered for durability and aesthetics across all environments.",
    image1: "/assets/WhyUs/vector.svg",
    image2: "/assets/WhyUs/vector white.svg",
  },
  {
    id: 2,
    title: "Technical Support & Project Customization",
    description:
      "We provide technical consultation from veterans in this field as per project complexities to cater best choice of product as per requirement and customized solutions for clients for bulk orders where they can tailor made paints as per features required for various issue they face.",
    image1: "/assets/WhyUs/Group.svg",
    image2: "/assets/WhyUs/Group _White.svg",
  },
];

const secondGridData = [
  {
    id: 1,
    title: "Proven Product Reliability & Consistency",
    description:
      "Formulated with premium-grade raw materials and ISO-compliant quality control, Marcel paints deliver consistent performance, long-lasting color retention, and superior coverage.",
    image1: "/assets/WhyUs/icon.svg",
    image2: "/assets/WhyUs/icon _white.svg",
  },
  {
    id: 2,
    title: "Regional Understanding with Global Standards",
    description:
      "Our formulations are designed specifically for Indian climate conditions, while maintaining global performance benchmarks for washability, UV resistance, and weather protection.",
    image1: "/assets/WhyUs/Frame.svg",
    image2: "/assets/WhyUs/Frame_white.svg",
  },
  {
    id: 3,
    title: "Innovative Product Portfolio Expansion",
    description:
      "We stay ahead with innovations like super cool heat-reflective paint and anti-microbial coatings, aligned with today’s safety and energy-efficiency demands.",
    image1: "/assets/WhyUs/Frame 2.svg",
    image2: "/assets/WhyUs/Frame _2 white.svg"
  }
];

function WhyUs1() {
  const [hoveredIndexLeft, setHoveredIndexLeft] = useState(null);
  const [hoveredIndexRight, setHoveredIndexRight] = useState(null);

  return (
    <section className="w-full mx-auto px-4 sm:px-6 py-12">
      {/* Title */}
      <div className="flex justify-center items-center w-full flex-col gap-6 sm:gap-9 mb-10 sm:mb-[80px]">
        <h2 className="text-center text-purple-700 font-semibold text-2xl sm:text-3xl lg:text-[2.625rem]">
          Why Us?
        </h2>
        <p className="text-center text-base sm:text-lg lg:text-[1.5rem] text-gray-600 max-w-full sm:max-w-[90%] lg:max-w-[900px]">
          Hear from homeowners, designers, and contractors who have transformed spaces with our premium paints.
        </p>
      </div>

      {/* Responsive Layout: Stack on small screens, row on large */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">

        {/* Left Grid */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {firsGridData.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-[2.625rem] p-5 flex flex-col justify-between text-start hover:shadow-xl transition"
            >
              <div
                className="bg-white rounded-[1.5rem] w-fit p-6 sm:p-[2.5rem] hover:bg-purple-700 transition duration-300"
                onMouseEnter={() => setHoveredIndexLeft(index)}
                onMouseLeave={() => setHoveredIndexLeft(null)}
              >
                <Image
                  src={hoveredIndexLeft === index ? item.image2 : item.image1}
                  alt={item.title}
                  width={86}
                  height={86}
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {secondGridData.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-[2.625rem] hover:shadow-xl p-5 flex flex-col sm:flex-row gap-4 sm:gap-[1.5rem] justify-between transition"
            >
              <div
                className="bg-white rounded-[1.5rem] w-fit p-4 sm:p-[1.5rem] hover:bg-purple-700 transition duration-300 flex items-center justify-center"
                onMouseEnter={() => setHoveredIndexRight(index)}
                onMouseLeave={() => setHoveredIndexRight(null)}
              >
                <Image
                  src={hoveredIndexRight === index ? item.image2 : item.image1}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="m-2"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-[24px] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.description}
                  
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs1;