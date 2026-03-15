/* ============================================================
   SECTION: Contact
   Design: Navy background, warm accent CTA
   Clean contact form + direct contact info
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, FileText } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.chen@university.edu",
    href: "mailto:alex.chen@university.edu",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexchen-it",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexchen",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = `w-full px-4 py-3 text-sm border outline-none transition-all duration-200`;
  const inputStyle = {
    fontFamily: "'Source Sans 3', sans-serif",
    background: "oklch(0.28 0.07 258 / 0.5)",
    borderColor: "oklch(0.40 0.05 258)",
    color: "oklch(0.90 0.005 80)",
    borderRadius: "3px",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.22 0.07 258)" }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 mb-16">
          <div className="fade-up">
            <span
              className="section-label"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.55 0.14 42)",
              }}
            >
              06 / Contact
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
              Get in
              <br />
              <em>Touch</em>
            </h2>
            <p
              className="text-base max-w-lg"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.75 0.02 258)",
              }}
            >
              Whether you have a research collaboration in mind, a project opportunity,
              or simply want to connect — I would love to hear from you.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
          <div />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="fade-up space-y-6">
              <h3
                className="text-sm font-semibold tracking-widest uppercase"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "oklch(0.55 0.14 42)",
                }}
              >
                Direct Contact
              </h3>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{
                        background: "oklch(0.30 0.07 258)",
                        borderRadius: "3px",
                      }}
                    >
                      <link.icon size={16} style={{ color: "oklch(0.55 0.14 42)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.60 0.02 258)",
                        }}
                      >
                        {link.label}
                      </p>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm font-medium transition-opacity hover:opacity-70"
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: "oklch(0.90 0.005 80)",
                          }}
                        >
                          {link.value}
                        </a>
                      ) : (
                        <p
                          className="text-sm font-medium"
                          style={{
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: "oklch(0.90 0.005 80)",
                          }}
                        >
                          {link.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <hr style={{ borderColor: "oklch(0.35 0.05 258)", margin: "1.5rem 0" }} />

              {/* Resume download */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold border transition-all duration-200 hover:bg-[oklch(0.30_0.07_258)]"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  borderColor: "oklch(0.55 0.14 42)",
                  color: "oklch(0.55 0.14 42)",
                  borderRadius: "3px",
                }}
              >
                <FileText size={15} />
                Download Resume / CV
              </a>
            </div>

            {/* Contact form */}
            <div className="fade-up" style={{ transitionDelay: "0.15s" }}>
              <h3
                className="text-sm font-semibold tracking-widest uppercase mb-6"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "oklch(0.55 0.14 42)",
                }}
              >
                Send a Message
              </h3>

              {submitted ? (
                <div
                  className="p-6 text-center"
                  style={{
                    background: "oklch(0.55 0.14 42 / 0.15)",
                    border: "1px solid oklch(0.55 0.14 42 / 0.4)",
                    borderRadius: "3px",
                  }}
                >
                  <p
                    className="text-lg font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "oklch(0.975 0.008 80)",
                    }}
                  >
                    Message Sent!
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.75 0.02 258)",
                    }}
                  >
                    Thank you for reaching out. I will get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.65 0.02 258)",
                        }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your name"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.65 0.02 258)",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your@email.com"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "oklch(0.65 0.02 258)",
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Research collaboration, project inquiry..."
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold tracking-widest uppercase mb-1.5"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "oklch(0.65 0.02 258)",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project or inquiry..."
                      className={inputClass}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      background: "oklch(0.55 0.14 42)",
                      color: "oklch(1 0 0)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      borderRadius: "3px",
                    }}
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
