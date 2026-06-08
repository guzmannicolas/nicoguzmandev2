"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

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
    >
      {/* Main heading — bleeds to left edge like locomotive.ca */}
      <div className="flex-1 flex flex-col justify-center mt-8 md:mt-12 pl-6 md:pl-10 lg:pl-14">
        <div className="overflow-hidden mb-0">
          <span
            ref={(el) => { linesRef.current[0] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(72px,13.5vw,220px)] leading-[0.85] text-[#f0ede8] tracking-[-0.03em]"
            style={{ display: "block" }}
          >
            An uncommon
          </span>
        </div>
        <div className="overflow-hidden mb-0">
          <span
            ref={(el) => { linesRef.current[1] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(72px,13.5vw,220px)] leading-[0.85] text-[#f0ede8] tracking-[-0.03em]"
            style={{ display: "block" }}
          >
            kind of studio.
          </span>
        </div>

        {/* Sub info row */}
        <div className="overflow-hidden mt-10 md:mt-14">
          <span
            ref={(el) => { linesRef.current[2] = el; }}
            style={{ display: "block" }}
          >
            <p className="font-[family-name:var(--font-inter)] text-[13px] md:text-[14px] font-light text-[rgba(240,237,232,0.5)] max-w-sm leading-relaxed">
              A digital-first design agency with<br />off-the-charts dev skills.
            </p>
          </span>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="flex items-end justify-between pb-10 md:pb-14 px-6 md:px-10 lg:px-14">
        <div className="overflow-hidden">
          <span
            ref={(el) => { linesRef.current[3] = el; }}
            style={{ display: "block" }}
          >
            <div className="flex items-center gap-8">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] mb-1">
                  Founded
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light text-[#f0ede8]">
                  2008
                </p>
              </div>
              <div className="w-px h-8 bg-[rgba(240,237,232,0.12)]" />
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] mb-1">
                  Based in
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light text-[#f0ede8]">
                  Montréal
                </p>
              </div>
              <div className="w-px h-8 bg-[rgba(240,237,232,0.12)]" />
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] mb-1">
                  Awwwards
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-[22px] font-light text-[#f0ede8]">
                  6× AOTY
                </p>
              </div>
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
              <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] group-hover:text-[rgba(240,237,232,0.7)] transition-colors">
                Scroll
              </span>
              <div className="w-px h-12 bg-[rgba(240,237,232,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(240,237,232,0.7)] animate-[slideDown_1.8s_ease_infinite]" />
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
