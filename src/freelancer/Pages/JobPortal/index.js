import JobPortal from "../../components/job-portal";
import Layout from "../../Layout/Layout";

const portalScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout>
          <JobPortal />
        </Layout>
      </div>
    </div>
  );
};
export default portalScreen;
