import React from "react";
import Footer from "../../client/Layout/Footer/Footer";
import NavbarHeader from "../../components/Layouts/Header/HeaderMain";
import BrowseJobs from "./components/BrowseJobs";

const index = () => {
  return (
    <>
      <NavbarHeader nonavbg={"true"} />
      <BrowseJobs />
      <Footer />
    </>
  );
};

export default index;
