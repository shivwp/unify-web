import Question from "./components/question";
import Layout from "../../Layout/Layout";
import Footer from "../../Layout/Footer/Footer";
import ProfileIntroNavbar from "../ProfileIntro/ProfileIntroNavbar";

const Screen = () => {
  return (
    <>
      <ProfileIntroNavbar />
      <Question />
      <Footer />
    </>
  );
};
export default Screen;
