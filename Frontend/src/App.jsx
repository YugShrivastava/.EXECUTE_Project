import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "./appWrite/auth";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import Land from "./pages/LandingPage";
import Dashboard from "./components/Dashboard";
import OrganizerDashboard from "./components/OrganizerDashboard";
import LandingPage from "./pages/LandingPage";
import Feedback from "./pages/Feedback";

const App = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = () => {
      setLoading(true);
      const token = localStorage.getItem("authToken") || "";
      if (token.length > 0) {
        fetch("http://localhost:3000/api/auth/autho", {
          headers: { authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((res) => setUser(res[0]))
          .catch((err) => console.log(err));
      } else setUser("");
      setLoading(false);
    };

    checkUser();
  }, []);

  if (loading)
    return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};

export default App;
