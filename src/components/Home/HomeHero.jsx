// src/components/HomeHero.jsx
import React from "react";
import { useTheme } from "../../ThemeProvider";
import homeVideo from "../../assets/home-c.mp4"; // adjust path if needed

export default function HomeHero() {
  const { colors } = useTheme();
  
  return (
    <main 
      className="transition-colors duration-300"
      style={{
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
      }}
    >
      {/* Video hero */}
      <section id="home" className="w-full overflow-hidden">
        <div className="relative w-full h-[50vh] md:h-[55vh] lg:h-[58vh]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={homeVideo}
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/home-poster.jpg"
          />

          {/* subtle dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* Punchline section just below video */}
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          {/* Left side heading */}
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0097b2" }}
          >
            Build. Scale. Automate.
          </h2>

          {/* Right side paragraph */}
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed"
            style={{ color: colors.text.secondary }}
          >
            We design and engineer end-to-end software and SaaS products infused
            with AI to automate workflows, accelerate delivery, and drive
            measurable growth.
          </p>
        </div>
      </section>
    </main>
  );
}
