import TalentDiscover from "./components/talentdiscover";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <TalentDiscover />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
