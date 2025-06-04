import HeroSection from "@/components/home/HeroSection";
import AboutUS from "@/components/home/AboutUs";
import WhyUs from "@/components/home/WhyUs";
import PaintCollection from "@/components/home/PaintCollection.js";
import CustomerFeedback from "@/components/home/CustomerFeedback";
import TrustedUsers from "@/components/home/TrustedUsers";
import TouchWithUs from "@/components/home/TouchWithUs";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <PaintCollection />
      <AboutUS />
      <TrustedUsers />
      <CustomerFeedback />
      <WhyUs />
      <TouchWithUs />
    </div>
  );
}
