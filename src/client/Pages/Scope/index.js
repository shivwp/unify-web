import Scope from "./components/scope";
import Layout from "../../Layout/Layout";

const scopeScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Scope />
        </Layout>
      </div>
    </div>
  );
};
export default scopeScreen;
