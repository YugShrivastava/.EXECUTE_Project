import { useNavigate } from "react-router-dom";
import OrganizerDashboard from "../components/OrganizerDashboard";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Initialize as null

  useEffect(() => {
    const token = localStorage.getItem("authToken") || "";

    if (!token) {
      navigate("/");
      return;
    }

    fetch("http://localhost:3000/api/auth/autho", {
      headers: { authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log("User data:", res);
      })
      .catch((err) => console.error("Error fetching user:", err));
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>; // Show loading state while fetching
  }

  if (user.role === "organizer") {
    return <OrganizerDashboard user={user} />;
  }

  return (
    <>
      <Dashboard user={user} />
    </>
  );
};

export default DashboardPage;
