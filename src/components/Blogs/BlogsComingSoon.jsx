// src/components/Blogs/BlogsComingSoon.jsx
import React from "react";
import { useTheme } from "../../ThemeProvider";

export default function BlogsComingSoon() {
  const { colors } = useTheme();

  return (
    <section
      className="min-h-screen flex items-center justify-center py-20 px-6 transition-colors duration-300"
      style={{
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          <span className="block" style={{ color: colors.text.primary }}>
            Our Blog is
          </span>
          <span className="block text-[#0097b2]">
            Coming Soon
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-8">
          <p 
            className="text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: colors.text.secondary }}
          >
            We're crafting insightful content about software development, AI automation, 
            SaaS architecture, and the future of intelligent systems.
          </p>

          <p 
            className="text-base md:text-lg"
            style={{ color: colors.text.muted }}
          >
            Stay tuned for deep dives into modern development practices, 
            case studies from our projects, and insights from the QuantiAxionix team.
          </p>
        </div>

        {/* Features list */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div 
            className="p-6 rounded-lg border transition-colors duration-300"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.secondary,
            }}
          >
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ color: colors.text.primary }}
            >
              Technical Insights
            </h3>
            <p 
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              Deep technical articles on SaaS architecture, AI integration, 
              and modern development practices.
            </p>
          </div>

          <div 
            className="p-6 rounded-lg border transition-colors duration-300"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.secondary,
            }}
          >
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ color: colors.text.primary }}
            >
              Case Studies
            </h3>
            <p 
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              Real-world examples of how we solve complex problems 
              and deliver measurable results for our clients.
            </p>
          </div>

          <div 
            className="p-6 rounded-lg border transition-colors duration-300"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.secondary,
            }}
          >
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ color: colors.text.primary }}
            >
              Industry Trends
            </h3>
            <p 
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              Our take on emerging technologies, AI developments, 
              and the future of software automation.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="p-8 rounded-xl border transition-colors duration-300"
          style={{
            backgroundColor: colors.bg.card,
            borderColor: colors.border.primary,
          }}
        >
          <h3 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: colors.text.primary }}
          >
            Want to be notified when we launch?
          </h3>
          
          <p 
            className="text-base mb-6"
            style={{ color: colors.text.secondary }}
          >
            Get updates on our latest articles, insights, and company news.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 font-medium border border-[#0097b2] bg-transparent hover:bg-[#0097b2] transition rounded-md"
              style={{ 
                color: colors.text.primary,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.bg.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = colors.text.primary;
              }}
            >
              Subscribe for Updates
            </a>

            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 font-medium transition"
              style={{ 
                color: colors.text.secondary,
              }}
              onMouseEnter={(e) => {
                e.target.style.color = colors.text.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = colors.text.secondary;
              }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}