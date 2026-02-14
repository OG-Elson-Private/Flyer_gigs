function PhoneIcon() {
  return (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-10">
      <div className="bg-flyer-orange rounded-3xl p-10 text-center w-full shadow-lg">
        {/* CTA text */}
        <p className="text-white text-[22px] font-bold mb-2 uppercase tracking-wide">
          Appelez pour un
        </p>
        <p className="text-white text-[28px] font-extrabold mb-8 uppercase">
          devis gratuit !
        </p>

        {/* Phone icon */}
        <div className="flex justify-center mb-4 text-white">
          <PhoneIcon />
        </div>

        {/* Phone number - BIGGEST text on the flyer */}
        <p className="text-white text-[52px] font-black leading-none tracking-wider">
          0488 48 66 58
        </p>
      </div>

      {/* Additional info below CTA */}
      <div className="mt-8 text-center">
        <p className="text-flyer-dark text-[18px] font-semibold">
          Liège et environs
        </p>
        <p className="text-flyer-gray-dark text-[16px] mt-1">
          Camionnette ~20m³ avec hayon
        </p>
      </div>
    </div>
  );
}
