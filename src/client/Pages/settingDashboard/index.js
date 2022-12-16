import Layout from "../../Layout/Layout";
import SettingDashboard from "./components/SettingDashboard";

const ProfileDashboard = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SettingDashboard />
        </Layout>
      </div>
    </div>
  );
};
export default ProfileDashboard;
