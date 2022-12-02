import Layout from "../../Layout/Layout";
import PostYourJobNow from "./components/PostYourJobNow";

const PostYourJobScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <PostYourJobNow />
        </Layout>
      </div>
    </div>
  );
};
export default PostYourJobScreen;
