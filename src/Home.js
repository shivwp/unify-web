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
      <Slider
        nonavbg={true}
        hero={homePageData?.hero}
        used_by={homePageData?.used_by}
      />
      <Services
        category={homePageData?.category}
        popular_service={homePageData?.popular_service}
      />
      <FreelanceWorld for_client={homePageData?.for_client} />
      <Findfreelance
        trusted_brands={homePageData?.trusted_brands}
        trusted_brand_description={homePageData?.trusted_brand_description}
        trusted_brand_title={homePageData?.trusted_brand_title}
      />
      <Footer />
    </>
  );
};

export default Home;
