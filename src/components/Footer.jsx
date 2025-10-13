// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

const Footer = () => {
  const { colors } = useTheme();

  const menuLinks = [
    { name: "Home", to: "/" },
    { name: "Product", to: "/" },
    { name: "About", to: "/" }
  ];

  const companyLinks = [
    { name: "Career", to: "/career" },
    { name: "Contact", to: "/contact" },
    { name: "Blogs", to: "/blogs" }
  ];

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com/company/quantiaxionix", 
      label: "LinkedIn",
      color: "#0077B5"
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/quantiaxionix", 
      label: "GitHub",
      color: "#333333"
    },
    { 
      icon: FaEnvelope, 
      href: "mailto:contact@quantiaxionix.com", 
      label: "Email",
      color: "#EA4335"
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com/quantiaxionix", 
      label: "Twitter",
      color: "#1DA1F2"
    }
  ];

  const marqueeText = "Let's build the future together";

  return (
    <footer 
      className="relative w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 border-t transition-colors duration-300 overflow-hidden"
      style={{
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
        borderColor: colors.border.primary,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 sm:gap-12 md:gap-16 pb-8 xs:pb-10 sm:pb-12 md:pb-16 border-b"
             style={{ borderColor: colors.border.primary }}>
          
          {/* Menu Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6"
          >
            <h3 
              className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6"
              style={{ color: colors.text.primary }}
            >
              Menu
            </h3>
            <ul className="space-y-2 xs:space-y-3">
              {menuLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RouterLink
                    to={link.to}
                    className="text-sm xs:text-base hover:text-[#0097b2] transition-colors duration-300 relative group"
                    style={{ color: colors.text.secondary }}
                  >
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#0097b2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </RouterLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6"
          >
            <h3 
              className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6"
              style={{ color: colors.text.primary }}
            >
              Company
            </h3>
            <ul className="space-y-2 xs:space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <RouterLink
                    to={link.to}
                    className="text-sm xs:text-base hover:text-[#0097b2] transition-colors duration-300 relative group"
                    style={{ color: colors.text.secondary }}
                  >
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#0097b2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </RouterLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6"
          >
            <h3 
              className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6"
              style={{ color: colors.text.primary }}
            >
              Legal
            </h3>
            <div className="text-xs xs:text-sm leading-relaxed space-y-1 xs:space-y-2"
                 style={{ color: colors.text.secondary }}>
              <p>Privacy Policy & Imprint</p>
              <p className="font-medium" style={{ color: colors.text.primary }}>QuantiAxionix</p>
              <p>123 Software Street</p>
              <p>Tech City, USA</p>
              <p>UID-Nr: ATU78346309</p>
              <p>Company register court: Vienna</p>
            </div>
          </motion.div>

          {/* Locations Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 xs:space-y-6"
          >
            <h3 
              className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6"
              style={{ color: colors.text.primary }}
            >
              Locations
            </h3>
            <div className="text-xs xs:text-sm leading-relaxed space-y-2 xs:space-y-3"
                 style={{ color: colors.text.secondary }}>
              <div>
                <p className="font-medium" style={{ color: colors.text.primary }}>New York</p>
                <p>241W 30th St., 10001 New York</p>
                <p>United States</p>
              </div>
              <div>
                <p className="font-medium" style={{ color: colors.text.primary }}>Vienna</p>
                <p>Hollandstraße 10/47, 1020 Vienna</p>
                <p>Austria</p>
              </div>
              <div className="pt-2 xs:pt-3">
                <p className="text-xs" style={{ color: colors.text.muted }}>
                  Funded by Seed - Deep Tech (BMAW, BMK, aws)
                </p>
                <p className="text-xs" style={{ color: colors.text.muted }}>
                  Funded by Vienna Business Agency "Vienna Planet Fund"
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 border-b overflow-hidden relative"
          style={{ borderColor: colors.border.primary }}
        >
          <div className="flex whitespace-nowrap">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {/* First batch */}
              <div className="flex">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.h2
                    key={i}
                    whileHover={{ 
                      scale: 1.05,
                      color: colors.text.primary 
                    }}
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight transition-colors cursor-pointer px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16"
                    style={{ color: colors.text.muted }}
                  >
                    {marqueeText}
                  </motion.h2>
                ))}
              </div>
              {/* Duplicate batch for seamless loop */}
              <div className="flex">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.h2
                    key={`dup-${i}`}
                    whileHover={{ 
                      scale: 1.05,
                      color: colors.text.primary 
                    }}
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight transition-colors cursor-pointer px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16"
                    style={{ color: colors.text.muted }}
                  >
                    {marqueeText}
                  </motion.h2>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-end py-6 xs:py-8 sm:py-10 gap-1 xs:gap-2"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${Math.random() * 32 + 8}px` }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.02 }}
              viewport={{ once: true }}
              className="w-0.5 xs:w-1 transition-colors duration-300 hover:bg-[#0097b2]"
              style={{ 
                backgroundColor: colors.border.primary,
                minHeight: "8px"
              }}
            />
          ))}
        </motion.div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 xs:gap-8 pt-6 xs:pt-8 sm:pt-10">
          
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center sm:justify-start gap-4 xs:gap-6 sm:gap-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2,
                  color: social.color 
                }}
                whileTap={{ scale: 0.9 }}
                className="text-xl xs:text-2xl sm:text-3xl transition-all duration-300 hover:shadow-lg"
                style={{ color: colors.text.muted }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center sm:text-right"
          >
            <p 
              className="text-xs xs:text-sm font-medium"
              style={{ color: colors.text.muted }}
            >
              © 2024 QuantiAxionix. All rights reserved.
            </p>
            <p 
              className="text-xs mt-1"
              style={{ color: colors.text.muted }}
            >
              Building tomorrow's software today.
            </p>
          </motion.div>
          
        </div>
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12 opacity-5" style={{ backgroundColor: "#0097b2", transform: "rotate(45deg)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-8 xs:w-12 sm:w-16 h-8 xs:h-12 sm:h-16 opacity-3" style={{ backgroundColor: "#0097b2", borderRadius: "50%" }} />
      
    </footer>
  );
};

export default Footer;