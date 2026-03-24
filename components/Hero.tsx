"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
      {/* Decorative orbs */}
      <div className="orb w-96 h-96 bg-grape/30 top-10 -left-32 animate-float" />
      <div
        className="orb w-64 h-64 bg-amethyst/20 bottom-20 right-10"
        style={{ animation: "float 8s ease-in-out infinite", animationDelay: "2s" }}
      />
      <div
        className="orb w-48 h-48 bg-violet/20 top-1/3 right-1/4"
        style={{ animation: "float 10s ease-in-out infinite", animationDelay: "1s" }}
      />

      {/* Vertical text decoration */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-grape to-transparent" />
        <span
          className="text-grape/60 text-xs tracking-[0.3em] uppercase"
          style={{
            writingMode: "vertical-rl",
            fontFamily: "var(--font-space-mono)",
          }}
        >
          portfolio 2024
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-grape via-transparent to-transparent" />
      </div>

      <div
        ref={heroRef}
        className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Text content */}
        <div className="order-2 md:order-1">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-grape/20 border border-amethyst/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-amethyst animate-pulse" />
            <span
              className="text-lilac text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Open to Remote Opportunities
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display leading-none mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl font-light text-ghost">
              Iwudike
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold text-lavender glow-text">
              Precious
            </span>
          </h1>

          {/* Subtitle with ornamental divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="w-8 h-px bg-amethyst" />
            <p
              className="text-lilac/80 text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Virtual Assistant · Project Manager
            </p>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-grape" />
            <p
              className="text-grape/80 text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Student Quantity Surveyor · Nigeria
            </p>
          </div>

          {/* Description */}
          <p
            className="text-mist/65 text-base leading-relaxed max-w-md mb-10"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Proactive and detail-oriented professional balancing academic excellence at 
            FUTO with real-world expertise in project coordination, construction 
            documentation, and administrative support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Let&apos;s Work Together
            </a>
            <a href="#portfolio" className="btn-outline">
              View Portfolio
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6 mt-10">
            <a
              href="https://linkedin.com/in/precious-iwudike"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-grape/70 hover:text-lavender transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:iwudikeprecious@gmail.com"
              className="flex items-center gap-2 text-grape/70 hover:text-lavender transition-colors duration-200 text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-2xl border border-amethyst/15 scale-105" />
            <div className="absolute inset-0 rounded-2xl border border-grape/10 scale-110" />

            {/* Photo container */}
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glow-violet border border-violet/30">
              <Image
                src="/images/hero-photo.jpg"
                alt="Iwudike Precious on-site in safety gear"
                fill
                className="object-cover object-[center_20%]"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute -left-8 bottom-12 bg-plum/90 backdrop-blur-sm border border-amethyst/20 rounded-xl px-4 py-3"
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              <p
                className="text-xs text-grape/70 tracking-widest uppercase mb-0.5"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                Experience
              </p>
              <p
                className="text-lavender font-semibold text-base"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                4+ Years
              </p>
            </div>

            <div
              className="absolute -right-6 top-12 bg-plum/90 backdrop-blur-sm border border-amethyst/20 rounded-xl px-4 py-3"
              style={{ animation: "float 9s ease-in-out infinite", animationDelay: "3s" }}
            >
              <p
                className="text-xs text-grape/70 tracking-widest uppercase mb-0.5"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                Certified
              </p>
              <p
                className="text-lavender font-semibold text-base"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                ALX Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span
          className="text-grape/50 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          Scroll
        </span>
        <svg width="16" height="16" fill="none" stroke="#4a1a7a" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}