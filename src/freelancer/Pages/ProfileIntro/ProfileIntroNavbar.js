import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
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
            <Link to="/">
              <Navbar.Brand>
                <img src={logo} className="img-fluid rounded-top" alt="" />
              </Navbar.Brand>
            </Link>
          </div>
          <Button
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            className="btn btn-primary"
          >
            Log out
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default ProfileIntroNavbar;
