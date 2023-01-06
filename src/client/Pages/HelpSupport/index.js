import HelpSupport from "./components/helpsupport";
import Layout from "../../Layout/Layout";
import ProfileIntroNavbar from "../../../freelancer/Pages/ProfileIntro/ProfileIntroNavbar";
import Footer from "../../Layout/Footer/Footer";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <ProfileIntroNavbar />
        <HelpSupport />
        <Footer />
      </div>
    </div>
  );
};
export default Screen;
