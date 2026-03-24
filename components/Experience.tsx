"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    type: "work",
    role: "Intern — Cost & Project Support",
    company: "Tower Cost Associates",
    period: "June 2025 – December 2025",
    location: "Nigeria",
    bullets: [
      "Assisted in managing project documentation and cost analyses for active construction projects.",
      "Took detailed minutes of meetings, ensuring accurate record-keeping for all stakeholders.",
      "Supported project managers in coordinating site activities and reporting on progress milestones.",
      "Participated in construction site visits to monitor material usage and track project milestones.",
    ],
  },
  {
    type: "work",
    role: "Secretary",
    company: "Al Gasali International School",
    period: "January 2022 – November 2022",
    location: "Oworoshoki, Lagos",
    bullets: [
      "Collaborated with head of staff to successfully compose the school anthem.",
      "Managed administrative responsibilities for student welfare including maintenance issues and incident reports.",
      "Ensured data accuracy, confidentiality, and maintained up-to-date student records.",
      "Handled confidential information and received outstanding feedback ratings from leadership.",
    ],
  },
  {
    type: "work",
    role: "Secretary",
    company: "Royal Kings Group",
    period: "September 2019 – December 2021",
    location: "Gbagada, Lagos",
    bullets: [
      "Prepared correspondence and documents for executive team and educational board.",
      "Answered phone calls, responded to emails, and managed front-desk operations.",
      "Coordinated schedules and appointments of meetings with the educational board.",
      "Assisted with student enrollment and provided guidance on school policies.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Quantity Surveying",
    institution: "Federal University of Technology, Owerri (FUTO)",
    period: "January 2023 – Present",
    note: "Currently pursuing — in view",
  },
  {
    degree: "Virtual Assistant Certification",
    institution: "ALX Africa",
    period: "Completed October 2024",
    note: "8-week programme in Virtual Assistance Skills in the Digital Age",
  },
];

const volunteer = {
  role: "Course Representative & Departmental Vice President",
  org: "Dept. of Quantity Surveying, FUTO",
  period: "July 2024 – Present",
  bullets: [
    "Serve as primary liaison between students and faculty, communicating academic concerns and policy updates to 200+ students.",
    "Organised orientation programme for 100L students covering course registration, academic expectations, and departmental policies.",
    "Coordinated peer tutorials and study groups, improving academic performance across the department.",
    "Managed class schedules, assignment deadlines, and exam timetables — ensuring all students had accurate, up-to-date information.",
    "Advocated for student welfare by escalating grievances to departmental management and resolving conflicts diplomatically.",
    "Maintained detailed records of departmental activities, minutes of student-faculty meetings, and attendance registers.",
  ],
};

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-28 relative bg-deep/40">
      <div className="orb w-72 h-72 bg-amethyst/8 left-10 bottom-20" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <p
            className="text-amethyst text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            02 / Experience
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-ghost"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Where I&apos;ve{" "}
            <span className="italic text-lavender">Made an Impact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} relative pl-8`}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amethyst/40 via-grape/20 to-transparent" />
                <div className="timeline-item">
                  {/* Card */}
                  <div className="bg-plum/20 border border-violet/15 rounded-xl p-6 card-hover">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3
                          className="text-mist font-medium text-lg"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-lavender/80 text-sm"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className="inline-block text-xs text-amethyst/70 tracking-wide"
                          style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                          {exp.period}
                        </span>
                        <p
                          className="text-xs text-grape/60 mt-0.5"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-mist/55 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-amethyst/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Volunteer */}
            <div className="reveal reveal-delay-4 relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-grape/30 to-transparent" />
              <div className="timeline-item">
                <div className="bg-plum/10 border border-grape/20 rounded-xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span
                        className="inline-block text-xs text-grape/60 tracking-widest uppercase mb-1"
                        style={{ fontFamily: "var(--font-space-mono)" }}
                      >
                        Volunteer
                      </span>
                      <h3
                        className="text-mist/80 font-medium text-base"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {volunteer.role}
                      </h3>
                      <p
                        className="text-grape/70 text-sm"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {volunteer.org}
                      </p>
                    </div>
                    <span
                      className="text-xs text-grape/50 tracking-wide"
                      style={{ fontFamily: "var(--font-space-mono)" }}
                    >
                      {volunteer.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {volunteer.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-mist/45 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-grape/50" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="reveal">
              <h3
                className="text-mist/50 text-xs tracking-[0.25em] uppercase mb-6"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                Education & Certs
              </h3>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`reveal reveal-delay-${i + 1} bg-plum/25 border border-violet/15 rounded-xl p-5`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="mt-1 w-7 h-7 rounded-full bg-grape/30 border border-amethyst/20 flex items-center justify-center shrink-0">
                        <svg width="12" height="12" fill="none" stroke="#a855f7" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                      </div>
                      <div>
                        <h4
                          className="text-mist text-sm font-medium"
                          style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem" }}
                        >
                          {edu.degree}
                        </h4>
                        <p
                          className="text-lavender/70 text-xs mt-0.5"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-xs text-amethyst/60 tracking-wide"
                      style={{ fontFamily: "var(--font-space-mono)" }}
                    >
                      {edu.period}
                    </p>
                    <p
                      className="text-xs text-mist/40 mt-1.5 leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {edu.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}