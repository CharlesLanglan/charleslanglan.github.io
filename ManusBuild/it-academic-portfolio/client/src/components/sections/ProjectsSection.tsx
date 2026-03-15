/* ============================================================
   SECTION: Projects
   Design: Navy background with white project cards
   Masonry-inspired grid with citation-style numbering
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Tag } from "lucide-react";

const PROJECTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663441622400/bic78LwKADYYp5gHVEGFdX/projects-bg-PVgRqr9kq3JUs7Epmiwhta.webp";

const allProjects = [
  {
    id: "01",
    title: "Adaptive Intrusion Detection System",
    category: "Security / ML",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Wireshark"],
    description:
      "A machine learning-based network intrusion detection system that adapts to evolving threat patterns using ensemble methods. Achieved 97.3% detection accuracy on the NSL-KDD dataset with a false-positive rate below 1.2%.",
    year: "2024",
    type: "Research",
    featured: true,
  },
  {
    id: "02",
    title: "Distributed Task Scheduler",
    category: "Systems / Cloud",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    description:
      "A fault-tolerant distributed task scheduling system built on a leader-election model. Handles up to 10,000 concurrent tasks with automatic failover and horizontal scaling.",
    year: "2023",
    type: "Engineering",
    featured: true,
  },
  {
    id: "03",
    title: "Academic Resource Management Portal",
    category: "Full-Stack Web",
    tags: ["React", "Node.js", "PostgreSQL", "REST API"],
    description:
      "A full-stack web application for managing academic resources, course materials, and student submissions. Deployed for use by 500+ students at the university IT department.",
    year: "2023",
    type: "Engineering",
    featured: true,
  },
  {
    id: "04",
    title: "Network Traffic Analyzer",
    category: "Networking",
    tags: ["C", "libpcap", "Linux", "Bash"],
    description:
      "A low-level packet capture and analysis tool written in C, capable of parsing TCP/IP headers, detecting anomalies, and generating traffic reports in real time.",
    year: "2023",
    type: "Systems",
    featured: false,
  },
  {
    id: "05",
    title: "Blockchain-Based Certificate Verification",
    category: "Blockchain",
    tags: ["Solidity", "Ethereum", "Web3.js", "React"],
    description:
      "A decentralized application for issuing and verifying academic certificates on the Ethereum blockchain. Eliminates certificate forgery through immutable on-chain records.",
    year: "2024",
    type: "Research",
    featured: false,
  },
  {
    id: "06",
    title: "Smart Campus IoT Dashboard",
    category: "IoT / Data",
    tags: ["Python", "MQTT", "InfluxDB", "Grafana"],
    description:
      "An IoT monitoring dashboard for campus energy consumption, integrating sensor data from 50+ devices. Reduced energy waste by 18% through automated alerts and analytics.",
    year: "2022",
    type: "Engineering",
    featured: false,
  },
];

const filters = ["All", "Research", "Engineering", "Systems"];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.type === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.06 }
    );
    const targets = sectionRef.current?.querySelectorAll(".fade-up") ?? [];
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Re-observe when filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.06 }
      );
      const targets = sectionRef.current?.querySelectorAll(".fade-up:not(.visible)") ?? [];
      targets.forEach((t) => observer.observe(t));
      return () => observer.disconnect();
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(0.22 0.07 258)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${PROJECTS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-12">
          <div className="fade-up">
            <span
              className="section-label"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.55 0.14 42)",
              }}
            >
              03 / Projects
            </span>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <h2
              className="text-4xl lg:text-5xl font-bold border-l-4 pl-4 mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.975 0.008 80)",
                borderColor: "oklch(0.55 0.14 42)",
              }}
            >
              Selected
              <br />
              <em>Work</em>
            </h2>
            <p
              className="text-base max-w-lg"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.75 0.02 258)",
              }}
            >
              A curated selection of academic projects, research work, and engineering
              experiments spanning security, systems, and full-stack development.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-10">
          <div />
          <div className="fade-up flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-1.5 text-sm font-medium border transition-all duration-200"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  borderRadius: "2px",
                  background: activeFilter === f ? "oklch(0.55 0.14 42)" : "transparent",
                  borderColor: activeFilter === f ? "oklch(0.55 0.14 42)" : "oklch(0.40 0.05 258)",
                  color: activeFilter === f ? "oklch(1 0 0)" : "oklch(0.75 0.02 258)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="fade-up group relative flex flex-col"
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  background: "oklch(1 0 0)",
                  borderRadius: "3px",
                  border: "1px solid oklch(0.88 0.015 80)",
                  boxShadow: "0 2px 12px oklch(0.10 0.05 258 / 0.3)",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px oklch(0.10 0.05 258 / 0.5)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px oklch(0.10 0.05 258 / 0.3)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {/* Card header */}
                <div
                  className="px-5 pt-5 pb-4 border-b"
                  style={{ borderColor: "oklch(0.94 0.012 80)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="text-4xl font-bold opacity-10"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "oklch(0.22 0.07 258)",
                      }}
                    >
                      {project.id}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          background: project.featured ? "oklch(0.55 0.14 42 / 0.1)" : "oklch(0.94 0.012 80)",
                          color: project.featured ? "oklch(0.55 0.14 42)" : "oklch(0.60 0.01 60)",
                          borderRadius: "2px",
                        }}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-bold leading-snug mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "oklch(0.22 0.07 258)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.55 0.14 42)",
                    }}
                  >
                    {project.category} · {project.year}
                  </p>
                </div>

                {/* Card body */}
                <div className="px-5 py-4 flex-1 flex flex-col gap-4">
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.45 0.04 258)",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div
                  className="px-5 py-3 border-t flex items-center gap-3"
                  style={{ borderColor: "oklch(0.94 0.012 80)" }}
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.40 0.04 258)",
                    }}
                  >
                    <Github size={13} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-60"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.40 0.04 258)",
                    }}
                  >
                    <ExternalLink size={13} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
