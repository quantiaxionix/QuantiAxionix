// src/components/Home/HomeHero.jsx
import React from "react";
import { useTheme } from "../../ThemeProvider";
import homeVideo from "../../assets/home-c.mp4";

export default function HomeHero() {
  const { colors } = useTheme();
  
  return (
    <main 
      className="w-full transition-colors duration-300"
      style={{
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      {/* Hero Video Section */}
      <section id="home" className="relative w-full overflow-hidden">
        <div className="relative w-full h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] xl:h-[65vh]">
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={homeVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/home-poster.jpg"
            aria-label="Background video showcasing our technology"
          />
          
          {/* Responsive overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
        </div>
      </section>

      {/* Punchline Content Section */}
      <section className="w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
            
            {/* Main Heading */}
            <div className="order-2 lg:order-1">
              <h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight xs:leading-snug sm:leading-tight tracking-tight"
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  color: "#0097b2" 
                }}
              >
                <span className="block">Build.</span>
                <span className="block">Scale.</span> 
                <span className="block">Automate.</span>
              </h1>
            </div>

            {/* Description */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4 xs:space-y-6">
                <p 
                  className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed xs:leading-relaxed sm:leading-loose"
                  style={{ color: colors.text.secondary }}
                >
                  We design and engineer end-to-end software and SaaS products infused
                  with AI to automate workflows, accelerate delivery, and drive
                  measurable growth.
                </p>
                
                {/* Call to Action */}
                <div className="pt-2 xs:pt-4">
                  <button
                    className="inline-flex items-center px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg font-medium border-2 border-[#0097b2] bg-transparent hover:bg-[#0097b2] transition-all duration-300 group"
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
                    <span>Learn More</span>
                    <svg 
                      className="ml-2 h-4 w-4 xs:h-5 xs:w-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
