import React from "react";
import { Button, Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const ProfileIntroNavbar = () => {
  const navigate = useNavigate();
  const userDetails = JSON.parse(sessionStorage.getItem("unify_user"));
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

          {userDetails?.is_profile_complete === false ? (
            <div className="nav_pro_node">
              <div className="nav_profile">
                {userDetails?.profile_image ? (
                  <img src={userDetails?.profile_image} alt="" />
                ) : (
                  <img
                    src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                    alt=""
                  />
                )}
              </div>
              <NavDropdown
                className=" text-center nav_dropdown_profile custom_nav_profile_drp"
                id="basic-nav-dropdown"
              >
                <div className="d-flex justify-content-center">
                  <div className="nav_p_d_profil">
                    <img
                      src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pro_name_drop_u">
                  {userDetails?.first_name} {userDetails?.last_name}
                </div>
                <div className="pro_o_nme">{userDetails?.user_type}</div>
                <div className="drop_li_poi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                  <span
                    onClick={() => {
                      sessionStorage.clear();
                      navigate("/signin");
                      window.location.reload();
                    }}
                  >
                    Log Out
                  </span>
                </div>
              </NavDropdown>
            </div>
          ) : null}
        </div>
      </Container>
    </Navbar>
  );
};

export default ProfileIntroNavbar;
