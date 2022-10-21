import React from "react";
import EditCompAddress from "./components/EditCompAddress";
import Layout from "../../Layout/Layout";

const EditCompanyAddress = () => {
  return (
    <>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <EditCompAddress />
        </Layout>
      </div>
    </>
  );
};

export default EditCompanyAddress;
