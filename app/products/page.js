"use client";

import HeroSection from '@/components/home/HeroSection';
import TrustedUsers from '@/components/home/TrustedUsers';
import { productsData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Productpage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white mb-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Paint Products Section */}
      <section className="pb-10">
       <div className="mt-[50px] sm:mt-[8.75rem] flex flex-col items-center justify-center mx-[1rem] text-center">
          <h2 className="w-[12.5rem] sm:w-full text-gradient text-[1.75rem] md:text-[2.625rem] font-medium sm:font-semibold mb-4 ">
            Our Premium Paint Products
          </h2>
          <p className="text-gray-600 text-[0.875rem] sm:text-[1.5rem] w-full sm:w-[65%]">
            Discover our range of high-quality paints designed to bring your vision to life.
            From vibrant interiors to weather-resistant exteriors, we have the perfect solution
            for every surface.
          </p>
        </div>

        {/* Full-width Product Sections */}
        {productsData.map((product, index) => (
          <div
            key={product.id}
            className={`w-full ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}
          >
            <div
              className={`flex flex-col md:flex-row items-center justify-between gap-10 px-4  py-10 md:px-[9.375rem] md:py-[6.25rem] max-w-[1440px] h-[45.75rem] mx-auto ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Product Image Group with Name Above (Mobile) */}
              <div className="flex-1 flex flex-col  text-start ">
                {/*Product Name for mobile view */}
                <h3 className="block md:hidden mb-4 text-[1.5rem] font-bold  text-gray-900 text-start">
                  {product.name}
                </h3>

                <Image
                  src={product.imageGroup}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain max-h-[17.5rem] sm:max-h-[20rem] md:max-h-[25rem] ]"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 mt-8 md:mt-0 ">
                <div className="space-y-3 text-left">
                  {/*  Product Name for desktop view */}
                  <h3 className="hidden md:block text-[1.5rem] mb-[2.188rem] md:text-[2.25rem] font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <h4 className="text-[1.125rem] md:text-[1.5rem] font-semibold text-gray-700">
                    {product.headline}
                  </h4>
                  <p className="text-[0.875rem] md:text-[1.125rem] text-gray-600 leading-6">
                    {product.description}
                  </p>

                  {/*  Key Feature Icons - Mobile and Desktop optimized */}
                  <div className="flex gap-4 pt-4 flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible">
                    {product.keyfeatures?.map((feature) => (
                      <div
                        key={feature.id}
                        className="  flex-shrink-0 flex items-center"
                      >
                        <Image
                          // src={
                          //   // feature.icon.startsWith('/')
                          //   //   ? feature.icon
                          //   //   : `/${feature.icon}`

                          // }
                          src={feature.icon}
                          alt={feature.name}
                          width={20}
                          height={20}
                          title={feature.name}
                          priority={true}
                          className="object-contain w-[2.5rem] h-[2.5rem]"

                        />
                      </div>
                    ))}
                  </div>

                  <div className='mt-[1.5rem] sm:mt-[2.813rem] flex justify-center sm:block'>
                    <button
                      onClick={() => router.push(`/products/${product.id}`)}
                      className="bg-gradient text-white text-[1rem] sm:text-[1.25rem] rounded-[2.188rem] px-[1.5rem] py-[0.5rem] sm:px-[2.5rem] sm:py-[1rem] cursor-pointer"
                    >
                      View Product
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trusted Users Section */}
      <TrustedUsers />
    </div>
  );
}
