import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import '../landing.css'

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/login');
  };
  
  // State to track if Spline is loaded
  const [splineLoaded, setSplineLoaded] = useState(false);
  
  // Handle Spline load event
  const handleSplineLoad = () => {
    setSplineLoaded(true);
    console.log("Spline scene loaded successfully");
  };

  return (
    <div className="w-screen bg-black text-white font-sans overflow-x-hidden relative">
      
      {/* Navigation - Transparent */}
      <nav className="fixed top-0 left-0 w-full py-6 px-8 flex justify-between items-center bg-transparent backdrop-blur-md z-50">
        <motion.div
          className="text-4xl font-extrabold text-purple-400 tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Festify
        </motion.div>
        <div className="flex gap-10 text-lg font-semibold">
          {["home", "about", "features", "contact"].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-200 hover:text-purple-300 transition-all duration-300 px-4 py-2 rounded-full hover:bg-purple-900/30 hover:shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-black via-purple-950/70 to-purple-900/50 animate-gradient" />
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-50 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom Mouse Cursor Effect */}
      <div id="custom-cursor" className="fixed w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"></div>
      <div id="cursor-dot" className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>

      {/* Home Section - Left Aligned, Full Width */}
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-start relative pt-24 px-8 md:px-16"
      >
        <motion.div
          className="max-w-lg w-full z-10" /* Increased z-index to ensure it's above the 3D element */
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-purple-400 tracking-tight leading-tight mb-6 drop-shadow-lg">
            Festify
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            The Ultimate College Fest Platform—Simplify Management, Amplify Engagement.
          </p>
          <motion.button
            className="bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 relative z-20" /* Added relative positioning and z-index */
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
          >
            Get Started
          </motion.button>
        </motion.div>
        
        {/* 3D Component Container with pointer-events-none for the container but not the Spline */}
        <div className="absolute w-full left-0 bottom-[-250px] pointer-events-auto">
          <Spline 
            scene="https://prod.spline.design/fTtGQbX3eiroyS9i/scene.splinecode" 
            onLoad={handleSplineLoad}
            className="spline-container"
          />
        </div>
      </section>

      {/* About Section - Right Aligned, Gradient Background */}
      <section
        id="about"
        className="min-h-screen w-full flex items-center justify-end relative px-8 md:px-16 bg-transparent"
      >
        <motion.div
          className="max-w-lg text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 tracking-tight drop-shadow-lg">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Festify redefines college fest management with a seamless, all-in-one platform. We tackle the chaos of registrations, scheduling, and coordination, turning challenges into opportunities.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Our sleek interface, powerful tools, and interactive features connect organizers and attendees like never before. From cultural spectacles to tech showdowns, Festify ensures your event shines.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/20 to-transparent" />
      </section>

      {/* Features Section - Two Rows of Taller Sliding Cards */}
      <section
        id="features"
        className="min-h-screen w-full flex flex-col items-center justify-center relative px-8 md:px-16"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Features
        </motion.h2>
        <div className="w-full space-y-12">
          {/* Top Row: Right to Left */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-8 animate-slide-right-to-left"
              initial={{ x: "100%" }}
              animate={{ x: "-100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[
                {
                  title: "Event Creation",
                  desc: "Craft and launch events effortlessly with customizable options and streamlined workflows.",
                },
                {
                  title: "Registration Management",
                  desc: "Streamline sign-ups and track participants in real-time with automated tools.",
                },
                {
                  title: "Live Updates",
                  desc: "Keep everyone informed with instant notifications and real-time event changes.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
              {/* Duplicate for seamless looping */}
              {[
                {
                  title: "Event Creation",
                  desc: "Craft and launch events effortlessly with customizable options and streamlined workflows.",
                },
                {
                  title: "Registration Management",
                  desc: "Streamline sign-ups and track participants in real-time with automated tools.",
                },
                {
                  title: "Live Updates",
                  desc: "Keep everyone informed with instant notifications and real-time event changes.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={`top-duplicate-${index}`}
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Bottom Row: Left to Right */}
          <div className="w-full overflow-hidden">
            <motion.div
              className="flex gap-8 animate-slide-left-to-right"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[
                {
                  title: "Interactive Tools",
                  desc: "Engage attendees with interactive maps, personalized schedules, and messaging features.",
                },
                {
                  title: "Analytics Dashboard",
                  desc: "Analyze event success with detailed insights and performance metrics.",
                },
                {
                  title: "Team Coordination",
                  desc: "Manage organizers and volunteers seamlessly with collaborative tools.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
              {/* Duplicate for seamless looping */}
              {[
                {
                  title: "Interactive Tools",
                  desc: "Engage attendees with interactive maps, personalized schedules, and messaging features.",
                },
                {
                  title: "Analytics Dashboard",
                  desc: "Analyze event success with detailed insights and performance metrics.",
                },
                {
                  title: "Team Coordination",
                  desc: "Manage organizers and volunteers seamlessly with collaborative tools.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={`bottom-duplicate-${index}`}
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced Form */}
      <section
        id="contact"
        className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-black via-purple-950/70 to-purple-900/50 px-8 md:px-16"
      >
        <motion.div
          className="max-w-lg w-full bg-gradient-to-br from-purple-950/20 to-black/90 p-10 rounded-3xl shadow-2xl border border-purple-700/50 hover:border-purple-600/70 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-10 tracking-tight drop-shadow-lg">
            Contact Us
          </h2>
          <form className="space-y-8">
            <div>
              <label className="block text-gray-200 text-sm font-semibold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 bg-black/70 text-white border border-purple-600/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-500 shadow-md hover:shadow-purple-400/30"
              />
            </div>
            <div>
              <label className="block text-gray-200 text-sm font-semibold mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 bg-black/70 text-white border border-purple-600/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-500 shadow-md hover:shadow-purple-400/30"
              />
            </div>
            <div>
              <label className="block text-gray-200 text-sm font-semibold mb-2">Your Message</label>
              <textarea
                placeholder="Enter your message"
                rows="6"
                className="w-full p-4 bg-black/70 text-white border border-purple-600/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-500 shadow-md hover:shadow-purple-400/30"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer - Full Width */}
      <footer className="w-full py-8 bg-black/90 border-t border-purple-900/50 z-10">
        <div className="container mx-auto px-8 text-center">
          <p className="text-gray-400 text-sm font-medium">
            © 2025 Festify | All Rights Reserved
          </p>
        </div>
      </footer>
      
      {/* Script for Custom Cursor Effect */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const cursor = document.getElementById('custom-cursor');
            const cursorDot = document.getElementById('cursor-dot');
            
            document.addEventListener('mousemove', function(e) {
              cursor.style.left = e.clientX + 'px';
              cursor.style.top = e.clientY + 'px';
              cursorDot.style.left = e.clientX + 'px';
              cursorDot.style.top = e.clientY + 'px';
            });
            
            // Add hover effect on interactive elements
            const interactiveElements = document.querySelectorAll('button, a, input, textarea, .spline-container');
            interactiveElements.forEach(el => {
              el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
              });
              el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
              });
            });
          });
        `
      }} />
    </div>
  );
};

export default LandingPage;