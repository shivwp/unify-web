import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = sessionStorage.getItem("unify_token");

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
