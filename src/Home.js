import React from "react";
import { useEffect } from "react";
import Slider from "./components/slider";
import Services from "./components/services";
import FreelanceWorld from "./components/freelace-world";
import Findfreelance from "./components/find-freelance";
import Footer from "./client/Layout/Footer/Footer";
import Title from "./components/title";

const Home = () => {
  useEffect(() => {
    Title("");
  }, []);

  return (
    <>
      <Slider nonavbg={true} />
      <Services />
      <FreelanceWorld />
      <Findfreelance />
      <Footer />
    </>
  );
};

export default Home;
