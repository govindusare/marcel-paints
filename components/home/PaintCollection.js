'use client';

import { productsData } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const bgImgArray = [
  '/assets/product_bg/Rectangle 24.svg',
  '/assets/product_bg/Rectangle 25.svg',
  '/assets/product_bg/Rectangle 26.svg',
  '/assets/product_bg/Rectangle 27.svg',
];

export default function PaintCollection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h2 className="text-center text-purple-700 font-bold text-2xl mb-3">
        Our Premium Paint Collection
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700 text-sm sm:text-base">
        Discover our range of high-quality paints designed to bring your vision to life.
      </p>

      {/* Mobile Swiper Slider */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
        >
          {productsData.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for larger screens */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        {productsData.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

// 🔁 Reusable Card Component
function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 flex flex-col justify-between h-full text-center">
      {isEven ? (
        <>
          {/* Image */}
          <div
            className="rounded-xl w-full h-40 flex justify-center items-center mb-4"
            style={{
              backgroundImage: `url(${bgImgArray[index % bgImgArray.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={product.image} alt={product.name} className="w-20 h-20 object-contain" />
          </div>

          {/* Button */}
          <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-medium mb-4 text-center mx-auto">
            {product.name}
          </button>

          {/* Text */}
          <h3 className="text-sm font-semibold text-center mb-2 px-2">
            {product.headline}
          </h3>
          <p className="text-xs text-gray-600 text-center mb-3 px-2">
            {product.description}
          </p>
          <a href="#" className="text-purple-600 text-xs font-semibold hover:underline text-center mb-2">
            Read more...
          </a>
        </>
      ) : (
        <>
          {/* Text */}
          <h3 className="text-sm font-semibold text-center mb-2 px-2">
            {product.headline}
          </h3>
          <p className="text-xs text-gray-600 text-center mb-3 px-2">
            {product.description}
          </p>
          <a href="#" className="text-purple-600 text-xs font-semibold hover:underline text-center mb-4">
            Read more...
          </a>

          {/* Image */}
          <div
            className="rounded-xl w-full h-40 flex justify-center items-center mb-4"
            style={{
              backgroundImage: `url(${bgImgArray[index % bgImgArray.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={product.image} alt={product.name} className="w-20 h-20 object-contain" />
          </div>

          {/* Button after image */}
          <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-medium text-center mx-auto">
            {product.name}
          </button>
        </>
      )}
    </div>
  );
}
