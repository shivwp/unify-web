import React from "react";
import AddCompAddress from "./components/AddCompAddress";
import Layout from "../../../components/Layouts/Layout";

const AddCompanyAddress = () => {
  return (
    <>
      <div className="slider_pos nin_vh">
        <Layout webtype="client">
          <AddCompAddress />
        </Layout>
      </div>
    </>
  );
};

export default AddCompanyAddress;
