import React from "react";
import EditCompAddress from "./components/EditCompAddress";
import Footer from "./components/footer";
import NavbarLogin from "./components/navbarlogin";

const EditCompanyAddress = () => {
  return (
    <>
      <div className="slider_pos nin_vh">
        <NavbarLogin />
        <EditCompAddress />
        <Footer />
      </div>
    </>
  );
};

export default EditCompanyAddress;
