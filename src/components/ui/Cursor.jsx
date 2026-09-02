import { useEffect, useRef, useState } from 'react';

// Premium custom cursor — Vercel/Linear/Raycast inspired.
// Inner dot tracks instantly; outer ring follows with smooth inertia.
// Disabled on touch devices and when prefers-reduced-motion is set.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    setActive(true);

    let raf;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hoveringTarget = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      const nowHovering = !!interactive;
      if (nowHovering !== hoveringTarget) {
        hoveringTarget = nowHovering;
        setHovering(nowHovering);
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      {/* Inner dot — 6px, instant tracking, accent glow */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-accent-400 transition-[width,height,opacity] duration-200 ease-out ${
          hovering
            ? 'h-[4px] w-[4px] opacity-50'
            : 'h-[6px] w-[6px] opacity-100'
        }`}
        style={{
          marginLeft: hovering ? '-2px' : '-3px',
          marginTop: hovering ? '-2px' : '-3px',
          boxShadow: '0 0 6px 0 rgba(139,124,255,0.5)',
        }}
      />
      {/* Outer ring — 36px default, 52px on hover, thin border, smooth inertia */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border transition-[width,height,margin,border-color,opacity] duration-300 ease-out ${
          hovering
            ? 'h-[52px] w-[52px] border-accent-400/50 opacity-100'
            : 'h-[36px] w-[36px] border-accent-400/25 opacity-90'
        }`}
        style={{
          marginLeft: hovering ? '-26px' : '-18px',
          marginTop: hovering ? '-26px' : '-18px',
        }}
      />
    </>
  );
}
