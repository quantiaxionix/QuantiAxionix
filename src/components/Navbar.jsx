// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../ThemeProvider";
import logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme, colors } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Navigation items
  const navItems = [
    { name: "Home", to: "/", type: "route" },
    { name: "Product", to: "product", type: "scroll" },
    { name: "About", to: "about", type: "scroll" },
    { name: "Blogs", to: "/blogs", type: "route" },
    { name: "Career", to: "/career", type: "route" },
    { name: "Get in Touch", to: "/contact", type: "route", isButton: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg backdrop-blur-md' : 'shadow-sm'
      }`}
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: isScrolled 
          ? `${colors.bg.primary}95` 
          : colors.bg.primary,
        borderBottom: `1px solid ${colors.border.primary}20`,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        <div className="flex items-center justify-between h-16 xs:h-18 sm:h-20">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 xs:space-x-3"
          >
            <RouterLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 xs:space-x-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <img
                  src={logo}
                  alt="QuantiAxionix logo"
                  className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-[#0097b2]/30 transition-all duration-300 group-hover:ring-[#0097b2]/60"
                />
                <div 
                  className="absolute inset-0 rounded-full bg-[#0097b2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              
              <div className="flex items-center space-x-0.5 xs:space-x-1">
                <span 
                  className="font-bold text-sm xs:text-base sm:text-lg lg:text-xl tracking-wide transition-colors duration-300"
                  style={{ color: colors.text.primary }}
                >
                  QUANTI
                </span>
                <span className="font-bold text-sm xs:text-base sm:text-lg lg:text-xl text-[#0097b2] tracking-wide">
                  AXIONIX
                </span>
              </div>
            </RouterLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.type === "route" ? (
                  item.isButton ? (
                    <RouterLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center px-4 xs:px-6 py-2 xs:py-3 text-sm xs:text-base font-medium border-2 border-[#0097b2] bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
                      style={{ 
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
                      <span>{item.name}</span>
                      <svg 
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </RouterLink>
                  ) : (
                    <RouterLink
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="text-sm xs:text-base font-medium hover:text-[#0097b2] transition-colors duration-300 relative group"
                      style={{ color: colors.text.primary }}
                    >
                      {item.name}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0097b2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </RouterLink>
                  )
                ) : (
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="text-sm xs:text-base font-medium hover:text-[#0097b2] transition-colors duration-300 cursor-pointer relative group"
                    style={{ color: colors.text.primary }}
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0097b2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </ScrollLink>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop Theme Toggle & Mobile Controls */}
          <div className="flex items-center space-x-2 xs:space-x-3">
            
            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className="p-2 xs:p-3 rounded-lg border transition-all duration-300 hover:shadow-md"
              style={{
                backgroundColor: colors.bg.card,
                borderColor: colors.border.primary,
                color: colors.text.primary,
              }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {isDark ? (
                  <BsSun className="h-4 w-4 xs:h-5 xs:w-5" />
                ) : (
                  <BsMoon className="h-4 w-4 xs:h-5 xs:w-5" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 xs:p-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: isOpen ? "#0097b2" : colors.bg.card,
                borderColor: isOpen ? "#0097b2" : colors.border.primary,
                color: isOpen ? "#ffffff" : colors.text.primary,
              }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  className="h-5 w-5 xs:h-6 xs:w-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.div>
            </motion.button>
            
          </div>
          
        </div>
        
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t overflow-hidden"
            style={{
              backgroundColor: colors.bg.primary,
              borderColor: colors.border.primary,
            }}
          >
            <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 max-w-7xl">
              
              <nav className="py-4 xs:py-6 space-y-2 xs:space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.type === "route" ? (
                      item.isButton ? (
                        <RouterLink
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-center px-4 xs:px-6 py-3 xs:py-4 text-sm xs:text-base font-medium border-2 border-[#0097b2] bg-transparent hover:bg-[#0097b2] transition-all duration-300"
                          style={{ 
                            color: colors.text.primary,
                            borderRadius: 0
                          }}
                        >
                          {item.name}
                        </RouterLink>
                      ) : (
                        <RouterLink
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="block w-full text-left px-4 xs:px-6 py-3 xs:py-4 text-sm xs:text-base font-medium hover:text-[#0097b2] hover:bg-opacity-50 transition-all duration-300 rounded-lg"
                          style={{ 
                            color: colors.text.primary,
                            backgroundColor: "transparent"
                          }}
                        >
                          {item.name}
                        </RouterLink>
                      )
                    ) : (
                      <ScrollLink
                        to={item.to}
                        spy={true}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        onClick={() => {
                          if (location.pathname !== "/") {
                            window.location.href = "/";
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className="block w-full text-left px-4 xs:px-6 py-3 xs:py-4 text-sm xs:text-base font-medium hover:text-[#0097b2] hover:bg-opacity-50 transition-all duration-300 cursor-pointer rounded-lg"
                        style={{ 
                          color: colors.text.primary,
                          backgroundColor: "transparent"
                        }}
                      >
                        {item.name}
                      </ScrollLink>
                    )}
                  </motion.div>
                ))}
              </nav>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.header>
  );
};

export default Navbar;