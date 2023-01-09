import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { onOnlineStatus } from "../../../redux/actions/authActions";
import { getClientDetails } from "../../../redux/actions/freelancerAction";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Header = (props) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [navOpen, SetnavOpen] = useState(false);
  const [activeNav, SetactiveNav] = useState("");
  const [isDownOpen, SetisDownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  let userDetails = JSON.parse(localStorage.getItem("unify_user"));
  const clientDetails = useSelector((state) => state.freelancer.clientDetails);
  const onlineStatus = useSelector((state) => state.auth.onlineStatus);
  const editClientProfile = useSelector(
    (state) => state.profile.editClientProfile
  );

  useEffect(() => {
    const data = {
      user_id: userDetails?.id,
    };
    setLoading(true);
    dispatch(getClientDetails(data, setLoading));
  }, [onlineStatus, editClientProfile]);

  useEffect(() => {
    if (clientDetails?.is_deleted) {
      localStorage.clear();
      window.location.reload();
    }
  }, [clientDetails]);

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
    setLoading(true);
    dispatch(onOnlineStatus(data, setLoading));
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
            {/* <div className="navabr_t_li">
              <Link to="/my-jobs">All Job Post</Link>
            </div> */}
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
            flip="true"
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
              <Link to="#">Overview</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/transaction-history">Transaction History</Link>
            </div>
          </NavDropdown>
        </div>

        <div className="w-100 no-border">
          <Link to="">
            <div className="navbar_btn talent_dropdown_cs my-1 report_left_caewe d-flex justify-content-between align-items-center">
              Messages
              <i className="bi bi-envelope font-size-20px"></i>
            </div>
          </Link>
        </div>
        <div className="w-100 no-border">
          <Link to="/help-support">
            <div className="navbar_btn talent_dropdown_cs my-2 report_left_caewe d-flex justify-content-between align-items-center">
              Help Support
              <i className="bi bi-question-lg font-size-20px"></i>
            </div>
          </Link>
        </div>
        <div className="w-100 no-border">
          <Link to="/notification">
            <div className="navbar_btn talent_dropdown_cs my-1 report_left_caewe d-flex justify-content-between align-items-center">
              Notification
              <i className="bi bi-bell font-size-20px"></i>
            </div>
          </Link>
        </div>
        {!localStorage.getItem("unify_token") && (
          <>
            <div className="d-flex justify-content-between smbtn_logsignup">
              <Link to="/signin">
                <button>Log In</button>
              </Link>
              <Link to="/signup">
                <button className="active_mmnuckwu">Signup now</button>
              </Link>
            </div>
          </>
        )}
      </>
    );
  };
  return (
    <>
      <div>
        <div className={`mobile_slide_menu ${activeNav}`}>
          <div className="text-left">
            <button
              className="nav_close_btn"
              onClick={() => {
                ToggleNav();
              }}
            >
              <i className="bi bi-x-lg font-size-20px"></i>
            </button>
          </div>
          <div className="navdata_li">
            <Link to="/what-is-unify">What Is Unify ?</Link>
          </div>
          <div className="navdata_li">
            <Link to="#0">Browse Jobs</Link>
          </div>
          <div className="navdata_li">
            <Link to="#0">Subscription</Link>
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
                <Link to="/dashboard">
                  <Navbar.Brand>
                    <img src={logo} className="img-fluid rounded-top" alt="" />
                  </Navbar.Brand>
                </Link>
              </div>
              <div>
                <div className="navv2verso_flxewd">
                  <div className="nav_pro_node">
                    <div className="nav_profile online_profile">
                      {clientDetails?.profile_image ? (
                        <img src={clientDetails?.profile_image} alt="" />
                      ) : (
                        <img
                          src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                          alt=""
                        />
                      )}
                    </div>
                    <NavDropdown
                      className="text-center nav_dropdown_profile custom_nav_profile_drp"
                      id="basic-nav-dropdown"
                    >
                      <div className="d-flex justify-content-center">
                        <div className="nav_p_d_profil">
                          {clientDetails?.profile_image ? (
                            <img src={clientDetails?.profile_image} alt="" />
                          ) : (
                            <img
                              src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                      <div className="pro_name_drop_u">
                        {clientDetails?.first_name} {clientDetails?.last_name}
                      </div>
                      <div className="pro_o_nme">Client</div>
                      <div className="drop_p_o_i">
                        <button
                          className={
                            clientDetails?.online_status === "online"
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
                            clientDetails?.online_status === "invisible"
                              ? "active_drop_poi"
                              : ""
                          }
                          value="invisible"
                          onClick={handleOnlineStatus}
                        >
                          Invisible
                        </button>
                      </div>
                      <div className="drop_li_poi">
                        <i className="bi bi-gear font-size-20px"></i>
                        <Link to="/profile-setting">Setting</Link>
                      </div>
                      <div className="drop_li_poi">
                        <i className="bi bi-box-arrow-right font-size-20px"></i>
                        <span
                          onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                            history("/signin");
                          }}
                        >
                          Log Out
                        </span>
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
                        <Link to="/post-your-job">Post A Job</Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to="/dashboard">My Jobs</Link>
                      </div>
                      {/* <div className="navabr_t_li">
                      <Link to="/my-jobs">All Job Post</Link>
                    </div> */}
                      <div className="navabr_t_li">
                        <Link to="/all-contracts">All Contracts</Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to="/management-board">Management Board</Link>
                      </div>
                    </NavDropdown>
                    <NavDropdown
                      flip="true"
                      className="navbar_btn talent_dropdown_cs "
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
                        <Link to="/talent-recently-viewed">
                          Recently Viewed
                        </Link>
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
                          <Link to="#">Overview</Link>
                        </div>
                        <div className="navabr_t_li">
                          <Link to="/transaction-history">
                            Transaction History
                          </Link>
                        </div>
                      </NavDropdown>
                    </div>
                    {/* <Nav.Link className="active_btn logout_btn_nav">
                    <Link to="/signin">Logout</Link>
                  </Nav.Link> */}
                    <Nav.Link
                      as={Link}
                      to="/help-support"
                      className="navbar_btn"
                    >
                      <i className="bi bi-question-lg font-size-20px"></i>
                    </Nav.Link>
                    <Link to="#" className="navbar_btn p-0">
                      <i className="bi bi-envelope font-size-20px"></i>
                    </Link>

                    <Nav.Link
                      as={Link}
                      to="/notification"
                      className="navbar_btn"
                    >
                      <i className="bi bi-bell font-size-20px"></i>
                    </Nav.Link>
                    <div className="nav_pro_node">
                      <div className="nav_profile">
                        {clientDetails?.profile_image ? (
                          <img src={clientDetails?.profile_image} alt="" />
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
                            {clientDetails?.profile_image ? (
                              <img src={clientDetails?.profile_image} alt="" />
                            ) : (
                              <img
                                src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                                alt=""
                              />
                            )}
                          </div>
                        </div>
                        <div className="pro_name_drop_u">
                          {clientDetails?.first_name} {clientDetails?.last_name}
                        </div>
                        <div className="pro_o_nme">
                          {clientDetails?.user_type}
                        </div>
                        <div className="drop_p_o_i">
                          <button
                            className={
                              clientDetails?.online_status === "online"
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
                              clientDetails?.online_status === "invisible"
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
                          <i className="bi bi-gear font-size-20px"></i>
                          <Link to="/profile-setting">Setting</Link>
                        </div>
                        <div className="drop_li_poi">
                          <i className="bi bi-box-arrow-right font-size-20px"></i>
                          <span
                            onClick={() => {
                              localStorage.clear();
                              history("/signin");
                              window.location.reload();
                            }}
                          >
                            Log Out
                          </span>
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

      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default Header;
