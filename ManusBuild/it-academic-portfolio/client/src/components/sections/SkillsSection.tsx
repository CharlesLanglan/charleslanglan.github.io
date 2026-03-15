/* ============================================================
   SECTION: Skills
   Design: White background with skill bars and tech category grid
   Network visualization image as decorative element
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const SKILLS_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663441622400/bic78LwKADYYp5gHVEGFdX/skills-visual-YcfQTknbn4STzhmhYWNxFf.webp";

const coreSkills = [
  { name: "Python", level: 92, category: "Programming" },
  { name: "JavaScript / TypeScript", level: 88, category: "Programming" },
  { name: "Java", level: 80, category: "Programming" },
  { name: "C / C++", level: 72, category: "Programming" },
  { name: "Go", level: 65, category: "Programming" },
  { name: "Network Security", level: 85, category: "Security" },
  { name: "Linux Administration", level: 88, category: "Systems" },
  { name: "Cloud (AWS / GCP)", level: 78, category: "Cloud" },
  { name: "Machine Learning", level: 75, category: "AI/ML" },
  { name: "Database Systems (SQL/NoSQL)", level: 85, category: "Data" },
];

const techCategories = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "Go", "SQL", "Bash"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "FastAPI", "TensorFlow", "Scikit-learn", "Spring Boot"],
  },
  {
    title: "Infrastructure & Cloud",
    items: ["AWS", "Docker", "Kubernetes", "Linux", "Nginx", "Redis", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Security & Networking",
    items: ["Wireshark", "Nmap", "Metasploit", "Burp Suite", "Cisco IOS", "VPN", "Firewalls"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "GitHub Actions", "Jira", "Agile/Scrum", "CI/CD", "Unit Testing", "REST APIs"],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [animated, setAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span
          className="text-sm font-medium"
          style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.22 0.07 258)" }}
        >
          {name}
        </span>
        <span
          className="text-xs font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "oklch(0.55 0.14 42)" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "oklch(0.94 0.012 80)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${level}%` : "0%",
            background: "linear-gradient(90deg, oklch(0.22 0.07 258), oklch(0.55 0.14 42))",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "oklch(1 0 0)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-16">
          <div className="fade-up">
            <span className="section-label" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              04 / Skills
            </span>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <h2
              className="section-heading text-4xl lg:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Technical
              <br />
              <em>Competencies</em>
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Skill bars */}
            <div className="fade-up">
              <h3
                className="text-sm font-semibold tracking-widest uppercase mb-6"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "oklch(0.60 0.01 60)",
                }}
              >
                Proficiency Overview
              </h3>
              {coreSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 80}
                />
              ))}
            </div>

            {/* Visual + tech categories */}
            <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
              {/* Network visual */}
              <div
                className="mb-8 overflow-hidden"
                style={{
                  borderRadius: "3px",
                  border: "1px solid oklch(0.88 0.015 80)",
                  height: "200px",
                }}
              >
                <img
                  src={SKILLS_VISUAL}
                  alt="Skills network visualization"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tech categories */}
              <div className="space-y-5">
                {techCategories.map((cat) => (
                  <div key={cat.title}>
                    <h4
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "oklch(0.55 0.14 42)",
                      }}
                    >
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span key={item} className="tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>
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
