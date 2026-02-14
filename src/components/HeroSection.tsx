export default function HeroSection() {
  return (
    <div className="relative h-[450px]">
      {/* Logo / Service name - top left on purple area */}
      <div className="absolute top-7 left-7 z-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <div>
            <p className="text-white text-[10px] font-bold uppercase tracking-widest">Elvis</p>
            <p className="text-white text-[8px] font-medium uppercase tracking-wider opacity-80">Transport</p>
          </div>
        </div>
      </div>

      {/* Main title - right side */}
      <div className="absolute top-8 right-8 text-right z-20">
        <h1 className="text-[66px] font-black leading-[0.9] text-flyer-dark uppercase">
          DÉMÉNA
          <br />
          GEMENT
          <span className="text-flyer-orange">?</span>
        </h1>
        <p className="text-[18px] font-semibold text-flyer-dark/70 mt-3 leading-snug">
          Vous bougez,
          <br />
          <span className="text-flyer-dark font-bold">on transporte !</span>
        </p>
      </div>

      {/* Camionnette photo - center/right */}
      <div className="absolute bottom-0 right-[30px] w-[380px] h-[250px] z-10">
        <div
          className="w-full h-full overflow-hidden"
          style={{
            clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/camionnette.png"
            alt="Camionnette de transport Elvis"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.05) contrast(1.1)",
            }}
          />
        </div>
      </div>

      {/* Fallback placeholder */}
      <div className="absolute bottom-[15px] right-[55px] w-[340px] h-[220px] z-[5] bg-flyer-gray rounded-xl flex items-center justify-center">
        <div className="text-center text-flyer-gray-dark">
          <svg className="w-12 h-12 mx-auto mb-1 opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
          </svg>
          <p className="text-xs opacity-50">Photo camionnette</p>
        </div>
      </div>
    </div>
  );
}
