import Layout from "../../Layout/Layout";
import AllDraftPostings from "./components/AllDraftPostings";

const DraftJobListScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <AllDraftPostings />
        </Layout>
      </div>
    </div>
  );
};
export default DraftJobListScreen;
