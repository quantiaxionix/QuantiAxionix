// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";

export default function Footer() {
  const { colors } = useTheme();
  
  return (
    <footer 
      className="w-full px-8 py-16 border-t transition-colors duration-300"
      style={{
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
        borderColor: colors.border.primary,
      }}
    >
      {/* GRID SECTIONS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-12">
        {/* Left */}
        <div>
          <h3 className="font-bold mb-3">Menu</h3>
          <ul className="space-y-2" style={{ color: colors.text.secondary }}>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
          </ul>
        </div>

        {/* Left Center */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2" style={{ color: colors.text.secondary }}>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Center */}
        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <p 
            className="text-sm leading-relaxed"
            style={{ color: colors.text.secondary }}
          >
            Privacy policy & Imprint
            <br />
            Quanti Axionix
            <br />
            123 Software St.
            <br />
            Tech City, USA
            <br />
            UID-Nr: ATU78346309
            <br />
            Company register court: Vienna
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="font-bold mb-3">Locations</h3>
          <p 
            className="text-sm leading-relaxed"
            style={{ color: colors.text.secondary }}
          >
            241W 30th St., 10001 New York, United States
            <br />
            Hollandstraße 10/47, 1020 Vienna, Austria
            <br />
            Funded by Seed - Deep Tech (BMAW, BMK, aws)
            <br />
            Funded by Vienna Business Agency "Vienna Planet Fund"
          </p>
        </div>
      </div>

      {/* TRUE INFINITE MARQUEE */}
      <div 
        className="overflow-hidden border-b py-12 relative"
        style={{ borderColor: colors.border.primary }}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {/* First batch */}
          <div className="flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <h2
                key={i}
                className="text-[10rem] md:text-[14rem] font-extrabold tracking-tight transition-colors cursor-pointer px-8"
                style={{ 
                  color: colors.text.muted,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = colors.text.primary;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = colors.text.muted;
                }}
              >
                Let's discuss today.
              </h2>
            ))}
          </div>
          {/* Duplicate batch for seamless loop */}
          <div className="flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <h2
                key={`dup-${i}`}
                className="text-[10rem] md:text-[14rem] font-extrabold tracking-tight text-gray-700 hover:text-white transition-colors cursor-pointer px-8"
              >
                Let’s discuss today.
              </h2>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="flex justify-between mt-8 space-x-2">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/30"
            style={{
              width: "2px",
              height: `${Math.random() * 40 + 10}px`,
            }}
          />
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mt-12">
        <a href="#" className="text-white/70 hover:text-white text-2xl">
          <FaLinkedin />
        </a>
        <a href="#" className="text-white/70 hover:text-white text-2xl">
          <FaGithub />
        </a>
        <a href="#" className="text-white/70 hover:text-white text-2xl">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}
