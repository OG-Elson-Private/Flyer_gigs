export default function DecorativeShapes() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Large purple curve - left side */}
      <svg
        className="absolute top-0 left-0 h-full"
        width="280"
        height="1123"
        viewBox="0 0 280 1123"
        fill="none"
      >
        <path
          d="M-80 0 L120 0 Q260 280 170 500 Q80 720 180 1123 L-80 1123 Z"
          fill="#4A1A8A"
        />
      </svg>

      {/* Gray curve accent - left side */}
      <svg
        className="absolute top-0 left-0 h-full opacity-15"
        width="220"
        height="1123"
        viewBox="0 0 220 1123"
        fill="none"
      >
        <path
          d="M-40 0 L90 0 Q230 240 130 470 Q40 680 150 1123 L-40 1123 Z"
          fill="#9CA3AF"
        />
      </svg>

      {/* Small purple accent - bottom left */}
      <svg
        className="absolute bottom-[100px] left-[50px] opacity-20"
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
