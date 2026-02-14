export default function CTASection() {
  return (
    <div className="relative px-8 pt-10 pb-6 flex flex-col items-end">
      {/* CTA content - sits on top of orange decorative shape */}
      <div className="relative z-10 text-right">
        <p className="text-[20px] font-bold text-flyer-dark mb-1">
          Appelez pour un devis
        </p>
        <p className="text-[22px] font-extrabold text-white mb-3 uppercase">
          gratuit !
        </p>

        {/* Phone number - THE BIGGEST text */}
        <div className="flex items-center justify-end gap-3">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <p className="text-[48px] font-black text-white leading-none tracking-wide">
            0488 48 66 58
          </p>
        </div>
      </div>
    </div>
  );
}
