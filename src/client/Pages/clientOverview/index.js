import Layout from "../../Layout/Layout";
import Overview from "./components/Overview";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Overview />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
