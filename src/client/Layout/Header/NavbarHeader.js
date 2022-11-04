import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { onOnlineStatus } from "../../../redux/actions/authActions";

const Header = (props) => {
  const dispatch = useDispatch();
  const [navOpen, SetnavOpen] = useState(false);
  const [activeNav, SetactiveNav] = useState("");
  const [isDownOpen, SetisDownOpen] = useState(false);
  let userDetails = JSON.parse(localStorage.getItem("unify_user"));

  function ToggleNav() {
    SetnavOpen(!navOpen);
    if (!navOpen) {
      SetactiveNav("msm_active");
    } else {
      SetactiveNav("");
    }
  }
  function ToggleDown() {
    SetisDownOpen(!isDownOpen);
  }

  const handleOnlineStatus = (e) => {
    const data = {
      online_status: e.target.value,
    };

    userDetails.online_status = e.target.value;
    localStorage.setItem("unify_user", JSON.stringify(userDetails));

    dispatch(onOnlineStatus(data));
  };

  const MenuDown = () => {
    return (
      <>
        <div className="w-100 d-flex justify-content-between align-items-center flex_rev newnav_v2_flxew pb-0 no-border">
          <NavDropdown
            className="navbar_btn b_job_l_sx nenav_bddowniu"
            title="Browse Jobs"
            id="navbarScrollingDropdown"
          >
            <div className="navabr_t_li">
              <Link to="/gettingstarted">Post A Job</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/dashboard">My Jobs</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/my-jobs">All Job Post</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/all-contracts">All Contracts</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/management-board">Management Board</Link>
            </div>
          </NavDropdown>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center flex_rev newnav_v2_flxew pb-0 no-border">
          <NavDropdown
            className="navbar_btn b_job_l_sx nenav_bddowniu"
            title="Talent"
            id="navbarScrollingDropdown"
          >
            <div className="navabr_t_li">
              <Link to="/talent-discover">Discover</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/talent-your-hires">Your Hires</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/byo-talent">BYO Talent</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/talent-recently-viewed">Recently Viewed</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/talent-saved">Saved talent</Link>
            </div>
          </NavDropdown>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center flex_rev newnav_v2_flxew pb-0 no-border">
          <NavDropdown
            flip="true"
            className="navbar_btn talent_dropdown_cs nenav_bddowniu report_left_caewe"
            title="Reports"
            id="navbarScrollingDropdown"
          >
            <div className="navabr_t_li">
              <Link to="/transaction-history">Transaction History</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/message">Message</Link>
            </div>
          </NavDropdown>
        </div>
        <div className="d-flex justify-content-between smbtn_logsignup">
          <Link to="/signin">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button className="active_mmnuckwu">Signup now</button>
          </Link>
        </div>
      </>
    );
  };
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
          <Link to="#0">HOW IT WORKS</Link>
        </div>
        <div className="navdata_li">
          <Link to="#0">BROWSE JOBS</Link>
        </div>
        <div className="logout_btn_mob">
          <button>Login</button>
        </div>
        <div className="logout_btn_mob">
          <button>Logout</button>
        </div>
      </div>
      <Navbar
        collapseOnSelect
        expand="md"
        className={`nav_realat external_nav_padding ${
          isDownOpen === true ? "minheifghtx_smmenu" : ""
        } navv2padding ${props.dashboardBgNav}`}
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
            <div>
              <div className="navv2verso_flxewd">
                <Link to="#" className="navbar_btn p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </Link>

                <Link className="navbar_btn" to="/notification">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    className="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                </Link>
                <div className="nav_pro_node">
                  <div className="nav_profile online_profile">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt=""
                    />
                  </div>
                  <NavDropdown
                    className=" text-center nav_dropdown_profile custom_nav_profile_drp"
                    id="basic-nav-dropdown"
                  >
                    <div className="d-flex justify-content-center">
                      <div className="nav_p_d_profil">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="pro_name_drop_u">John Doe</div>
                    <div className="pro_o_nme">Client</div>
                    <div className="drop_p_o_i">
                      <button
                        className={
                          userDetails?.online_status === "online"
                            ? "active_drop_poi"
                            : ""
                        }
                        value="online"
                        onClick={handleOnlineStatus}
                      >
                        Online
                      </button>
                      <button
                        className={
                          userDetails?.online_status === "invincible"
                            ? "active_drop_poi"
                            : ""
                        }
                        value="invincible"
                        onClick={handleOnlineStatus}
                      >
                        Invisible
                      </button>
                    </div>
                    <div className="drop_li_poi">
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
                    </div>
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
                      <Link to="/signin">Log Out</Link>
                    </div>
                  </NavDropdown>
                </div>
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                  className={`${
                    isDownOpen === true ? "close_iconsvgciweuw" : ""
                  }`}
                  onClick={() => {
                    ToggleDown();
                  }}
                />
              </div>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <NavDropdown
                    className="navbar_btn b_job_l_sx"
                    title="Browse Jobs"
                    id="navbarScrollingDropdown"
                  >
                    <div className="navabr_t_li">
                      <Link to="/gettingstarted">Post A Job</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/dashboard">My Jobs</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/my-jobs">All Job Post</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/all-contracts">All Contracts</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/management-board">Management Board</Link>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    flip="true"
                    className="navbar_btn talent_dropdown_cs"
                    title="Talent"
                    id="navbarScrollingDropdown"
                  >
                    <div className="navabr_t_li">
                      <Link to="/talent-discover">Discover</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/talent-your-hires">Your Hires</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/byo-talent">BYO Talent</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/talent-recently-viewed">Recently Viewed</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/talent-saved">Saved talent</Link>
                    </div>
                  </NavDropdown>
                  <div>
                    <NavDropdown
                      flip="true"
                      className="navbar_btn talent_dropdown_cs report_left_caewe"
                      title="Reports"
                      id="navbarScrollingDropdown"
                    >
                      <div className="navabr_t_li">
                        <Link to="/transaction-history">
                          Transaction History
                        </Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to="/message">Message</Link>
                      </div>
                    </NavDropdown>
                  </div>
                  {/* <Nav.Link className="active_btn logout_btn_nav">
                    <Link to="/signin">Logout</Link>
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/help-support" className="navbar_btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        fill="currentColor"
                        className="bi bi-question-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"
                        />
                      </svg>
                  </Nav.Link>
                  <Link to="#" className="navbar_btn p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </Link>

                  <Nav.Link as={Link} to="/notification" className="navbar_btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      className="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </Nav.Link>
                  <div className="nav_pro_node">
                    <div className="nav_profile">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        alt=""
                      />
                    </div>
                    <NavDropdown
                      className=" text-center nav_dropdown_profile custom_nav_profile_drp"
                      id="basic-nav-dropdown"
                    >
                      <div className="d-flex justify-content-center">
                        <div className="nav_p_d_profil">
                          <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="pro_name_drop_u">John Doe</div>
                      <div className="pro_o_nme">Client</div>
                      <div className="drop_p_o_i">
                        <button
                          className={
                            userDetails?.online_status === "online"
                              ? "active_drop_poi"
                              : ""
                          }
                          value={"online"}
                          onClick={handleOnlineStatus}
                        >
                          Online
                        </button>
                        <button
                          className={
                            userDetails?.online_status === "invisible"
                              ? "active_drop_poi"
                              : ""
                          }
                          onClick={handleOnlineStatus}
                          value={"invisible"}
                        >
                          Invisible
                        </button>
                      </div>
                      <div className="drop_li_poi">
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
                      </div>
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
                        <Link to="/signin">Log Out</Link>
                      </div>
                    </NavDropdown>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
          {isDownOpen === true ? <MenuDown /> : ""}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
