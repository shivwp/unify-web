import SettingInfo from "./components/Setting/info";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingInfo />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
