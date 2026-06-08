"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const lines = textLinesRef.current.filter(Boolean) as HTMLSpanElement[];
    const stats = statsRef.current.filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lines.forEach((line, i) => {
            line.style.transition = `transform 1s cubic-bezier(0.16,1,0.3,1) ${
              i * 100
            }ms, opacity 0.6s ease ${i * 100}ms`;
            line.style.transform = "translateY(0)";
            line.style.opacity = "1";
          });
          stats.forEach((stat, i) => {
            stat.style.transition = `opacity 0.8s ease ${400 + i * 100}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${
              400 + i * 100
            }ms`;
            stat.style.opacity = "1";
            stat.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    lines.forEach((line) => {
      line.style.transform = "translateY(100%)";
      line.style.opacity = "0";
    });
    stats.forEach((stat) => {
      stat.style.opacity = "0";
      stat.style.transform = "translateY(30px)";
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-8 md:px-12 lg:px-16 py-24 md:py-36 border-t border-[rgba(240,237,232,0.08)]"
    >
      {/* Label */}
      <div className="flex items-center gap-4 mb-16 md:mb-20">
        <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
          02
        </span>
        <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
          The agency
        </span>
      </div>

      {/* Main text block */}
      <div className="max-w-5xl">
        <div className="overflow-hidden mb-2">
          <span
            ref={(el) => { textLinesRef.current[0] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light text-[clamp(36px,5.5vw,88px)] text-[#f0ede8] leading-[1.05] tracking-[-0.015em]"
          >
            We are Locomotive.
          </span>
        </div>
        <div className="overflow-hidden mb-2">
          <span
            ref={(el) => { textLinesRef.current[1] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(36px,5.5vw,88px)] text-[rgba(240,237,232,0.5)] leading-[1.05] tracking-[-0.015em]"
          >
            An independent agency with
          </span>
        </div>
        <div className="overflow-hidden">
          <span
            ref={(el) => { textLinesRef.current[2] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(36px,5.5vw,88px)] text-[rgba(240,237,232,0.5)] leading-[1.05] tracking-[-0.015em]"
          >
            a deep skill set &amp; big ideas.
          </span>
        </div>
      </div>

      {/* Body text */}
      <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        <div className="overflow-hidden">
          <span
            ref={(el) => { textLinesRef.current[3] = el; }}
            className="block font-[family-name:var(--font-inter)] text-[14px] font-light text-[rgba(240,237,232,0.55)] leading-[1.9] max-w-xs"
          >
            Started in 2008 by three founders — an ops guy, a designer and a dev — Locomotive has grown into a team of 50+ dedicated to helping brands build a future where design and code are integral to their success.
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[rgba(240,237,232,0.08)]">
        {[
          { number: "15+", label: "Years of experience" },
          { number: "50+", label: "Team members" },
          { number: "200+", label: "Projects delivered" },
          { number: "6×", label: "Agency of the year" },
        ].map((stat, i) => (
          <div
            key={i}
            ref={(el) => { statsRef.current[i] = el; }}
            className="py-10 px-0 md:pr-12 border-b md:border-b-0 md:border-r border-[rgba(240,237,232,0.08)] last:border-0"
          >
            <p className="font-[family-name:var(--font-cormorant)] text-[clamp(48px,5vw,72px)] font-light text-[#f0ede8] leading-none">
              {stat.number}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.15em] text-[rgba(240,237,232,0.35)] mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
