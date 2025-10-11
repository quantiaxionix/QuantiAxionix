// src/components/OurStory.jsx
import React from "react";
import { useTheme } from "../../ThemeProvider";

/**
 * OurStory.jsx
 *
 * Layout:
 * - Two columns on md+: left and right.
 * - Each column is a flex column with three zones: top, middle (centered), bottom.
 * - On mobile columns stack and zones flow naturally.
 *
 * Props:
 * - accentColor (default #0097b2)
 *
 * Usage:
 *  <OurStory />
 */

export default function OurStory({ accentColor = "#0097b2" }) {
  const { colors } = useTheme();
  
  return (
    <section
      id="our-story"
      className="w-full py-16 md:py-24 px-6 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* LEFT column */}
        <div className="order-1 md:order-1 flex flex-col min-h-[420px]">
          {/* TOP */}
          <div className="flex-shrink-0">
            <p
              className="text-sm md:text-base uppercase tracking-widest mb-3"
              style={{ color: accentColor }}
            >
              Our story
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              From friction to fluent software
            </h2>

            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              We're Quanti Axionix — founded by four builders in 2024 to deliver quality software that removes
              repetitive work, stabilizes delivery, and helps teams focus on product.
            </p>
          </div>

          {/* MIDDLE (centered vertically) */}
          <div className="flex-1 flex items-center justify-center">
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-center max-w-lg"
              style={{ color: colors.text.primary }}
            >
              Despite widespread innovation, many teams still wrestle with brittle tooling and manual workflows —
              we build to fix that.
            </p>
          </div>

          {/* BOTTOM */}
          <div className="flex-shrink-0 mt-6">
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              Founded in 2024 by four makers and engineers, we combine hands-on engineering with product rigor. We
              build end-to-end SaaS and custom software infused with practical AI that automates real work — not
              complexity.
            </p>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="order-2 md:order-2 flex flex-col min-h-[420px]">
          {/* TOP */}
          <div className="flex-shrink-0">
            <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: accentColor }}>
              Problems we solve
            </h3>

            <ul 
              className="space-y-2 text-sm md:text-base mb-4"
              style={{ color: colors.text.secondary }}
            >
              <li>Manual, repetitive workflows that waste skilled time.</li>
              <li>Slow delivery caused by fragile integrations and ad-hoc scripts.</li>
              <li>Difficulty scaling reliably — testing, observability and deployment gaps.</li>
              <li>Poorly integrated AI experiments that add noise rather than automation.</li>
            </ul>
          </div>

          {/* MIDDLE (centered vertically) */}
          <div className="flex-1 flex items-center justify-center">
            <p 
              className="text-lg md:text-2xl font-semibold text-center max-w-lg"
              style={{ color: colors.text.primary }}
            >
              We design AI-first tooling and scalable SaaS to automate workflows, accelerate delivery, and drive
              measurable growth.
            </p>
          </div>

          {/* BOTTOM */}
          <div className="flex-shrink-0 mt-6">
            <div 
              className="p-5 rounded-xl border transition-colors duration-300"
              style={{
                backgroundColor: colors.bg.card,
                borderColor: colors.border.secondary,
              }}
            >
              <p 
                className="text-sm md:text-base mb-3"
                style={{ color: colors.text.primary }}
              >
                Our approach:
              </p>
              <ul 
                className="list-disc list-inside text-sm md:text-base space-y-2"
                style={{ color: colors.text.secondary }}
              >
                <li>Ship small, valuable increments that reduce risk.</li>
                <li>Embed automation where it produces measurable ROI.</li>
                <li>Design systems that are observable and maintainable.</li>
              </ul>

              <div className="mt-4">
                <a
                  href="/about"
                  className="inline-block px-5 py-2 rounded-md font-medium border transition"
                  style={{
                    borderColor: colors.border.primary,
                    color: colors.text.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.text.primary;
                    e.target.style.color = colors.bg.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = colors.text.primary;
                  }}
                >
                  Learn more about us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
