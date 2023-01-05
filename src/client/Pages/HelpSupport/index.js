import HelpSupport from "./components/helpsupport";
import Layout from "../../Layout/Layout";
import Footer from "../../../freelancer/Layout/Footer/Footer";
import ProfileIntroNavbar from "../../../freelancer/Pages/ProfileIntro/ProfileIntroNavbar";

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
