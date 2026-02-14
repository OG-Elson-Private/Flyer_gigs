export default function CTASection() {
  return (
    <div className="px-6 pt-8 pb-4">
      {/* Orange CTA box */}
      <div className="bg-flyer-orange rounded-2xl px-6 py-8 text-center">
        <p className="text-white text-[16px] font-bold uppercase tracking-wide">
          Appelez pour un devis
        </p>
        <p className="text-white text-[20px] font-extrabold uppercase mb-4">
          gratuit !
        </p>

        {/* Phone icon */}
        <div className="flex justify-center mb-2">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>

        {/* Phone number - THE BIGGEST text on the flyer */}
        <p className="text-white text-[38px] font-black leading-none tracking-wider">
          +32 467 83 92 99
        </p>
      </div>
    </div>
  );
}
