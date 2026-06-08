"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(240,237,232,0.08)] px-8 md:px-12 lg:px-16">
      {/* Top row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12 gap-8 border-b border-[rgba(240,237,232,0.06)]">
        <Link
          href="/"
          className="font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase tracking-[0.25em] text-[#f0ede8] hover:opacity-60 transition-opacity"
        >
          Locomotive
        </Link>

        <nav className="flex flex-wrap gap-8">
          {[
            { label: "Work", href: "/work" },
            { label: "Agency", href: "/agency" },
            { label: "Careers", href: "/careers" },
            { label: "Let's talk", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-[11px] uppercase tracking-[0.18em] text-[rgba(240,237,232,0.45)] hover:text-[#f0ede8] transition-colors link-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {[
            { label: "Instagram", href: "https://instagram.com/locomotivemtl" },
            { label: "LinkedIn", href: "https://linkedin.com/company/locomotive-mtl" },
            { label: "X", href: "https://x.com/locomotivemtl" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-[rgba(240,237,232,0.35)] hover:text-[rgba(240,237,232,0.7)] transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-7 gap-4">
        <p className="font-[family-name:var(--font-inter)] text-[10px] text-[rgba(240,237,232,0.25)] tracking-wide">
          © {year} Locomotive. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="font-[family-name:var(--font-inter)] text-[10px] text-[rgba(240,237,232,0.25)] hover:text-[rgba(240,237,232,0.5)] transition-colors tracking-wide"
          >
            Privacy policy
          </Link>
          <Link
            href="/terms"
            className="font-[family-name:var(--font-inter)] text-[10px] text-[rgba(240,237,232,0.25)] hover:text-[rgba(240,237,232,0.5)] transition-colors tracking-wide"
          >
            Terms of use
          </Link>
          <div className="flex items-center gap-2 text-[10px] font-[family-name:var(--font-inter)]">
            <span className="text-[rgba(240,237,232,0.4)]">EN</span>
            <span className="text-[rgba(240,237,232,0.2)]">/</span>
            <span className="text-[rgba(240,237,232,0.25)] hover:text-[rgba(240,237,232,0.5)] transition-colors cursor-pointer">
              FR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
