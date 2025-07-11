'use client';
import { paintProductsData } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function PaintCollection() {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 py-10 mt-20 sm:mt-24 lg:mt-[160px] max-w-screen overflow-x-hidden">
      <h2 className="text-center text-purple-700 font-bold text-2xl sm:text-3xl lg:text-[42px] mb-6 sm:mb-8 lg:mb-[36px]">
        Our Premium Paint Collection
      </h2>
      <p className="text-center mx-auto text-gray-700 text-base sm:text-lg lg:text-[24px] mb-10 sm:mb-16 lg:mb-[120px] max-w-[95%] sm:max-w-[700px] lg:max-w-[900px]">
        Discover our range of high-quality paints designed to bring your vision to life. From vibrant interiors to weather-resistant exteriors, we have the perfect solution for every surface.
      </p>

      {/* Swiper for all screen sizes */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {paintProductsData.map((product, index) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

// Reusable Card Component
function ProductCard({ product, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="bg-gray-100 rounded-[2.625rem] flex flex-col text-center w-full
                    max-w-[350px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-full
                    h-[520px] lg:h-[620px] gap-[3px] justify-between mx-auto">
      {isEven ? (
        <>
          {/* Image and Button Container */}
          <div className="flex flex-col items-center justify-center rounded-[2.625rem]
                          w-full h-[300px] sm:h-[310px] relative overflow-hidden ">
            <img
              src={product.bgimage}
              alt="Background"
              className="w-full h-full rounded-[42px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-[120px] sm:w-[151px] h-[120px] sm:h-[148px] object-contain"
              />
              <button
                className="px-4 sm:px-6 py-2 rounded-[24px] font-medium text-sm sm:text-[1.125rem] w-full max-w-[15rem] min-w-[13rem] h-auto border-1 border-purple-600 bg-white hover:bg-gradient-to-r hover:bg-[#1210CA] hover:border-transparent hover:text-white text-center  overflow-hidden "
              >
                {product.name}
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col px-4 pb-5 mt-6 ">
            <h3 className="font-semibold text-lg sm:text-[1.5rem]">{product.headline}</h3>
            <p className="text-sm sm:text-[1rem] text-gray-600 mb-3 line-clamp-4">
              {product.description}
            </p>
            <a
              href="#"
              className="text-purple-600 text-sm font-semibold hover:underline"
            >
              Read more...
            </a>
          </div>
        </>
      ) : (
        <>
          {/* Text Content */}
          <div className="flex flex-col px-4 py-5 mt-6">
            <h3 className="font-semibold text-lg sm:text-[1.5rem] mb-2">{product.headline}</h3>
            <p className="text-sm sm:text-[1rem] text-gray-600 mb-3 line-clamp-4">
              {product.description}
            </p>
            <a
              href="#"
              className="text-purple-600 text-sm font-semibold hover:underline"
            >
              Read more...
            </a>
          </div>

          {/* Image and Button Container */}
          <div className="flex flex-col items-center justify-center rounded-[2.625rem]
                          w-full h-[300px] sm:h-[310px] relative overflow-hidden">
            <img
              src={product.bgimage}
              alt="Background"
              className="w-full h-full rounded-[42px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-[120px] sm:w-[151px] h-[120px] sm:h-[148px] object-contain"
              />
              <button
                className="px-4 sm:px-6 py-2 rounded-[24px] font-medium text-sm sm:text-[1.125rem] w-full max-w-[15rem] min-w-[13rem] h-auto border-1 border-purple-600 bg-white hover:bg-gradient-to-r hover:bg-[#1210CA] hover:border-transparent hover:text-white"
              >
                {product.name}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
