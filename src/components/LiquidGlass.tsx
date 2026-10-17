import React, { useEffect, useRef, useState } from 'react';

export const LIQUID_FILTER_ID = 'nav-liquid-glass';

/** Idle ripple strength, and the ceiling scrolling can push it to */
const BASE_SCALE = 16;
const MAX_SCALE = 95;

/**
 * SVG backdrop filters (`backdrop-filter: url(#id)`) only render in Chromium.
 * Other browsers get a plain frosted-glass blur instead.
 */
const supportsLiquidBackdrop = () =>
  typeof navigator !== 'undefined' && /Chrome\//.test(navigator.userAgent) && !/Firefox/.test(navigator.userAgent);

/**
 * Mercury-style refraction: content passing under the glass is displaced by
 * slowly flowing noise. Scrolling injects energy, so the waves surge with scroll
 * speed and settle back to a gentle idle flow. A specular sheen drifts with the flow.
 */
export function useLiquidGlass() {
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const sheenRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!supportsLiquidBackdrop()) return;
    setEnabled(true);
    // Reduced motion: keep the static liquid refraction, skip the animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let energy = 0;
    let phase = 0;
    let direction = 1;
    let lastY = window.scrollY;
    let frame = 0;

    const render = () => {
      energy *= 0.94;
      phase += (0.008 + energy * 0.0012) * direction;

      const fx = 0.0045 + 0.0025 * Math.sin(phase);
      const fy = 0.022 + 0.012 * Math.cos(phase * 0.8);
      turbulenceRef.current?.setAttribute('baseFrequency', `${fx.toFixed(5)} ${fy.toFixed(5)}`);
      displacementRef.current?.setAttribute('scale', Math.min(MAX_SCALE, BASE_SCALE + energy).toFixed(2));

      if (sheenRef.current) {
        const x = 50 + 40 * Math.sin(phase * 0.6);
        sheenRef.current.style.transform = `translateX(${(x - 50).toFixed(2)}%)`;
        sheenRef.current.style.opacity = (0.55 + Math.min(energy, 60) / 120).toFixed(2);
      }

      frame = requestAnimationFrame(render);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      if (delta !== 0) direction = delta > 0 ? 1 : -1;
      energy = Math.min(MAX_SCALE - BASE_SCALE, energy + Math.min(Math.abs(delta), 100) * 0.9);
    };

    // Pause the loop while the tab is hidden
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  const backdropFilter = enabled
    ? `blur(1.5px) url(#${LIQUID_FILTER_ID}) saturate(1.9) brightness(1.04)`
    : 'blur(14px) saturate(1.8)';

  const filter = (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <filter id={LIQUID_FILTER_ID} x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feTurbulence
          ref={turbulenceRef}
          type="fractalNoise"
          baseFrequency="0.0045 0.022"
          numOctaves={1}
          seed={11}
          result="noise"
        />
        {/* Smooth the noise so the refraction reads as liquid metal, not grain */}
        <feGaussianBlur in="noise" stdDeviation="2.5" result="softNoise" />
        <feDisplacementMap
          ref={displacementRef}
          in="SourceGraphic"
          in2="softNoise"
          scale={BASE_SCALE}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );

  /** Drifting specular highlight; render inside the glass element */
  const sheen = (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <span ref={sheenRef} className="liquid-sheen absolute inset-y-0 -inset-x-1/4" />
    </span>
  );

  return { backdropFilter, filter, sheen };
}
