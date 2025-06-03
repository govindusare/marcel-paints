import HeroSection from '@/components/home/HeroSection';
import TrustedUsers from '@/components/home/TrustedUsers';
import { productsData } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

export default function Productpage() {
  return (
    <div className="min-h-screen bg-white mb-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Paint Products Section */}
      <section className=" pb-10">
        <div className="text-center  mt-[140px] ">
          <h2 className="text-purple-700 text-[28px] md:text-[42px] font-bold mb-4">
            Our Premium Paint Products
          </h2>
          <p className="text-gray-600 max-w-[974px] mx-auto flex  text-[24px] ">
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
              className={`flex flex-col md:flex-row items-center justify-between gap-10 px-4  py-10 md:px-[150px] md:py-[100px] max-w-[1440px] h-[732px] mx-auto ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Product Image Group with Name Above (Mobile) */}
              <div className="flex-1 flex flex-col  text-start ">
                {/*Product Name for mobile view */}
                <h3 className="block md:hidden mb-4 text-[24px] font-bold  text-gray-900 text-start">
                  {product.name}
                </h3>

                <Image
                  src={product.imageGroup}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain max-h-[280px] sm:max-h-[320px] md:max-h-[400px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 mt-8 md:mt-0 ">
                <div className="space-y-3 text-left">
                  {/*  Product Name for desktop view */}
                  <h3 className="hidden md:block text-[24px] mb-[35px] md:text-[36px] font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <h4 className="text-[18px] md:text-[24px] font-semibold text-gray-700">
                    {product.headline}
                  </h4>
                  <p className="text-[14px] md:text-[18px] text-gray-600 leading-6">
                    {product.description}
                  </p>

                  {/*  Key Feature Icons - Mobile and Desktop optimized */}
                  <div className="flex gap-4 pt-4 flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible">
                    {product.keyfeatures?.map((feature) => (
                      <div
                        key={feature.id}
                        className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] flex-shrink-0 flex items-center justify-center border rounded-lg bg-gray-50 shadow-sm"
                      >
                        <Image
                          src={
                            feature.icon.startsWith('/')
                              ? feature.icon
                              : `/${feature.icon}`
                          }
                          alt={feature.name}
                          width={20}
                          height={20}
                          title={feature.name}
                          className="object-contain"
                        />
                      </div>
                    ))}
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
