// Subtle atmospheric background: near-black base, faint grid,
// extremely soft purple/blue radial lighting, subtle noise.
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink-950">
      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Soft purple radial — top left */}
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent-500/[0.04] blur-[120px]" />

      {/* Soft blue radial — bottom right */}
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-sky-400/[0.03] blur-[120px]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,10,15,0.7)_100%)]" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
