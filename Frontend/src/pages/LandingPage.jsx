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
    <div className="w-screen h-screen bg-[#0D0D0D] text-[#F1F1F1] overflow-hidden relative">
      {/* Transparent Navbar */}
      <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-transparent backdrop-blur-md z-50 px-8">
        <div className="text-2xl font-bold text-[#E94560]">Festify</div>
        <div className="flex gap-6 text-lg font-medium">
          {["home", "about", "features", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white hover:text-[#E94560] transition px-3 py-1 rounded-md hover:bg-gray-800"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#1E1E1E] to-[#292929] opacity-80 animate-gradient" />
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#E94560] rounded-full opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Full-page scrolling container */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth scrollbar-hide relative">
        {/* Hero Section */}
        <section
          id="home"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 relative"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 text-[#E94560]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Festify: The Ultimate College Fest Platform
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-medium text-gray-400 mb-6 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Simplify Event Management & Engagement.
          </motion.p>
          <motion.button
            className="bg-[#E94560] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#C7324A] transition"
            whileHover={{ scale: 1.05 }}
            onClick={handleSubmit}
          >
            Get Started
          </motion.button>
        </section>

        {/* About Us Section */}
        <section
          id="about"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E94560] mb-4">
            About Us
          </h2>
          <p className="max-w-3xl text-gray-400 text-lg md:text-xl mb-6">
            Festify is designed to revolutionize college fest management by
            providing a seamless, all-in-one platform. We understand the
            challenges faced by organizers and participants alike, from handling
            registrations to ensuring smooth event coordination.
          </p>
          <p className="max-w-3xl text-gray-400 text-lg md:text-xl">
            With an intuitive interface, robust event management tools, and
            interactive engagement features, we bridge the gap between
            organizers and attendees. Whether you're planning a cultural
            extravaganza, a tech fest, or a sports tournament, Festify is the
            perfect partner to make your event a grand success.
          </p>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E94560] mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {[
              "Event Listings",
              "Registration System",
              "Interactive Quizzes",
              "Real-time Notifications",
              "Automated Scheduling",
              "Analytics Dashboard"
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#292929] rounded-lg shadow-lg hover:shadow-xl transition text-white"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-center">{feature}</h3>
                <p className="mt-2 text-gray-400 text-center">
                  {feature} to enhance participant engagement and simplify event
                  management.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact"
          className="snap-start w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#292929] to-[#121212] px-6 md:px-12 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E94560] mb-4">
            Contact Us
          </h2>

          {/* Red Dotted Background Animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#E94560] rounded-full opacity-60 animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          <form className="w-full max-w-2xl z-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-[#1E1E1E] text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-[#E94560]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-[#1E1E1E] text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-[#E94560]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 mb-4 bg-[#1E1E1E] text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-[#E94560]"
            />
            <button className="bg-[#E94560] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C7324A] transition w-full">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="snap-start w-full h-20 bg-[#121212] flex justify-center items-center px-6 md:px-12">
          <p className="text-gray-400 text-center">
            &copy; 2025 Festify | All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
