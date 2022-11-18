import { Col, Row } from "react-bootstrap";
import Search from "./invite-freelancer/search";
import Invite from "./invite-freelancer/invite";
import Hires from "./invite-freelancer/hires";
import Saved from "./invite-freelancer/saved";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const JonComponent = () => {
  const [inviteTab, setInviteTab] = useState("searchFreelancer");

  return (
    <Row>
      <Col lg={12}>
        <div className="box_vs_m">
          <div className="overflow-scroll">
            <div className="d-flex flex-wrap tab_m_nodea tab_scroll_cont">
              <Button
                variant=""
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "searchFreelancer" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("searchFreelancer")}
              >
                Search
              </Button>
              <Button
                variant=""
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "invited" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("invited")}
              >
                Invited freelancers
              </Button>
              <Button
                variant=""
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "myHires" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("myHires")}
              >
                My Hires
              </Button>
              <Button
                variant=""
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "savedTalent" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("savedTalent")}
              >
                Saved Talent
              </Button>
            </div>
          </div>
          {inviteTab === "searchFreelancer" && <Search />}
          {inviteTab === "invited" && <Invite />}
          {inviteTab === "myHires" && <Hires />}
          {inviteTab === "savedTalent" && <Saved />}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;
