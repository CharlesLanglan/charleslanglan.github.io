/* ============================================================
   SECTION: Experience
   Design: Warm off-white background, vertical timeline
   Academic publication style with role cards
   ============================================================ */

import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Research Assistant — Cybersecurity Lab",
    organization: "University of Technology",
    location: "San Francisco, CA",
    period: "Jan 2024 – Present",
    type: "Research",
    description:
      "Conducting research on machine learning applications in network intrusion detection under Prof. Sarah Lin. Responsible for dataset preprocessing, model training, and writing sections of a paper submitted to IEEE S&P 2024.",
    achievements: [
      "Co-authored a research paper on adaptive IDS using ensemble methods",
      "Built a reproducible ML pipeline reducing experiment setup time by 60%",
      "Presented findings at the university's annual security symposium",
    ],
  },
  {
    role: "IT Support & Systems Intern",
    organization: "TechBridge Solutions",
    location: "San Francisco, CA",
    period: "May 2023 – Aug 2023",
    type: "Internship",
    description:
      "Supported a team of 12 engineers in maintaining internal IT infrastructure for a 200-person company. Handled network configuration, server maintenance, and end-user support tickets.",
    achievements: [
      "Automated routine server health checks with Bash scripts, saving 5 hrs/week",
      "Migrated 3 legacy services to Docker containers with zero downtime",
      "Resolved 150+ support tickets with a 98% satisfaction rating",
    ],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    organization: "Self-Employed",
    location: "Remote",
    period: "Sep 2022 – Apr 2023",
    type: "Freelance",
    description:
      "Designed and built web applications for small businesses and academic departments. Delivered 4 projects on time and within budget, ranging from resource portals to data dashboards.",
    achievements: [
      "Built an academic resource portal used by 500+ students",
      "Developed a real-time inventory dashboard for a local retailer",
      "Maintained 100% on-time delivery across all client engagements",
    ],
  },
  {
    role: "Teaching Assistant — Introduction to Programming",
    organization: "City College of Technology",
    location: "Oakland, CA",
    period: "Jan 2022 – May 2022",
    type: "Academic",
    description:
      "Assisted the course instructor in delivering introductory Python programming to 80 students. Led weekly lab sessions, graded assignments, and held office hours.",
    achievements: [
      "Improved average lab assignment scores by 15% through targeted feedback",
      "Developed supplementary coding exercises adopted by the department",
      "Received 4.8/5.0 student satisfaction rating",
    ],
  },
];

const typeColors: Record<string, string> = {
  Research: "oklch(0.55 0.14 42)",
  Internship: "oklch(0.22 0.07 258)",
  Freelance: "oklch(0.45 0.10 258)",
  Academic: "oklch(0.50 0.08 42)",
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    const targets = sectionRef.current?.querySelectorAll(".fade-up") ?? [];
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.975 0.008 80)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-16">
          <div className="fade-up">
            <span className="section-label" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              05 / Experience
            </span>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <h2
              className="section-heading text-4xl lg:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Professional
              <br />
              <em>Experience</em>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className="fade-up paper-card p-6 lg:p-8"
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  borderRadius: "3px",
                  borderLeft: `4px solid ${typeColors[exp.type] || "oklch(0.88 0.015 80)"}`,
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={14} style={{ color: typeColors[exp.type] }} />
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{
                          color: typeColors[exp.type],
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "oklch(0.22 0.07 258)",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-base font-semibold"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "oklch(0.32 0.07 258)",
                      }}
                    >
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <div
                      className="flex items-center gap-1 text-sm"
                      style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                    <div
                      className="flex items-center gap-1 text-sm"
                      style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      <MapPin size={13} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "oklch(0.45 0.04 258)",
                  }}
                >
                  {exp.description}
                </p>

                <hr className="ruled-divider" style={{ margin: "0.75rem 0" }} />

                <ul className="space-y-1.5">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex items-start gap-2 text-sm"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "oklch(0.35 0.05 258)",
                      }}
                    >
                      <ChevronRight
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: typeColors[exp.type] }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
