export default function DecorativeShapes() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Large purple curve - left side, sweeping from top-left down */}
      <svg
        className="absolute top-0 left-0 h-full"
        width="450"
        height="1528"
        viewBox="0 0 450 1528"
        fill="none"
      >
        <path
          d="M-100 0 L200 0 Q420 400 280 764 Q140 1100 300 1528 L-100 1528 Z"
          fill="#4A1A8A"
        />
      </svg>

      {/* Gray curve accent - left side, overlapping purple */}
      <svg
        className="absolute top-0 left-0 h-full opacity-20"
        width="350"
        height="1528"
        viewBox="0 0 350 1528"
        fill="none"
      >
        <path
          d="M-50 0 L150 0 Q380 350 220 700 Q80 1000 250 1528 L-50 1528 Z"
          fill="#9CA3AF"
        />
      </svg>

      {/* Orange shape - right side, behind CTA area */}
      <svg
        className="absolute bottom-[280px] right-0"
        width="550"
        height="320"
        viewBox="0 0 550 320"
        fill="none"
      >
        <ellipse
          cx="400"
          cy="160"
          rx="350"
          ry="160"
          fill="#FF6B00"
        />
      </svg>

      {/* Small purple accent - bottom left */}
      <svg
        className="absolute bottom-[60px] left-[100px] opacity-30"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="100" fill="#4A1A8A" />
      </svg>

      {/* Thin purple line - decorative */}
      <div className="absolute bottom-[250px] left-[50px] w-[200px] h-[3px] bg-flyer-purple opacity-40" />
    </div>
  );
}
