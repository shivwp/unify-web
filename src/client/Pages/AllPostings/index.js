import Layout from "../../Layout/Layout";
import AllPosting from "./components/AllPosting";

const JobListScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <AllPosting />
        </Layout>
      </div>
    </div>
  );
};
export default JobListScreen;
