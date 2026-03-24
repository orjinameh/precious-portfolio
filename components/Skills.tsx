"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Project Management",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    skills: [
      "Project Coordination & Scheduling",
      "Construction Measurement (QS Cloud)",
      "Cost Estimation & Analysis",
      "Site Visit & Progress Monitoring",
      "Risk Identification",
      "Milestone Tracking",
    ],
  },
  {
    category: "Virtual Assistance",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    skills: [
      "Calendar & Email Management",
      "Travel Itinerary Planning",
      "Meeting Minutes & Documentation",
      "Customer Service & Communication",
      "Workflow Optimization",
      "Zoom & Virtual Collaboration",
    ],
  },
  {
    category: "Administration",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    skills: [
      "Data Organization & Excel Reporting",
      "Microsoft Word & PowerPoint",
      "Confidential Records Management",
      "Correspondence Preparation",
      "Scheduling & Appointment Management",
      "Student Enrollment Support",
    ],
  },
  {
    category: "Class Rep & Leadership",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    skills: [
      "Act as a liaison between students and academic staff",
      "Assist in coordinating academic activities and schedules",
      "Communicate important updates and deadlines effectively",
      "Support classroom organization and student engagement",
      "Public Speaking & Representation",
    ],
  },
  {
    category: "Soft Skills",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    skills: [
      "Strategic Planning",
      "Organization & Prioritization",
      "Confidentiality & Discretion",
      "Attention to Detail",
      "Proactive Communication",
      "Team Collaboration",
    ],
  },
];

const tools = [
  "Microsoft Office Suite",
  "Google Workspace",
  "Zoom",
  "QS Cloud",
  "Trello / Asana",
  "Slack",
  "Canva",
  "Notion",
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="orb w-64 h-64 bg-grape/20 right-0 top-20" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p
            className="text-amethyst text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            03 / Skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-ghost"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Core{" "}
            <span className="italic text-lavender">Competencies</span>
          </h2>
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-plum/20 border border-violet/15 rounded-xl p-6 card-hover`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-grape/30 border border-amethyst/20 flex items-center justify-center text-lavender">
                  {group.icon}
                </div>
                <h3
                  className="text-mist/80 text-sm font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-mist/55 text-sm leading-snug"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-amethyst/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div className="reveal">
          <p
            className="text-grape/60 text-xs tracking-[0.25em] uppercase mb-5"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="skill-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}