import YourHires from "./components/yourhires";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <YourHires />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
