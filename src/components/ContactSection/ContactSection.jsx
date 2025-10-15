// src/components/ContactSection/ContactSection.jsx
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from "../../ThemeProvider";
import { motion } from "framer-motion";

export default function ContactSection({
  accentColor = "#0097b2",
  contactEmail = "hello@quantiaxionix.com",
}) {
  const { colors } = useTheme();
  const [state, handleSubmit] = useForm("mvgwdbvr");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="w-full min-h-[60vh] py-20 px-4 flex items-center justify-center transition-colors duration-300"
        style={{
          backgroundColor: colors.bg.primary,
          color: colors.text.primary,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <motion.div
          className="text-center p-8 border"
          style={{ borderColor: colors.border.primary }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: accentColor }}>
            Thank You!
          </h2>
          <p className="text-base md:text-lg" style={{ color: colors.text.secondary }}>
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 px-4 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: colors.bg.primary,
        color: colors.text.primary,
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          {/* LEFT: Headline and contact info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between lg:min-h-[550px]">
            <div>
              <h2
                className="font-black leading-none mb-6"
                style={{
                  color: colors.text.primary,
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                }}
              >
                Got a
                <br />
                question?
                <span className="block mt-2" style={{ color: accentColor }}>
                  Let’s Connect.
                </span>
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed max-w-lg mb-10"
                style={{ color: colors.text.secondary }}
              >
                Whether you're a brand, partner, or just curious, we'd love to hear from you. Fill out the form or reach out directly.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-sm mb-3" style={{ color: colors.text.muted }}>
                Or just want to say hi?
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-block text-base font-medium px-5 py-2.5 transition-colors duration-300"
                style={{
                  backgroundColor: colors.text.primary,
                  color: colors.bg.primary,
                }}
              >
                {contactEmail}
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 p-6 sm:p-8"
            style={{
              backgroundColor: colors.bg.card,
              border: `1px solid ${colors.border.secondary}`,
              boxShadow: `0 10px 40px -10px ${colors.shadow.lg}`,
              borderRadius: '0', // Sharp corners
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium" style={{ color: colors.text.secondary }}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="mt-2 w-full bg-transparent py-2 px-0 border-0 border-b focus:ring-0 transition"
                    style={{ borderColor: colors.border.primary, color: colors.text.primary, borderBottomWidth: '1px' }}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium" style={{ color: colors.text.secondary }}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    required
                    className="mt-2 w-full bg-transparent py-2 px-0 border-0 border-b focus:ring-0 transition"
                    style={{ borderColor: colors.border.primary, color: colors.text.primary, borderBottomWidth: '1px' }}
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs font-medium" style={{ color: colors.text.secondary }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="mt-2 w-full bg-transparent py-2 px-0 border-0 border-b focus:ring-0 transition"
                  style={{ borderColor: colors.border.primary, color: colors.text.primary, borderBottomWidth: '1px' }}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium" style={{ color: colors.text.secondary }}>
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue="Investment"
                  className="mt-2 block w-full bg-transparent py-2 px-0 border-0 border-b focus:ring-0 transition"
                  style={{
                    borderColor: colors.border.primary,
                    color: colors.text.primary,
                    backgroundColor: colors.bg.card,
                    borderBottomWidth: '1px',
                    borderRadius: 0,
                  }}
                >
                  <option value="Investment" style={{ backgroundColor: colors.bg.primary, color: colors.text.primary }}>Investment</option>
                  <option value="Career" style={{ backgroundColor: colors.bg.primary, color: colors.text.primary }}>Career</option>
                  <option value="Other" style={{ backgroundColor: colors.bg.primary, color: colors.text.primary }}>Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium" style={{ color: colors.text.secondary }}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your inquiry..."
                  className="mt-2 block w-full bg-transparent py-2 px-0 border-0 border-b focus:ring-0 transition resize-y"
                  style={{ borderColor: colors.border.primary, color: colors.text.primary, borderBottomWidth: '1px' }}
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 font-medium border bg-transparent hover:bg-[#0097b2] transition-colors duration-300 disabled:opacity-60"
                    style={{
                      borderRadius: 0,
                      color: colors.text.primary,
                      borderColor: accentColor,
                    }}
                    onMouseEnter={(e) => {
                      if (!state.submitting) {
                        e.target.style.color = colors.bg.primary;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!state.submitting) {
                        e.target.style.color = colors.text.primary;
                      }
                    }}
                  >
                    {state.submitting ? "Sending…" : "Send message"}
                  </button>
              </div>
              
              <ValidationError errors={state.errors} className="text-red-500 text-sm font-medium" />
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
