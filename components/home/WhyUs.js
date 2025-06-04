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
        <h1 className="text-[1.5rem] sm:text-[42px] font-semibold text-gradient">
          Why Us?
        </h1>
        <p className="text-[14px] sm:text-[1.5rem] w-full sm:w-[800px]">
          Hear from homeowners, designers, and contractors who have transformed
          spaces with our premium paints.
        </p>
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-[20px] my-[30px] sm:my-[80px]">
        <div className="w-full sm:w-1/2 grid grid-cols-1 gap-[1rem] sm:gap-[20px]">
          {firsGridData.map((cval, index) => {
            return (
              <div
                key={index}
                className="flex sm:flex-col justify-center gap-[16px] sm:gap-[32px] rounded-[20px] sm:rounded-[42px] bg-[#F3F3F3] shadow text-[#232323] h-auto sm:h-[410px] p-[1rem] sm:px-[32px]"
                onMouseEnter={() => setHoveredIndexLeft(index)} // Hover event
                onMouseLeave={() => setHoveredIndexLeft(null)} // Reset hover event
              >
                <div className={`flex items-center justify-center w-[37px] h-[37px] sm:w-[166px] sm:h-[166px] rounded-[8px] sm:rounded-[16px] mt-2 sm:mt-0 ${hoveredIndexLeft === index ? "bg-gradient" : "border-1 sm:border-2 border-[#1210CA]"}`}>
                  <Image
                    src={hoveredIndexLeft === index ? cval.image2 : cval.image1}
                    alt=""
                    width={86}
                    height={86}
                    className="w-[26px] h-[28px] sm:w-[86px] sm:h-[86px]"
                  />
                </div>
                <div className="w-[80%] sm:w-full space-y-[16px] sm:space-y-[32px]">
                  <h3 className="text-[1rem] sm:text-[1.5rem] font-semibold">{cval.title}</h3>
                  <p className="text-[14px] sm:text-[1rem] font-normal">{cval.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full sm:w-1/2 grid grid-cols-1 gap-[20px]">
          {secondGridData.map((cval, index) => {
            return (
              <div
                key={index}
                className="flex justify-center gap-[16px] sm:gap-[24px] rounded-[20px] sm:rounded-[42px] bg-[#F3F3F3] shadow text-[#232323] h-auto sm:h-[268px] p-[1rem] sm:px-[32px] sm:py-[42px]"
                onMouseEnter={() => setHoveredIndexRight(index)} // Hover event
                onMouseLeave={() => setHoveredIndexRight(null)} // Reset hover event
              >
                <div className={`flex items-center justify-center w-[37px] h-[37px] sm:w-[72px] sm:h-[72px] rounded-[8px] sm:rounded-[16px] mt-2 sm:mt-0 ${hoveredIndexRight === index ? "bg-gradient" : "border-1 border-[#1210CA]"}`}>
                  <Image
                    src={hoveredIndexRight === index ? cval.image2 : cval.image1}
                    alt=""
                    width={42}
                    height={42}
                    className="w-[26px] h-[28px] sm:w-[42px] sm:h-[42px]"
                  />
                </div>
                <div className="w-[80%] space-y-[16px] sm:space-y-[32px]">
                  <h3 className="text-[1rem] sm:text-[1.5rem] font-semibold">{cval.title}</h3>
                  <p className="text-[14px] sm:text-[1rem] font-normal">{cval.description}</p>
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
