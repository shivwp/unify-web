import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ClientRoutes from "./routing/ClientRoutes";
import CommanRoutes from "./routing/CommanRoutes";
import FreelancerRoutes from "./routing/FreelancerRoutes";
import LoadingSpinner from "./components/LoadingSpinner";
const FooterPages = lazy(() => import("./FooterPages"));
const Subscription = lazy(() => import("./client/Pages/Subscription"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const HelpSupport = lazy(() => import("./client/Pages/HelpSupport"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CommanRoutes />
      <Routes>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/submit-testimonial/:id" element={<Testimonial />} />
        <Route path="/pages/:pagename" element={<FooterPages />} />
        <Route path="/help-support" element={<HelpSupport />} />
      </Routes>
      <ClientRoutes />
      <FreelancerRoutes />
      {/* <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </Suspense>
  );
}

export default App;
