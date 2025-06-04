import AboutUsHero from '@/components/AboutUs/AboutUsHero';
import LeadershipAndVision from '@/components/AboutUs/LeadershipAndVision';
import ManagementTeam from '@/components/AboutUs/ManagementTeam';
import OurClients from '@/components/AboutUs/OurClients';
import WhyUs from '@/components/home/WhyUs';
import React from 'react';

function AboutPage() {
  return (
    <section className='min-h-screen min-w-[100vw]'>
      {/* About Us Hero Section */}
      <AboutUsHero />
      
      {/* Leadership and Vision Section */}
      <LeadershipAndVision />

      {/* Management Team Section */}
      <ManagementTeam />

      {/* Why Us Section */}
      <WhyUs />

      {/* Our Clients Section */}
      <OurClients />
    </section>
  )
}

export default AboutPage