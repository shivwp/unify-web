import SettingBilling from "./components/Setting/billing";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingBilling />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
