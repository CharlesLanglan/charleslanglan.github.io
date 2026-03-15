/* ============================================================
   COMPONENT: Footer
   Design: Minimal, warm off-white background, ruled top border
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t"
      style={{
        background: "oklch(0.975 0.008 80)",
        borderColor: "oklch(0.88 0.015 80)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="font-bold text-sm"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "oklch(0.22 0.07 258)",
              }}
            >
              Alex Chen
            </span>
            <span
              className="text-xs"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.60 0.01 60)",
              }}
            >
              · IT Academic Portfolio
            </span>
          </div>
          <p
            className="text-xs"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "oklch(0.70 0.01 60)",
            }}
          >
            © {year} Alex Chen. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "oklch(0.75 0.01 60)",
            }}
          >
            B.Sc. CS &amp; IT · University of Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
