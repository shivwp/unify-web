import HelpSupport from "./components/helpsupport";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <HelpSupport />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
