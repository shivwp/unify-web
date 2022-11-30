import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
const Signup = lazy(() => import("../client/Pages/Signup"));
const Signin = lazy(() => import("../client/Pages/Signin"));
const VerifyForgotOTP = lazy(() => import("../components/VerifyForgotOTP"));
const ForgotPass = lazy(() => import("../components/ForgotPass"));
const ResetPass = lazy(() => import("../components/ResetPass"));
const VerifySignUp = lazy(() => import("../components/VerifySignUp"));

const CommanRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-signup" element={<VerifySignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/verify-forgot-otp" element={<VerifyForgotOTP />} />
        <Route path="/reset-password" element={<ResetPass />} />
      </Route>
    </Routes>
  );
};

export default CommanRoutes;
