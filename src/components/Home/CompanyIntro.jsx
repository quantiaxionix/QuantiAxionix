// src/components/Home/CompanyIntro.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";
import companyPhoto from "../../assets/company.jpeg";

export default function CompanyIntro() {
  const { colors } = useTheme();
  
  return (
    <section
      id="about"
      className="relative w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 xl:order-1 w-full"
          >
            <div className="relative">
              <img
                src={companyPhoto}
                alt="QuantiAxionix Team and Office Environment"
                className="w-full h-auto object-cover rounded-none shadow-2xl"
                style={{
                  aspectRatio: "4/3",
                  minHeight: "300px",
                  maxHeight: "500px"
                }}
                loading="lazy"
              />
              
              {/* Decorative border */}
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 -z-10"
                style={{ borderColor: "#0097b2" }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 xl:order-2 space-y-6 xs:space-y-8 sm:space-y-10">
            
            {/* Section Label */}
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
                About QuantiAxionix
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight xs:leading-tight sm:leading-tight tracking-tight">
                <span 
                  className="block"
                  style={{ color: colors.text.primary }}
                >
                  We build.
                </span>
                <span 
                  className="block"
                  style={{ color: colors.text.primary }}
                >
                  We scale.
                </span>
                <span 
                  className="block"
                  style={{ color: "#0097b2" }}
                >
                  We automate.
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 xs:space-y-6"
            >
              <p 
                className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed xs:leading-relaxed sm:leading-loose max-w-2xl"
                style={{ color: colors.text.secondary }}
              >
                Our team engineers intelligent SaaS solutions infused with AI. 
                We focus on automating workflows, accelerating product delivery, 
                and creating measurable growth for businesses worldwide.
              </p>
              
              <p 
                className="text-sm xs:text-base sm:text-lg leading-relaxed xs:leading-relaxed max-w-2xl"
                style={{ color: colors.text.muted }}
              >
                From concept to deployment, we craft scalable solutions that 
                transform how companies operate and compete in the digital landscape.
              </p>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4 xs:pt-6"
            >
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
                  // Scroll to next section or navigate to about page
                  const nextSection = document.querySelector('#product');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Learn More About Us</span>
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
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 xs:w-48 sm:w-64 h-32 xs:h-48 sm:h-64 opacity-5" style={{ backgroundColor: "#0097b2" }} />
    </section>
  );
}
