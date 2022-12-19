import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ClientRoutes from "./routing/ClientRoutes";
import CommanRoutes from "./routing/CommanRoutes";
import FreelancerRoutes from "./routing/FreelancerRoutes";
import LoadingSpinner from "./components/LoadingSpinner";
const FooterPages = lazy(() => import("./FooterPages"));
const Subscription = lazy(() => import("./client/Pages/Subscription"));
const Testimonial = lazy(() => import("./components/Testimonial"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CommanRoutes />
      <Routes>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/submit-testimonial/:id" element={<Testimonial />} />
        <Route path="/pages/:pagename" element={<FooterPages />} />
      </Routes>
      <ClientRoutes />
      <FreelancerRoutes />
    </Suspense>
  );
}

export default App;
