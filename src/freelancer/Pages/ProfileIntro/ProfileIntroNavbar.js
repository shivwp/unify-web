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
              {/* <div className="drop_p_o_i">
                <button
                  className={
                    userDetails?.online_status === "online"
                      ? "active_drop_poi"
                      : ""
                  }
                  value={"online"}
                  // onClick={handleOnlineStatus}
                >
                  Online
                </button>
                <button
                  className={
                    userDetails?.online_status === "invisible"
                      ? "active_drop_poi"
                      : ""
                  }
                  // onClick={handleOnlineStatus}
                  value={"invisible"}
                >
                  Invisible
                </button>
              </div> */}
              {/* <div className="drop_li_poi">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
                <Link to="/setting-myinfo">Setting</Link>
              </div> */}
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
        </div>
      </Container>
    </Navbar>
  );
};

export default ProfileIntroNavbar;
