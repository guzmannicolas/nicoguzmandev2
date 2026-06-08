"use client";

import { useEffect, useRef } from "react";

const awards = [
  {
    org: "Awwwards",
    title: "Agency of the Year",
    count: "6×",
    years: "2018 – 2024",
  },
  {
    org: "CSSDA",
    title: "Agency of the Year",
    count: "3×",
    years: "2019 – 2022",
  },
  {
    org: "FWA",
    title: "Site of the Month",
    count: "12×",
    years: "2016 – 2024",
  },
  {
    org: "D&AD",
    title: "Wood Pencil",
    count: "2×",
    years: "2021 – 2023",
  },
];

export default function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            item.style.transition = `opacity 0.8s ease ${i * 100}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`;
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
    });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-8 md:px-12 lg:px-16 py-24 md:py-36 border-t border-[rgba(240,237,232,0.08)]"
    >
      <div className="flex items-center gap-4 mb-16 md:mb-20">
        <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
          04
        </span>
        <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
          Recognition
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[rgba(240,237,232,0.08)]">
        {awards.map((award, i) => (
          <div
            key={i}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="py-10 pr-8 border-b lg:border-b-0 lg:border-r border-[rgba(240,237,232,0.08)] last:border-0 group"
          >
            <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.3)] mb-4">
              {award.org}
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-[48px] md:text-[56px] font-light text-[#f0ede8] leading-none">
              {award.count}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[12px] text-[rgba(240,237,232,0.5)] mt-3">
              {award.title}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[11px] text-[rgba(240,237,232,0.25)] mt-1">
              {award.years}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
