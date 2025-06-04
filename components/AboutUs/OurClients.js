import Image from 'next/image'
import React from 'react'

function OurClients() {
    return (
        <div className='flex flex-col items-center justify-center gap-[1.5rem] mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]'>
            {/* Title */}
            <h2 className='text-[1.5rem] sm:text-[2.625rem] font-semibold text-gradient mb-[2.5rem] sm:mb-[5rem]'>Our Clients</h2>

            {/* Client Logos */}
            <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-6 sm:gap-[3rem]'>
                <div className='bg-[#F3F3F3] sm:rounded-[2.625rem] rounded-4xl sm:h-[18.75rem] h-[11.25rem] flex items-center justify-center'>
                    <Image src="/assets/ourclients/MSRDC.svg" alt="MSRDC" width={156} height={180} className='sm:w-[9.75rem] sm:h-[11.25rem] w-[6.25rem] h-[6.25rem]' />
                </div>
                <div className='bg-[#F3F3F3] sm:rounded-[2.625rem] rounded-4xl sm:h-[18.75rem] h-[11.25rem] flex items-center justify-center'>
                    <Image src="/assets/ourclients/J-Kumar.svg" alt="J-Kumar" width={262} height={159} className='sm:w-[16.375rem] sm:h-[9.938rem] w-[6.25rem] h-[6.25rem]' />
                </div>
                <div className='bg-[#F3F3F3] sm:rounded-[2.625rem] rounded-4xl sm:h-[18.75rem] h-[11.25rem] flex items-center justify-center'>
                    <Image src="/assets/ourclients/NHAI.svg" alt="NHAI" width={226} height={149} className='sm:w-[14.125rem] sm:h-[9.313rem] w-[6.25rem] h-[6.25rem]' />
                </div>
            </div>
        </div>
    )
}

export default OurClients