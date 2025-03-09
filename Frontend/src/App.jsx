import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import Feedback from "./pages/Feedback";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = () => {
      setLoading(true);
      const token = localStorage.getItem("authToken") || "";
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
