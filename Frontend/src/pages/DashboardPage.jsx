import { useNavigate } from "react-router-dom";
import authService from "../appWrite/auth";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authService.logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2">You are logged in.</p>
      <button onClick={handleLogout} className="mt-6 bg-red-500 px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default DashboardPage;
