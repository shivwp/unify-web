import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import SideNav from "./site_nav";
import Title from "../title";
import { useState } from "react";
import Active from "./active";
import Invitations from "./Invitations";
import "../job.css";
import InviteUsersPopup from "../../popups/InviteUsersPopup";

const Screen = () => {
  const [openInviteUser, setOpenInviteUser] = useState(false);

  const [tabActive, setTabActive] = useState("active");

  Title(" | Setting - Membership & Permission");
  return (
    <>
      <div className="bg-f2f8ff min_pad_m">
        <Container>
          <Row>
            <SideNav />
            <Col lg={9}>
              <div className="s_nav_body">
                <div className="s_b_head no-border">
                  <h2>Members & Permission</h2>
                </div>
                <div className="r-box_setting">
                  <div className="d-flex justify-content-between align-items-center flex-wrap pt-2 pb-2">
                    <div>
                      <div className="setting_b_head_s">Owner</div>
                      <div className="sett_y_b">John Doe (Me)</div>
                    </div>
                    <div className="btn_foot_sec no-border mt-0 mb-0 p-0 fo_btn_c next_b_btn_c">
                      <button
                        onClick={() => setOpenInviteUser(true)}
                        className="bg-transparent h-color-b"
                      >
                        Invite New User
                      </button>
                    </div>
                  </div>
                </div>
                <div className="r-box_setting">
                  <div className="d-flex flex-wrap tab_m_nodea">
                    <button
                      className={`tab_btn_vs bg-transparent s_btn_ns w-auto ${
                        tabActive === "active" ? "active_bvs active_bvss" : ""
                      }`}
                      onClick={() => {
                        setTabActive("active");
                      }}
                    >
                      Active Members
                    </button>
                    <button
                      className={`tab_btn_vs bg-transparent s_btn_ns w-auto ${
                        tabActive === "invitation"
                          ? "active_bvs active_bvss"
                          : ""
                      }`}
                      onClick={() => {
                        setTabActive("invitation");
                      }}
                    >
                      Invitations
                    </button>
                  </div>
                  <div className="main_hirefreelancer_bx main_box_descr no-border mt-0 pl-0 pr-0">
                    <div className="search_area_in"></div>
                    {tabActive == "active" ? <Active /> : <Invitations />}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {openInviteUser && (
        <InviteUsersPopup
          open={openInviteUser}
          onCloseModal={() => setOpenInviteUser(false)}
        />
      )}
    </>
  );
};
export default Screen;
