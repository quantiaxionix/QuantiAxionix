// src/components/JobOpenings.jsx
import React from "react";
import { useTheme } from "../../ThemeProvider";

/**
 * JobOpenings.jsx
 *
 * - Simplified "Job opening" / "Careers" section for QuantiAxionix
 * - Full-width solid grey line at the very top of the section
 * - "Get in touch" CTA uses theme-aware text and a rectangular (non-rounded) outline button
 * - Uses Playfair Display (add to public/index.html if not already)
 *
 * Usage:
 *   import JobOpenings from "./components/JobOpenings";
 *   <JobOpenings />
 */

export default function JobOpenings({
  accentColor = "#0097b2",
  contactHref = "/contact", // internal contact page anchor
  lineColor = "#374151", // top line color
}) {
  const { colors } = useTheme();
  
  return (
    <section
      id="careers"
      className="w-full py-20 px-6 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif", 
        position: "relative",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
      aria-labelledby="careers-heading"
    >
      {/* Full-width solid grey line at the very top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full"
        style={{ height: 2, background: colors.border.primary }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT: Heading */}
        <div className="order-1 md:order-1">
          <p
            className="uppercase tracking-widest mb-3 text-sm md:text-base"
            style={{ color: accentColor }}
          >
            Job opening
          </p>

          <h2
            id="careers-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: colors.text.primary }}
          >
            <span className="block">Build the future</span>
            <span className="block">of software with us</span>
          </h2>

          <p 
            className="mt-6 text-sm md:text-base leading-relaxed max-w-lg"
            style={{ color: colors.text.secondary }}
          >
            QuantiAxionix is a small, nimble software house building SaaS platforms and full-stack
            applications that automate workflows and accelerate product delivery. We ship pragmatic AI-infused
            products, care deeply about craftsmanship, and value teammates who are curious and outcome-driven.
          </p>
        </div>

        {/* RIGHT: Status + single CTA */}
        <div className="order-2 md:order-2 flex flex-col items-start md:items-end">
          <div 
            className="w-full md:w-[460px] p-6 rounded-xl transition-colors duration-300"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.secondary,
              border: `1px solid ${colors.border.secondary}`,
            }}
          >
            <p 
              className="text-lg md:text-xl font-semibold mb-2"
              style={{ color: colors.text.primary }}
            >
              There are currently no open positions listed.
            </p>

            <p 
              className="text-sm md:text-sm leading-relaxed mb-6"
              style={{ color: colors.text.secondary }}
            >
              But… we're always on the lookout for great talent. If you think you'd be a great fit for QuantiAxionix —
              whether engineering, product, design, or operations — please reach out.
            </p>

            <div>
              <a
                href={contactHref}
                aria-label="Get in touch"
                className="inline-flex items-center justify-center px-5 py-2 font-medium border border-[#0097b2] bg-transparent hover:bg-[#0097b2] transition cursor-pointer"
                style={{ 
                  borderRadius: 0,
                  color: colors.text.primary,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = colors.bg.primary;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = colors.text.primary;
                }}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* removed social icons and email button */}
        </div>
      </div>
    </section>
  );
}
