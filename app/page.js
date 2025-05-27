import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AboutUS from "@/components/home/AboutUs";
import WhyUs1 from "@/components/home/WhyUs1";
import PaintCollection from "@/components/home/PaintCollection.js";
import CustomerFeedback from "@/components/home/CustomerFeedback";
import TrustedUsers from "@/components/home/TrustedUsers";
export default function Home() {
  return (
    <div>
     <HeroSection />
     <PaintCollection />
     <AboutUS />
     <TrustedUsers />
     <CustomerFeedback />
      <WhyUs1 />
    </div>
  );
}
