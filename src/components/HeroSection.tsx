export default function HeroSection() {
  return (
    <div className="relative h-[440px]">
      {/* Logo / Service name - top left on purple area */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">Express</p>
            <p className="text-white text-[8px] font-medium uppercase tracking-wider opacity-80">Transport</p>
          </div>
        </div>
      </div>

      {/* Main title - right side */}
      <div className="absolute top-6 right-8 text-right z-20">
        <h1 className="text-[52px] font-black leading-[0.95] text-flyer-dark uppercase">
          TRANSPORT
          <br />
          <span className="text-flyer-orange">&</span> DÉMÉNA
          <br />
          GEMENT
        </h1>
        <p className="text-[17px] font-semibold text-flyer-dark/70 mt-3 leading-snug">
          Meubles, colis, marchandises
          <br />
          <span className="text-flyer-dark font-bold">on s&apos;en charge !</span>
        </p>
      </div>

      {/* Camionnette photo - bottom area */}
      <div className="absolute bottom-0 left-[180px] right-[20px] h-[220px] z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/camionnette.png"
          alt="Camionnette de transport Express"
          className="w-full h-full object-contain object-bottom"
          style={{
            filter: "brightness(1.05) contrast(1.1)",
          }}
        />
      </div>
    </div>
  );
}
