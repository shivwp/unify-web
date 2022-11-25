import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("unify_access");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = (props) => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
