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
    <section className="py-16 px-4 flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="text-[2.625rem] font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
        What Our Customers Say
      </h2>
      <p className="text-[1.25rem] text-gray-600 text-center max-w-2xl mb-10">
        Hear from homeowners, designers, and contractors who have transformed
        spaces with our premium paints.
      </p>

      {/* Swiper wrapping each card */}
      <Swiper
        slidesPerView={1}
        spaceBetween={72}
        pagination={{ clickable: true }}
        modules={[Pagination, A11y]}
        className="max-w-[58.625rem] pb-12 overflow-visible !important " // padding bottom for pagination space
      >
        {customerFeedback.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="grid grid-cols-2 w-[58.625rem] bg-gray-100 rounded-[2.625rem]">
              {/* Left Image */}
              <div className="h-full w-full">
                <Image
                  src={item.image}
                  width={469}
                  height={680}
                  alt={`${item.name}'s Feedback`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Text */}
              <div className="px-[3.75rem] py-[5.625rem] ">
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.title}</p>
                <p className="text-[1.25rem] mt-[1.25rem] pr-[6rem] text-gray-700 leading-relaxed">
                  {item.message}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mt-[4.875rem]">
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

      {/* Global styles to reposition pagination */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top:4rem;
          bottom: auto !important;
          text-align: center;
        }
      `}</style>
    </section>
  );
}
