import Image from 'next/image';
import React from 'react'

const LeadershipAndVisionData =
{
    title: "Our Leadership and Vision",
    description: "We are a team of seasoned professionals with over two decades of senior management experience across diverse domains, including infrastructure design and construction, as well as supply chain strategy and operations. Our collective expertise brings a unique blend of technical excellence, strategic insight, and executional depth to every aspect of our business."
};

function LeadershipAndVision() {
    return (
        <div className='flex items-center justify-center mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]'>
            {/* Desktop View */}
            <div className='hidden sm:grid grid-cols-2 w-full rounded-3xl bg-[#F3F3F3] overflow-hidden'>
                <div>
                    <Image src="/assets/aboutus/our-vision-img.jpg" alt="" width={688} height={874} />
                </div>
                <div className='flex flex-col justify-center px-[6rem]'>
                    <h2 className='text-[2.625rem] font-semibold leading-[3.25rem] text-[#293036] mb-[3.125rem]'>{LeadershipAndVisionData.title}</h2>
                    <p className='text-[1.75rem] font-normal text-[#232323]'>{LeadershipAndVisionData.description}</p>
                </div>
            </div>
            {/* Mobile View */}
            <div className="block sm:hidden w-full rounded-3xl bg-[url(/assets/aboutus/about-us-hero-bg.jpg)] bg-origin-border bg-center bg-cover">
                <div className='flex flex-col justify-center bg-[#F3F3F3] px-[1rem] py-[1.5rem] mx-[1.25rem] my-[3.125rem] rounded-2xl text-center shadow-lg'>
                    <h2 className='text-[1.25rem] font-semibold leading-[1.563rem] text-[#293036] mb-[1.5rem]'>{LeadershipAndVisionData.title}</h2>
                    <p className='text-[1rem] font-normal text-[#232323]'>{LeadershipAndVisionData.description}</p>
                </div>
            </div>
        </div>
    )
}

export default LeadershipAndVision