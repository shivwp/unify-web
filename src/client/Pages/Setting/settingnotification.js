import SettingNotification from "./components/Setting/notification";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingNotification />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
