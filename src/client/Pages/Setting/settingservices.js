import SettingConnectedServices from "./components/Setting/connecteservices";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingConnectedServices />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
