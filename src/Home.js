import React from "react";
import { useEffect } from "react";
import Slider from "./components/slider";
import Services from "./components/services";
import FreelanceWorld from "./components/freelace-world";
import Findfreelance from "./components/find-freelance";
import Footer from "./client/Layout/Footer/Footer";
import Title from "./components/title";
import { useDispatch, useSelector } from "react-redux";
import { getHomePageData } from "./redux/actions/authActions";
import { useSelect } from "@mui/base";

const Home = () => {
  const dispatch = useDispatch();

  const homePageData = useSelector((state) => state?.auth?.homePageData);

  useEffect(() => {
    Title("");
    dispatch(getHomePageData());
  }, []);

  return (
    <>
      <Slider nonavbg={true} hero={homePageData?.hero} />
      <Services category={homePageData?.category} />
      <FreelanceWorld for_client={homePageData?.for_client} />
      <Findfreelance trusted_brands={homePageData?.trusted_brands} />
      <Footer />
    </>
  );
};

export default Home;
