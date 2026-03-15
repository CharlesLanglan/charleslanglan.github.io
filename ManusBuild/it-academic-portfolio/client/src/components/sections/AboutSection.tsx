/* ============================================================
   SECTION: About
   Design: Publication-style layout with wide left label margin
   Two-column: label column + content column
   ============================================================ */

import { useEffect, useRef } from "react";
import { BookOpen, Award, Users, Code2 } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "12+", label: "Courses Completed" },
  { icon: Award, value: "5", label: "Certifications" },
  { icon: Code2, value: "20+", label: "Projects Built" },
  { icon: Users, value: "3", label: "Research Papers" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const targets = sectionRef.current?.querySelectorAll(".fade-up") ?? [];
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "oklch(1 0 0)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Publication-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-16">
          {/* Left label column */}
          <div className="fade-up">
            <span
              className="section-label"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              01 / About
            </span>
          </div>

          {/* Right content column */}
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <h2
              className="section-heading text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bridging Theory
              <br />
              <em>and Practice</em>
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed max-w-2xl"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.40 0.04 258)",
              }}
            >
              <p>
                I am a third-year Computer Science and Information Technology student at the
                University of Technology, with a strong academic record and a deep passion for
                building systems that matter. My academic journey has taken me through the
                foundations of algorithms, data structures, operating systems, and network
                architecture — and into applied domains like cybersecurity, machine learning,
                and cloud computing.
              </p>
              <p>
                Beyond coursework, I actively engage in research, open-source contributions,
                and collaborative projects. I believe that the most meaningful technological
                work happens at the intersection of rigorous academic thinking and hands-on
                engineering. My portfolio reflects this philosophy — every project here began
                with a question worth asking.
              </p>
              <p>
                When I am not coding or studying, I contribute to the university's IT Society,
                mentor junior students, and explore the ethical dimensions of emerging
                technologies through reading and writing.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <hr className="ruled-divider mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="fade-up paper-card p-6 flex flex-col gap-3"
              style={{ transitionDelay: `${i * 0.1}s`, borderRadius: "3px" }}
            >
              <stat.icon
                size={24}
                style={{ color: "oklch(0.55 0.14 42)" }}
              />
              <div>
                <p
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "oklch(0.22 0.07 258)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mt-1"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "oklch(0.60 0.01 60)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
