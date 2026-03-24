"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("iwudikeprecious@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-grape/20 left-1/2 -translate-x-1/2 -translate-y-1/4 top-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <div className="section-divider mx-auto mb-4" />
          <p
            className="text-amethyst text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            05 / Contact
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-ghost mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Let&apos;s{" "}
            <span className="italic text-lavender">Work Together</span>
          </h2>
          <p
            className="text-mist/55 text-base max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Whether you need a reliable Virtual Assistant, a project management
            partner, or construction documentation support — I&apos;d love to
            hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="reveal grid sm:grid-cols-3 gap-5 mb-12 max-w-3xl mx-auto">
          {/* Email */}
          <button
            onClick={copyEmail}
            className="bg-plum/20 border border-violet/15 rounded-xl p-6 card-hover text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-grape/30 border border-amethyst/20 flex items-center justify-center text-lavender mb-4">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p
              className="text-xs text-grape/60 tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Email
            </p>
            <p
              className="text-mist/80 text-sm group-hover:text-lavender transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {copied ? "Copied!" : "iwudikeprecious@gmail.com"}
            </p>
            <p
              className="text-grape/50 text-xs mt-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Click to copy
            </p>
          </button>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/precious-iwudike"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-plum/20 border border-violet/15 rounded-xl p-6 card-hover text-left group"
          >
            <div className="w-10 h-10 rounded-lg bg-grape/30 border border-amethyst/20 flex items-center justify-center text-lavender mb-4">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <p
              className="text-xs text-grape/60 tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              LinkedIn
            </p>
            <p
              className="text-mist/80 text-sm group-hover:text-lavender transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Precious Iwudike
            </p>
            <p
              className="text-grape/50 text-xs mt-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Connect with me
            </p>
          </a>

          {/* Location */}
          <div className="bg-plum/20 border border-violet/15 rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-grape/30 border border-amethyst/20 flex items-center justify-center text-lavender mb-4">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p
              className="text-xs text-grape/60 tracking-widest uppercase mb-1"
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              Location
            </p>
            <p
              className="text-mist/80 text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Nigeria
            </p>
            <p
              className="text-grape/50 text-xs mt-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Open to remote & hybrid
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="reveal max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-grape/40 to-violet/30 border border-amethyst/25 rounded-2xl p-10 text-center overflow-hidden">
            <div className="orb w-48 h-48 bg-amethyst/15 right-0 top-0" />
            <div className="relative z-10">
              <h3
                className="text-3xl md:text-4xl font-light text-ghost mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Ready to collaborate?
              </h3>
              <p
                className="text-mist/55 mb-7"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Let&apos;s discuss how I can support your project, your team, or your vision.
              </p>
              <a
                href="mailto:iwudikeprecious@gmail.com"
                className="btn-primary inline-flex"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send Me a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
