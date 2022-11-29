import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const ProfileIntroNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className={`nav_realat external_nav_padding navv2padding`}
    >
      <Container>
        <div className="w-100 d-flex justify-content-between align-items-center flex_rev newnav_v2_flxew">
          <div className="width_100_sm newnav_v2_wauto">
            <a href="/">
              <Navbar.Brand>
                <img src={logo} className="img-fluid rounded-top" alt="" />
              </Navbar.Brand>
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default ProfileIntroNavbar;
