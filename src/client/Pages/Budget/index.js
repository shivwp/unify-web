import Budget from "./components/budget";
import Layout from "../../Layout/Layout";

const BudgetScreen = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <Budget />
        </Layout>
      </div>
    </div>
  );
};
export default BudgetScreen;
