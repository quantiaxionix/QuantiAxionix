// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

import Navbar from "./components/Navbar";
import HomeHero from "./components/Home/HomeHero";
import CareerHero from "./components/Career/CareerHero";
import OurStory from "./components/Career/OurStory";
import OurVision from "./components/Career/OurVision";
import Team from "./components/Career/Team";
import JobOpenings from "./components/Career/JobOpenings";
import GetInTouch from "./components/ContactSection/ContactSection";
import CompanyIntro from "./components/Home/CompanyIntro";
import ProblemStatement from "./components/Home/ProblemStatement";
import SolutionSection from "./components/Home/SolutionSection";
import ContactLanding from "./components/Home/ContactLanding";
import BlogsComingSoon from "./components/Blogs/BlogsComingSoon";
import Footer from "./components/Footer";

// Page transition variants
const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// Page wrapper component for consistent styling and animations
const PageWrapper = ({ children, className = "" }) => {
  const { colors } = useTheme();
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={`relative w-full min-h-screen pt-16 xs:pt-18 sm:pt-20 ${className}`}
      style={{
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      {children}
    </motion.div>
  );
};

// Home page component
function HomeMain() {
  return (
    <PageWrapper>
      <HomeHero />
      <CompanyIntro />
      <ProblemStatement />
      <SolutionSection />
      <ContactLanding />
      <Footer />
    </PageWrapper>
  );
}

// Career page component
function CareerPage() {
  return (
    <PageWrapper>
      <CareerHero />
      <OurStory />
      <OurVision />
      <Team />
      <JobOpenings />
      <Footer />
    </PageWrapper>
  );
}

// Contact page component
function ContactPage() {
  return (
    <PageWrapper>
      <GetInTouch />
      <Footer />
    </PageWrapper>
  );
}

// Blogs page component
function BlogsPage() {
  return (
    <PageWrapper>
      <BlogsComingSoon />
      <Footer />
    </PageWrapper>
  );
}

// Main App component
const App = () => {
  const { colors } = useTheme();
  
  return (
    <BrowserRouter>
      <div 
        className="App relative w-full min-h-screen overflow-x-hidden transition-colors duration-300"
        style={{
          backgroundColor: colors.bg.primary,
          color: colors.text.primary,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        
        {/* Fixed Navbar */}
        <Navbar />
        
        {/* Page Routes with Animation */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>

        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 151, 178, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 151, 178, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px"
            }}
          />
          
          {/* Floating Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12 opacity-5"
            style={{ 
              backgroundColor: "#0097b2", 
              transform: "rotate(45deg)",
              borderRadius: "2px"
            }}
          />
          
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 right-1/4 w-8 xs:w-12 sm:w-16 h-8 xs:h-12 sm:h-16 opacity-3"
            style={{ 
              backgroundColor: "#0097b2", 
              borderRadius: "50%"
            }}
          />
          
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 right-1/3 w-4 xs:w-6 sm:w-8 h-4 xs:h-6 sm:h-8"
            style={{ 
              backgroundColor: "#0097b2",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
            }}
          />
          
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-6 xs:bottom-8 right-6 xs:right-8 z-40 p-3 xs:p-4 rounded-full shadow-lg border transition-all duration-300 hover:shadow-xl"
          style={{
            backgroundColor: colors.bg.card,
            borderColor: "#0097b2",
            color: "#0097b2"
          }}
          aria-label="Scroll to top"
        >
          <svg 
            className="w-5 h-5 xs:w-6 xs:h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
        
      </div>
    </BrowserRouter>
  );
};

export default App;