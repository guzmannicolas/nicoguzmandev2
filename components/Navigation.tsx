"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-8 md:px-12 lg:px-16 h-[72px] border-b border-[rgba(240,237,232,0.08)]">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.25em] text-[#f0ede8] hover:opacity-60 transition-opacity duration-300"
        >
          Locomotive
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Work", "Agency", "Careers"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.55)] hover:text-[#f0ede8] transition-colors duration-300"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.18em] border border-[rgba(240,237,232,0.25)] px-5 py-2.5 text-[#f0ede8] hover:bg-[#f0ede8] hover:text-[#0a0a0a] transition-all duration-300"
          >
            Let&#39;s talk
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-[family-name:var(--font-inter)] uppercase tracking-[0.15em]">
            <span className="text-[#f0ede8]">En</span>
            <span className="text-[rgba(240,237,232,0.3)]">/</span>
            <span className="text-[rgba(240,237,232,0.4)] hover:text-[#f0ede8] transition-colors cursor-pointer">
              Fr
            </span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#f0ede8] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0a0a0a] border-b border-[rgba(240,237,232,0.08)] transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 py-8 gap-6">
          {["Work", "Agency", "Careers"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[13px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.6)] hover:text-[#f0ede8] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[13px] uppercase tracking-[0.18em] text-[#f0ede8]"
            onClick={() => setMenuOpen(false)}
          >
            Let&#39;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
