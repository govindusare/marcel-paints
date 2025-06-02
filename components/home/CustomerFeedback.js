"use client";

import React from "react";
import Image from "next/image";
import { customerFeedback } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function CustomerFeedback() {
  return (
    <section className="py-16 px-4 flex flex-col items-center justify-center w-full">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-[2.625rem] font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
        What Our Customers Say
      </h2>
      <p className="text-base sm:text-lg lg:text-[1.25rem] text-gray-600 text-center max-w-2xl mb-10">
        Hear from homeowners, designers, and contractors who have transformed
        spaces with our premium paints.
      </p>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        modules={[Pagination, A11y]}
        className="w-full max-w-[58.625rem] pb-12"
      >
        {customerFeedback.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col lg:grid lg:grid-cols-2 w-full bg-gray-100 rounded-[2.625rem] overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-[250px] sm:h-[350px] lg:h-auto">
                <Image
                  src={item.image}
                  alt={`${item.name}'s Feedback`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 sm:p-10 lg:px-[3.75rem] lg:py-[5.625rem] text-start lg:text-left ">
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.title}</p>
                <p className="text-sm sm:text-base lg:text-[1.25rem] mt-4 lg:mt-[1.25rem] lg:pr-[6rem] text-gray-700 leading-relaxed">
                  {item.message}
                </p>

                {/* Stars */}
                <div className="flex justify-center lg:justify-start gap-1 mt-6 lg:mt-[4.875rem]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
          bottom: auto !important;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
