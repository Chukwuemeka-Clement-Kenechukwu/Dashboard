import { Children } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const password = localStorage.getItem("Token");

  if (!password) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
