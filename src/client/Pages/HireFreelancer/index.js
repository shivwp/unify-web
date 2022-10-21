import HireFreelancer from "./components/hire-freelancer";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <HireFreelancer />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
