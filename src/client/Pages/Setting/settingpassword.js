import SettingPass from "./components/Setting/password";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingPass />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
