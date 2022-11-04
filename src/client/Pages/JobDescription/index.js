import JobDescription from "./components/description";
import Layout from "../../Layout/Layout";

const JobDesc = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <JobDescription />
        </Layout>
      </div>
    </div>
  );
};
export default JobDesc;
