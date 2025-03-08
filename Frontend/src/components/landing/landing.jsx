import React from "react";

const Landing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">FestX: The Ultimate College Fest Management Platform</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Seamless event management, registrations, and interactive challenges – all in one place.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Event Listings</h3>
            <p className="text-gray-400 mt-2">Explore events, schedules, and details in one place.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Participant Registration</h3>
            <p className="text-gray-400 mt-2">Seamless individual and team sign-ups.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">Quizzes & Challenges</h3>
            <p className="text-gray-400 mt-2">Engage with coding contests and MCQs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Best Fest Management?</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p className="text-gray-400">&copy; 2025 FestX | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
