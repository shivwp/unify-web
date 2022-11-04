import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavbarHeader = (props) => {
  const [navOpen, SetnavOpen] = useState(false);
  const [activeNav, SetactiveNav] = useState("");

  function ToggleNav() {
    SetnavOpen(!navOpen);
    if (!navOpen) {
      SetactiveNav("msm_active");
      document.querySelectorAll(".ri_twh")[0].classList.add("novisible");
    } else {
      SetactiveNav("");
      document.querySelectorAll(".ri_twh")[0].classList.remove("novisible");
    }
  }

  return (
    <div>
      <div className={`mobile_slide_menu ${activeNav}`}>
        <div className="text-left">
          <button
            className="nav_close_btn"
            onClick={() => {
              ToggleNav();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className="navdata_li">
          <Link to="/">HOW IT WORKS</Link>
        </div>
        <div className="navdata_li">
          <Link to="/">BROWSE JOBS</Link>
        </div>
        <div className="logout_btn_mob">
          <Link to={`/signin`}>
            <button>Login</button>
          </Link>
        </div>
        <div className="logout_btn_mob">
          <Link to={`/signup`}>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`nav_realat external_nav_padding ${
          props.nonavbg === true ? "no-bg-image" : ""
        }`}
      >
        <Container>
          <div className="w-100 d-flex justify-content-between align-items-center flex_rev">
            <div className="width_100_sm">
              <Link to="/">
                <Navbar.Brand>
                  <img src={logo} className="img-fluid rounded-top" alt="" />
                </Navbar.Brand>
              </Link>
            </div>
            <div>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                  ToggleNav();
                }}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link as={Link} to="/" className="navbar_btn">
                    How it works
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" className="navbar_btn">
                    Browse Jobs
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Signin" className="navbar_btn">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Signup" className="active_btn">
                    Signup now
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
