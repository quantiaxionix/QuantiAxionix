// src/components/Career/OurVision.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";
import logo from "../../assets/logo.png";

const OurVision = ({
  accentColor = "#0097b2",
  eyebrow = "Our Vision",
  headlineLine1 = "Automate outcomes,",
  headlineLine2 = "not just tasks",
  descriptionLines = [
    "QuantiAxionix builds SaaS and full-stack products that remove operational friction and deliver measurable impact.",
    "We design software that automates decisions and scales teams — so product teams ship faster and operate cleaner.",
  ],
}) => {
  const { colors } = useTheme();
  
  return (
    <section
      id="our-vision"
      className="relative w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
      aria-labelledby="our-vision-heading"
    >
      
      {/* Top Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-0.5 xs:h-1 origin-left"
        style={{ backgroundColor: accentColor }}
      />

      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-start mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          
          {/* Left: Vision Headline */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6 sm:space-y-8"
          >
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs xs:text-sm sm:text-base font-semibold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              {eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              id="our-vision-heading"
              className="space-y-2 xs:space-y-3 sm:space-y-4"
            >
              <span 
                className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                style={{ color: colors.text.primary }}
              >
                {headlineLine1}
              </span>
              <span 
                className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                style={{ color: accentColor }}
              >
                {headlineLine2}
              </span>
            </motion.h2>
            
          </motion.div>

          {/* Right: Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6 lg:pt-8 xl:pt-12"
          >
            
            <div className="space-y-4 xs:space-y-6">
              {descriptionLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
                  style={{ color: colors.text.secondary }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl pt-4 xs:pt-6"
              style={{ color: colors.text.muted }}
            >
              We partner with product teams to turn ideas into resilient SaaS and full-stack systems that scale.
            </motion.p>
            
          </motion.div>
          
        </div>

        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          
          <div className="relative group">
            
            {/* Logo Background Glow Effect */}
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{ backgroundColor: accentColor }}
            />
            
            {/* Logo Container */}
            <div className="relative p-4 xs:p-6 sm:p-8">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                src={logo}
                alt="QuantiAxionix logo"
                className="h-24 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-contain transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/assets/Logo.jpg";
                }}
              />
            </div>
            
          </div>
          
        </motion.div>

        {/* Vision Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 xs:mt-16 sm:mt-20 md:mt-24"
        >
          
          <div 
            className="max-w-4xl mx-auto p-6 xs:p-8 sm:p-10 md:p-12 text-center border-2 relative overflow-hidden"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.secondary,
              borderRadius: "2px"
            }}
          >
            
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(${accentColor} 1px, transparent 1px)`,
                backgroundSize: "20px 20px"
              }}
            />
            
            <div className="relative z-10 space-y-4 xs:space-y-6">
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold"
                style={{ color: accentColor }}
              >
                Building Tomorrow's Software Today
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: colors.text.secondary }}
              >
                Every line of code we write, every system we design, and every automation we implement 
                is crafted to eliminate friction and amplify human potential in the digital landscape.
              </motion.p>
              
            </div>
            
          </div>
          
        </motion.div>
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12 opacity-10" style={{ backgroundColor: accentColor, transform: "rotate(45deg)" }} />
      <div className="absolute bottom-1/3 left-1/4 w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16 opacity-5" style={{ backgroundColor: accentColor, borderRadius: "50%" }} />
      
    </section>
  );
};

export default OurVision;