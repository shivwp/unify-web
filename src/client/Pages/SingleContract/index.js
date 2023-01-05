import React from "react";
import SingleContracts from "./components/SingleContracts";
import Layout from "../../Layout/Layout";

const Index = () => {
  return (
    <div>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <SingleContracts />
        </Layout>
      </div>
    </div>
  );
};

export default Index;
