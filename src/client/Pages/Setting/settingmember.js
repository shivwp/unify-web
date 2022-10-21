import SettingMember from "./components/Setting/membership";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingMember />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
