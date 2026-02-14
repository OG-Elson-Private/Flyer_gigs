export default function DecorativeShapes() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Large purple curve - left side */}
      <svg
        className="absolute top-0 left-0 h-full"
        width="200"
        height="1123"
        viewBox="0 0 200 1123"
        fill="none"
      >
        <path
          d="M-80 0 L60 0 Q130 280 70 500 Q10 720 80 1123 L-80 1123 Z"
          fill="#4A1A8A"
        />
      </svg>

      {/* Gray curve accent - left side */}
      <svg
        className="absolute top-0 left-0 h-full opacity-15"
        width="160"
        height="1123"
        viewBox="0 0 160 1123"
        fill="none"
      >
        <path
          d="M-40 0 L30 0 Q110 240 50 470 Q-10 680 60 1123 L-40 1123 Z"
          fill="#9CA3AF"
        />
      </svg>

      {/* Small purple accent - bottom left */}
      <svg
        className="absolute bottom-[100px] left-[20px] opacity-20"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="60" cy="60" r="60" fill="#4A1A8A" />
      </svg>

      {/* Thin purple line */}
      <div className="absolute bottom-[220px] left-[30px] w-[100px] h-[2px] bg-flyer-purple opacity-30" />
    </div>
  );
}
