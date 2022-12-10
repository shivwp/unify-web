import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const auth = sessionStorage.getItem("unify_token");
  const userDetails = JSON.parse(sessionStorage.getItem("unify_user"));

  return (
    <>
      {auth ? (
        <>
          {userDetails?.user_type === "freelancer" ? (
            <>
              {userDetails?.is_profile_complete === true ? (
                <Navigate to="/freelancer/dashboard" />
              ) : (
                <Navigate to="/freelancer/profile-intro/question1" />
              )}
            </>
          ) : userDetails?.user_type === "client" ? (
            <>
              {userDetails?.is_profile_complete === true ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/businesssize" />
              )}
            </>
          ) : null}
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoutes;
