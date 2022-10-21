import MyJobs from "./components/myjobs";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <MyJobs />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
