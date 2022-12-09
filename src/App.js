import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ClientRoutes from "./routing/ClientRoutes";
import CommanRoutes from "./routing/CommanRoutes";
import FreelancerRoutes from "./routing/FreelancerRoutes";
const FooterPages = lazy(() => import("./FooterPages"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CommanRoutes />
      <Routes>
        <Route path="/pages/:pagename" element={<FooterPages />} />
      </Routes>
      <ClientRoutes />
      <FreelancerRoutes />
    </Suspense>
  );
}

export default App;
