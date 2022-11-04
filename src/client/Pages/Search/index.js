import Search from "./components/search";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Search />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
