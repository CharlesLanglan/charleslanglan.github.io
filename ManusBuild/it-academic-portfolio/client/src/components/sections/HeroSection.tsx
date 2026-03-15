/* ============================================================
   SECTION: Hero
   Design: Split layout — left typographic statement, right profile image
   Background: Warm off-white with subtle hero abstract overlay
   Typography: Playfair Display display, Source Sans 3 body
   ============================================================ */

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663441622400/bic78LwKADYYp5gHVEGFdX/hero-abstract-H6jaeZuYrhtxVMfjPeVhe3.webp";
const PROFILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663441622400/bic78LwKADYYp5gHVEGFdX/profile-placeholder-3h8YCdTbCEMgfoFRCFSD8W.webp";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.975 0.008 80)" }}
    >
      {/* Background image — right half overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.12,
        }}
      />

      {/* Decorative left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "oklch(0.55 0.14 42)" }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-24">
          {/* Left — Typographic statement */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span
                className="section-label"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                IT Academic Portfolio
              </span>
              <span
                className="h-px flex-1 max-w-16"
                style={{ background: "oklch(0.55 0.14 42)" }}
              />
            </div>

            {/* Main heading */}
            <div>
              <h1
                className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "oklch(0.22 0.07 258)",
                }}
              >
                Alex
                <br />
                <span style={{ color: "oklch(0.55 0.14 42)" }}>Chen</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className="text-xl font-medium"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.32 0.07 258)",
              }}
            >
              B.Sc. Computer Science &amp; Information Technology
            </p>

            {/* Bio excerpt */}
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.45 0.04 258)",
              }}
            >
              A passionate IT student and researcher with a focus on software engineering,
              network security, and data systems. Committed to bridging academic theory
              with real-world technological solutions.
            </p>

            {/* Ruled divider */}
            <hr className="ruled-divider" style={{ maxWidth: "320px" }} />

            {/* CTA + social links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                style={{
                  background: "oklch(0.22 0.07 258)",
                  color: "oklch(0.975 0.008 80)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  borderRadius: "3px",
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border transition-all duration-200 hover:bg-[oklch(0.94_0.012_80)]"
                style={{
                  borderColor: "oklch(0.22 0.07 258)",
                  color: "oklch(0.22 0.07 258)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  borderRadius: "3px",
                }}
              >
                Get in Touch
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{ color: "oklch(0.22 0.07 258)" }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-60"
                style={{ color: "oklch(0.22 0.07 258)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:alex.chen@university.edu"
                className="transition-opacity hover:opacity-60"
                style={{ color: "oklch(0.22 0.07 258)" }}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right — Profile image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border-2"
                style={{ borderColor: "oklch(0.55 0.14 42)", borderRadius: "3px", opacity: 0.3 }}
              />
              {/* Profile image */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "320px",
                  height: "420px",
                  borderRadius: "3px",
                  boxShadow: "0 20px 60px oklch(0.22 0.07 258 / 0.2)",
                }}
              >
                <img
                  src={PROFILE_IMG}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -right-6 px-5 py-4 shadow-lg"
                style={{
                  background: "oklch(0.22 0.07 258)",
                  borderRadius: "3px",
                  minWidth: "160px",
                }}
              >
                <p
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "oklch(0.975 0.008 80)",
                  }}
                >
                  3.9
                </p>
                <p
                  className="text-xs font-semibold tracking-widest uppercase mt-0.5"
                  style={{
                    color: "oklch(0.55 0.14 42)",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  GPA / 4.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "oklch(0.60 0.01 60)" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
