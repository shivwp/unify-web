import AllContracts from "./components/allcontracts";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <AllContracts />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
