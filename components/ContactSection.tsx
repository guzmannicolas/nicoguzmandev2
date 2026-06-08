"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const lines = linesRef.current.filter(Boolean) as HTMLSpanElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lines.forEach((line, i) => {
            line.style.transition = `transform 1s cubic-bezier(0.16,1,0.3,1) ${i * 120}ms, opacity 0.5s ease ${i * 120}ms`;
            line.style.transform = "translateY(0)";
            line.style.opacity = "1";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    lines.forEach((line) => {
      line.style.transform = "translateY(100%)";
      line.style.opacity = "0";
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-8 md:px-12 lg:px-16 py-28 md:py-44 border-t border-[rgba(240,237,232,0.08)]"
    >
      <div className="max-w-6xl">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 md:mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            05
          </span>
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            Contact
          </span>
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <span
            ref={(el) => { linesRef.current[0] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light text-[clamp(56px,9vw,140px)] text-[#f0ede8] leading-[0.9] tracking-[-0.02em]"
          >
            Let&#39;s build
          </span>
        </div>
        <div className="overflow-hidden mb-2">
          <span
            ref={(el) => { linesRef.current[1] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light italic text-[clamp(56px,9vw,140px)] text-[rgba(240,237,232,0.45)] leading-[0.9] tracking-[-0.02em]"
          >
            something
          </span>
        </div>
        <div className="overflow-hidden mb-2">
          <span
            ref={(el) => { linesRef.current[2] = el; }}
            className="block font-[family-name:var(--font-cormorant)] font-light text-[clamp(56px,9vw,140px)] text-[#f0ede8] leading-[0.9] tracking-[-0.02em]"
          >
            uncommon.
          </span>
        </div>

        {/* CTA row */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <div className="overflow-hidden">
            <span
              ref={(el) => { linesRef.current[3] = el; }}
              style={{ display: "block" }}
            >
              <Link
                href="mailto:hello@locomotive.ca"
                className="group inline-flex items-center gap-4 font-[family-name:var(--font-inter)] text-[13px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.55)] hover:text-[#f0ede8] transition-colors"
              >
                hello@locomotive.ca
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-16" />
              </Link>
            </span>
          </div>

          <div className="overflow-hidden">
            <span
              ref={(el) => { linesRef.current[4] = el; }}
              style={{ display: "block" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.2em] border border-[rgba(240,237,232,0.25)] px-8 py-4 text-[#f0ede8] hover:bg-[#f0ede8] hover:text-[#0a0a0a] hover:border-[#f0ede8] transition-all duration-400 group"
              >
                Start a project
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
