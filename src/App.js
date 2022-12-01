import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ClientRoutes from "./routing/ClientRoutes";
import CommanRoutes from "./routing/CommanRoutes";
import FreelancerRoutes from "./routing/FreelancerRoutes";

const Home = lazy(() => import("./Home"));
const FooterPages = lazy(() => import("./FooterPages"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const BrowseJobs = lazy(() => import("./pages/BrowseJobs"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const SkillsListCatWise = lazy(() => import("./pages/SkillsListCatWise"));
const DevListCatWise = lazy(() => import("./pages/DevListCatWise"));
const Testimonial = lazy(() => import("./components/Testimonial"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommanRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/browse-jobs" element={<BrowseJobs />} />
        <Route path="/cat-skills/:category" element={<SkillsListCatWise />} />
        <Route path="/skill-dev/:skill" element={<DevListCatWise />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/pages/:pagename" element={<FooterPages />} />
        <Route path="/submit-testimonial/:id" element={<Testimonial />} />
      </Routes>

      <ClientRoutes />
      <FreelancerRoutes />
    </Suspense>
  );
}

export default App;
