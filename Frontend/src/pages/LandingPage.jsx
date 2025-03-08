import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
      <p className="mt-4">Join us and explore the features.</p>
      <div className="mt-6">
        <Link to="/login" className="bg-blue-500 px-6 py-2 rounded mr-2">Login</Link>
        <Link to="/signup" className="bg-green-500 px-6 py-2 rounded">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
