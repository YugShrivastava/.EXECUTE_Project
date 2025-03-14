import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { lazy } from "react";
import '../landing.css';

// Lazy load Spline component
const LazySpline = lazy(() => import('@splinetool/react-spline'));

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [splineLoaded, setSplineLoaded] = useState(false);
  
  const handleSubmit = () => {
    navigate('/login');
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  // Spline loading component
  const SplineLoader = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-purple-900/20 rounded-lg">
      <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

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
              className="text-gray-200 hover:text-purple-300 transition-all duration-300 px-4 py-2 rounded-full hover:bg-purple-900/30 hover:shadow-md cursor-pointer"
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
          {[...Array(30)].map((_, i) => (
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

      {/* Home Section - Left Aligned, Full Width */}
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-start relative pt-24 px-8 md:px-16"
      >
        <motion.div
          className="max-w-lg w-full z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
            Festify
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            The Ultimate College Fest Platform—Simplify Management, Amplify Engagement.
          </p>
          <motion.button
            className="bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
          >
            Get Started
          </motion.button>
        </motion.div>
        <div className="absolute w-full min-h-screen right-0 inset-0 bottom-[-300px] pointer-events-auto z-0">
          <Suspense fallback={<SplineLoader />}>
            <LazySpline 
              scene="https://prod.spline.design/GEkJep5bGOa4VCCK/scene.splinecode"
              onLoad={handleSplineLoad}
              className="pointer-events-auto"
            />
          </Suspense>
        </div>
      </section>

      {/* About Section - Right Aligned, Gradient Background */}
    
<section id="about" className="min-h-screen w-full flex items-center justify-between relative px-8 md:px-16 bg-transparent">
  {/* Left side - Image */}
  <motion.div 
    className="hidden md:block w-2/5 z-10"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <img 
      src="https://img.freepik.com/free-vector/silhouettes-party-crowd-low-poly-background_1048-6425.jpg?t=st=1741506029~exp=1741509629~hmac=70b7d9eb9161deb89bab5fa9aa160e8c6091821979367d8cbeb4eb2f2ccc3cbe&w=1480" 
      alt="College fest celebration" 
      className="rounded-t-full shadow-5xl ml-4"
    />
  </motion.div>

  {/* Right side - Text content */}
  <motion.div 
    className="max-w-lg text-right z-10 md:w-1/2" 
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

  {/* Gradient overlay at bottom */}
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
            <div
              className="flex gap-8 animate-slide-right-to-left"
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
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between cursor-pointer"
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
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Bottom Row: Left to Right */}
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-8 animate-slide-left-to-right"
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
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between cursor-pointer"
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
                  className="min-w-[300px] h-64 bg-purple-900/10 p-8 rounded-2xl border border-purple-800/50 hover:border-purple-600/70 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 flex flex-col justify-between cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
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
                className="w-full p-4 bg-black/70 text-white border border-purple-600/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-500 shadow-md hover:shadow-purple-400/30 cursor-text"
              />
            </div>
            <div>
              <label className="block text-gray-200 text-sm font-semibold mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 bg-black/70 text-white border border-purple-600/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-500 shadow-md hover:shadow-purple-400/30 cursor-text"
              />
            </div>
            <div>
              <label className="block text-gray-200 text-sm font-semibold mb-2">Your Message</label>
              <textarea
                placeholder="Enter your message"
                rows="6"
                className="w-full p-4 bg-black/70 text-white border border-purple-600/50 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 placeholder-gray-500 shadow-md hover:shadow-purple-400/30 cursor-text"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 cursor-pointer"
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
    </div>
  );
};

export default LandingPage;