import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken') || '';
    token.length > 0 ? navigate('/dashboard') : '';
  }, [])
  return (
    <div className="flex h-screen">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
