import JobPosting from "./components/job-posting";
import Layout from "../../Layout/Layout";

const StartedScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <JobPosting />
        </Layout>
      </div>
    </div>
  );
};
export default StartedScreen;
