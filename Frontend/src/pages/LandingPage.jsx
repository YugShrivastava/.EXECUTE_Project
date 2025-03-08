import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LandingPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/login');
  }

  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden relative">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent backdrop-blur-md z-50 px-8">
        <div className="text-2xl font-bold text-purple-400">Festify</div>
        <div className="flex gap-6 text-lg font-medium">
          {["home", "about", "features", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white hover:text-purple-400 transition px-3 py-1 rounded-md hover:bg-purple-900/30"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-r from-black to-purple-900/40 opacity-80 animate-gradient" />
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Scroll Container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth scrollbar-hide relative">
        
        {/* Home Section - Left-centric layout */}
        <section
          id="home"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-start px-16 md:px-24 relative"
        >
          <div className="max-w-xl">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-4 text-purple-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Festify: The Ultimate College Fest Platform
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-medium text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Simplify Event Management & Engagement.
            </motion.p>
            <motion.button
              className="bg-purple-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-600 transition text-white"
              whileHover={{ scale: 1.05 }}
              onClick={handleSubmit}
            >
              Get Started
            </motion.button>
          </div>
        </section>

        {/* About Section - Left-centric layout */}
        <section
          id="about"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-start px-16 md:px-24"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
              About Us
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              Festify is designed to revolutionize college fest management by
              providing a seamless, all-in-one platform. We understand the
              challenges faced by organizers and participants alike, from handling
              registrations to ensuring smooth event coordination.
            </p>
            <p className="text-gray-300 text-lg md:text-xl">
              With an intuitive interface, robust event management tools, and
              interactive engagement features, we bridge the gap between
              organizers and attendees. Whether you're planning a cultural
              extravaganza, a tech fest, or a sports tournament, Festify is the
              perfect partner to make your event a grand success.
            </p>
          </div>
        </section>

        {/* Features Section - Left-centric layout */}
        <section
          id="features"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-start px-16 md:px-24 relative"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
              Features
            </h2>
            
            <div className="space-y-8">
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30 hover:border-purple-500/50 transition">
                <h3 className="text-2xl font-bold text-white mb-2">Event Management</h3>
                <p className="text-gray-300">
                  Create, schedule, and manage multiple events with ease. Control registrations, 
                  track attendance, and organize venues all from a single dashboard.
                </p>
              </div>
              
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30 hover:border-purple-500/50 transition">
                <h3 className="text-2xl font-bold text-white mb-2">Participant Engagement</h3>
                <p className="text-gray-300">
                  Keep attendees engaged with real-time updates, interactive maps, 
                  personalized schedules, and in-app messaging.
                </p>
              </div>
              
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-700/30 hover:border-purple-500/50 transition">
                <h3 className="text-2xl font-bold text-white mb-2">Analytics & Insights</h3>
                <p className="text-gray-300">
                  Gain valuable insights with comprehensive analytics on attendance, 
                  engagement, and participant demographics to improve future events.
                </p>
              </div>
            </div>
          </div>
          
          {/* Background particles for features section */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </section>

        {/* Contact Section - Left-centric layout */}
        <section
          id="contact"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-start bg-gradient-to-r from-black to-purple-900/40 px-16 md:px-24 relative"
        >
          <div className="max-w-xl z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">
              Contact Us
            </h2>

            <form className="w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 bg-black/60 text-white border border-purple-700 rounded-md focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 bg-black/60 text-white border border-purple-700 rounded-md focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 mb-4 bg-black/60 text-white border border-purple-700 rounded-md focus:ring-2 focus:ring-purple-400"
              />
              <button className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Background particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="snap-start w-full h-20 bg-black flex justify-center items-center px-6 md:px-12 border-t border-purple-900/30">
          <p className="text-gray-400 text-center">
            &copy; 2025 Festify | All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;