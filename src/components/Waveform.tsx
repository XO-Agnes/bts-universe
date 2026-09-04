export default function Waveform({ bars = 40, className = '' }: { bars?: number; className?: string }) {
  const heights = Array.from({ length: bars }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const r = seed - Math.floor(seed);
    return 0.2 + r * 0.8;
  });

  return (
    <div className={`flex items-center justify-center gap-[3px] ${className}`}>
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-[2px] bg-accent/70 animate-wave origin-bottom"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${(i % 8) * 0.12}s`,
            animationDuration: `${1.2 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
