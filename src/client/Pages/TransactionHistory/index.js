import TransactionHistory from "./components/transactionhistory";
import Layout from "../../Layout/Layout";

const Screen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <TransactionHistory />
        </Layout>
      </div>
    </div>
  );
};
export default Screen;
