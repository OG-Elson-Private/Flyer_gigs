export default function DecorativeShapes() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Large purple curve - left side */}
      <svg
        className="absolute top-0 left-0 h-full"
        width="330"
        height="1123"
        viewBox="0 0 330 1123"
        fill="none"
      >
        <path
          d="M-80 0 L150 0 Q310 300 210 562 Q100 800 220 1123 L-80 1123 Z"
          fill="#4A1A8A"
        />
      </svg>

      {/* Gray curve accent - left side */}
      <svg
        className="absolute top-0 left-0 h-full opacity-20"
        width="260"
        height="1123"
        viewBox="0 0 260 1123"
        fill="none"
      >
        <path
          d="M-40 0 L110 0 Q280 260 160 520 Q60 740 180 1123 L-40 1123 Z"
          fill="#9CA3AF"
        />
      </svg>

      {/* Orange shape - right side, behind CTA */}
      <svg
        className="absolute bottom-[200px] right-0"
        width="400"
        height="240"
        viewBox="0 0 400 240"
        fill="none"
      >
        <ellipse
          cx="290"
          cy="120"
          rx="260"
          ry="120"
          fill="#FF6B00"
        />
      </svg>

      {/* Small purple accent - bottom left */}
      <svg
        className="absolute bottom-[40px] left-[70px] opacity-25"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
      >
        <circle cx="70" cy="70" r="70" fill="#4A1A8A" />
      </svg>

      {/* Thin purple line */}
      <div className="absolute bottom-[185px] left-[35px] w-[140px] h-[2px] bg-flyer-purple opacity-40" />
    </div>
  );
}
