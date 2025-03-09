import { useNavigate } from "react-router-dom";
import ImageContainer from "../components/ImageContainer";
import SignupForm from "../components/SignupForm";
import { useEffect } from "react";


const SignupPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('authToken') || '';
    token.length > 0 ? navigate('/dashboard') : '';
  }, [])
  return (
    <div className="flex h-screen w-full">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
