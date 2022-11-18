import Container from "react-bootstrap/Container";
import ViewJob from "../../../../components/ViewJobs/jobpost";
import InviteFreelancer from "../../../../components/ViewJobs/invite";
import ReviewProposal from "../../../../components/ReviewProposal/all";
import Hire from "../../../../components/Hire/all";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ViewScreen = () => {
  let { screen } = useParams();
  const [currentTab, setCurrentTab] = useState("ViewJob");

  return (
    <Container>
      <div className="view_job_box">
        <div className="d-flex justify-content-between">
          <div className="vj_hea">
            <h1>UI/UX Design</h1>
          </div>
          <div>
            <div className="vj_r_link">
              <Link to="#0">Reach 6x more Top Rated Talent</Link>
            </div>
            <div className="vj_r_sm_t">Upgrade this job</div>
          </div>
        </div>
        <div className="overflow-scroll">
          <div className="d-flex flex-wrap tab_m_nodea mt-4 tab_scroll_cont">
            <Button
              variant=""
              className={`tab_btn_vs ${
                currentTab === "ViewJob" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("ViewJob")}
            >
              View Job Post
            </Button>
            <Button
              variant=""
              className={`tab_btn_vs ${
                currentTab === "invite" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("invite")}
            >
              Invite freelancers
            </Button>
            <Button
              variant=""
              className={`tab_btn_vs ${
                currentTab === "review" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("review")}
            >
              Review proposals
            </Button>
            <Button
              variant=""
              className={`tab_btn_vs ${
                currentTab === "hire" ? "active_bvs" : ""
              }`}
              onClick={() => setCurrentTab("hire")}
            >
              Hire
            </Button>
          </div>
        </div>
        {currentTab === "ViewJob" && <ViewJob />}
        {currentTab === "invite" && <InviteFreelancer />}
        {currentTab === "review" && <ReviewProposal />}
        {currentTab === "hire" && <Hire />}
      </div>
    </Container>
  );
};
export default ViewScreen;
