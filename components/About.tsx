"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="orb w-80 h-80 bg-grape/15 -right-20 top-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p
            className="text-amethyst text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            01 / About
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-ghost"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The Person Behind{" "}
            <span className="italic text-lavender">the Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Image column */}
          <div className="md:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-violet/20">
                <Image
                  src="/images/about-photo.jpg"
                  alt="Iwudike Precious"
                  fill
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 768px) 120vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/60 to-transparent" />
              </div>
              {/* Education badge */}
              <div className="absolute -bottom-5 -right-4 bg-deep border border-amethyst/25 rounded-xl p-4 max-w-48">
                <p
                  className="text-xs text-grape/70 tracking-widest uppercase mb-1"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Currently Studying
                </p>
                <p
                  className="text-mist text-sm font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  B.Tech Quantity Surveying
                </p>
                <p
                  className="text-grape/60 text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  FUTO, Nigeria
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-3 space-y-6">
            <div className="reveal reveal-delay-2">
              <p
                className="text-mist/75 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                I&apos;m a proactive and detail-oriented{" "}
                <span className="text-lavender">Virtual Assistant</span>,{" "}
                <span className="text-lavender">Project Manager</span>, and{" "}
                <span className="text-lavender">Student Quantity Surveyor</span>{" "}
                with hands-on experience in project coordination, administrative
                support, and construction documentation.
              </p>
            </div>

            <div className="reveal reveal-delay-3">
              <p
                className="text-mist/60 leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                I balance my academic journey at the Federal University of
                Technology, Owerri with real-world experience gained from
                professional internships and assistant roles. My goal is to
                contribute to organizations that value precision, organization,
                and effective communication.
              </p>
            </div>

            <div className="reveal reveal-delay-4">
              <p
                className="text-mist/60 leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Whether managing complex schedules for remote teams, supporting
                cost estimation on construction sites, or handling sensitive
                documentation with discretion — I bring the same energy:
                thorough, reliable, and always one step ahead.
              </p>
            </div>

            {/* Quick facts */}
            <div className="reveal reveal-delay-4 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                { label: "Based In", value: "Nigeria" },
                { label: "Availability", value: "Remote & Hybrid" },
                { label: "Languages", value: "EN · YO · FR" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="bg-plum/30 border border-violet/20 rounded-lg p-4"
                >
                  <p
                    className="text-xs text-grape/60 tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {fact.label}
                  </p>
                  <p
                    className="text-mist text-sm font-medium"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}