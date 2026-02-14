import DecorativeShapes from "./DecorativeShapes";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";
import WhyUsSection from "./WhyUsSection";
import FooterSection from "./FooterSection";

export default function Flyer() {
  return (
    <div className="flyer-container relative w-[1080px] h-[1528px] bg-white overflow-hidden shadow-2xl">
      <DecorativeShapes />
      <div className="relative z-10 flex flex-col h-full">
        <HeroSection />
        <div className="flex flex-1">
          <div className="w-1/2 flex flex-col">
            <ServicesSection />
            <WhyUsSection />
          </div>
          <div className="w-1/2 flex flex-col">
            <CTASection />
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
}
