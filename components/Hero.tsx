"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const VIDEO_ID = "Pk7eBbD_dhc";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const lines = linesRef.current.filter(Boolean) as HTMLSpanElement[];

    lines.forEach((line, i) => {
      line.style.transform = "translateY(110%)";
      line.style.opacity = "0";
      setTimeout(() => {
        line.style.transition = `transform 1s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease`;
        line.style.transform = "translateY(0%)";
        line.style.opacity = "1";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-[72px]"
      style={{ isolation: "auto" }}
    >
      {/* YouTube background video — cover technique */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&disablekb=1&fs=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&vq=hd1080&enablejsapi=1`}
          title="Hero background"
          allow="autoplay; encrypted-media"
          onLoad={() => setVideoReady(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "max(100vw, 177.78vh)",
            height: "max(100vh, 56.25vw)",
            border: "none",
          }}
          aria-hidden="true"
        />
        {/* Dark overlay — lighter so bright video areas still punch through for blend mode */}
        <div
          className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-1000 ${
            videoReady ? "opacity-50" : "opacity-100"
          }`}
        />
      </div>

      {/* ── Heading with mix-blend-mode: difference ──────────────────────────
          This div must NOT create a new stacking context (no z-index set),
          so mix-blend-mode blends directly against the video+overlay below. */}
      <div
        className="relative flex-1 flex flex-col justify-center mt-8 md:mt-12 pl-6 md:pl-10 lg:pl-14"
        style={{ mixBlendMode: "difference", zIndex: "auto" } as React.CSSProperties}
      >
        <div className="overflow-hidden mb-0">
          <span
            ref={(el) => { linesRef.current[0] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(72px,13.5vw,220px)] leading-[0.85] tracking-[-0.03em]"
            style={{ display: "block", color: "#ffffff" }}
          >
            An uncommon
          </span>
        </div>
        <div className="overflow-hidden mb-0">
          <span
            ref={(el) => { linesRef.current[1] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(72px,13.5vw,220px)] leading-[0.85] tracking-[-0.03em]"
            style={{ display: "block", color: "#ffffff" }}
          >
            kind of studio.
          </span>
        </div>

        {/* Subtitle — outside the blend div so it keeps a fixed color */}
        <div className="overflow-hidden mt-10 md:mt-14" style={{ mixBlendMode: "normal" }}>
          <span
            ref={(el) => { linesRef.current[2] = el; }}
            style={{ display: "block" }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[13px] md:text-[14px] font-light leading-relaxed max-w-sm" style={{ color: "rgba(240,237,232,0.55)" }}>
              A digital-first design agency with<br />off-the-charts dev skills.
            </p>
          </span>
        </div>
      </div>

      {/* Bottom info bar — above video, no blend mode */}
      <div
        className="relative flex items-end justify-between pb-10 md:pb-14 px-6 md:px-10 lg:px-14"
        style={{ zIndex: 2 }}
      >
        <div className="overflow-hidden">
          <span
            ref={(el) => { linesRef.current[3] = el; }}
            style={{ display: "block" }}
          >
            <div className="flex items-center gap-8">
              {[
                { label: "Founded", value: "2008" },
                { label: "Based in", value: "Montréal" },
                { label: "Awwwards", value: "6× AOTY" },
              ].map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: "rgba(240,237,232,0.35)" }}>
                      {stat.label}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light" style={{ color: "#f0ede8" }}>
                      {stat.value}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-8" style={{ background: "rgba(240,237,232,0.12)" }} />
                  )}
                </div>
              ))}
            </div>
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="overflow-hidden">
          <span
            ref={(el) => { linesRef.current[4] = el; }}
            style={{ display: "block" }}
          >
            <Link
              href="#work"
              className="flex flex-col items-center gap-3 group"
              aria-label="Scroll to work"
            >
              <span
                className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] group-hover:opacity-70 transition-opacity"
                style={{ color: "rgba(240,237,232,0.35)" }}
              >
                Scroll
              </span>
              <div className="w-px h-12 relative overflow-hidden" style={{ background: "rgba(240,237,232,0.2)" }}>
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: "rgba(240,237,232,0.7)",
                    animation: "slideDown 1.8s ease infinite",
                  }}
                />
              </div>
            </Link>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
