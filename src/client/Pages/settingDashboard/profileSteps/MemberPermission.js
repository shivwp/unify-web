import { Col } from "react-bootstrap";
import { useState } from "react";
import InviteUsersPopup from "../../../../popups/InviteUsersPopup";
import Button from "react-bootstrap/Button";
import Active from "./Active";
import Invitations from "./Invitations";

const MemberPermission = () => {
  const [openInviteUser, setOpenInviteUser] = useState(false);

  const [tabActive, setTabActive] = useState("active");

  return (
    <>
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
                <Button
                  variant=""
                  onClick={() => setOpenInviteUser(true)}
                  className="bg-transparent h-color-b"
                >
                  Invite New User
                </Button>
              </div>
            </div>
          </div>
          <div className="r-box_setting">
            <div className="d-flex flex-wrap tab_m_nodea">
              <Button
                variant=""
                className={`tab_btn_vs bg-transparent s_btn_ns active_c_ch w-auto ${
                  tabActive === "active" ? "active_bvs active_bvss" : ""
                }`}
                onClick={() => {
                  setTabActive("active");
                }}
              >
                Active Members
              </Button>
              <Button
                variant=""
                className={`tab_btn_vs bg-transparent active_c_ch s_btn_ns w-auto ${
                  tabActive === "invitation" ? "active_bvs active_bvss" : ""
                }`}
                onClick={() => {
                  setTabActive("invitation");
                }}
              >
                Invitations
              </Button>
            </div>
            <div className="main_hirefreelancer_bx main_box_descr no-border mt-0 pl-0 pr-0">
              <div className="search_area_in"></div>
              {tabActive === "active" ? <Active /> : <Invitations />}
            </div>
          </div>
        </div>
      </Col>

      {openInviteUser && (
        <InviteUsersPopup
          open={openInviteUser}
          onCloseModal={() => setOpenInviteUser(false)}
        />
      )}
    </>
  );
};
export default MemberPermission;
