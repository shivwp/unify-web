import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
const Signup = lazy(() => import("../client/Pages/Signup"));
const Signin = lazy(() => import("../client/Pages/Signin"));
const VerifyForgotOTP = lazy(() => import("../components/VerifyForgotOTP"));
const ForgotPass = lazy(() => import("../components/ForgotPass"));
const ResetPass = lazy(() => import("../components/ResetPass"));
const VerifySignUp = lazy(() => import("../components/VerifySignUp"));
const Home = lazy(() => import("../Home"));
const HowItWorks = lazy(() => import("../pages/HowItWorks"));
const BrowseJobs = lazy(() => import("../pages/BrowseJobs"));

const JobDetails = lazy(() => import("../pages/JobDetails"));
const SkillsListCatWise = lazy(() => import("../pages/SkillsListCatWise"));
const DevListCatWise = lazy(() => import("../pages/DevListCatWise"));
const Testimonial = lazy(() => import("../components/Testimonial"));

const CommanRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-signup" element={<VerifySignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/verify-forgot-otp" element={<VerifyForgotOTP />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/cat-skills/:category" element={<SkillsListCatWise />} />
        <Route path="/skill-dev/:skill" element={<DevListCatWise />} />
        <Route path="/job-details/:id" element={<JobDetails />} />

        <Route path="/submit-testimonial/:id" element={<Testimonial />} />
      </Route>
    </Routes>
  );
};

export default CommanRoutes;
