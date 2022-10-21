import TitleFourteen from "./components/title1";
import Layout from "../../../components/Layouts/Layout";

const TitleScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <TitleFourteen />
        </Layout>
      </div>
    </div>
  );
};
export default TitleScreen;
