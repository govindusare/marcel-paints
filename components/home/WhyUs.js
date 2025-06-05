"use client";

import React, { useState } from "react";
import Image from "next/image";

const firsGridData = [
  {
    id: 1,
    title: "High-Performance, Specialized Paint Solutions",
    description:
      "We offer a complete range of interior, exterior, elastomeric, antimicrobial, heat-reflective, and distemper paints—engineered for durability and aesthetics across all environments.",
    image1: "/assets/WhyUs/High-Performance.svg",
    image2: "/assets/WhyUs/High-Performance-White.svg",
  },
  {
    id: 2,
    title: "Technical Support & Project Customization",
    description:
      "We provide technical consultation from veterans in this field as per project complexities to cater best choice of product as per requirement and customized solutions for clients for bulk orders where they can tailor made paints as per features required for various issue they face.",
    image1: "/assets/WhyUs/Technical-Support.svg",
    image2: "/assets/WhyUs/Technical-Support-White.svg",
  },
];

const secondGridData = [
  {
    id: 1,
    title: "Proven Product Reliability & Consistency",
    description:
      "Formulated with premium-grade raw materials and ISO-compliant quality control, Marcel paints deliver consistent performance, long-lasting color retention, and superior coverage.",
    image1: "/assets/WhyUs/Proven-Product.svg",
    image2: "/assets/WhyUs/Proven-Product-White.svg",
  },
  {
    id: 2,
    title: "Regional Understanding with Global Standards",
    description:
      "Our formulations are designed specifically for Indian climate conditions, while maintaining global performance benchmarks for washability, UV resistance, and weather protection.",
    image1: "/assets/WhyUs/Global-Standards.svg",
    image2: "/assets/WhyUs/Global-Standards-White.svg",
  },
  {
    id: 3,
    title: "Innovative Product Portfolio Expansion",
    description:
      "We stay ahead with innovations like super cool heat-reflective paint and anti-microbial coatings, aligned with today’s safety and energy-efficiency demands.",
    image1: "/assets/WhyUs/Innovative-Product.svg",
    image2: "/assets/WhyUs/Innovative-Product-White.svg",
  },
];

function WhyUs() {
  const [hoveredIndexLeft, setHoveredIndexLeft] = useState(null);
  const [hoveredIndexRight, setHoveredIndexRight] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]">
      {/* Section heading */}
      <div className="text-center space-y-4">
        <h1 className="text-[1.5rem] sm:text-[2.625rem] font-semibold text-gradient">
          Why Us?
        </h1>
        <p className="text-[0.875rem] sm:text-[1.5rem] w-full sm:w-[50rem]">
          Hear from homeowners, designers, and contractors who have transformed
          spaces with our premium paints.
        </p>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-[1.25rem] my-[1.875rem] sm:my-[5rem]">
        <div className="w-full sm:w-1/2 grid grid-cols-1 gap-[1rem] sm:gap-[1.25rem]">
          {firsGridData.map((cval, index) => {
            return (
              <div
                key={index}
                className="flex sm:flex-col justify-center gap-[1rem] sm:gap-[2rem] rounded-[1.25rem] sm:rounded-[2.625rem] bg-[#F3F3F3] shadow text-[#232323] h-auto sm:h-[25.625rem] p-[1rem] sm:px-[2rem]"
                onMouseEnter={() => setHoveredIndexLeft(index)} // Hover event
                onMouseLeave={() => setHoveredIndexLeft(null)} // Reset hover event
              >
                <div className={`flex items-center justify-center w-[2.313rem] h-[2.313rem] sm:w-[10.375rem] sm:h-[10.375rem] rounded-[0.5rem] sm:rounded-[1rem] mt-2 sm:mt-0 ${hoveredIndexLeft === index ? "bg-gradient" : "border-1 sm:border-2 border-[#1210CA]"}`}>
                  <Image
                    src={hoveredIndexLeft === index ? cval.image2 : cval.image1}
                    alt=""
                    width={86}
                    height={86}
                    className="w-[1.625rem] h-[1.75rem] sm:w-[5.375rem] sm:h-[5.375rem]"
                  />
                </div>
                <div className="w-[80%] sm:w-full space-y-[1rem] sm:space-y-[2rem]">
                  <h3 className="text-[1rem] sm:text-[1.5rem] font-semibold">{cval.title}</h3>
                  <p className="text-[0.875rem] sm:text-[1rem] font-normal">{cval.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full sm:w-1/2 grid grid-cols-1 gap-[1.25rem]">
          {secondGridData.map((cval, index) => {
            return (
              <div
                key={index}
                className="flex justify-center gap-[1rem] sm:gap-[1.5rem] rounded-[1.25rem] sm:rounded-[2.625rem] bg-[#F3F3F3] shadow text-[#232323] h-auto sm:h-[16.75rem] p-[1rem] sm:px-[2rem] sm:py-[2.625rem]"
                onMouseEnter={() => setHoveredIndexRight(index)} // Hover event
                onMouseLeave={() => setHoveredIndexRight(null)} // Reset hover event
              >
                <div className={`flex items-center justify-center w-[2.313rem] h-[2.313rem] sm:w-[4.5rem] sm:h-[4.5rem] rounded-[0.5rem] sm:rounded-[1rem] mt-2 sm:mt-0 ${hoveredIndexRight === index ? "bg-gradient" : "border-1 border-[#1210CA]"}`}>
                  <Image
                    src={hoveredIndexRight === index ? cval.image2 : cval.image1}
                    alt=""
                    width={42}
                    height={42}
                    className="w-[1.625rem] h-[1.75rem] sm:w-[2.625rem] sm:h-[2.625rem]"
                  />
                </div>
                <div className="w-[80%] space-y-[1rem] sm:space-y-[2rem]">
                  <h3 className="text-[1rem] sm:text-[1.5rem] font-semibold">{cval.title}</h3>
                  <p className="text-[0.875rem] sm:text-[1rem] font-normal">{cval.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
