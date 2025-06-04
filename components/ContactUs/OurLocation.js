import React from 'react'

function OurLocation() {
    return (
        <div className='flex flex-col items-center justify-center gap-[1.5rem] mx-[1rem] my-[1.5rem] sm:mx-[2.625rem] sm:my-[3.125rem]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[3.13rem] sm:gap-[6rem]'>
                {/* Our Location Embedded Map */}
                <div className='w-full sm:h-[28.125rem] border-0 rounded-[2.625rem] overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30266.571249913897!2d73.8240603619155!3d18.514372411303203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbd8d5112df%3A0x40888f31c5f88b84!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1749008497961!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Our Location Address */}
                <div className='flex flex-col justify-center gap-[2.25rem] text-[#232323]'>
                    <div className='space-y-[1.5rem] w-[19.188rem]'>
                        <p className='text-[1.125rem] font-normal'>Our Location</p>
                        <h2 className='text-[1.5rem] font-semibold'>Connecting near and Far</h2>
                    </div>
                    <div className='space-y-[1.5rem] w-[14.75rem] sm:w-[19.188rem]'>
                        <h3 className='text-[1.125rem] font-normal'>Head Office:</h3>
                        <p className='text-[1.125rem] font-normal text-[#888888]'>Felix IT Systems, 3 Ideal Chambers, 2nd Floor, Ideal Colony, Paud Road, Kothrud, Pune, Maharashtra 411038</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurLocation