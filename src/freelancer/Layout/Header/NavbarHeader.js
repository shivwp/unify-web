import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onOnlineStatus } from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { getSingleFreelancer } from "../../../redux/actions/freelancerAction";

const NavbarHeader = (props) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [navOpen, SetnavOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeNav, SetactiveNav] = useState("");
  const [isDownOpen, SetisDownOpen] = useState(false);
  const onlineStatus = useSelector((state) => state?.auth?.onlineStatus);
  const singleFreelancer = useSelector(
    (state) => state.freelancer.singleFreelancer
  );
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
  useEffect(() => {
    setLoading(true);
    dispatch(getSingleFreelancer(userDetails?.id, setLoading));
  }, [onlineStatus]);

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
            title="Find Work"
            id="navbarScrollingDropdown"
          >
            <div className="navabr_t_li">
              <Link to="/freelancer/project-search">Find Work</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/project-search/saved">Saved Jobs</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/AllProposals">Proposals</Link>
            </div>
            {/* <div className="navabr_t_li">
              <Link to="/freelancer/profile">Profile</Link>
            </div> */}
          </NavDropdown>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center flex_rev newnav_v2_flxew pb-0 no-border">
          <NavDropdown
            className="navbar_btn browseJobs_dropdown_cs nenav_bddowniu report_left_caewe"
            title="Browse Jobs"
            id="navbarScrollingDropdown"
          >
            <div className="navabr_t_li">
              <Link to="/freelancer/my-contract">My Jobs</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/all-contracts">All Contracts</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/work-diary">Management Board</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/goals">Goals</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/add-work-diary">Work Diary</Link>
            </div>
          </NavDropdown>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center flex_rev newnav_v2_flxew pb-0 no-border">
          <NavDropdown
            flip="true"
            className="navbar_btn talent_dropdown_cs nenav_bddowniu report_left_caewe navbarResp"
            title="Reports"
            id="navbarScrollingDropdown"
          >
            <div className="navabr_t_li">
              <Link to="/freelancer/overview">Overview</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/my-reports">My Reports</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/billing-earning">Billings & Earnings</Link>
            </div>
            <div className="navabr_t_li">
              <Link to="/freelancer/unicoin-history">UniCoins History</Link>
            </div>
            {/* <div className="navabr_t_li">
              <Link to="/freelancer/direct-contract">Direct Contracts</Link>
            </div> */}
            <div className="navabr_t_li">
              <Link to="/freelancer/transaction-history">
                Transaction History
              </Link>
            </div>
          </NavDropdown>
        </div>

        <div className="w-100 no-border">
          <Link to="/freelancer/chat">
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
          <Link to="/freelancer/notification">
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
          <Link to="/how-it-works">HOW IT WORKS</Link>
        </div>
        <div className="navdata_li">
          <Link to="/browse-jobs">BROWSE JOBS</Link>
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
              <Link to="/freelancer/dashboard">
                <Navbar.Brand>
                  <img src={logo} className="img-fluid rounded-top" alt="" />
                </Navbar.Brand>
              </Link>
            </div>
            <div>
              <div className="navv2verso_flxewd">
                <div className="nav_pro_node">
                  <div className="nav_profile online_profile">
                    {singleFreelancer?.basic_info?.profile_image ? (
                      <img
                        src={singleFreelancer?.basic_info?.profile_image}
                        alt=""
                      />
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
                        <Link to="/freelancer/profile">
                          {singleFreelancer?.basic_info?.profile_image ? (
                            <img
                              src={singleFreelancer?.basic_info?.profile_image}
                              alt=""
                            />
                          ) : (
                            <img
                              src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                              alt=""
                            />
                          )}
                        </Link>
                      </div>
                    </div>
                    <div className="pro_name_drop_u">
                      {singleFreelancer?.basic_info?.first_name}{" "}
                      {singleFreelancer?.basic_info?.last_name}
                    </div>
                    <div className="pro_o_nme">Freelancer</div>
                    <div className="drop_p_o_i">
                      <button
                        className={
                          singleFreelancer?.basic_info?.online_status ===
                          "online"
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
                          singleFreelancer?.basic_info?.online_status ===
                          "invisible"
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
                      <Link to="/freelancer/contact-info">Setting</Link>
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
                    title="Find Work"
                    id="navbarScrollingDropdown"
                  >
                    <div className="navabr_t_li">
                      <Link to="/freelancer/project-search">Find Work</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/freelancer/project-search/saved">
                        Saved Jobs
                      </Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/freelancer/AllProposals">Proposals</Link>
                    </div>
                    {/* <div className="navabr_t_li">
                      <Link to="/freelancer/profile">Profile</Link>
                    </div> */}
                  </NavDropdown>
                  <NavDropdown
                    className="navbar_btn b_job_l_sx"
                    title="Browse Jobs"
                    id="navbarScrollingDropdown"
                  >
                    <div className="navabr_t_li">
                      <Link to="/freelancer/my-contract">My Jobs</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/freelancer/all-contracts">All Contracts</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/freelancer/work-diary">Management Board</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/freelancer/goals">Goals</Link>
                    </div>
                    <div className="navabr_t_li">
                      <Link to="/freelancer/add-work-diary">Work Diary</Link>
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
                        <Link to="/freelancer/overview">Overview</Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to="/freelancer/my-reports">My Reports</Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to="/freelancer/billing-earning">
                          Billings & Earnings
                        </Link>
                      </div>
                      {/* <div className="navabr_t_li">
                        <Link to="/freelancer/direct-contract">
                          Direct Contracts
                        </Link>
                      </div> */}
                      <div className="navabr_t_li">
                        <Link to="/freelancer/unicoin-history">
                          UniCoins History
                        </Link>
                      </div>
                      <div className="navabr_t_li">
                        <Link to="/freelancer/transaction-history">
                          Transaction History
                        </Link>
                      </div>
                    </NavDropdown>
                  </div>
                  {/* <Link className="logout_btn_nav" to="/signin">
                    Logout
                  </Link> */}
                  <Link to="/help-support" className="navbar_btn m_x_13_imp">
                    <i className="bi bi-question-lg font-size-20px"></i>
                  </Link>
                  <Link
                    to="/freelancer/chat"
                    className="navbar_btn p-0 m_x_13_imp"
                  >
                    <i className="bi bi-envelope font-size-20px"></i>
                  </Link>

                  <Link
                    to="/freelancer/notification"
                    className="navbar_btn m_x_13_imp"
                  >
                    <i className="bi bi-bell font-size-20px"></i>
                  </Link>
                  <div className="nav_pro_node">
                    <div className="nav_profile">
                      <Link to="/freelancer/profile">
                        {singleFreelancer?.basic_info?.profile_image ? (
                          <img
                            src={singleFreelancer?.basic_info?.profile_image}
                            alt=""
                          />
                        ) : (
                          <img
                            src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                            alt=""
                          />
                        )}
                      </Link>
                    </div>
                    <NavDropdown
                      className=" text-center nav_dropdown_profile custom_nav_profile_drp"
                      id="basic-nav-dropdown"
                    >
                      <div className="d-flex justify-content-center">
                        <div className="nav_p_d_profil">
                          <Link to="/freelancer/profile">
                            {singleFreelancer?.basic_info?.profile_image ? (
                              <img
                                src={
                                  singleFreelancer?.basic_info?.profile_image
                                }
                                alt=""
                              />
                            ) : (
                              <img
                                src="https://unify.eoxyslive.com/images/profile-image/demo-user.png"
                                alt=""
                              />
                            )}
                          </Link>
                        </div>
                      </div>
                      <div className="pro_name_drop_u">
                        {" "}
                        {singleFreelancer?.basic_info?.first_name}{" "}
                        {singleFreelancer?.basic_info?.last_name}
                      </div>
                      <div className="pro_o_nme">
                        {singleFreelancer?.basic_info?.user_type}
                      </div>
                      <div className="drop_p_o_i">
                        <button
                          className={
                            singleFreelancer?.basic_info?.online_status ===
                            "online"
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
                            singleFreelancer?.basic_info?.online_status ===
                            "invisible"
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
                        <Link to="/freelancer/contact-info">Setting</Link>
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
      {loading ? <LoadingSpinner /> : null}
    </>
  );
};

export default NavbarHeader;
