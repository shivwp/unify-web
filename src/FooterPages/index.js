import Footer from "../client/Layout/Footer/Footer";
import Layout from "../client/Layout/Layout";
import ProfileIntroNavbar from "../freelancer/Pages/ProfileIntro/ProfileIntroNavbar";
import PageData from "./components/PageData";

const Screen = () => {
  return (
    <div className="slider_pos nin_vh">
      <ProfileIntroNavbar />
      <PageData />
      <Footer />
    </div>
  );
};
export default Screen;
