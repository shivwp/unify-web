import TitleBody from "./components/title-body";
import Layout from "../../../components/Layouts/Layout";

const TitleScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <TitleBody />
        </Layout>
      </div>
    </div>
  );
};
export default TitleScreen;
