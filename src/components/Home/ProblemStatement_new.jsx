// src/components/Home/ProblemStatement.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../ThemeProvider";

const problemsData = [
  {
    id: 1,
    title: "Technical Debt & Legacy Systems",
    subtitle: "Monolithic codebases slow innovation and increase maintenance costs",
    details: [
      "Years of quick fixes, outdated stacks, and undocumented code make adding features slow and risky. Teams spend more time firefighting than innovating.",
      "QuantiAxionix addresses this by modernizing architecture incrementally — extracting services, introducing tests and CI, creating clear upgrade paths so engineering velocity recovers while risk is contained."
    ],
    icon: "⚡"
  },
  {
    id: 2,
    title: "Fragmented Workflows",
    subtitle: "Disparate tools and manual handoffs create slow, error-prone processes",
    details: [
      "Product, design, and operations teams often work in separate silos with manual handoffs across tools. This causes rework, missed SLAs, and unclear ownership.",
      "We design unified delivery pipelines and automation layers that connect tooling, enforce checks, and eliminate repetitive manual steps — saving time and reducing human error."
    ],
    icon: "🔄"
  },
  {
    id: 3,
    title: "Scalability & Reliability",
    subtitle: "Systems fail to scale predictably under real user growth",
    details: [
      "Apps that work in staging can break in production when traffic spikes. Lack of autoscaling, poor observability, and brittle deployments lead to downtime.",
      "Our teams implement cloud-native patterns, autoscaling, blue/green deployments and observability so platforms remain resilient as load increases."
    ],
    icon: "📈"
  },
  {
    id: 4,
    title: "Data Silos & Poor Insights",
    subtitle: "Valuable data is trapped across services and spreadsheets",
    details: [
      "When telemetry, user behavior, and business data live in separate places, teams can't make data-driven decisions. Product roadmaps suffer and AI initiatives stall.",
      "We build unified data pipelines, reliable ETL, and analytics layers so businesses get actionable insights and can safely apply ML/AI to improve products."
    ],
    icon: "📊"
  },
  {
    id: 5,
    title: "Security & Compliance",
    subtitle: "Regulation and weak security posture increase risk and friction",
    details: [
      "Growing regulatory requirements combined with under-invested security practices create legal and operational exposure.",
      "QuantiAxionix embeds security and compliance into the development lifecycle — so products meet required standards without blocking delivery."
    ],
    icon: "🔒"
  },
];

export default function ProblemStatement() {
  const [expandedId, setExpandedId] = useState(null);
  const { colors } = useTheme();

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="product"
      className="relative w-full py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 transition-colors duration-300" 
      style={{
        backgroundColor: colors.bg.secondary,
        color: colors.text.primary,
      }}
    >
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 max-w-7xl">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-start mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          
          {/* Left: Section Title */}
          <div className="lg:col-span-2 space-y-4 xs:space-y-6">
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
                The Problem
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span style={{ color: colors.text.primary }}>
                  Today's software systems don't{" "}
                </span>
                <span style={{ color: "#0097b2" }}>
                  meet tomorrow's needs
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <p 
              className="text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed xs:leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              Modern businesses face complex technical challenges that traditional 
              approaches can't solve. Here are the core problems we help companies overcome.
            </p>
          </motion.div>

        </div>

        {/* Problems Grid */}
        <div className="space-y-4 xs:space-y-6">
          {problemsData.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div
                className="border-b py-4 xs:py-6 sm:py-8 cursor-pointer transition-all duration-300 hover:bg-opacity-50"
                style={{ 
                  borderColor: colors.border.primary,
                  backgroundColor: expandedId === problem.id ? colors.bg.hover : 'transparent'
                }}
                onClick={() => toggleExpanded(problem.id)}
              >
                
                {/* Problem Header */}
                <div className="flex items-start justify-between gap-4 xs:gap-6">
                  <div className="flex-1 min-w-0 space-y-2 xs:space-y-3">
                    <div className="flex items-center gap-3 xs:gap-4">
                      <span className="text-xl xs:text-2xl sm:text-3xl flex-shrink-0">
                        {problem.icon}
                      </span>
                      <h3
                        className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
                        style={{ 
                          fontFamily: "'Playfair Display', serif", 
                          color: "#0097b2" 
                        }}
                      >
                        {problem.title}
                      </h3>
                    </div>
                    
                    <p 
                      className="text-sm xs:text-base sm:text-lg leading-relaxed pl-8 xs:pl-10 sm:pl-14"
                      style={{ color: colors.text.secondary }}
                    >
                      {problem.subtitle}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <button
                    className="flex-shrink-0 w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      borderColor: "#0097b2",
                      backgroundColor: expandedId === problem.id ? "#0097b2" : 'transparent',
                      color: expandedId === problem.id ? colors.bg.primary : "#0097b2"
                    }}
                    aria-label={expandedId === problem.id ? "Collapse" : "Expand"}
                  >
                    <svg 
                      className={`w-4 h-4 xs:w-5 xs:h-5 transition-transform duration-300 ${expandedId === problem.id ? 'rotate-45' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedId === problem.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 xs:mt-6 pl-8 xs:pl-10 sm:pl-14 space-y-3 xs:space-y-4"
                  >
                    {problem.details.map((detail, i) => (
                      <p 
                        key={i}
                        className="text-sm xs:text-base leading-relaxed xs:leading-loose"
                        style={{ color: colors.text.secondary }}
                      >
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-24 xs:w-32 sm:w-48 h-24 xs:h-32 sm:h-48 opacity-3" style={{ backgroundColor: "#0097b2", borderRadius: "50%" }} />
      <div className="absolute bottom-1/4 right-0 w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32 opacity-5" style={{ backgroundColor: "#0097b2" }} />
    </section>
  );
}