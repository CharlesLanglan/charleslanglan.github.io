/* ============================================================
   SECTION: Education
   Design: Vertical timeline on warm off-white background
   Academic publication style with degree cards
   ============================================================ */

import { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

const education = [
  {
    degree: "B.Sc. Computer Science & Information Technology",
    institution: "University of Technology",
    location: "San Francisco, CA",
    period: "2022 – Present",
    gpa: "3.9 / 4.0",
    status: "In Progress",
    highlights: [
      "Dean's List — Fall 2022, Spring 2023, Fall 2023",
      "Thesis: Adaptive Intrusion Detection Using Machine Learning",
      "Relevant Coursework: Algorithms, Operating Systems, Network Security, Database Systems, Cloud Computing, Machine Learning",
    ],
  },
  {
    degree: "Associate of Science — Computer Information Systems",
    institution: "City College of Technology",
    location: "Oakland, CA",
    period: "2020 – 2022",
    gpa: "4.0 / 4.0",
    status: "Completed",
    highlights: [
      "Graduated with Highest Honors",
      "President, Computer Science Club (2021–2022)",
      "Relevant Coursework: Web Development, Database Design, Linux Administration, Networking Fundamentals",
    ],
  },
  {
    degree: "High School Diploma — STEM Track",
    institution: "Lincoln Technical High School",
    location: "Oakland, CA",
    period: "2016 – 2020",
    gpa: "3.8 / 4.0",
    status: "Completed",
    highlights: [
      "AP Computer Science A — Score: 5",
      "AP Statistics — Score: 5",
      "Valedictorian, Class of 2020",
    ],
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2023" },
  { name: "Google IT Support Professional", issuer: "Google / Coursera", year: "2022" },
  { name: "Cisco CCNA (In Progress)", issuer: "Cisco", year: "2024" },
  { name: "Python for Data Science", issuer: "IBM / Coursera", year: "2022" },
];

export default function EducationSection() {
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
      id="education"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.975 0.008 80)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-16">
          <div className="fade-up">
            <span className="section-label" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              02 / Education
            </span>
          </div>
          <div className="fade-up" style={{ transitionDelay: "0.1s" }}>
            <h2
              className="section-heading text-4xl lg:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Academic
              <br />
              <em>Background</em>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div /> {/* spacer */}
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "oklch(0.88 0.015 80)", left: "-2rem" }}
            />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className="fade-up paper-card p-6 lg:p-8 relative"
                  style={{ transitionDelay: `${i * 0.15}s`, borderRadius: "3px" }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute hidden lg:block w-3 h-3 rounded-full border-2"
                    style={{
                      left: "-2.375rem",
                      top: "2rem",
                      background: i === 0 ? "oklch(0.55 0.14 42)" : "oklch(1 0 0)",
                      borderColor: i === 0 ? "oklch(0.55 0.14 42)" : "oklch(0.88 0.015 80)",
                    }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={16} style={{ color: "oklch(0.55 0.14 42)" }} />
                        <span
                          className="text-xs font-semibold tracking-widest uppercase"
                          style={{
                            color: "oklch(0.55 0.14 42)",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "oklch(0.22 0.07 258)",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        className="text-base font-semibold"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.32 0.07 258)",
                        }}
                      >
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <div
                        className="flex items-center gap-1 text-sm"
                        style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <Calendar size={13} />
                        {edu.period}
                      </div>
                      <div
                        className="flex items-center gap-1 text-sm"
                        style={{ color: "oklch(0.60 0.01 60)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <MapPin size={13} />
                        {edu.location}
                      </div>
                      <div
                        className="flex items-center gap-1 text-sm font-semibold"
                        style={{ color: "oklch(0.22 0.07 258)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <Star size={13} style={{ color: "oklch(0.55 0.14 42)" }} />
                        GPA: {edu.gpa}
                      </div>
                    </div>
                  </div>

                  <hr className="ruled-divider" style={{ margin: "1rem 0" }} />

                  <ul className="space-y-1.5">
                    {edu.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.45 0.04 258)",
                        }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "oklch(0.55 0.14 42)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <hr className="ruled-divider mt-16 mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div className="fade-up">
            <span className="section-label" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Certifications
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="fade-up paper-card p-4"
                style={{ transitionDelay: `${i * 0.08}s`, borderRadius: "3px" }}
              >
                <p
                  className="text-sm font-semibold mb-1"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "oklch(0.22 0.07 258)",
                  }}
                >
                  {cert.name}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "oklch(0.60 0.01 60)",
                  }}
                >
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
