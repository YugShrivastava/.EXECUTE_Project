import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import authService from "../appWrite/auth";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "role",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userSession = await authService.loginUser(formData);
      console.log("Logged in successfully!", userSession);
      if (userSession) {
        console.log("Navigating to /dashboard...");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      console.error("Login Error:", err);
    }
  };

  useEffect(() => {
    console.log("Hello");
  }, []);

  return (
    <>
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
    <div className="w-screen h-screen bg-[#0D0D0D] text-[#F1F1F1] flex items-center justify-center relative overflow-hidden">
      {/* Full-Width Background Gradient */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-r from-[#1E1E1E] to-[#292929] opacity-80 animate-gradient z-0" />

      {/* Login Form Container */}
      <motion.div
        className="w-full max-w-md bg-[#1E1E1E] p-8 rounded-lg shadow-2xl z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-[#E94560]">
          Welcome Back
        </h2>

        {error && (
          <motion.p
            className="text-[#E94560] mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-400 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded bg-[#292929] text-white border border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560] transition"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-[#292929] text-white border border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560] transition"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded bg-[#292929] text-white border border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560] transition"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-400 font-medium">Role</label>
            <select
              name="role"
              className="w-full p-3 rounded bg-[#292929] text-white border border-[#E94560] focus:outline-none focus:ring-2 focus:ring-[#E94560] transition"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Participant">Participant</option>
              <option value="Organizer">Organizer</option>
            </select>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#E94560] p-3 rounded-lg font-semibold text-white hover:bg-[#C7324A] transition shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        {/* Optional Link to Sign Up */}
        <p className="mt-4 text-center text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#E94560] hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
    </>
  );
};

export default LoginForm;