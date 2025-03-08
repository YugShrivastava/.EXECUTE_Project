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
    console.log('Hello');
  }, []);

  return (
    <div className="w-1/2 h-screen flex items-center justify-center" style={{ backgroundColor: "#020202" }}>
      <form onSubmit={handleSubmit} className="w-3/4 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-400">Welcome Back</h2>

        {error && <p className="text-red-300 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-2 text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-400">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded bg-gray-800 text-white border border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="w-full bg-red-500 p-3 rounded hover:bg-red-600 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
