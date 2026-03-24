"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/90 backdrop-blur-md border-b border-violet/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="group flex items-center gap-3">
          <span
            className="font-display text-xl font-medium text-ghost tracking-wide group-hover:text-lavender transition-colors duration-300"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Precious Iwudike
          </span>
          <span className="text-grape text-xs font-mono tracking-widest uppercase hidden sm:block">
            / VA & PM
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link text-sm tracking-wide transition-colors duration-200 ${
                activeSection === item.href.replace("#", "")
                  ? "text-lavender active"
                  : "text-mist/60 hover:text-mist"
              }`}
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:iwudikeprecious@gmail.com"
            className="btn-primary text-xs py-2 px-5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-lavender transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-lavender transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-lavender transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-plum/95 backdrop-blur-md border-t border-violet/20 px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-mist/70 hover:text-lavender text-base tracking-wide transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:iwudikeprecious@gmail.com"
            className="btn-primary text-xs py-2.5 px-5 self-start mt-2"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
