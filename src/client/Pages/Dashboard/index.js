import Dashboard from "./components/dashboard";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Dashboard />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
