// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

/**
 * App.jsx
 *
 * Routes:
 *  - "/"        -> HomeMain (one-page home)
 *  - "/blogs"   -> BlogsPage (coming soon)
 *  - "/career"  -> CareerPage
 *  - "/contact" -> ContactPage (Get in touch)
 *  - "*"        -> redirect to "/"
 *
 * Note:
 *  - Navbar remains mounted across routes.
 *  - Each page component uses a top padding (pt-20) so the fixed navbar doesn't overlap content.
 */

function HomeMain() {
  return (
    <div className="pt-20">
      <HomeHero />
      <CompanyIntro />
      <ProblemStatement />
      <SolutionSection />
      <ContactLanding />
      <Footer />
    </div>
  );
}

function CareerPage() {
  return (
    <div className="pt-20">
      <CareerHero />
      <OurStory />
      <OurVision />
      <Team />
      <JobOpenings />
      <Footer />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="pt-20">
      <GetInTouch />
      <Footer />
    </div>
  );
}

function BlogsPage() {
  return (
    <div className="pt-20">
      <BlogsComingSoon />
      <Footer />
    </div>
  );
}

export default function App() {
  const { colors } = useTheme();
  
  return (
    <BrowserRouter>
      <div 
        className="App min-h-screen transition-colors duration-300"
        style={{
          backgroundColor: colors.bg.primary,
          color: colors.text.primary,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
