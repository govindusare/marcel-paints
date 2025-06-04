import ContactUsForm from '@/components/ContactUs/ContactUsForm'
import OurLocation from '@/components/ContactUs/OurLocation'
import React from 'react'

function ContactUsPage() {
  return (
    <section className='min-h-screen min-w-[100vw]'>
      {/* Contact Us Form */}
      <ContactUsForm />

      {/* Our Location */}
      <OurLocation />
    </section>
  )
}

export default ContactUsPage