import ManagementBoard from "./components/managementboard";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <ManagementBoard />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
