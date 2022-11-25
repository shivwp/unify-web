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

const PublicRoutes = (props) => {
  const auth = useAuth();
  const userDetails = JSON.parse(localStorage.getItem("unify_user"));

  return (
    <>
      {auth ? (
        <>
          {userDetails?.user_type === "freelancer" ? (
            <Navigate to="/freelancer/dashboard" />
          ) : userDetails?.user_type === "client" ? (
            <Navigate to="/dashboard" />
          ) : null}
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoutes;
