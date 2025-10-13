// src/components/Home/ContactLanding.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";

const ContactLanding = () => {
  const { colors, isDark } = useTheme();
  
  // Responsive dotted background with proper scaling
  const dottedBg = {
    backgroundImage: `radial-gradient(#0097b2 0.5px, rgba(0,0,0,0) 0.5px)`,
    backgroundSize: "8px 8px",
    backgroundColor: isDark ? "rgba(11,11,11,0.5)" : "rgba(245,245,245,0.5)",
  };

  return (
    <section 
      className="relative w-full min-h-screen py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300" 
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        {/* Hero Section with Dotted Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
        >
          
          {/* Main Frame Container */}
          <div className="relative mx-auto max-w-4xl">
            
            {/* Dotted Background Frame */}
            <div
              className="relative p-8 xs:p-10 sm:p-12 md:p-16 lg:p-20 xl:p-24 border-2 overflow-hidden"
              style={{
                borderColor: "rgba(0, 151, 178, 0.8)",
                boxShadow: `0 0 0 2px rgba(0, 151, 178, 0.1) inset, 0 8px 32px rgba(0, 151, 178, 0.1)`,
                ...dottedBg,
                borderRadius: "2px"
              }}
            >
              
              {/* Corner Decorations - Responsive */}
              <div 
                className="absolute left-2 xs:left-3 sm:left-4 top-2 xs:top-3 sm:top-4 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 border-t-2 border-l-2" 
                style={{ borderColor: "#0097b2" }} 
              />
              <div
                className="absolute right-2 xs:right-3 sm:right-4 top-2 xs:top-3 sm:top-4 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 border-t-2 border-r-2"
                style={{ borderColor: "#0097b2" }}
              />
              <div
                className="absolute left-2 xs:left-3 sm:left-4 bottom-2 xs:bottom-3 sm:bottom-4 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 border-b-2 border-l-2"
                style={{ borderColor: "#0097b2" }}
              />
              <div
                className="absolute right-2 xs:right-3 sm:right-4 bottom-2 xs:bottom-3 sm:bottom-4 w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 border-b-2 border-r-2"
                style={{ borderColor: "#0097b2" }}
              />

              {/* Hero Content */}
              <div className="relative z-10 text-center space-y-6 xs:space-y-8">
                
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
                  style={{ color: colors.text.primary }}
                >
                  <span className="block mb-2 xs:mb-3 sm:mb-4">
                    Ready to rethink
                  </span>
                  <span 
                    className="block"
                    style={{ color: "#0097b2" }}
                  >
                    your software systems?
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="pt-4 xs:pt-6 sm:pt-8"
                >
                  <button
                    className="inline-flex items-center px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 text-sm xs:text-base sm:text-lg font-medium border-2 bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
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
                    <span>Start Your Transformation</span>
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

              {/* Subtle Overlay Pattern */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
                style={{
                  background: `linear-gradient(45deg, transparent 45%, rgba(0, 151, 178, 0.1) 50%, transparent 55%)`
                }}
              />

            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-start">
            
            {/* Left: Newsletter Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 xs:space-y-6"
            >
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span 
                  className="block"
                  style={{ color: colors.text.primary }}
                >
                  Don't miss out on
                </span>
                <span 
                  className="block mt-2 xs:mt-3"
                  style={{ color: "#0097b2" }}
                >
                  any updates
                </span>
              </h2>

              <p 
                className="text-sm xs:text-base sm:text-lg leading-relaxed max-w-lg"
                style={{ color: colors.text.secondary }}
              >
                Subscribe to our newsletter to receive the latest updates on products, AI automation
                capabilities, product launches, and how QuantiAxionix helps companies ship faster while
                reducing operational cost and complexity.
              </p>
              
            </motion.div>

            {/* Right: Email Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 xs:space-y-6"
            >
              
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.currentTarget.email?.value;
                  if (email) {
                    alert(`Thanks! We'll send updates to ${email}`);
                    e.currentTarget.reset();
                  } else {
                    alert("Please enter a valid email address");
                  }
                }}
                className="space-y-4"
              >
                
                {/* Email Input */}
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full bg-transparent border-0 border-b-2 focus:border-[#0097b2] outline-none px-0 py-3 xs:py-4 text-sm xs:text-base placeholder-opacity-60 transition-colors duration-300"
                    style={{ 
                      color: colors.text.primary,
                      borderColor: colors.border.primary,
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 xs:px-10 sm:px-12 py-3 xs:py-4 text-sm xs:text-base font-medium border-2 bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
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
                >
                  <span>Subscribe</span>
                  <svg 
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
                
              </form>

              {/* Privacy Notice */}
              <p 
                className="text-xs xs:text-sm leading-relaxed max-w-sm"
                style={{ color: colors.text.muted }}
              >
                We respect your privacy. Unsubscribe anytime. No spam, just valuable insights.
              </p>
              
            </motion.div>
            
          </div>
          
        </motion.section>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 opacity-5" style={{ backgroundColor: "#0097b2", transform: "rotate(45deg)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-20 xs:w-24 sm:w-32 h-20 xs:h-24 sm:h-32 opacity-3" style={{ backgroundColor: "#0097b2", borderRadius: "50%" }} />
      
    </section>
  );
};

export default ContactLanding;