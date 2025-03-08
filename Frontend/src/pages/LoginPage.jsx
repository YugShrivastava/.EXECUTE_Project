import ImageContainer from "../components/ImageContainer";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {

  return (
    <div className="flex h-screen">
      <LoginForm />
      <ImageContainer />
    </div>
  );
};

export default LoginPage;
