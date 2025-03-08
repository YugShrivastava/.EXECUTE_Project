import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "./appWrite/auth";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import Land from './pages/LandingPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const loggedInUser = await authService.getCurrentUser();
        console.log("Current User:", loggedInUser);
        setUser(loggedInUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [user]);

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Land />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <SignupPage />} />
      <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
