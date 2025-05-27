import React from "react";
import Image from "next/image";

function WhyUs1() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="flex justify-center items-center w-full flex-col gap-9 mb-[80px]">
      <h2 className="text-center text-purple-700 font-semibold text-[2.625rem]">Why Us?</h2>
      <p className="text-center text-[1.5rem] text-gray-600 w-[900px]">
        Hear from homeowners, designers, and contractors who have transformed 
        spaces with our premium paints.
      </p>
      </div>

      {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
          <div>

          </div>
          <div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>




    </section>
  );
}

export default WhyUs1;
