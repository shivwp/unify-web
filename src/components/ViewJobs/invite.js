import { Col, Row } from "react-bootstrap";
import Search from "./invite-freelancer/search";
import Invite from "./invite-freelancer/invite";
import Hires from "./invite-freelancer/hires";
import Saved from "./invite-freelancer/saved";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllInvitedFreelancers,
  getJobBasedFreelancerList,
  savedTalentList,
} from "../../redux/actions/freelancerAction";

const JonComponent = ({ jobId }) => {
  const dispatch = useDispatch();
  const [inviteTab, setInviteTab] = useState("searchFreelancer");
  const jobBasedFreelancerList = useSelector(
    (state) => state.freelancer.jobBasedFreelancerList
  );
  const invitedFreelancerList = useSelector(
    (state) => state.freelancer.invitedFreelancerList
  );
  const invitedFreelancer = useSelector(
    (state) => state.freelancer.invitedFreelancer
  );

  useEffect(() => {
    const data = {
      project_id: jobId,
    };
    dispatch(getAllInvitedFreelancers(data));
  }, [invitedFreelancer]);

  useEffect(() => {
    const data = {
      project_id: jobId,
      // pagination: 10,
      // page: 1,
      // title: "Aaquib",
    };
    dispatch(getJobBasedFreelancerList(data));
  }, []);

  useEffect(() => {
    dispatch(savedTalentList());
  }, []);

  return (
    <Row>
      <Col lg={12}>
        <div className="box_vs_m">
          <div className="overflow-scroll">
            <div className="d-flex flex-wrap tab_m_nodea tab_scroll_cont">
              <button
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "searchFreelancer" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("searchFreelancer")}
              >
                Search
              </button>
              <button
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "invited" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("invited")}
              >
                Invited freelancers
              </button>
              <button
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "myHires" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("myHires")}
              >
                My Hires
              </button>
              <button
                className={`tab_btn_vs text-transform-cap w-auto ${
                  inviteTab === "savedTalent" ? "active_bvs" : ""
                }`}
                onClick={() => setInviteTab("savedTalent")}
              >
                Saved Talent
              </button>
            </div>
          </div>
          {inviteTab === "searchFreelancer" && (
            <Search
              jobBasedFreelancerList={jobBasedFreelancerList?.data}
              jobId={jobId}
            />
          )}
          {inviteTab === "invited" && (
            <Invite invitedFreelancerList={invitedFreelancerList} />
          )}
          {inviteTab === "myHires" && <Hires />}
          {inviteTab === "savedTalent" && <Saved />}
        </div>
      </Col>
    </Row>
  );
};
export default JonComponent;
