"use client";

import { useEffect, useRef } from "react";

const services = [
  { name: "Digital Strategy", desc: "Research, positioning & roadmapping" },
  { name: "UX Design", desc: "User experience & information architecture" },
  { name: "Visual Design", desc: "Brand identity & art direction" },
  { name: "Web Development", desc: "Custom builds, no shortcuts" },
  { name: "E-commerce", desc: "Shopify, custom storefronts" },
  { name: "Campaigns", desc: "Digital activations & microsites" },
];

const marqueeItems = [
  "Digital Strategy",
  "UX Design",
  "Visual Design",
  "Web Development",
  "E-Commerce",
  "Campaigns",
  "Art Direction",
  "Brand Identity",
  "Photography",
  "Motion Design",
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rows = rowsRef.current.filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rows.forEach((row, i) => {
            row.style.transition = `opacity 0.7s ease ${i * 60}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`;
            row.style.opacity = "1";
            row.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    rows.forEach((row) => {
      row.style.opacity = "0";
      row.style.transform = "translateY(20px)";
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-[rgba(240,237,232,0.08)]"
    >
      {/* Marquee tape */}
      <div className="overflow-hidden py-5 border-b border-[rgba(240,237,232,0.08)] bg-[rgba(240,237,232,0.03)]">
        <div className="flex animate-marquee-left whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-cormorant)] text-[15px] italic font-light text-[rgba(240,237,232,0.4)] px-8 flex-shrink-0"
            >
              {item}
              <span className="mx-4 text-[rgba(240,237,232,0.2)]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Services list */}
      <div className="px-8 md:px-12 lg:px-16 py-24 md:py-36">
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            03
          </span>
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            What we do
          </span>
        </div>

        <div className="max-w-4xl">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { rowsRef.current[i] = el; }}
              className="group flex items-center justify-between py-6 border-b border-[rgba(240,237,232,0.08)] hover:border-[rgba(240,237,232,0.2)] transition-colors cursor-default"
            >
              <div className="flex items-baseline gap-6">
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[rgba(240,237,232,0.25)] tabular-nums w-6">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[clamp(24px,3.5vw,48px)] font-light text-[#f0ede8] group-hover:italic transition-all duration-300 leading-none">
                  {service.name}
                </h3>
              </div>
              <p className="hidden md:block font-[family-name:var(--font-inter)] text-[12px] text-[rgba(240,237,232,0.3)] group-hover:text-[rgba(240,237,232,0.55)] transition-colors tracking-wide max-w-[200px] text-right">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee reversed */}
      <div className="overflow-hidden py-5 border-t border-[rgba(240,237,232,0.08)] bg-[rgba(240,237,232,0.03)]">
        <div className="flex animate-marquee-right whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-[family-name:var(--font-cormorant)] text-[15px] italic font-light text-[rgba(240,237,232,0.4)] px-8 flex-shrink-0"
            >
              {item}
              <span className="mx-4 text-[rgba(240,237,232,0.2)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
