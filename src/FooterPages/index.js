import NavbarHeader from "../components/Layouts/Header/HeaderMain";
import Footer from "../client/Layout/Footer/Footer";
import PageData from "./components/PageData";

const Screen = () => {
  return (
    <>
      <NavbarHeader nonavbg={"true"} />
      <PageData />
      <Footer />
    </>
  );
};
export default Screen;
