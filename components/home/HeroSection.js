import React from 'react';

function HeroSection() {
  return (
    <section className="p-3 md:p-0 relative max-w-7xl mx-auto rounded-xl overflow-hidden mt-3 min-h-[500px] md:min-h-[700px] lg:min-h-[746px]">
      {/* Background Image */}
      <div className="relative rounded-[2.625rem] bg-slate-600 h-full w-full">
        <img
          src="/assets/herosectionimg.svg"
          alt="Background"
          className="w-full h-full object-cover rounded-[2.625rem] min-h-[500px] md:min-h-[700px] lg:min-h-[746px]"
        />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-snug md:leading-tight">
          Beyond Color!<br />
          We Create Experiences
        </h1>
        <p className="mb-6 text-sm sm:text-base font-light opacity-90 max-w-md">
          Experience the Fusion of Design, Durability and Delight
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition">
            Explore collection →
          </button>
          <button className="border border-white px-5 py-2 rounded-full text-white font-semibold hover:bg-white hover:text-pink-500 transition">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
