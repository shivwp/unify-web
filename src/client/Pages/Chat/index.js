import Message from "./components/message";
import Layout from "../../../components/Layouts/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Message />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
