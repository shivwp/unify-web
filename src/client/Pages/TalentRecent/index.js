import TalentRecent from "./components/talentrecenviewed";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <TalentRecent />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
