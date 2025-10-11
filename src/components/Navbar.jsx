// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../ThemeProvider";
import logo from "../assets/Logo.jpg"; // adjust path if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme, colors } = useTheme();

  // Close mobile menu on escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Define nav items
  const navItems = [
    { name: "Home", to: "/", type: "route" },
    { name: "Product", to: "product", type: "scroll" },
    { name: "About", to: "about", type: "scroll" },
    { name: "Blogs", to: "/blogs", type: "route" },
    { name: "Career", to: "/career", type: "route" },
    { name: "Get in Touch", to: "/contact", type: "route" },
  ];

  // helper classes - now theme-aware
  const plainDesktopClass = `text-base font-medium hover:text-[#0097b2] transition cursor-pointer`;
  
  const boxedClass = `inline-flex items-center px-5 py-2 border border-[#0097b2] bg-transparent text-base font-medium shadow-sm hover:bg-[#0097b2] transition cursor-pointer`;

  const plainMobileClass = `block w-full text-center text-base font-medium hover:text-[#0097b2] transition cursor-pointer py-3 rounded-md`;
  
  const boxedMobileClass = `block w-full text-center px-5 py-3 border border-[#0097b2] text-base font-medium hover:bg-[#0097b2] transition cursor-pointer`;

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-300"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        backgroundColor: colors.bg.primary,
        color: colors.text.primary
      }}
    >
      <div className="w-full flex items-center justify-between h-20 px-6 md:px-10 lg:px-16">
        {/* Brand / Logo (clickable, navigates to home route / ) */}
        <div className="flex items-center gap-3">
          <RouterLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <img
              src={logo}
              alt="QUANTI AXIONIX logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-[#0097b2]/40"
            />
            <div className="flex items-center gap-1 select-none">
              <span className="font-semibold text-lg tracking-wide">QUANTI</span>
              <span className="font-extrabold text-lg text-[#0097b2]">AXIONIX</span>
            </div>
          </RouterLink>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 pr-2">
          {navItems.map((item) => {
            // "Get in Touch" should be the only one with boxed appearance (white text + rectangle)
            if (item.type === "route") {
              if (item.name === "Get in Touch") {
                return (
                  <RouterLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={boxedClass}
                    style={{ 
                      borderRadius: 0,
                      color: colors.text.primary,
                    }}
                  >
                    {item.name}
                  </RouterLink>
                );
              }

              // other route links (Home, Career) - plain text style
              return (
                <RouterLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={plainDesktopClass}
                  style={{ color: colors.text.primary }}
                >
                  {item.name}
                </RouterLink>
              );
            }

            // scroll links (Product, About) - plain text style
            return (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
                className={plainDesktopClass}
                style={{ color: colors.text.primary }}
              >
                {item.name}
              </ScrollLink>
            );
          })}
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.primary,
              color: colors.text.primary,
            }}
          >
            {isDark ? (
              <BsSun className="h-5 w-5" />
            ) : (
              <BsMoon className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile hamburger and theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggle for mobile */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg border transition-all duration-300"
            style={{
              backgroundColor: colors.bg.card,
              borderColor: colors.border.primary,
              color: colors.text.primary,
            }}
          >
            {isDark ? (
              <BsSun className="h-4 w-4" />
            ) : (
              <BsMoon className="h-4 w-4" />
            )}
          </button>
          
          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0097b2]"
            style={{
              color: colors.text.primary,
              background: open ? "#0097b2" : "transparent",
            }}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div 
          className="md:hidden px-4 pb-6 border-t transition-colors duration-300"
          style={{
            backgroundColor: colors.bg.primary,
            borderColor: colors.border.primary,
          }}
        >
          <div className="flex flex-col gap-3 mt-3">
            {navItems.map((item) =>
              item.type === "route" ? (
                item.name === "Get in Touch" ? (
                  <RouterLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={boxedMobileClass}
                    style={{ 
                      borderRadius: 0,
                      color: colors.text.primary,
                    }}
                  >
                    {item.name}
                  </RouterLink>
                ) : (
                  <RouterLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={plainMobileClass}
                    style={{ color: colors.text.primary }}
                  >
                    {item.name}
                  </RouterLink>
                )
              ) : (
                // Scroll link in mobile: if not on home, send user to home first (best-effort)
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      // simple fallback: navigate to home so the scroll target exists
                      window.location.href = "/";
                    } else {
                      setOpen(false);
                    }
                  }}
                  className={plainMobileClass}
                  style={{ color: colors.text.primary }}
                >
                  {item.name}
                </ScrollLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
