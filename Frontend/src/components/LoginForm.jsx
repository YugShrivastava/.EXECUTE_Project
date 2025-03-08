import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../appWrite/auth";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
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