// src/components/Career/CareerHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";

const CareerHero = ({
  accentColor = "#0097b2",
  barColor = "#E5E7EB",
  eyebrow = "Build. Scale. Automate.",
  titleMain = "software &",
  titleSub = "SaaS products",
  descriptionLines = [
    "We design and engineer end-to-end software and SaaS products,",
    "infused with AI to automate workflows and accelerate delivery,",
    "driving measurable growth for our partners.",
  ],
}) => {
  const { colors } = useTheme();
  
  return (
    <section
      id="career"
      className="relative w-full min-h-screen overflow-hidden py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      
      {/* Animated SVG Background - Responsive */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full max-w-4xl max-h-4xl"
          viewBox="0 0 800 700"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradient Definitions */}
            <radialGradient id="dots" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.1" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0.05" />
            </radialGradient>
            
            <radialGradient id="dots2" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor={colors.text.primary} stopOpacity="0.03" />
              <stop offset="100%" stopColor={colors.text.primary} stopOpacity="0.01" />
            </radialGradient>

            {/* Clip Path for Top Half */}
            <clipPath id="topHalf">
              <rect x="0" y="0" width="800" height="350" />
            </clipPath>

            {/* Glow Filter */}
            <filter id="barGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Dash Pattern */}
            <style>
              {`
                .ring-dash {
                  fill: none;
                  stroke-width: 1.5;
                  stroke-dasharray: 8 4;
                  stroke-linecap: round;
                }
              `}
            </style>
          </defs>

          {/* Main Group - Centered */}
          <g transform="translate(400, 350)">
            
            {/* Outer Dotted Circles */}
            <g clipPath="url(#topHalf)">
              <motion.circle 
                r="260"
                fill="url(#dots)" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.circle 
                r="260"
                fill="url(#dots2)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.circle 
                r="240"
                className="ring-dash" 
                stroke={accentColor}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.circle 
                r="280"
                className="ring-dash" 
                stroke={colors.text.primary}
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </g>

            {/* Inner Dotted Circles */}
            <g clipPath="url(#topHalf)">
              <motion.circle 
                r="200"
                fill="url(#dots)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.circle 
                r="200"
                fill="url(#dots2)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <motion.circle 
                r="188"
                className="ring-dash" 
                stroke={accentColor}
                strokeOpacity="0.95"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
            </g>

            {/* Rotating Bars */}
            {[0, 1, 2].map((index) => (
              <motion.g
                key={index}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 6, 
                  delay: index * 0.9, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <g transform="translate(0, -250)">
                  <motion.g
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ 
                      duration: 6, 
                      delay: index * 0.9, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <rect
                      x="-4"
                      y="-48"
                      width="8"
                      height="48"
                      rx="3"
                      fill={barColor}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                      filter="url(#barGlow)"
                    />
                  </motion.g>
                </g>
              </motion.g>
            ))}
            
          </g>
        </motion.svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-6xl">
        
        <div className="min-h-screen flex items-center justify-center">
          
          <div className="text-center space-y-6 xs:space-y-8 sm:space-y-10">
            
            {/* Eyebrow */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide"
              style={{ color: colors.text.primary }}
            >
              {eyebrow}
            </motion.p>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-4xl space-y-2 xs:space-y-3 sm:space-y-4"
            >
              <span 
                className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ color: colors.text.primary }}
              >
                {titleMain}
              </span>
              
              <span 
                className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ color: accentColor }}
              >
                {titleSub}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto max-w-3xl space-y-2 xs:space-y-3"
            >
              {descriptionLines.map((line, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed"
                  style={{ color: colors.text.secondary }}
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="pt-6 xs:pt-8 sm:pt-10"
            >
              <button
                className="inline-flex items-center px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 text-sm xs:text-base sm:text-lg font-medium border-2 bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
                style={{ 
                  borderColor: accentColor,
                  color: colors.text.primary,
                  borderRadius: 0
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = colors.bg.primary;
                  e.target.style.backgroundColor = accentColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = colors.text.primary;
                  e.target.style.backgroundColor = "transparent";
                }}
                onClick={() => {
                  const jobsSection = document.querySelector('#jobs');
                  if (jobsSection) {
                    jobsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Explore Opportunities</span>
                <svg 
                  className="ml-2 xs:ml-3 h-4 w-4 xs:h-5 xs:w-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

          </div>
          
        </div>
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-12 xs:w-16 sm:w-20 h-12 xs:h-16 sm:h-20 opacity-10" style={{ backgroundColor: accentColor, transform: "rotate(45deg)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 opacity-5" style={{ backgroundColor: accentColor, borderRadius: "50%" }} />
      
    </section>
  );
};

export default CareerHero;