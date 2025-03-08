<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
=======
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> abd5866a1c36b1c8e79056fd5112e21221dc35f6
import authService from "../appWrite/auth";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
<<<<<<< HEAD
  const navigate = useNavigate(); // Initialize navigate
=======
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
>>>>>>> abd5866a1c36b1c8e79056fd5112e21221dc35f6

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userSession = await authService.loginUser(formData);
      console.log("Logged in successfully!", userSession);

<<<<<<< HEAD
      // Redirect user to dashboard or another page
      window.location.href = "/dashboard"; // Change the path as needed

=======
      if (userSession) {
        console.log("Navigating to /dashboard...");
        navigate("/dashboard"); // ✅ Fix: Ensure navigation works
      }
>>>>>>> abd5866a1c36b1c8e79056fd5112e21221dc35f6
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
      console.error("Login Error:", err);
    }
  };

  useEffect(() => {
    console.log('Hellow')
  }, [])

  return (
    <div className="w-1/2 h-screen flex items-center justify-center bg-gray-800 text-white">
      <form onSubmit={handleSubmit} className="w-3/4 bg-gray-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Welcome Back</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
