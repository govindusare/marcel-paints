import React from 'react'

function AboutUsHero() {
    return (
        <div className='relative flex items-center justify-center mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]'>
            {/* Hero Image */}
            <div className='flex items-center justify-center w-full h-[20rem] rounded-3xl overflow-hidden bg-[url(/assets/aboutus/about-us-hero-bg.jpg)] bg-origin-border bg-[0%_10%] sm:bg-[0%_37%] bg-cover'>
                {/* Dark Overlay - Optional */}
                {/* <div className='absolute inset-0 bg-black opacity-30 rounded-3xl'></div> */}
                {/* Hero Text */}
                <h1 className='w-[18.75rem] text-[1.5rem] leading-[1.875rem] sm:w-[43.75rem] sm:text-[3.75rem] sm:leading-[4.5rem] font-semibold text-center text-gradient z-10'>Behind Every Shade, There’s a Story</h1>
            </div>
        </div>
    )
}

export default AboutUsHero