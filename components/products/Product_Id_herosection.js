import React from 'react';

function Product_Id_herosection({ title, description }) {
  return (
    <div className='relative flex items-center justify-center mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]'>
      {/* Hero Image */}
      <div className='flex items-center justify-center w-full h-[320px] sm:h-[320px] rounded-3xl overflow-hidden bg-[url(/assets/herosectionproduct.svg)] bg-origin-border bg-[0%_10%] sm:bg-[0%_37%] bg-cover'>
        {/* Hero Text */}
        <div className='absolute inset-0 flex flex-col items-center justify-start mt-[50px] sm:mt-0 sm:justify-center text-center text-white z-10 px-[1.5rem] sm:px-[2rem]'>
          <h1 className='text-[23px] sm:text-[72px] font-semibold leading-[2rem] sm:leading-[3rem] mb-2 sm:mb-4'>
            {title}
          </h1>
          <p className='text-[1rem] sm:text-[1.25rem] font-light leading-[1.5rem] sm:leading-[1.875rem] mt-[16px] sm:mt-[32px]'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product_Id_herosection;
