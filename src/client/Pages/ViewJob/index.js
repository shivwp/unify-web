import ViewJob from "./components/viewjob";
import Layout from "../../../components/Layouts/Layout";

const JobDesc = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <ViewJob />
        </Layout>
      </div>
    </div>
  );
};
export default JobDesc;
