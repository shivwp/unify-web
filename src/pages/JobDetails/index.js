import React from "react";
import Footer from "../../client/Layout/Footer/Footer";
import NavbarHeader from "../../components/Layouts/Header/HeaderMain";
import JobDetails from "./components/JobDetails";

const index = () => {
  return (
    <>
      <NavbarHeader nonavbg={"true"} />
      <JobDetails />
      <Footer />
    </>
  );
};

export default index;
