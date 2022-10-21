import SettingTeam from "./components/Setting/team";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingTeam />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
