// src/components/Career/OurStory.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";

const OurStory = ({ accentColor = "#0097b2" }) => {
  const { colors } = useTheme();

  const problems = [
    "Manual, repetitive workflows that waste skilled time.",
    "Slow delivery caused by fragile integrations and ad-hoc scripts.",
    "Difficulty scaling reliably — testing, observability and deployment gaps.",
    "Poorly integrated AI experiments that add noise rather than automation."
  ];

  const approaches = [
    "Ship small, valuable increments that reduce risk.",
    "Embed automation where it produces measurable ROI.",
    "Design systems that are observable and maintainable."
  ];

  return (
    <section
      id="our-story"
      className="relative w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12"
          >
            
            {/* Section Header */}
            <div className="space-y-4 xs:space-y-6">
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xs xs:text-sm sm:text-base font-semibold uppercase tracking-widest"
                style={{ color: accentColor }}
              >
                Our Story
              </motion.p>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ color: colors.text.primary }}
              >
                From friction to fluent software
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg leading-relaxed"
                style={{ color: colors.text.secondary }}
              >
                We're QuantiAxionix — founded by four builders in 2024 to deliver quality software that removes
                repetitive work, stabilizes delivery, and helps teams focus on product.
              </motion.p>
              
            </div>

            {/* Central Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 flex items-center justify-center py-6 xs:py-8 sm:py-10"
            >
              <div 
                className="p-6 xs:p-8 sm:p-10 border-l-4 bg-opacity-50"
                style={{
                  borderColor: accentColor,
                  backgroundColor: colors.bg.card,
                }}
              >
                <p 
                  className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-center italic"
                  style={{ color: colors.text.primary }}
                >
                  "Despite widespread innovation, many teams still wrestle with brittle tooling and manual workflows — 
                  we build to fix that."
                </p>
              </div>
            </motion.div>

            {/* Foundation Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 xs:space-y-6"
            >
              
              <h3 
                className="text-lg xs:text-xl sm:text-2xl font-semibold"
                style={{ color: accentColor }}
              >
                Our Foundation
              </h3>
              
              <p 
                className="text-sm xs:text-base sm:text-lg leading-relaxed"
                style={{ color: colors.text.secondary }}
              >
                Founded in 2024 by four makers and engineers, we combine hands-on engineering with product rigor. We
                build end-to-end SaaS and custom software infused with practical AI that automates real work — not
                complexity.
              </p>
              
            </motion.div>
            
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12"
          >
            
            {/* Problems We Solve */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 xs:space-y-6"
            >
              
              <h3 
                className="text-lg xs:text-xl sm:text-2xl font-semibold"
                style={{ color: accentColor }}
              >
                Problems We Solve
              </h3>

              <ul className="space-y-3 xs:space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    <p 
                      className="text-sm xs:text-base leading-relaxed"
                      style={{ color: colors.text.secondary }}
                    >
                      {problem}
                    </p>
                  </motion.li>
                ))}
              </ul>
              
            </motion.div>

            {/* Our Solutions Quote */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex-1 flex items-center justify-center py-6 xs:py-8"
            >
              <div 
                className="p-6 xs:p-8 border-r-4"
                style={{ borderColor: accentColor }}
              >
                <p 
                  className="text-lg xs:text-xl sm:text-2xl font-semibold leading-tight text-center italic"
                  style={{ color: colors.text.primary }}
                >
                  We design AI-first tooling and scalable SaaS to automate workflows, accelerate delivery, and drive
                  measurable growth.
                </p>
              </div>
            </motion.div>

            {/* Our Approach Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 xs:space-y-6"
            >
              
              <div 
                className="p-6 xs:p-8 sm:p-10 border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: colors.bg.card,
                  borderColor: colors.border.secondary,
                  borderRadius: "2px"
                }}
              >
                
                <h3 
                  className="text-lg xs:text-xl sm:text-2xl font-semibold mb-4 xs:mb-6"
                  style={{ color: accentColor }}
                >
                  Our Approach
                </h3>
                
                <ul className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
                  {approaches.map((approach, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <svg 
                        className="w-4 h-4 mt-1 flex-shrink-0" 
                        fill="none" 
                        stroke={accentColor} 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p 
                        className="text-sm xs:text-base leading-relaxed"
                        style={{ color: colors.text.secondary }}
                      >
                        {approach}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="inline-flex items-center px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-medium border-2 bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
                    style={{
                      borderColor: accentColor,
                      color: colors.text.primary,
                      borderRadius: 0
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = accentColor;
                      e.target.style.color = colors.bg.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = colors.text.primary;
                    }}
                    onClick={() => {
                      const aboutSection = document.querySelector('#about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span>Learn More About Us</span>
                    <svg 
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </motion.div>
                
              </div>
              
            </motion.div>
            
          </motion.div>
          
        </div>
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-8 xs:w-12 sm:w-16 h-8 xs:h-12 sm:h-16 opacity-5" style={{ backgroundColor: accentColor, transform: "rotate(45deg)" }} />
      <div className="absolute bottom-1/4 right-1/3 w-12 xs:w-16 sm:w-20 h-12 xs:h-16 sm:h-20 opacity-3" style={{ backgroundColor: accentColor, borderRadius: "50%" }} />
      
    </section>
  );
};

export default OurStory;