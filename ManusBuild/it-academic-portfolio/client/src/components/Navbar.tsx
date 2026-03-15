/* ============================================================
   COMPONENT: Navbar
   Design: Academic Precision — minimal top nav, navy background
   with sienna accent on active link, Playfair Display brand name
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[oklch(0.88_0.015_80)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <span
              className="font-display text-xl font-bold tracking-tight"
              style={{ color: "oklch(0.22 0.07 258)", fontFamily: "'Playfair Display', serif" }}
            >
              Alex Chen
            </span>
            <span
              className="hidden sm:block text-xs font-semibold tracking-widest uppercase"
              style={{ color: "oklch(0.55 0.14 42)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              / IT Portfolio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-sm ${
                    isActive
                      ? "text-[oklch(0.55_0.14_42)]"
                      : "text-[oklch(0.40_0.05_258)] hover:text-[oklch(0.22_0.07_258)]"
                  }`}
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ background: "oklch(0.55 0.14 42)" }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-sm"
            style={{ color: "oklch(0.22 0.07 258)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "oklch(1 0 0)",
            borderColor: "oklch(0.88 0.015 80)",
          }}
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium rounded-sm transition-colors"
                style={{
                  color: "oklch(0.22 0.07 258)",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
