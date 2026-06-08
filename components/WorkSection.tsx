"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Scout Motors",
    category: "Digital Experience",
    year: "2024",
    bg: "from-[#1a1410] via-[#2d1e0a] to-[#0f0d0b]",
    accent: "#c8832a",
    size: "large",
  },
  {
    id: 2,
    title: "Books of Design",
    category: "Brand & Digital",
    year: "2024",
    bg: "from-[#0d0f1a] via-[#111520] to-[#0a0b10]",
    accent: "#4a6fa5",
    size: "small",
  },
  {
    id: 3,
    title: "Structured",
    category: "Product Design",
    year: "2023",
    bg: "from-[#0f1510] via-[#151d12] to-[#0a0d0a]",
    accent: "#5a8a4a",
    size: "small",
  },
  {
    id: 4,
    title: "Moment Factory",
    category: "Web Development",
    year: "2024",
    bg: "from-[#1a0a1a] via-[#1e0d20] to-[#0d0a10]",
    accent: "#9a4ab5",
    size: "large",
  },
  {
    id: 5,
    title: "Tourisme Québec",
    category: "Campaign & Design",
    year: "2023",
    bg: "from-[#100a0a] via-[#1a1010] to-[#0a0808]",
    accent: "#b54a4a",
    size: "medium",
  },
  {
    id: 6,
    title: "Birks",
    category: "E-commerce",
    year: "2024",
    bg: "from-[#0f0f0f] via-[#1a1a18] to-[#0a0a0a]",
    accent: "#c8c5b8",
    size: "medium",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${
            index * 80
          }ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`;
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    observer.observe(card);

    return () => observer.disconnect();
  }, [index]);

  const isLarge = project.size === "large";

  return (
    <div
      ref={cardRef}
      className={`project-card group relative overflow-hidden ${
        isLarge ? "col-span-2 md:col-span-1" : ""
      }`}
    >
      <Link href={`/work/${project.title.toLowerCase().replace(/ /g, "-")}`} className="block">
        {/* Image container */}
        <div
          className={`relative overflow-hidden ${
            isLarge ? "aspect-[4/3]" : "aspect-[3/2]"
          }`}
        >
          <div
            className={`project-image absolute inset-0 bg-gradient-to-br ${project.bg}`}
          />
          {/* Decorative element */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            style={{ color: project.accent }}
          >
            <div
              className="w-32 h-32 rounded-full border"
              style={{ borderColor: project.accent }}
            />
          </div>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        </div>

        {/* Info */}
        <div className="mt-5 flex items-start justify-between">
          <div>
            <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] md:text-[26px] font-light text-[#f0ede8] group-hover:opacity-80 transition-opacity leading-tight">
              {project.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.15em] text-[rgba(240,237,232,0.4)] mt-1.5">
              {project.category}
            </p>
          </div>
          <span className="font-[family-name:var(--font-inter)] text-[11px] text-[rgba(240,237,232,0.3)] mt-1">
            {project.year}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const label = labelRef.current;
    if (!label) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          label.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)";
          label.style.opacity = "1";
          label.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    label.style.opacity = "0";
    label.style.transform = "translateY(24px)";
    observer.observe(label);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-8 md:px-12 lg:px-16 py-24 md:py-36"
    >
      {/* Section header */}
      <div
        ref={labelRef}
        className="flex items-center justify-between mb-16 md:mb-20 border-b border-[rgba(240,237,232,0.08)] pb-6"
      >
        <div className="flex items-center gap-4">
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            01
          </span>
          <span className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[rgba(240,237,232,0.35)]">
            Selected work
          </span>
        </div>
        <Link
          href="/work"
          className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.15em] text-[rgba(240,237,232,0.5)] hover:text-[#f0ede8] transition-colors link-underline"
        >
          View all
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
