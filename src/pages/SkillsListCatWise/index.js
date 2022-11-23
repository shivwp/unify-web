import React from "react";
import Footer from "../../client/Layout/Footer/Footer";
import NavbarHeader from "../../components/Layouts/Header/HeaderMain";
import SkillsListCatWise from "./components/SkillsListCatWise";

const index = () => {
  return (
    <>
      <NavbarHeader nonavbg={"true"} />
      <SkillsListCatWise />
      <Footer />
    </>
  );
};

export default index;
