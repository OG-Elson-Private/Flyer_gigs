import DecorativeShapes from "./DecorativeShapes";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";
import WhyUsSection from "./WhyUsSection";
import FooterSection from "./FooterSection";

export default function Flyer() {
  return (
    <div className="flyer-container relative w-[794px] h-[1123px] bg-white overflow-hidden shadow-2xl">
      <DecorativeShapes />
      <div className="relative z-10 flex flex-col h-full">
        <HeroSection />
        <div className="flex flex-1">
          <div className="w-[50%] flex flex-col">
            <ServicesSection />
          </div>
          <div className="w-[50%] flex flex-col">
            <CTASection />
            <WhyUsSection />
          </div>
        </div>
        <FooterSection />
      </div>
    </div>
  );
}
