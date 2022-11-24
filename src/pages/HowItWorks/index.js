import React from "react";
import Footer from "../../client/Layout/Footer/Footer";
import NavbarHeader from "../../components/Layouts/Header/HeaderMain";
import HowItWorks from "./components/HowItWorks";

const index = () => {
  return (
    <>
      <NavbarHeader nonavbg={"true"} />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default index;
