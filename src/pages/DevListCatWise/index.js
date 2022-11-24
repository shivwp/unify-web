import React from "react";
import Footer from "../../client/Layout/Footer/Footer";
import NavbarHeader from "../../components/Layouts/Header/HeaderMain";
import DevListCatWise from "./components/DevListCatWise";

const index = () => {
  return (
    <>
      <NavbarHeader nonavbg={"true"} />
      <DevListCatWise />
      <Footer />
    </>
  );
};

export default index;
