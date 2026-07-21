import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("Token", "123abc");

    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
};
