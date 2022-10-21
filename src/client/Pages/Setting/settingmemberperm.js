import SettingMemberPermission from "./components/Setting/membershipperm";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingMemberPermission />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
