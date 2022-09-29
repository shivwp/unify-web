import React from "react";
import AddCompAddress from "./components/AddCompAddress";
import Footer from './components/footer';
import NavbarLogin from './components/navbarlogin';


const AddCompanyAddress = () => {
  return (
    <>
      <div className="slider_pos nin_vh">
        <NavbarLogin />
        <AddCompAddress />
        <Footer />
      </div>
    </>
  );
};

export default AddCompanyAddress;
