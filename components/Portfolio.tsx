"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    caption: "On-site inspection during project internship",
    tag: "Field Work",
    position: "object-[center_20%]",
  },
  {
    src: "/images/gallery-2.jpg",
    caption: "Construction documentation at Tower Cost Associates",
    tag: "Project Support",
    position: "object-[center_15%]",
  },
  {
    src: "/images/gallery-cert.jpg",
    caption: "ALX Africa Virtual Assistant Certification — October 2024",
    tag: "Certification",
    position: "object-center",
  },
  {
    src: "/images/gallery-4.jpg",
    caption: "Site visit — material usage monitoring",
    tag: "Field Work",
    position: "object-center",
  },
];

const projects = [
  {
    title: "Building Cost Estimation",
    description:
      "Supported cost estimation and progress tracking on an ongoing building project during internship at Tower Cost Associates.",
    tags: ["QS Cloud", "Cost Analysis", "Documentation"],
  },
  {
    title: "VA Scheduling System",
    description:
      "Created and maintained comprehensive scheduling templates for virtual teams and clients, optimizing workflow across time zones.",
    tags: ["Calendar Mgmt", "Excel", "Remote Work"],
  },
  {
    title: "Client Travel Itineraries",
    description:
      "Designed detailed travel itineraries and managed client calendars, coordinating logistics for executive-level clients.",
    tags: ["Travel Planning", "Client Relations", "Admin"],
  },
];

export default function Portfolio() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-28 relative bg-deep/50">
      <div className="orb w-80 h-80 bg-grape/10 -left-20 top-1/3" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p
            className="text-amethyst text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            04 / Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-ghost"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Projects &{" "}
            <span className="italic text-lavender">Gallery</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-plum/20 border border-violet/15 rounded-xl p-6 card-hover`}
            >
              <div className="mb-4">
                <div className="w-10 h-0.5 bg-amethyst mb-4" />
                <h3
                  className="text-mist text-xl font-medium mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-mist/55 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-violet/10">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="reveal mb-6">
          <p
            className="text-grape/60 text-xs tracking-[0.25em] uppercase mb-8"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Photo Gallery
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} gallery-item group`}>
              <div className="relative aspect-square bg-plum/30">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${item.position}`}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span
                    className="text-amethyst text-xs tracking-widest uppercase mb-1"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {item.tag}
                  </span>
                  <p
                    className="text-mist text-xs leading-snug"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.caption}
                  </p>
                </div>
                {/* Tag badge (visible by default) */}
                <div className="absolute top-3 left-3">
                  <span
                    className="bg-void/70 backdrop-blur-sm text-lavender/80 text-xs px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-space-mono)" }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-plum/10">
                <p
                  className="text-mist/50 text-xs leading-snug line-clamp-2"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}