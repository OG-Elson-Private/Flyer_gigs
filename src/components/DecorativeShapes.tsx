export default function DecorativeShapes() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Large purple curve - top left */}
      <div
        className="absolute -top-20 -left-40 w-[700px] h-[700px] rounded-full opacity-90"
        style={{
          background: "linear-gradient(135deg, #4A1A8A 0%, #6B3FA0 100%)",
        }}
      />

      {/* Smaller purple accent - top right */}
      <div
        className="absolute top-10 right-0 w-[300px] h-[500px] opacity-80"
        style={{
          background: "linear-gradient(180deg, #4A1A8A 0%, #6B3FA0 60%, transparent 100%)",
          borderRadius: "0 0 0 200px",
        }}
      />

      {/* Gray wave - middle right */}
      <div
        className="absolute top-[580px] -right-20 w-[500px] h-[400px] opacity-20"
        style={{
          background: "linear-gradient(200deg, #4A1A8A 0%, #9CA3AF 100%)",
          borderRadius: "200px 0 0 200px",
        }}
      />

      {/* Orange accent strip - middle */}
      <div
        className="absolute top-[620px] left-0 w-[60px] h-[300px] opacity-70"
        style={{
          background: "linear-gradient(180deg, #FF6B00 0%, #E05E00 100%)",
          borderRadius: "0 30px 30px 0",
        }}
      />

      {/* Purple curve - bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "linear-gradient(45deg, #4A1A8A 0%, #6B3FA0 100%)",
        }}
      />

      {/* Small gray circle - decorative */}
      <div
        className="absolute bottom-[200px] right-[100px] w-[150px] h-[150px] rounded-full opacity-10"
        style={{
          background: "#4A1A8A",
        }}
      />
    </div>
  );
}
