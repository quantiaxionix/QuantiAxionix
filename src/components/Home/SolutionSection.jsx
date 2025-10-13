// src/components/Home/SolutionSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";

const solutionFeatures = [
  {
    icon: "🚀",
    title: "Accelerated Delivery",
    description: "Ship features 3x faster with automated CI/CD pipelines and intelligent testing"
  },
  {
    icon: "🔧", 
    title: "Modernized Architecture",
    description: "Transform legacy systems into scalable, cloud-native platforms"
  },
  {
    icon: "📊",
    title: "Data-Driven Insights", 
    description: "Make informed decisions with unified analytics and AI-powered recommendations"
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description: "Built-in compliance and security that scales with your business"
  }
];

const SolutionSection = () => {
  const { colors } = useTheme();
  
  return (
    <section
      id="solution"
      className="relative w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center mb-12 xs:mb-16 sm:mb-20 md:mb-24">
          
          {/* Left: Solution Heading */}
          <div className="space-y-6 xs:space-y-8">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p 
                className="text-xs xs:text-sm sm:text-base font-semibold uppercase tracking-widest"
                style={{ color: "#0097b2" }}
              >
                Our Solution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                <span 
                  className="block"
                  style={{ color: colors.text.primary }}
                >
                  A new era for
                </span>
                <span 
                  className="block mt-2 xs:mt-3"
                  style={{ color: "#0097b2" }}
                >
                  intelligent software
                </span>
              </h2>
            </motion.div>

          </div>

          {/* Right: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 xs:space-y-8"
          >
            
            <div className="space-y-4 xs:space-y-6">
              <p 
                className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed xs:leading-relaxed"
                style={{ color: colors.text.secondary }}
              >
                QuantiAxionix enables businesses to build resilient, scalable, and intelligent software
                platforms with AI-driven automation. Our solutions streamline complex workflows,
                accelerate product delivery, and provide actionable insights.
              </p>

              <p 
                className="text-sm xs:text-base leading-relaxed"
                style={{ color: colors.text.muted }}
              >
                By integrating cloud-native architectures, modular design, and advanced automation,
                we help startups and enterprises reduce technical debt and launch software that grows with their business.
              </p>
            </div>

            {/* Call to Action */}
            <div className="pt-4 xs:pt-6">
              <button
                className="inline-flex items-center px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 text-sm xs:text-base sm:text-lg font-medium border-2 bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
                style={{ 
                  borderColor: "#0097b2",
                  color: colors.text.primary,
                  borderRadius: 0
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = colors.bg.primary;
                  e.target.style.backgroundColor = "#0097b2";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = colors.text.primary;
                  e.target.style.backgroundColor = "transparent";
                }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Get Started Today</span>
                <svg 
                  className="ml-2 xs:ml-3 h-4 w-4 xs:h-5 xs:w-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

          </motion.div>
          
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12"
        >
          {solutionFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-4 xs:p-6 border transition-all duration-300 hover:shadow-lg"
                style={{ 
                  borderColor: colors.border.primary,
                  backgroundColor: colors.bg.card,
                  borderRadius: 0
                }}
              >
                <div className="space-y-3 xs:space-y-4">
                  
                  <div className="flex items-center gap-3">
                    <span className="text-2xl xs:text-3xl sm:text-4xl">
                      {feature.icon}
                    </span>
                    <h3 
                      className="text-lg xs:text-xl sm:text-2xl font-bold leading-tight"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        color: "#0097b2"
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="text-sm xs:text-base leading-relaxed"
                    style={{ color: colors.text.secondary }}
                  >
                    {feature.description}
                  </p>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-20 xs:w-28 sm:w-36 h-20 xs:h-28 sm:h-36 opacity-3" style={{ backgroundColor: "#0097b2", transform: "rotate(45deg)" }} />
      <div className="absolute bottom-1/3 right-0 w-24 xs:w-32 sm:w-48 h-24 xs:h-32 sm:h-48 opacity-5" style={{ backgroundColor: "#0097b2", borderRadius: "50%" }} />
    </section>
  );
};

export default SolutionSection;