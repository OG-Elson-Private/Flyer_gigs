export default function HeroSection() {
  return (
    <div className="relative h-[610px] flex">
      {/* Left side - Title */}
      <div className="flex-1 flex flex-col justify-center pl-16 pr-8 pt-16">
        {/* Service badge */}
        <div className="mb-6">
          <span className="inline-block bg-flyer-orange text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
            Elvis Transport & Déménagement
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-[82px] font-black leading-[0.95] text-white uppercase mb-6">
          DÉMÉNA
          <br />
          GEMENT
          <span className="text-flyer-orange"> ?</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[26px] font-semibold text-white/90 leading-tight">
          Vous bougez,
          <br />
          <span className="text-flyer-orange">on transporte !</span>
        </p>
      </div>

      {/* Right side - Camionnette photo */}
      <div className="w-[480px] relative flex items-center justify-center">
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/camionnette.jpg"
            alt="Camionnette de transport"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.05) contrast(1.1)",
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-flyer-purple/40 to-transparent" />
        </div>

        {/* Fallback when no image */}
        <div className="relative z-10 text-center text-white/60 p-8">
          <svg className="w-20 h-20 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h8M8 17v-4m8 4v-4M4 13V7a2 2 0 012-2h3.5L12 3l2.5 2H18a2 2 0 012 2v6M4 13l-1 4h18l-1-4M4 13h16" />
          </svg>
          <p className="text-sm">Photo camionnette</p>
        </div>
      </div>
    </div>
  );
}
